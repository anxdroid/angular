import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Subject, Subscription} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Token} from "@angular/compiler";
import {TokenService} from "../../services/token.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {


  @Output() readonly search = new EventEmitter<string>();
  @Output() readonly clear = new EventEmitter<string>();

  searchSubscription: Subscription;

  readonly unsubscriptions$ = new Subject();

  searchValue: string = "";

  isLogged = false;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    //private readonly tService: TokenService,
    private readonly uService: UserService,) {
    this.activatedRoute.queryParams.subscribe((query) => {
      this.searchValue = query && query.q ? query.q : ""
      console.log(query);
    })

    this.uService.user$.subscribe((user) => {
      //this.isLogged = user ? true : false;
      this.isLogged = !!user;
    })

  }

  @ViewChild('searchInput') inputSearchElem: ElementRef<HTMLInputElement>;

  ngOnInit() {
  }

  emitSearch(key: string) {
    this.search.emit(key);
    this.router.navigate(['/home'], {queryParams: {q: key}})
  }

  ngAfterViewInit() {
    this.searchSubscription = fromEvent(this.inputSearchElem.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriptions$),
    ).subscribe((event: any) => {
      this.emitSearch((event.srcElement as any).value)
    })
  }

  ngOnDestroy() {
    this.unsubscriptions$.next(false);
    this.searchSubscription.unsubscribe();
  }

  submitSearch(key: string) {
    this.emitSearch(key);
  }

  clearVideoList() {
    this.clear.emit();
  }

  goBackHome() {
    this.router.navigate(['/home']);
  }

  /*
  logoutAAI() {
    this.tService.logout();
  }
  */

  logout() {
    this.uService.logout();
    this.router.navigate(['login']);
  }
}

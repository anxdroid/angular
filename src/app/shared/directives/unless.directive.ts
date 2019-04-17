import { Directive, TemplateRef, ViewContainerRef, Component, Input } from '@angular/core';

type Nullable<U> = U | null;
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective<T extends Component> {

  @Input('appUnless') set unless(condition: Nullable<boolean>) {
    console.log(condition);
    if (condition) {
      this.viewContainerRef.clear();
    }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private readonly templateRef: TemplateRef<T>,
    private readonly viewContainerRef: ViewContainerRef) { 
    console.log('Unless directive');
  }

}

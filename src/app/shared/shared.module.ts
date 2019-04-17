import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollpaseOnClickDirective } from './directives/collpase-on-click.directive';
import { UnlessDirective } from './directives/unless.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import {RouterModule} from "@angular/router";
import { TdLoginFormComponent } from './components/td-login-form/td-login-form.component';
import { DecodeHtmlStringPipe } from './pipes/decode-html-string.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DdLoginFormComponent } from './components/dd-login-form/dd-login-form.component';

const DIRECTIVES = [CollpaseOnClickDirective, UnlessDirective, NavbarComponent, TruncatePipe];
const COMPONENTS = [NavbarComponent, TdLoginFormComponent, DdLoginFormComponent];
const PIPES = [TruncatePipe, DecodeHtmlStringPipe];
@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ...PIPES,],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...DIRECTIVES, ...COMPONENTS, ...PIPES,],
})
export class SharedModule { }

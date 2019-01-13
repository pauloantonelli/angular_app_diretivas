import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CentralizarDirective } from './shared/centralizar.directive';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ElementrefRender2DiretivaComponent } from './elementref-render2-diretiva/elementref-render2-diretiva.component';
import { ElementRefDirective } from './shared/element-ref.directive';
import { Renderer2Directive } from './shared/renderer2.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostListenerDirective } from './shared/host-listener.directive';
import { TituloDirective } from './shared/titulo.directive';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { HostBindingDirective } from './shared/host-binding.directive';
import { HostBindingExtraDirective } from './shared/host-binding-extra.directive';
import { InputEPropertyBindingComponent } from './input-e-property-binding/input-e-property-binding.component';
import { InputEPropertyBindingDirective } from './shared/input-e-property-binding.directive';
import { NgifNgelseComponent } from './ngif-ngelse/ngif-ngelse.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralizarDirective,
    NgIfComponent,
    SwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ElvisOperatorComponent,
    NgContentComponent,
    ElementrefRender2DiretivaComponent,
    ElementRefDirective,
    Renderer2Directive,
    HostListenerComponent,
    HostListenerDirective,
    TituloDirective,
    HostBindingComponent,
    HostBindingDirective,
    HostBindingExtraDirective,
    InputEPropertyBindingComponent,
    InputEPropertyBindingDirective,
    NgifNgelseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

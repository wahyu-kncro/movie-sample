import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
  ],
  exports: [
    HeaderComponent, 
    ContainerComponent, 
    FooterComponent,
    CommonModule,
    RouterModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
  ],
  declarations: [
    HeaderComponent, 
    ContainerComponent, 
    FooterComponent
  ],
})
export class TemplateModule { }

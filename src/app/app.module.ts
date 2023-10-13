import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectedComponentComponent } from './protected-component/protected-component.component';
import { PublicComponentComponent } from './public-component/public-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponentComponent,
    PublicComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

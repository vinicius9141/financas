import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { RegisterFinancesComponent } from './components/register-finances/register-finances.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonPrimaryComponent,
    RegisterFinancesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

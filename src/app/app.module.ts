import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JwksValidationHandler, OAuthModule, ValidationHandler } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: ['https://www.angular.at/api/']
      }
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [ { provide: ValidationHandler, useClass: JwksValidationHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-Latn'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

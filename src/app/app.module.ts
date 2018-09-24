import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BooksPage} from "../pages/books/books";
import {LendBookPage} from "../pages/books/lend-book/lend-book";
import {CdsPage} from "../pages/cds/cds";
import {LendCdPage} from "../pages/cds/lend-cd/lend-cd";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {ElementService} from "../services/element.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    LendBookPage,
    CdsPage,
    LendCdPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    LendBookPage,
    CdsPage,
    LendCdPage,
    SettingsPage
  ],
  providers: [
    ElementService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

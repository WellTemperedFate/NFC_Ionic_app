import { RegisterPage } from './../pages/register/register';
import { DatabaseDataPage } from './../pages/database-data/database-data';
import { WritePage } from './../pages/write/write';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NFC} from '@ionic-native/nfc';
import {Ndef} from '@ionic-native/nfc';
import {HTTP} from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    DatabaseDataPage,
    WritePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    DatabaseDataPage,
    WritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC,
    Ndef,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

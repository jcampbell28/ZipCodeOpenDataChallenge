import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LaunchPage } from '../pages/launch/launch';
import { GuideOnePage } from '../pages/guide-one/guide-one';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { DonePage } from '../pages/done/done';
import { CustomPage } from '../pages/custom/custom';


@NgModule({
  declarations: [
    MyApp,
    LaunchPage,
    GuideOnePage,
    ListPage,
    MainPage,
    SignupPage,
    ItineraryPage,
    DonePage, 
    CustomPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LaunchPage,
    GuideOnePage,
    ListPage,
    MainPage,
    SignupPage,
    ItineraryPage,
    DonePage,
    CustomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

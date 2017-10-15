import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RakuPaw } from './app.component';
import { HomePage } from '../pages/home/home';
import { Community} from '../pages/community/community';

@NgModule({
  declarations: [
    RakuPaw,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(RakuPaw)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RakuPaw,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

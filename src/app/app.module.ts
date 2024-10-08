import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material/material.module';
import { AuthEffect } from './modules/auth/store/effects/auth.effect';
import { authReducer } from './modules/auth/store/reducers/auth.reducer';
import { BoatListEffect } from './modules/boat/store/effects/boat-list.effect';
import { BoatEffect } from './modules/boat/store/effects/boat.effect';
import { boatListReducer } from './modules/boat/store/reducers/boat-list.reducer';
import { boatReducer } from './modules/boat/store/reducers/boat.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    /* NgRx */
    StoreModule.forRoot({
      boatListStore: boatListReducer,
      boatStore: boatReducer,
      authStore: authReducer
    }, {}),
    EffectsModule.forRoot([
      BoatListEffect,
      BoatEffect,
      AuthEffect
    ]),

    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

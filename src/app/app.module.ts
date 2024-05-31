import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { SHELL_APP_INITIALIZER } from './app.initializer';
import { registerLocaleData } from '@angular/common';
import id from '@angular/common/locales/id';

registerLocaleData(id, 'id');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',
            backButtonText: '',
            backButtonIcon: 'arrow-back-outline',
        }),
        IonicStorageModule.forRoot(),
        HttpClientModule,

        AppRoutingModule,
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
        SHELL_APP_INITIALIZER,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

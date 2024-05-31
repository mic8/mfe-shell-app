import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'shell-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public constructor(
        public platform: Platform,
    ) {
        this.initializeApp();
    }

    public initializeApp(): void {
    }

    public handleActivatedRouter(): void {
        this.platform.ready().then(() => {
            SplashScreen.hide().then();
        });
    }
}

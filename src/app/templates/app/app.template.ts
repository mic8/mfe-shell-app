import { ChangeDetectionStrategy, Component, } from '@angular/core';

@Component({
    selector: 'sisnaker-app-template',
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTemplate {
}

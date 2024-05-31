import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-index-page',
    templateUrl: './index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {
}

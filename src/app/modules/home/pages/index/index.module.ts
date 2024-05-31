import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
import { AppSharedDirectiveModule } from '../../../../../shared/directives/module';

@NgModule({
    declarations: [IndexPage],
    imports: [
        CommonModule,
        IonicModule,

        AppSharedDirectiveModule,

        RouterModule.forChild([
            {
                path: '',
                component: IndexPage,
            },
        ]),
    ],
})
export class HomeIndexPageModule {}

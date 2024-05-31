import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                loadChildren: () => import('./index/index.module').then(m => m.HomeIndexPageModule),
            },
        ]),
    ],
})
export class HomeAppModule {
}

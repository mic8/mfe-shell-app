import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppTemplate } from './app.template';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
    declarations: [AppTemplate],
    imports: [
        CommonModule,
        IonicModule,

        RouterModule.forChild([
            {
                path: '',
                component: AppTemplate,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'home',
                    },
                    {
                        path: 'home',
                        loadChildren: () => import('../../modules/home/pages/home-app.module').then(m => m.HomeAppModule),
                    },
                    {
                        path: 'mfe',
                        children: [
                            {
                                path: '',
                                loadChildren: () => loadRemoteModule({
                                    type: 'module',
                                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                                    exposedModule: './MfeIndexPageModule',
                                }).then(m => m.MfeIndexPageModule),
                            },
                            {
                                path: 'profile',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => loadRemoteModule({
                                            type: 'module',
                                            remoteEntry: 'http://localhost:4201/remoteEntry.js',
                                            exposedModule: './MfeProfilePageModule',
                                        }).then(m => m.MfeProfilePageModule),
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
        ]),
    ],
})
export class AppTemplateModule { }

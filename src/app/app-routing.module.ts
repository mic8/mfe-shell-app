import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/app/home',
            },
            {
                path: 'mfe',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: '/app/mfe',
                    },
                    {
                        path: 'landing',
                        loadChildren: () => loadRemoteModule({
                            type: 'module',
                            remoteEntry: 'http://localhost:4201/remoteEntry.js',
                            exposedModule: './MfeLandingPageModule',
                        }).then(m => m.MfeLandingPageModule),
                    },
                ]
            },
        ],
    },
    {
        path: 'app',
        loadChildren: () => import('./templates/app/app.module').then(m => m.AppTemplateModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking', preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

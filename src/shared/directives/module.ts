import { NgModule } from '@angular/core';
import { ToolbarContainerDirective } from './toolbar-container.directive';
import { CommonModule } from '@angular/common';
import { ContentContainerDirective } from './content-container.directive';

const DIRECTIVES: any[] = [
    ToolbarContainerDirective,
    ContentContainerDirective,
];

@NgModule({
    declarations: [...DIRECTIVES],
    imports: [
        CommonModule,
    ],
    exports: [...DIRECTIVES],
})
export class AppSharedDirectiveModule {
}

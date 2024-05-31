import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[toolbarContainer]',
})
export class ToolbarContainerDirective {
    public constructor(el: ElementRef, private breakpointObserver: BreakpointObserver, private cdRef: ChangeDetectorRef) {
        let toolbar : HTMLElement = el.nativeElement;
        const interval = setInterval(() => {
            if (toolbar && toolbar.shadowRoot) {
                const container: HTMLElement | any = toolbar.shadowRoot.querySelector('.toolbar-container');
                this.cdRef.markForCheck();

                if (container) {
                    clearInterval(interval);
                    container.style.margin = '0 auto';
                    container.style.paddingLeft = '16px';
                    container.style.paddingRight = '16px';

                    this.breakpointObserver.observe(['(min-width: 640px)', '(min-width: 768px)']).pipe(
                        tap(value => {
                            container.style.width = '100%';
                            this.cdRef.markForCheck();

                            if (value.breakpoints['(min-width: 640px)']) {
                                container.style.width = '640px';
                                container.style.paddingLeft = '8px';
                                container.style.paddingRight = '8px';
                            }

                            if (value.breakpoints['(min-width: 768px)']) {
                                container.style.width = '768px';
                                container.style.paddingLeft = '8px';
                                container.style.paddingRight = '8px';
                            }
                        }),
                        distinctUntilChanged(),
                    ).subscribe();
                }
            }
        }, 1);
    }
}

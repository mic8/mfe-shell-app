import { APP_INITIALIZER, Injector, Provider } from '@angular/core';

export function appInitializer(injector: Injector): () => Promise<void> {
    return () => {
        return new Promise<void>( resolve => {
            return resolve();
        });
    };
}

export const SHELL_APP_INITIALIZER: Provider = {
    useFactory: appInitializer,
    provide: APP_INITIALIZER,
    deps: [Injector],
    multi: true,
};

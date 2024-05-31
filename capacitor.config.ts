import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: '',
    appName: 'mfe-shell-app',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        "SplashScreen": {
            "backgroundColor": "#ffffff",
            "launchAutoHide": false,
            "showSpinner": true,
            "spinnerColor": "#09B8A7",
            "androidSpinnerStyle": "small",
            "iosSpinnerStyle": "small",
            "androidScaleType": "CENTER_CROP",
            "splashFullScreen": true,
            "splashImmersive": true,
            "layoutName": "launch_screen",
            "useDialog": false
        },
    }
};

export default config;


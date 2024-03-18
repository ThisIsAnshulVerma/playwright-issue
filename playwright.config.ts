import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        launchOptions: {
            args: [
                '--use-gl=egl'
            ]
        }
    }
};

export default config;
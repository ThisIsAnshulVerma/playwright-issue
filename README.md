## Playwright Issue
I am using `--use-gl=egl` in `launchOptions` in the `playwright.config.ts` file.


### Expected Behaviour
Hardware acceleration should be enabled on browser instance.


### Actual Behaviour
Handware acceleration does not get enabled on the testing browser instance.


I have found out that it works till v1.28.0, from v1.29.0 - v1.42.0 it does not work.

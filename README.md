# Project Demo - Hrayr Mirzoyan

Thank you for your consideration and the oppertunity! 

I made a screen recording in case you want to take a quick look
https://www.youtube.com/watch?v=3IR-u1LkBJE&feature=youtu.be


## Demo

Deployed on Netlify 
https://festive-torvalds-a6e791.netlify.app/

## Login / Log Out

I put tother a quick mongoDB + express API and deployed it to Heroku, so the registration and login are based on an API! It uses. JWT token authentication / guard.watch

The signup form has a regex validation on the full name requiring a proper full name with middle names etc.

If you try to register with the same username it will catch the error!

The Log out after you logged in click the Notify Me link on the header

The transitions and animations are all in CSS including the SVG animation I added at the end of signup (just gave it a little touch!). I also added a bit of a pause after Loging in & Signing up so you can clearly see the status micro animations etc.



## Navigation 
Based on the design the header just fades out and shows the navigation header under it.. I reworked  this slide the black header with the logo and scale it and reveal the navigation. It’s much more organic way. watch

The navigation links had a “bold” font-weight on hover and active, this causes the item to “jump” since the bold version is much thicker then the original. This causes a weird user interaction. Instead I used a box-shadow on the text. When you hover over the navigation link, you will notice the letters do not jump out of place. 

## Images
When working with transitions, the PNG’s must be exported a specific way in order for the browser to load it properly, otherwise you will get a cascading style loading as you can see. 

## Assets
I re-exported some of the icons as SVG’s in order to utilize CSS hover effects with color change etc.


## Transitions
I used as much CSS transitions as possible and with the time constraints.  

## Micro Animations
I added some minor micro animations to showcase how small css accent animations give allot of feedback to the user and have almost no impact on processing / render speed. I also used as much native browser elements as possible (the iPhone switcher is a standard scroll bar & the iwatch switcher is a radio button)


## Notes
The MacBook Pro page is incomplete….(mothers day being Sunday my weekend was limited). Some of the internal pages I wanted to spent more time on them for the transitions, alignments and some cross browser testing. Mobile / responsive was not implemented and cross browser was not fully tested. I would of liked to spend more time on making sure the SCSS is much better organzed and adapts more of the BEM structure. The sliding transition for Macbook pro is missing to over the outgoing page a little big with a dark overlay. 




## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits

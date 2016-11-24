import './assets/styles/main.scss';

var __svg__: any = { path: './assets/svg/**/*.svg', name: '[hash].spritemap.svg' };
console.log(__svg__);
let regPattern: RegExp = /^(?:http(?:s)?):\/\/.*\/(.*)/;
if (__svg__.filename && regPattern.test(__svg__.filename)) {
	__svg__.filename = __svg__.filename.match(regPattern)[1];
}



require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
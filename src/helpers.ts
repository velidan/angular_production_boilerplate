import './assets/styles/main.scss';

class Helpers {


	public initSvgEngine() {

		var __svg__: any = { path: './assets/svg/**/*.svg', name: '[hash].spritemap.svg' };

		let regPattern: RegExp = /^(?:http(?:s)?):\/\/.*\/(.*)/;
		if (__svg__.filename && regPattern.test(__svg__.filename)) {
			__svg__.filename = __svg__.filename.match(regPattern)[1];
		}



		require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
	}


}

export default new Helpers();
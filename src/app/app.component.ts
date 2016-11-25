import { Component } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {


constructor() {
console.log("sdf");
//$('body').css("background-color", "brown");
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
}


}

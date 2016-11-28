import { Component } from '@angular/core';
/* ------- !Angular 2 native components  ---------*/


@Component({
  selector: '.navigation__ng2',
  template: `
			    <div class="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
            <ul class="nav nav-pills nav-stacked st-side-nav">
                <li class="nav-item"><a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Home</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/details" routerLinkActive="active">Details</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/about" routerLinkActive="active">About</a></li>
                <li class="nav-item"><a class="nav-link" href="">Nav item</a></li>
                <li class="nav-item"><a class="nav-link" href="">Nav item</a></li>
                <li class="nav-item"><a class="nav-link" href="">Another</a></li>
                <li class="nav-item"><a class="nav-link" href="">Nav item</a></li>
                <li class="nav-item"><a class="nav-link" href="">One more</a></li>
            </ul>
        </div>
	`,
  styles: []
})


export class NavigationComponent {



}

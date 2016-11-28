import { Component } from '@angular/core';
/* ------- !Angular 2 native components  ---------*/


@Component({
  selector: '.admin_footer__ng2',
  template: `
			<b>{{footerData.copyrightLabel}}</b> 
			{{footerData.copyRightTxt}} &trade; 
			{{footerData.copyYearStart}} - {{footerData.copyCurrentYear}}
		
	`,
  styles: [`
	:host {
	  border-top: 1px solid #e7eaec;
	  padding: 10px 20px;
    color: #FFFFFF;
	}

  b {
    color: #b3dafc;
    display: inline-block;
    margin-right: 15px;
  }

  `]
})


export class FooterComponent {



   title = 'Footer';

  // footer text data
  public footerData: any = {
    'copyrightLabel': 'Copyright',
    'copyRightTxt': 'CompuGroup Medical',
    'copyYearStart': 2015,
    'copyCurrentYear': this.getCurrentYear()
  };


  /**
   * Returns current year
   */
  protected getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

import { NgModule } from '@angular/core';

import { DetailsRoutingModule } from './details.routing';

import { DetailsComponent }   from './details.component';

@NgModule({
  imports: [
    DetailsRoutingModule
  ],
  exports: [],
  declarations: [DetailsComponent],
  providers: [],
})
export class DetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { aboutRouting } from './about.routing';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [ AboutComponent ],
  providers: []
})
export class AboutModule { }

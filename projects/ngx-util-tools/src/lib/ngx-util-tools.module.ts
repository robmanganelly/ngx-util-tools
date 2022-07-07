import { NgModule } from '@angular/core';
import { NgxUtilToolsComponent } from './ngx-util-tools.component';
import { FragmentPipe } from './pipes/fragment.pipe';



@NgModule({
  declarations: [
    NgxUtilToolsComponent,
    FragmentPipe
  ],
  imports: [
  ],
  exports: [
    NgxUtilToolsComponent
  ]
})
export class NgxUtilToolsModule { }

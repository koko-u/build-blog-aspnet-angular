import { NgModule } from '@angular/core'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { PaginationModule } from 'ngx-bootstrap/pagination'

@NgModule({
  //imports: [ButtonsModule.forRoot(), PaginationModule.forRoot()],
  imports: [ButtonsModule.forRoot(), PaginationModule.forRoot()],
  exports: [ButtonsModule, PaginationModule],
})
export class AppBootstrapModule {}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppBootstrapModule } from './lib/app-bootstrap.module'
import { AppFontawesomeModule } from './lib/app-fontawesome.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppBootstrapModule, AppFontawesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

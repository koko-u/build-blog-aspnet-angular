import { Component } from '@angular/core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'blog-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-ui'
  faCoffee = faCoffee
}

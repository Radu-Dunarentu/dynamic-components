import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
<header>
  <div>stock header</div>
</header>
<div class="main-body">
  <dynamic-loader></dynamic-loader>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

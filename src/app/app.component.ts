import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library Inventory';
  links = [ 
    { path: 'home', icon: 'library_books', title: 'Library'}
  ]
}

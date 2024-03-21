import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World</h1>`,
  // styleUrl: './app.component.css',
  styleUrls : ["./app.component.css"],
  // styles : [""]
})
export class AppComponent {
  name = "chinmay"
  imageUrl = "https://picsum.photos/id/237/500/500"

  getName () {
    return this.name
  }

  changeImage (e : KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value
  }

}

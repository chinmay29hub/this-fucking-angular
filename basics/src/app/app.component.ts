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
  name = "chinmay Sonawane"
  imageUrl = "https://picsum.photos/id/237/500/500"
  images = [
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/237/500/500"
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.25
  pizza = {
    toppings : ["cheese", "sauce"],
    size : "large"
  }

  blueClass = false
  fontSize = 16

  getName () {
    return this.name
  }

  changeImage (e : KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value
  }

  logImg (event : string) {
    console.log(event)
  }

}

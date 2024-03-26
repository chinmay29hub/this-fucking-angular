import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("img") postImg = ""
  @Output() imgSelected = new EventEmitter<string>()

  constructor () {
    console.log("constructor() was called!", this.postImg)
  }

  ngOnInit () {
    console.log("ngOnInit() was called!", this.postImg)
  }

  ngOnChanges(): void {
    console.log("ngOnChanges() was called!", this.postImg)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck() was called!")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() was called!")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() was called!")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() was called!")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() was called!")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() was called!")
  }
}

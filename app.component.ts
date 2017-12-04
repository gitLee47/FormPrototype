import { Component, ViewChild } from '@angular/core';
import { Element } from '@angular/compiler';

declare var Scroll: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('itemId') itemId; 
  shaObj: any;
  title = 'app';
  ngOnInit() {
    //let questions = document.getElementsByClassName("question-item");
    //console.log(typeof questions);
    //console.log(questions[0].innerHTML);
    this.shaObj = new Scroll();
    //this.shaObj.init();
  }

  ngAfterViewInit() {
    this.shaObj.scrollToNext();
  }
}

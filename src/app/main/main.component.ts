import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  notes = [];
  constructor() { }

  ngOnInit() {
  }
  getNote(note){
    this.notes.push(note);
    console.log(note);
    console.log(this.notes)
  }

}

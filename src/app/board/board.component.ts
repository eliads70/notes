import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
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

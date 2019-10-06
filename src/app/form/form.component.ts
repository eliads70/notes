import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  @Output()  newNote = new EventEmitter();

  addNote(text,date,time){
    var note = {
      text : text,
      date: date,
      time : time
    }
    this.newNote.emit(note);
  }
  ngOnInit() {
  }

}

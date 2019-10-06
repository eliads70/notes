import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input() newNote = [];
  constructor() { }

  ngOnInit() {
  }
  deleteItem(index)
{
this.newNote.splice(index,1);
}

}

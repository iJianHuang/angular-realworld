import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contactnote } from 'src/app/core/models/contactnote';

@Component({
  selector: 'app-contactnotes',
  templateUrl: './contactnotes.component.html',
  styleUrls: ['./contactnotes.component.scss']
})
export class ContactnotesComponent implements OnInit {
  @Input() notes: Contactnote[];
  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Contactnote>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Contactnote>(this.notes);
  }

}

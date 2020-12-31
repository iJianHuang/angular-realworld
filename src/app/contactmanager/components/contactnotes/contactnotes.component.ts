import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contactnote } from '../../core/models/contactnote';

@Component({
  selector: 'app-contactnotes',
  templateUrl: './contactnotes.component.html',
  styleUrls: ['./contactnotes.component.scss']
})
export class ContactnotesComponent implements OnInit, AfterViewInit {
  @Input() notes: Contactnote[];
  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Contactnote>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Contactnote>(this.notes);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

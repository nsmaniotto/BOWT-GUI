import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Boat } from '../../models/boat.model';

@Component({
  selector: 'app-boat-table',
  templateUrl: './boat-table.component.html',
  styleUrls: ['./boat-table.component.css']
})
export class BoatTableComponent {

  @Input() set boats(boats: Boat[]) {
    this.boatsDataSource.data = boats;
  }

  public readonly NAME_COLUMN_DEFINITION = 'name';

  public displayedColumns: string[] = [
    this.NAME_COLUMN_DEFINITION
  ];

  public boatsDataSource = new MatTableDataSource<Boat>();
}

import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Boat } from '../../models/boat.model';
import { BoatStoreService } from '../../store/service/boat-store.service';

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
  public readonly ACTION_COLUMN_DEFINITION = 'action';

  public displayedColumns: string[] = [
    this.NAME_COLUMN_DEFINITION,
    this.ACTION_COLUMN_DEFINITION
  ];

  public boatsDataSource = new MatTableDataSource<Boat>();

  constructor(private readonly _boatStoreService: BoatStoreService) { }

  public showBoat(boatId: number): void {
    this._boatStoreService.displayBoat(boatId);
  }
}

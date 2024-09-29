import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boat-create-button',
  templateUrl: './boat-create-button.component.html'
})
export class BoatCreateButtonComponent {
  @Input() capitalizeText: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  public text = 'Create Boat';

  public handleBoatCreateButtonClick(): void {
    this.onClick.emit();
  }
}

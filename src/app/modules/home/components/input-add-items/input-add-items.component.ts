import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.scss']
})
export class InputAddItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}

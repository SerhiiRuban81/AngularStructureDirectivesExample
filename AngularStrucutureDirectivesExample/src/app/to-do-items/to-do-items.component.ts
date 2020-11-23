import { Component, OnInit } from '@angular/core';
import {ToDoItem} from "../to-do-item";
import {ITEMS} from "../mock-todo-items"
@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;
  selectedItem: ToDoItem;// = ITEMS[0];
  // toDoItem: ToDoItem = {
  //   id: 1 ,
  //   name: "Закончить проект по автостеллам",
  //   isCompleted: false
  // }
  car: string = "Жигули";
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item){
    //if(item instanceof ToDoItem)
    this.selectedItem = item;
    //console.log(`${item.name}`);
  }
}

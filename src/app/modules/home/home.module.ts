import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

// Page
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItemsComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }

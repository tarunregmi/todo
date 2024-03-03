import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AdderComponent } from './components/adder/adder.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SearchbarComponent,
    AdderComponent,
    CardComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

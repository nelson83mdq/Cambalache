import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { BlockGridComponent } from './block-grid/block-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BlockGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

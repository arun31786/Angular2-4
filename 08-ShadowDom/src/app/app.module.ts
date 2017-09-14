import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { PowerPipePipe } from './power-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PowerPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

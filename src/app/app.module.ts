import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppendPipe } from './Pipes/append.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendCliPipe } from './Pipes/append-cli.pipe';
import { PipeArguementPipe } from './Pipes/pipe-arguement.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    AppendCliPipe,
    PipeArguementPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

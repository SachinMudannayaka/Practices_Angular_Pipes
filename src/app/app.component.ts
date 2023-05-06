import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Pipes';
  count:number=28564;
  dcVal:number=3434342.343434;
  price:number=99.99;
  day:Date= new Date();
  objSub:object={
    id:1,
    postTitle:'Bat-Man'
  }
  presntPipe:number=23.5;
  simpleArr:Array<string>=['Post1','Post2','Post3'];
  userDetails={
    name:"user1",
    city:'Gampaha',
    country:'SL'

  }

  dummyText:string='A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.';
}

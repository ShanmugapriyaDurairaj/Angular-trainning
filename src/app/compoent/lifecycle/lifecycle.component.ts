import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() {console.log("constructor"); }
  ngOnChanges() {console.log("ngOnChanges");}
  ngOnInit(){console.log("ngOnInit");}
  ngDoCheck(){console.log("ngDoCheck");}
  ngAfterContentInit(){console.log("ngAfterContentInit");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked");}
  ngAfterViewInit(){console.log("ngAfterViewInit");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked");}
  ngOnDestroy(){console.log("ngOnDestroy");}

}

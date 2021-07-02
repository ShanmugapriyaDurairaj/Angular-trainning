import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-ex-custom-pipes',
  templateUrl: './ex-custom-pipes.component.html',
  styleUrls: ['./ex-custom-pipes.component.css']
})
export class ExCustomPipesComponent implements OnInit {
  todaydate;
  user :[];
  constructor(private myservice: MyserviceService, private log:LoggerService,private api : ApiService) {
    log.log("This is constructor")
  }

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate()
    console.log(this.todaydate);
     this.api.getAll("http://jsonplaceholder.typicode.com/users").subscribe(res => {
      console.log(res)   
    
      this.user=res;
     }, error => {
    });

  }

}

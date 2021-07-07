import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';  
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-ex-form',
  templateUrl: './ex-form.component.html',
  styleUrls: ['./ex-form.component.css']
})
export class ExFormComponent implements OnInit {
  
  user_email:string;
  name :string;
  phone: string;

  fo_email = new FormControl(''); 
  fo_name = new FormControl('');  
  fo_phone = new FormControl('');  

  /* Form Group */
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Email: new FormControl(''),
  });

  user =[];

  form_group_user=[];
  

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  updateEmail() {  
    this.user_email=this.fo_email.value;
    this.name = this.fo_name.value;
    this.phone = this.fo_phone.value;

    //json 
    var user_ob={
      email : this.user_email,
      name : this.name,
      phone: this.phone
    }
    // added in Array 

    this.user.push(user_ob);


    console.log(this.user);

    this.fo_phone.setValue('')
    this.fo_email.setValue('');
    this.fo_name.setValue('')
  }  
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.form_group_user.push(this.profileForm.value);
    
    console.log(this.form_group_user)
    console.warn(this.profileForm.value);
    let url ="http://localhost:3000/s_post";
    
    this.api.create(url,this.profileForm.value).subscribe(res =>{
      console.log(res)
      if(res.status== true){
        alert(res.msg)
      }
    })
  }
}

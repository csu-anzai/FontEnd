import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormControl } from '@angular/forms';
​
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
​
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }
​
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: new FormControl('hai'),
      age: new FormControl('25'),
      gender: new FormControl('male'),
      phone: new FormControl('0932513567'),
      email: new FormControl('hai@gmail.com'),
      username: new FormControl('minhaiqn96'),
      password: new FormControl('hai123'),
    });
​
    // update form state
    // this.registerForm.patchValue({
    //   email: 'info@example.com'
    // });
  }
  onSubmit() {}
​
}
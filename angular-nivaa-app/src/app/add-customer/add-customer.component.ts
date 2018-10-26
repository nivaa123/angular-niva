import { Component, OnInit } from '@angular/core';
import { Istate } from '../model/istate';
import {FormGroup, FormBuilder} from '@angular/forms';
import { StatesService } from '../model/states.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  ngOnInit(){{}}

  addCustomerForm: FormGroup;
  //countrySelected: string;
  getstate: Istate[];
  countrySelected: string;
 // states: Array<string>;
 constructor(private fb: FormBuilder, private stateService:  StatesService) { 
  this.addCustomerForm = this.fb.group({
   // countryControl: [''],
    stateControl: ['']
  });
  this.stateService.getStates().subscribe(
    (countrystates: Istate[]) => {
      this.getstate = countrystates;
    });
  

}
}
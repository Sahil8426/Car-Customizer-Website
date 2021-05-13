import { Component, Input, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


Swal.fire({
  text: 'Enter Zip Code',
  input: 'number'
}).then(function(result) {
  if(result.value < 99999 || result.value >1000000) {
    
    Swal.fire({
      icon:"warning",
      text:'Please Enter Valid Zip Code',
      input:'number',
      showCancelButton: true,
      cancelButtonColor: "#DD6B55",
      
      
      
      
    }
    )
  }
})

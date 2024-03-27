import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  newCart={}
  constructor(private router:Router,
    private ref:MatDialogRef<PaymentSuccessComponent>
    ) { }

  ngOnInit(): void {
   
  }

  returnLogIn(){
this.router.navigate(['restaurant']);
this.ref.close();
  }

}



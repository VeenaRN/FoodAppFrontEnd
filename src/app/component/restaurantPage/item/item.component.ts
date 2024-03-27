import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/service/item-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Restaurant } from 'src/app/class/restaurant';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { QuantityComponent } from '../../customerPage/quantity/quantity.component';
import { Item } from 'src/app/class/item';
import { MatDialog } from '@angular/material/dialog';
import { PreviousOrderrestaurantComponent } from '../previous-orderrestaurant/previous-orderrestaurant.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  p: number = 1;
  count: number = 6;
  id:number;
  intitalQuantity:number=1;
  items : Item[] = [];
  quantityDisable:boolean=false;
  cartID:number;
  cartItem:Item
  email:any;
  customerid:number;

  restaurant : Restaurant;

  constructor(public hardcodedAuthentication:HardcodedAuthenticationService,
    private itemservice: ItemServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private matDialog: MatDialog) {
    console.log('Application loaded. Initializing data.');
  };


  ngOnInit(): void {
      this.email=  sessionStorage.getItem('authenticateduser');
      console.log(this.email);  
      this.id=this.route.snapshot.params['id'];
        this.itemservice.getItemByRestId(this.id).subscribe(
          data=>{
            this.items=data;
            console.log(this.items);
          })
  }

  addToCart(itemId:number): void {
    this.id=this.route.snapshot.params['id'];
    this.matDialog.open(QuantityComponent,{
      height:"30vh",
      width:"50vh",
      data:{itemId:itemId,restId:this.id,custID:this.customerid,cartId:this.cartID}
    })
  }

  updateItem(id:number): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['updateItem',id,this.id]);
  }


  
  
  
  deleteItem(id:number): void {
    this.id=this.route.snapshot.params['id'];

    this.itemservice.deleteItem(id,this.id).subscribe(
      respose=>{
        this.items=respose;
        console.log(this.items);
        // this.router.navigate(['item',this.id]);
      } 
    );
  }

  addItem(): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['registerItem',this.id]);
  }

  viewOoders(){
    this.id = this.route.snapshot.params['id'];
    this.matDialog.open(PreviousOrderrestaurantComponent,{
      width:'120vh',
      height:'90vh',
      data:this.id
    })
  }
}


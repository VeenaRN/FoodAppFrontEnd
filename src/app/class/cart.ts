
import { Item } from "./item";
import { Customer } from "./customer";
export class Cart {

    length: number;

    constructor(
        public id:number,
       public  cust:Customer,
        public itemList:Item[],
        public paymentStatus:string
     ){
 
     }
}


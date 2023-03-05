import {Address} from "./AddressInterface";

export interface UserData{
    name:string,
    surname:string,
    email:string,
    deliveryAddress:Address,
    invoiceAddress:Address
}
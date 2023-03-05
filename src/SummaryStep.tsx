import React from "react"
import {UserData} from "./UserDateInterface";

export interface SummaryData{
    userData:UserData
    moveToPrevStep:()=>void
}
export const  SummaryStep:React.FC<SummaryData> = (props) => {
    const user = props.userData;

    return(
        <div>
            <form>
            <h2>Summary Step</h2>
            <fieldset>
                <legend>Personals</legend>
                <label className="summaryLabel">Name: </label> <span>{user.name}</span><br/>
                <label className="summaryLabel">Surname: </label> <span>{user.surname}</span><br/>
                <label className="summaryLabel">Email: </label> <span>{user.email}</span>
            </fieldset>
            <fieldset>
                <legend>Delivery Address</legend>
                <label className="summaryLabel">Street: </label><span>{user.deliveryAddress.street}</span><br/>
                <label className="summaryLabel">Zip code: </label><span>{user.deliveryAddress.code}</span><br/>
                <label className="summaryLabel">City: </label><span>{user.deliveryAddress.city}</span>
            </fieldset>
            <fieldset>
                <legend>Invoice Address</legend>
                <label className="summaryLabel">Street: </label><span>{user.invoiceAddress.street}</span><br/>
                <label className="summaryLabel">Zip code: </label><span>{user.invoiceAddress.code}</span><br/>
                <label className="summaryLabel">City: </label><span>{user.invoiceAddress.city}</span>
            </fieldset>
            <button className="prevButton" onClick={props.moveToPrevStep}>Prev</button>
            </form>
        </div>
    )
}
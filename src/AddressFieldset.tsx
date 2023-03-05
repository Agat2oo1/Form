import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export interface FieldsetData{
    name: string
    street:string,
    code: string,
    city: string,
    isChecked:boolean
    setError:(Dispatch<SetStateAction<boolean>>),
    setStreet:(Dispatch<SetStateAction<string>>),
    setCode:(Dispatch<SetStateAction<string>>),
    setCity:(Dispatch<SetStateAction<string>>)

}
export const AddressFieldset:React.FC<FieldsetData> = ({name,street,code,city,isChecked,
                                                           setError, setStreet,setCode,setCity})=>{

    const [message,setMessage]=useState("");

    const validateCode = (code: string) => {
        let validPattern = /[0-9]{2}-[0-9]{3}/;
        if (!validPattern.test(code))
        {
            setError(true)
            setMessage("! Please enter a valid zip code XX-XXX !")
            let input = document.getElementById("codeInput")
            input!.focus();
        }
        else{
            setError(false)
            setMessage("")
        }
    }

    return <fieldset>
        <legend>{name} Address</legend>
        <input onChange={(e)=>setStreet(e.target.value)} required type="text" placeholder="street"
               value={street} disabled={isChecked}/>
        <div>
            <input id="codeInput" onChange={(e)=>setCode(e.target.value)}
                   onBlur={(e)=>validateCode(e.target.value)}
                   required type="text" placeholder="zip code" value={code} disabled={isChecked}/>
            <p className="errorMessage">{message}</p>
        </div>
        <input onChange={(e)=>setCity(e.target.value)} required type="text" placeholder="city"
               value={city} disabled={isChecked}/>
    </fieldset>
}
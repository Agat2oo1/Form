import React, {useState} from "react"
import {NameStep} from "./NameStep";
import {AddressStep} from "./AddressStep";
import {SummaryStep} from "./SummaryStep";
import {UserData} from "./UserDateInterface";
import "./StyleSheet.css"

export const CustomerForm = () => {
    const [step,SetStep] = useState(0)
    const [userData,setUserData] = useState<UserData>({
        name:'',
        surname:'',
        email:'',
        deliveryAddress:{
            city:'',
            code:'',
            street:''
        },
        invoiceAddress:{
            city:'',
            code:'',
            street:''
        }
    })
    const moveToNextStep = () => {
        SetStep(prev => prev + 1)
    }
    const moveToPrevStep = () => {
        SetStep(prev => prev - 1)
    }
    const setDataFromStep = (name:string,surname:string,email:string) => {
        let tmp =userData;
        tmp.name = name;
        tmp.surname=surname;
        tmp.email=email;
        setUserData(tmp);
    }
    const setDataFromStepNext = (streetD:string,codeD:string,cityD:string,streetI:string,codeI:string,cityI:string) => {
        let tmp =userData || {};
        let tmpD = tmp.deliveryAddress || {};
        let tmpI = tmp.invoiceAddress || {};
        tmpD.street = streetD;
        tmpD.code = codeD;
        tmpD.city = cityD;
        tmpI.street = streetI;
        tmpI.code = codeI;
        tmpI.city = cityI;
        tmp.deliveryAddress=tmpD;
        tmp.invoiceAddress=tmpI;
        setUserData(tmp);
    }
    return (
        <div className="container">
            <h1>Quick Form</h1>
            {
                step === 0 && <NameStep moveToNextStep={moveToNextStep} saveFromData={setDataFromStep}
                                       userData={userData!}/>
            }
            {
                step === 1 && <AddressStep moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}
                                          userData={userData!} saveFromData={setDataFromStepNext}/>
            }
            {
                step === 2 && <SummaryStep moveToPrevStep={moveToPrevStep} userData={userData!}/>
            }
        </div>
    )
}
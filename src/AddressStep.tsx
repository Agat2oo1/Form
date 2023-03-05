import React, {useEffect, useState} from "react"
import {AddressFieldset} from "./AddressFieldset";
import {UserData} from "./UserDateInterface";

export interface AddressData{
    userData:UserData
    moveToNextStep:()=>void
    moveToPrevStep:()=>void
    saveFromData:(streetD:string,codeD:string,cityD:string,streetI:string,codeI:string,cityI:string) => void
}
export const  AddressStep:React.FC<AddressData> = (props) => {
    const [streetD,setStreetD] = useState(props.userData.deliveryAddress.street);
    const [cityD,setCityD]=useState(props.userData.deliveryAddress.city);
    const [codeD, setCodeD]=useState(props.userData.deliveryAddress.code);
    const [streetI,setStreetI] = useState(props.userData.invoiceAddress.street);
    const [cityI,setCityI]=useState(props.userData.invoiceAddress.city);
    const [codeI, setCodeI]=useState(props.userData.invoiceAddress.code);

    const [isError,setError]=useState<boolean>(false)
    const [isChecked, setChecked]=useState<boolean>(false)

    const sendData = ()=>{
        props.saveFromData(streetD,codeD,cityD,streetI,codeI,cityI);
        props.moveToNextStep();
    }

    useEffect(()=>{
        if(isChecked){
            setStreetI(streetD)
            setCodeI(codeD)
            setCityI(cityD)
        }
        else{
            setStreetI("")
            setCodeI("")
            setCityI("")
        }
    },[isChecked])

    return(
        <div>
            <form onSubmit={sendData}>
                <h2>Address Step</h2>
                <AddressFieldset name={"Delivery"} street={streetD} code={codeD} city={cityD} isChecked={false}
                                 setStreet={setStreetD} setCity={setCityD} setCode={setCodeD} setError={setError}/>
                <input className="checkInput" id="check" type="checkbox" disabled={isError}
                       onChange={(e)=>setChecked(e.target.checked)}/>
                <label htmlFor="check">The same as delivery address</label>
                {isChecked?
                    <AddressFieldset name={"Invoice"} street={streetD} code={codeD} city={cityD} isChecked={true}
                                     setStreet={setStreetI} setCity={setCityI} setCode={setCodeI} setError={setError}/>
                    :<AddressFieldset name={"Invoice"} street={streetI} code={codeI} city={cityI} isChecked={false}
                                      setStreet={setStreetI} setCity={setCityI} setCode={setCodeI} setError={setError}/>}
                <button disabled={isError} className="prevButton" onClick={props.moveToPrevStep}>Prev</button>
                <button disabled={isError} className="nextButton">Next</button>
            </form>
        </div>
    )
}
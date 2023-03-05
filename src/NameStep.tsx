import React, {useState} from "react"
import {UserData} from "./UserDateInterface";

export interface NameStepProps{
    userData:UserData
    moveToNextStep:() => void
    saveFromData:(name:string,surname:string,email:string) => void
}
export const  NameStep:React.FC<NameStepProps> = (props) => {
    const [name,setName]=useState(props.userData.name)
    const [surname,setSurname]=useState(props.userData.surname)
    const [email,setEmail]=useState(props.userData.email)

    const sendData = ()=>{
        props.saveFromData(name,surname,email);
        props.moveToNextStep();
    }
    return(
        <div>
            <form onSubmit={sendData}>
                <h2>Name Step</h2>
                <fieldset>
                    <legend>Your data</legend>
                <input onChange={(e)=>setName(e.target.value)} required type="text" placeholder='name'
                    value={name}/>
                <input onChange={(e)=>setSurname(e.target.value)} required type="text" placeholder='surname'
                    value={surname}/>
                <input onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder='email'
                    value={email}/>
                <button className="nextButton">Next</button>
                </fieldset>
            </form>
        </div>
    )
}
import React, { useState } from "react";
const FakeForm = () => {
    const [fName, setFName] = useState('');
    const [fNameError, setFNameError] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    // const = [fName,setfName] = useState(''); This state hook will help with an eventual page change I want to to take place in the DOM after the form data is submitted.
    const createUser = e => {
        e.preventDefault();
        const newUser = {fName,lName,email,password};
        console.log(newUser.fName, "welcome to the club!",{newUser});
    setFName("");
    setLName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
    };
    const handleFName = (e) =>{
        setFName(e.target.value);
        if (e.target.value.length < 2){
            setFNameError("First name must be more than 2 characters!")
            console.log({fNameError})
        }
        else{
            setFNameError("");
        }
    }
    return (
        <form className="mx-auto" onSubmit={createUser}>
            <div className="card-body d-flex">
                <label type="text">First Name:</label>
                <input className="form-control m-3 p-3" onChange={handleFName} />
            </div>
            {
                fNameError ?
                <p className="text-danger">{fNameError}</p> :
                ''
            }
        </form>
    );
}
export default FakeForm;
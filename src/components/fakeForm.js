import React, { useState } from "react";
const FakeForm = () => {
    const [fName, setFName] = useState('');
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
    // I'm keeping the below code as a stepping stone to another example to solve the assignment's prompt of creating form validations. Initially I was using additional State hooks and writing conditional functions for each validation. Then I would call each function upon an OnChange event. This seemed extra and it indeed it was after viewing the solution code I see that we can just use ternary without additional functions. I thought this could be possible but then psyched myself out based on an incorrect understanding of the synthetic event.
    // const handleLName = (e) =>{
    //     setLName(e.target.value);
    //     if (e.target.value.length < 2){
    //         setLNameError("Last name must be more than 2 characters!")
    //         console.log({lNameError})
    //     }
    //     else{
    //         setLNameError("");
    //     }
    // }
    // const handleEmail = (e) =>{
    //     setEmail(e.target.value);
    //     if (e.target.value.length < 2){
    //         setEmailError("email must be more than 2 characters!")
    //         console.log({emailError})
    //     }
    //     else{
    //         setEmailError("");
    //     }
    // }
    // const handlePassword = (e) =>{
    //     setPassword(e.target.value);
    //     if (e.target.value.length < 8){
    //         setPasswordError("password must be more than 8 characters!")
    //         console.log({passwordError})
    //     }
    //     else{
    //         setPasswordError("");
    //     }
    // }
    // const handleConfPassword = (e) =>{
    //     setConfPassword(e.target.value);
    //     if (e.target.value =! password){
    //         setConfPasswordError("passwords do not match!")
    //     }
    //     else{
    //         setConfPasswordError("");
    //     }
    // }
    return (
        <form className="mx-auto" onSubmit={createUser}>
            {/* First name */}
            <div className="card-body d-flex p-1 align-content-end">
                <label type="text">First Name:</label>
                <input className="form-control m-3 p-3" onChange = {e => setFName(e.target.value)} />
            </div>
            {
                fName.length < 2 && fName.length > 0 ?
                <p className="text-danger">First name must be more than 2 characters!</p> :
                null
            }
            {/* Last name */}
            <div className="card-body d-flex p-1 align-content-end">
                <label type="text">Last Name:</label>
                <input className="form-control m-3 p-3" onChange={ e => setLName(e.target.value)} />
            </div>
            {
                lName.length < 2 && lName.length > 0 ?
                <p className="text-danger">First name must be more than 2 characters!</p> :
                ''
            }
            {/* Email */}
            <div className="card-body d-flex p-1 align-content-end">
                <label type="text">Email:</label>
                <input className="form-control m-3 p-3" onChange={e => setEmail(e.target.value)} />
            </div>
            {
                email.length < 2 && email.length > 0 ?
                <p className="text-danger">Email name must be more than 2 characters!</p> :
                ''
            }
            {/* password */}
            <div className="card-body d-flex p-1 align-content-end">
                <label type="text">Password:</label>
                <input className="form-control m-3 p-3" onChange={e => setPassword(e.target.value)} />
            </div>
            {
                password.length < 8 && password.length > 0 ?
                <p className="text-danger">Password name must be more than 8 characters!</p> :
                ''
            }
            {/* conf password */}
            <div className="card-body d-flex p-1 align-content-end">
                <label type="text">Confirm Password:</label>
                <input className="form-control m-3 p-3" onChange={e => setConfPassword(e.target.value)} />
            </div>
            {
                password != confPassword && password.length > 0 ?
                <p className="text-danger">Password must match!</p> :
                ''
            }
        </form>
    );
}
export default FakeForm;
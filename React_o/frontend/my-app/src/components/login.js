import React, { useState } from "react";
import Loginimage from "../images/loginimage.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Login(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const submitsingin = async() =>{
        if(password===cpassword){
            try {
                await axios.post('http://localhost:5001/api/signup', { username: name,email:email,password: password});
                console.log("Hello");
            } catch (error) {
                console.error(error);
            }
        }
    }
    const Navigate=useNavigate();
    return (
        // <h1>shashi</h1>
        <>
        <h1>This is signup page</h1>
        <section classname="signup">
            <div className="container mt-5">
                <div classname="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title ">Create your account here</h2>
                        <form classname="registration-form col-md-6" id="registration-form">
                            <div classname="form-group">
                                <label htmlFor="name">
                                <p><i class="zmdi zmdi-account zmdi-hc-2x"></i></p>
                                </label>
                                <input type="text" name="username" autocomplete="off" placeholder="your name " onChange={(e) =>setName(e.target.value)} />
                            </div>

                            <div classname="form-group">
                                <label htmlFor="email">
                                <p><i class="zmdi zmdi-email zmdi-hc-2x"></i></p>
                                </label>
                                <input type="email" name="email" autocomplete="off" placeholder="@ gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div classname="form-group">
                                <label htmlFor="password">
                                <p><i class="zmdi zmdi-star zmdi-hc-2x"></i></p>
                                </label>
                                <input type="password" name="passwordd" autocomplete="off" placeholder="enter your password " onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div classname="form-group">
                                <label htmlFor="password">
                                <p><i class="zmdi zmdi-star zmdi-hc-2x"></i></p>
                                </label>
                                <input type="password" name="password" id="password" autocomplete="off" placeholder="confirm your password " onChange={(e) =>setCpassword(e.target.value)} />
                            </div>

                            <div classname="from-group from-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Create account" onClick={submitsingin}></input>
                            </div>

                            {/* <div classname="signup-image">
                                <figure>
                                    <img src={Loginimage} alt=""loginimg/>
                                </figure>
                                <NavLink to="/login" className="signup-image-link">login here</NavLink>
                            </div> */}

                        </form>
                        <hr/>
                        <div>
                            <h3>Already have an account </h3>
                            <button onClick={()=>{
                                Navigate("/login1")
                            }}>
                                lOG-IN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}

export default Login;



// import React, { useState, useEffect } from 'react'
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import signUpPicture from '../images/sign-up-image.avif'
// // import './SignUp.css'
// const SignUp = () => {
//     const Navigate = useNavigate()
//     const [Username, setUsername] = useState("");
//     const [Password, setPassword] = useState("");
//     const [Email,setEmail]=useState("");
//     const handleSubmit = () => {
//         const data = {
//             Username: Username,
//             Password: Password,
//             Email:Email
//         }
//         console.log(data);
//         console.log(Axios);
//         try{
//             Axios.post("http://localhost:3000/Register", data, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             Navigate('/');
//         }
//         catch (error) {
//             console.log("Error uploading project", error);
//         }
//     }
//     return (
//         <>  
//             <br /><br /><br /><br />
//             <section className="signup mt-5">
//                     <br /><br />
//                 <div className="container mt-5 centered-box">
//                     <div className=''>
                        
//                         <div className="row justify-content-center">
//                             <h2 className="form-title d-flex justify-content-center">Registration Form</h2>
//                             {/* <div className="col-md-5">
//                                 <div className="image-container-small mt-3">
//                                     <figure>
//                                         <img src={signUpPicture} alt="Registration-image" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
//                                     </figure>
//                                 </div>
//                             </div> */}
//                             <div className="col-md-6">
//                                 <form className='registration-form container' id='registration-form'>
//                                     {/* <div className="input-group mb-3 mt-5">
//                                         <label htmlFor="Email" className='input-group-text'>
//                                             <i className="zmdi zmdi-email zmdi-hc-2x"></i>
//                                         </label>
//                                         <input type="text" className="form-control" id='Email' required placeholder="Enter Email" onChange={(e)=>{
//                                             setEmail(e.target.value)
//                                         }} aria-label="Email" aria-describedby="basic-addon1" />
//                                     </div> */}
//                                     {/* <div className="input-group mt-3">
//                                         <label htmlFor="Username" className='input-group-text'>
//                                             <i className="zmdi zmdi-account-circle zmdi-hc-2x "></i>
//                                         </label>
//                                         <input type="text" className="form-control" id='Username' required placeholder="Create a username" aria-label="Username" onChange={(e)=>{
//                                             setUsername(e.target.value);
//                                         }} aria-describedby="basic-addon1" />
//                                     </div> */}
//                                     {/* <div className="input-group mt-3">
//                                         <label htmlFor="Password" className='input-group-text'>
//                                             <i className="zmdi zmdi-lock zmdi-hc-2x"></i>
//                                         </label>
//                                         <input type="password" className="form-control" id='Password' required placeholder="Enter password" aria-label="Password" onChange={(e)=>{
//                                             setPassword(e.target.value)
//                                         }} aria-describedby="basic-addon1" />
//                                     </div> */}
//                                     {/* <div className="input-group mt-3">
//                                         <label htmlFor="ConfirmPassword" className='input-group-text'>
//                                             <i className="zmdi zmdi-lock zmdi-hc-2x"></i>
//                                         </label>
//                                         <input type="password" className="form-control" id='ConfirmPassword' required placeholder="Re-Enter password" aria-label="ConfirmPassword" aria-describedby="basic-addon1" />
//                                     </div> */}
                                    
//                                     {/* <div className=" mt-4  d-flex justify-content-center">
//                                         <button className="btn btn-dark" type="button" onClick={handleSubmit}>Sign-up</button>
//                                     </div> */}
//                                 </form>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* <form action="">
//             <div className='container my-4'>
//                 <div>
//                     <br /><br />
//                     <input type="text" placeholder='Enter Username' onChange={(e) => {
//                         setUsername(e.target.value);
//                     }} />
//                 </div>
//                 <br />
//                 <div>
//                     <input type="text" placeholder='Enter password' onChange={(e) => {
//                         setPassword(e.target.value);
//                     }} />
//                 </div>
//                 <br /><br />
//                 <div>
//                     <button className='btn btn-dark' type='button' onClick={handleSubmit}>Sign-up</button>
//                 </div>
//             </div>
//         </form> */}
//         </>
//     )
// }
// export default SignUp
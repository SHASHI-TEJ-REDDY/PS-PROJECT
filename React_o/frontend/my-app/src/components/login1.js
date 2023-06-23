import React from "react";
import { useNavigate } from "react-router-dom";
function Login1() {
    const Navigate=useNavigate();
    return (
        <>
            <h1>This is login page</h1>
            <section classname="signin">
                <div className="container mt-5">
                    <div classname="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title ">Log in Here</h2>
                            <form classname="registration-form col-md-6" id="registration-form">

                                <div classname="form-group">
                                    <label htmlFor="email">
                                        <p><i class="zmdi zmdi-email zmdi-hc-2x"></i></p>
                                    </label>
                                    <input type="email" name="email" id="email" autocomplete="off" placeholder="Name/ ✉️ / Number" />
                                </div>

                                <div classname="form-group">
                                    <label htmlFor="password">
                                        <p><i class="zmdi zmdi-star zmdi-hc-2x"></i></p>
                                    </label>
                                    <input type="password" name="password" id="password" autocomplete="off" placeholder="enter your password " />
                                </div>

                                <div classname="from-group from-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="㏒ 📲" ></input>
                                </div>

                                {/* <div classname="signin-image">
                                <figure>
                                    <img src={Loginimage} alt=""loginimg/>
                                </figure>
                                <NavLink to="/login" className="signin-image-link">login here</NavLink>
                            </div> */}

                            </form>
                            <hr />
                            <div>
                                <h3>Dint have an account? </h3>
                                <button onClick={() => {
                                    Navigate("/login")
                                }}>
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login1;
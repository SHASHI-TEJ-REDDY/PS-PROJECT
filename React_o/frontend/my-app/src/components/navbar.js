import React from "react";
import Pic from "../pic/logo.jpg";
import { useNavigate } from "react-router-dom";
// import $ from "jquery";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

function NavBar() {
    let Navigate = useNavigate();
    // // function report() {

    // // }
    // $(function () {
    //     $('#table1').DataTable();
    // });
    return (
        <>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        {/* <a className="navbar-brand" href="index.html">
                            <img src={Pic} alt="Avatar Logo" style={{ width: "45px" }} className="rounded-pill" />
                        </a> */}
                        {/* <a className="navbar-brand" href="index.html">
                            <img src={Pic} alt="Avatar Logo" style={{ width: "45px" }} className="rounded-pill" />
                        </a> */}
                        <button onClick={() => { Navigate("/Home") }}>
                            {/* <button onClick={() => { Navigate("/home2") }}> */}
                            {/* <img src={Pic} style={{ width: "45px" }} className="rounded-pill" /> */}
                            <img src={Pic} alt="Avatar Logo" style={{ width: "45px" }} className="rounded-pill" />
                        </button>

                        {/* <button className="btn btn-primary" onClick={() => { Navigate("/home2") }}>
                            homne2
                        </button> */}
                        <button className="btn btn-primary" onClick={() => { Navigate("/Support") }}>
                            Support
                        </button>
                        <div>
                            <button class="btn btn-outline-dark" onclick="change()">
                                <h5 style={{ color: "White" }}>Change Account</h5>
                            </button>
                        </div>
                    </div>

                    {/* <button className="btn btn-primary" onClick={support}>
                        Support
                    </button>
                    <button className="btn btn-primary" onClick={change}>
                        change acc
                    </button> */}
                    <>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Report") }} style={{ backgroundColor: "rgb(42, 128, 165)" }}>
                                report a bug
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Labeler") }} >
                                Labeler
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Request") }} >
                                Request patch
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Register") }} >
                                Register Patch
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Verify") }} >
                                Verify
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Deploy") }} >
                                Deploy
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={() => { Navigate("/Login") }} >
                                Sign Up
                            </button>
                        </div>
                    </>
                </div>

            </nav >

        </>

    );
}


export default NavBar;


// export default Navbar;
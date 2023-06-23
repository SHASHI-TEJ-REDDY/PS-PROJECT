// import React from "react";
import Web3Contract3 from "./contract1";
import Pic from "../pic/logo.jpg";
import Web3 from "web3";
import web3 from "web3";
// import Web3 from "web3";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery';
import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";
// import Web3Contract3 from "./contract1";
import { Navigate, useNavigate } from "react-router-dom";
// import 'jquery/dist/jquery.min.js';
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';





function Labeler() {

    const labelsub = () => {
        let arr = [];
        let arr2 = [];
        console.log(reslen);
        for (let i = 0; i < reslen; i++) {
            arr.push(document.getElementById("des" + `${(i + 1)}`).innerHTML);
        }
        for (let j = 0; j < reslen; j++) {
            // arr2.push(document.getElementById("select" + `${(j + 1)}`).value);
            arr2.push(document.getElementById("select" + `${(j + 1)}`).innerHTML);
        }
        console.log(arr, arr2)
        contract.methods.labler(arr, arr2).send({ from: account });
        // window.contract.methods.labler(arr, arr2).send({ from: account });
    }

    const contract1 = Web3Contract3();
    // const [contract, setContract] = useState();
    // setContract(contract1[0]);
    const contract = contract1[1];
    const account = contract1[0];
    useEffect(() => {
        try {
            // sender();
            getter();
            console.log("shashi")
        }
        catch (error) {
            console.log(error);
            console.log("error");

        }
    }, [contract]);

    // let Navigate = useNavigate();

    let reslen;

    const getter = async () => {
        // window.reload();
        console.log("hello");
        console.log(contract.methods);

        const data = await contract.methods.verify().call();
        console.log(data);
        // document.getElementById("submit").innerHTML = `your reported application was: ${data}`;

        //  await window.contract.methods.getDetails().send({from:account})
        contract.methods.verify().call().then((result) => {
            // let index=0;
            reslen = result.length;
            console.log(result);
            // console.log("vamsi")
            const tbody = document.getElementById("tbody");

            for (let i = 0; i < result.length; i++) {
                if (result[i][1] != ".") {               //open this for not showing "." inputs
                    const row = document.createElement("tr");
                    const cell1 = document.createElement("td");
                    cell1.innerHTML = i + 1;
                    const cell2 = document.createElement("td");
                    cell2.innerHTML = result[i][0];
                    const cell3 = document.createElement("td");
                    cell3.innerHTML = result[i][1];
                    // console.log(document.getElementById(cell3.id).innerHTML);
                    console.log(cell3.innerHTML);
                    const cell4 = document.createElement("td");
                    cell4.innerHTML = result[i][3];
                    cell4.id = "des" + `${(i + 1)}`;

                    const cell5 = document.createElement("td");
                    cell5.innerHTML = result[i][2];


                    // const table = document.getElementById("table12");
                    const select = document.createElement("select");
                    const cell10 = document.createElement("td");
                    select.classList.add("form-select");
                    for (let i = 1; i <= 5; i++) {
                        const option = document.createElement("option");
                        option.value = i;
                        // option.innerHTML = i;
                        option.textContent = i;
                        select.appendChild(option);
                    }
                    select.id = "select" + (i + 1)
                    cell10.appendChild(select);



                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    row.appendChild(cell3);
                    row.appendChild(cell5);
                    row.appendChild(cell4);
                    row.appendChild(cell10);
                    tbody.appendChild(row);

                    $(function () {
                        $('#table12').DataTable();
                    });
                }

            }
        })
        // window.reload();
    }

    return (
        <>
            {/* <h1 className="d-flex justify-content-center">Reported Bugs</h1> */}
            <h1 className="container">Reported Bugs</h1>
            <hr />

            <table id="table12" class="table table-striped table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Operation System</th>
                        <th scope="col">Application</th>
                        <th scope="col">Version</th>
                        <th scope="col">Descripition</th>
                        <th scope="col">Lable here</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
            <span id="report_a_bug"></span>
            <br />
            <hr />
            <br />
            <button class="btn btn-dark" onClick={labelsub}>
                Send To admin
            </button>
        </>
    )
}

export default Labeler;
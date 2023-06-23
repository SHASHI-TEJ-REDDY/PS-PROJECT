// import react from "react";
import React, { useEffect, useState } from "react";
import web3 from "web3";
import Web3 from "web3";
// import $ from "jquery";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import detectEthereumProvider from "@metamask/detect-provider";
// import Web3Contract1 from "./Web3Contract1";
import Web3Contract1 from "./contract1";

function Request() {
    const contract1 = Web3Contract1();
    // const [contract, setContract] = useState();
    // setContract(contract1[0]);
    const contract = contract1[1];
    const account = contract1[0];
    useEffect(() => {
        try {
            getter();
            console.log("shashi");
        }
        catch (error) {
            console.log(error);
            console.log("shashi");
        }
    }, [contract]);


    const sendit = () => {
        let arr3 = [];
        // let arr4=[];
        for (let i = 0; i < reslen; i++) {
            if (document.getElementById("check" + `${(i + 1)}`).checked) {
                // arr3.push(document.getElementById("des"+(i+1)).innerHTML);
                arr3.push(document.getElementById( "des" + `${(i + 1)}`).innerHTML);
            }
            window.contract.methods.adminselect(arr3).send({ from: account });
        }



    }
    let reslen;
    const getter = async () => {
        // window.reload();
        // const data = await window.contract.methods.verify().call();
        // console.log(data);
        // document.getElementById("submit").innerHTML = `your reported application was: ${data}`;

        //  await window.contract.methods.getDetails().send({from:account})
        window.contract.methods.verify().call().then((result) => {
            // let index=0;
            reslen = result.length;
            console.log(result);
            // console.log("vamsi")
            const tbody = document.getElementById("tbody");
            for (let i = 0; i < result.length; i++) {

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
                // const select = document.createElement("select");
                const cell10 = document.createElement("td");
                // select.classList.add("form-select");
                // for (let i = 1; i <= 5; i++) {
                //     const option = document.createElement("option");
                //     option.value = i;
                //     // option.innerHTML = i;
                //     option.textContent = i;
                //     select.appendChild(option);
                // }
                // select.id = "select" + (i + 1)
                // cell10.appendChild(select);
                const cell9 = document.createElement("td")
                // cell9.innerHTML = result[i].lablestatus;
                cell9.innerHTML = result[i][4];
                const check = document.createElement("input");
                // check.value = "";
                check.setAttribute("type", "checkbox");
                // check.type = checkbox;
                check.className = "form-check-input mt-0";
                check.id = "check" + `${(i + 1)}`;
                cell10.appendChild(check);



                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                row.appendChild(cell5);
                row.appendChild(cell4);
                row.appendChild(cell9);
                row.appendChild(cell10);
                tbody.appendChild(row);

                $(function () {
                    $('#table12').DataTable();
                });

            }
        })
        // window.reload();
    }

    // function Request() {
    return (
        <>
            <h1 class="container">Request here</h1>
            <hr />
            <div class="container">
                <table id="table12" class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Operation System</th>
                            <th scope="col">Descripition</th>
                            <th scope="col">Application</th>
                            <th scope="col">Version</th>
                            <th scope="col">Priority</th>
                            <th scope="col">select</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
                <div class="btn btn-dark" onClick={sendit}>
                    Submit
                </div>
            </div>
        </>
    )
}

export default Request;
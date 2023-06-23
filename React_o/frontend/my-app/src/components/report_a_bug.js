// import React from "react";
import Pic from "../pic/logo.jpg";
import Web3 from "web3";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";
import Web3Contract3 from "./contract1";
import { Navigate, useNavigate } from "react-router-dom";

const currentdate = new Date();
const year = currentdate.getFullYear();
// const year = currentdate.setFullYearl;
const month = currentdate.getMonth();
const date = currentdate.getDate();
const time = currentdate.getHours();
const min = currentdate.getMinutes();
const sec = currentdate.getSeconds();
const milsec = currentdate.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(time);
console.log(min);
console.log(sec);
console.log(milsec);

function Report() {
    // async function Change() {
    //     const provider = await detectEthereumProvider();
    //     if (provider) {
    //         await provider.request({
    //             method: 'wallet_requestPermissions',
    //             params: [{ eth_accounts: {} }],
    //         });
    //     }
    // }

    // let account;
    // let { ethereum } = window;
    // const web3 = new Web3(window.ethereum);
    // const ABI = [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "_discription",
    //                 "type": "string[]"
    //             }
    //         ],
    //         "name": "adminselect",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "_discription",
    //                 "type": "string[]"
    //             },
    //             {
    //                 "internalType": "uint256[]",
    //                 "name": "_lablestatus",
    //                 "type": "uint256[]"
    //             }
    //         ],
    //         "name": "labler",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_os",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_app",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_dis",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "submit",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "AllArray",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "os",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "app",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "dis",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "lablestatus",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "selectionstatus",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "AllArray1",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "os",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "app",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "dis",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "lablestatus",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "selectionstatus",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "verify",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "string",
    //                         "name": "os",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "app",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "ver",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "dis",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "lablestatus",
    //                         "type": "uint256"
    //                     },
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "selectionstatus",
    //                         "type": "uint256"
    //                     }
    //                 ],
    //                 "internalType": "struct report.reportpage[]",
    //                 "name": "",
    //                 "type": "tuple[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
    // const Address = "0xC15530e66cbDCF0A848b87ce663AFC12E86C7337";

    // let contract = new web3.eth.Contract(ABI, Address);

    // useEffect(() => {
    //     const ConnectMetamask = async () => {
    //         if (window.ethereum !== "undefined") {
    //             const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    //             account = accounts[0];
    //         }
    //         getter();
    //     }
    //     ConnectMetamask();
    // }, []);
    // const sender = async () => {
    //     const e1 = document.getElementById("os").value;
    //     const e2 = document.getElementById("app").value;
    //     const e3 = document.getElementById("ver").value;
    //     const e4 = document.getElementById("dis").value;
    //     await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
    //     window.reload();
    //     // const data = await contract.methods.submit().call();
    //     // const data = await contract.methods.enter().call();
    //     // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // window.location.reload()
        sender();

    };
    // const [maco, setmaco] = useState([]);
    // const macoss = () => {
    //     const tbody = document.getElementById("tbody");
    //     for (let i = 0; i < maco.length; i++) {
    //         if (win[i][0] === 'macos') {
    //             const row = document.createElement("tr");
    //             const cell1 = document.createElement("td");
    //             cell1.innerHTML = i + 1;
    //             const cell2 = document.createElement("td");
    //             cell2.innerHTML = maco[i][0];
    //             const cell3 = document.createElement("td");
    //             cell3.innerHTML = maco[i][1];
    //             const cell4 = document.createElement("td");

    //             cell4.innerHTML = maco[i][2];
    //             const cell5 = document.createElement("td");
    //             cell5.innerHTML = maco[i][3];



    //             row.appendChild(cell1);
    //             row.appendChild(cell2);
    //             row.appendChild(cell3);
    //             row.appendChild(cell4);
    //             row.appendChild(cell5);
    //             tbody.appendChild(row);

    //             $(function () {
    //                 $('#table1').DataTable();
    //             });
    //         }

    //     }

    // }


    const [win, setwin] = useState([]);

    // const wind = () => {
    //     // window.location.reload();
    //     const tbody = document.getElementById("tbody");
    //     for (let i = 0; i < win.length; i++) {
    //         if (win[i][0] === 'windows') {
    //             const row = document.createElement("tr");
    //             const cell1 = document.createElement("td");
    //             cell1.innerHTML = i + 1;
    //             const cell2 = document.createElement("td");
    //             cell2.innerHTML = win[i][0];
    //             const cell3 = document.createElement("td");
    //             cell3.innerHTML = win[i][1];
    //             const cell4 = document.createElement("td");

    //             cell4.innerHTML = win[i][2];
    //             const cell5 = document.createElement("td");
    //             cell5.innerHTML = win[i][3];



    //             row.appendChild(cell1);
    //             row.appendChild(cell2);
    //             row.appendChild(cell3);
    //             row.appendChild(cell4);
    //             row.appendChild(cell5);
    //             tbody.appendChild(row);

    //             $(function () {
    //                 $('#table1').DataTable();
    //             });
    //         }

    //     }
    // }

    const contract1 = Web3Contract3();
    // const [contract, setContract] = useState();
    // setContract(contract1[0]);
    const contract = contract1[1];
    const account = contract1[0];
    useEffect(() => {
        try {
            // sender();
            getter();
        }
        catch (error) {
            console.log(error);
        }
    }, [contract]);
    let Navigate = useNavigate();

    const sender = async () => {
        const e1 = document.getElementById("os").value;
        const e2 = document.getElementById("app").value;
        const e3 = document.getElementById("ver").value;
        const e4 = document.getElementById("dis").value;
        await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
        // window.reload();
        // const data = await contract.methods.submit().call();
        // const data = await contract.methods.enter().call();
        // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;

        // <Navigate to="<Report />" />
        Navigate("/Report")
        // window.location.reload();

    }


    const getter = async () => {
        // window.reload();
        const data = await window.contract.methods.verify().call();
        window.contract.methods.verify().call().then((result) => {
            console.log(result);
            setwin(result)
            // setmaco(result)
            // const tbody = document.getElementById("tbody");
            // for (let i = 0; i < result.length; i++) {
            //     const row = document.createElement("tr");
            //     const cell1 = document.createElement("td");
            //     cell1.innerHTML = i + 1;
            //     const cell2 = document.createElement("td");
            //     cell2.innerHTML = result[i][0];
            //     const cell3 = document.createElement("td");
            //     cell3.innerHTML = result[i][1];
            //     const cell4 = document.createElement("td");

            //     cell4.innerHTML = result[i][2];
            //     const cell5 = document.createElement("td");
            //     cell5.innerHTML = result[i][3];



            //     row.appendChild(cell1);
            //     row.appendChild(cell2);
            //     row.appendChild(cell3);
            //     row.appendChild(cell4);
            //     row.appendChild(cell5);
            //     tbody.appendChild(row);

            //     $(function () {
            //         $('#table1').DataTable();
            //     });

            // }
        })
        // window.reload();
        // Navigate("/Report")
    }
    const [os,setos]=useState("")
    const wind = () => {
        setos("windows")
    }
    const macoss = () => {
        setos("macos")
    }
    const linuxx = () => {
        setos("linux")
    }
    const ubuntu = () => {
        setos("ubuntu")
    }
    




    return (
        <>

            {/* <div>
                <button class="btn btn-outline-dark" onClick={Change}>
                    <h5 style={{ color: "green" }}>Change Account</h5>
                </button>
            </div> */}
            {/* <div>
                <button class="btn btn-btn-outline-primary" onClick={wind}>
                    wind click
                </button>
            </div>
            <div>
                <button class="btn btn-btn-outline-primary" onClick={macoss}>
                    mac click
                </button>
            </div>
            <div>
                <button class="btn btn-btn-outline-primary" onClick={linuxx}>
                    linux
                </button>
            </div> */}
            <br />
            {/* <div class="container" style={{ display: "flex" }}>
                <button class="btn btn-dark" style={{ marginLeft: "auto" }} onClick={() => window.location.reload(false)}>Click to reload!</button>
            </div> */}
            {/* <h1><h1>{`${year} ${year}`}</h1></h1> */}
            <div className="container">
                <h1>Report the bug here</h1>
                <hr />
            </div>
            <div class="container">
                <label for="applicationnme">Choose the os:</label>
                <select id="os" name="applicationname" title="operating">
                    <option value=".">Select</option>
                    <option value="windows">windows</option>
                    <option value="macos">mac</option>
                    <option value="linux">linux</option>
                    <option value="ubuntu">ubuntu</option>
                </select>
                <br />
                <br />
                <label for="versionname">Choose the application:</label>
                <select id="app" name="versionname" title="version">
                    <option value=".">Select</option>
                    <option value="chrome">chrome</option>
                    <option value="brave">brave</option>
                    <option value="game">game</option>
                    <option value="vs code">vs code</option>
                    <option value="python">python</option>
                    <option value="java">jeva</option>
                </select>

                <br />
                <br />

                <label for="version">Choose the version:</label>
                <select id="ver" name="versionn" title="versionn">
                    <option value=".">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <br />
                <br />
                <textarea name="dis" id="dis" placeholder="Type your Discription"></textarea>
                <br />
                <button type="submit" class="btn btn-primary" id="submitt" onClick={handleSubmit}>Submit</button>
                <br />
                <hr />
                {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
            </div>
            {/* <h1>hello</h1> */}
            <div class="container">
                <h1>Your reported bugs:</h1>
                <div class="container" style={{ display: "flex" }}>
                    <button class="btn btn-dark" style={{ marginLeft: "auto" }} onClick={() => window.location.reload(false)}>Click to reload!</button>
                </div>
                <div>
                <button class="btn btn-btn-outline-primary" onClick={wind}>
                    wind click
                </button>
            </div>
            <div>
                <button class="btn btn-btn-outline-primary" onClick={macoss}>
                    mac click
                </button>
            </div>
            <div>
                <button class="btn btn-btn-outline-primary" onClick={linuxx}>
                    linux
                </button>
            </div>
            <div>
                <button class="btn btn-btn-outline-primary" onClick={ubuntu}>
                    ubuntu
                </button>
            </div>
            </div>
            <div className="container">
                <br />
                <div class="container-fluid">
                    <table id="table1" class="table table-striped table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Operation System</th>
                                <th scope="col">Application</th>
                                <th scope="col">Version</th>
                                <th scope="col">Descripition</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">

                            {win.map((data, dataIndex) => {
                                if(data.os!="." && data.os==os){
                                return (
                                    <>
                                        <tr>
                                            <td>{dataIndex + 1}</td>
                                            <td>{data.os}</td>
                                            <td> {data.app}</td>
                                            {/* <td>

                                                    <button className='btn' onClick={downloadpatch(data.fileData)}>Download</button>
                                                </td> */}
                                            <td>{data.ver}</td>
                                            <td>{data.dis}</td>
                                            {/* <td>{setTime(data.time)}</td> */}
                                            {/* <td>{data.verificationstatus}</td> */}
                                            {/* <td>{data.deploymentstatus}</td> */}

                                        </tr>
                                    </>
                                )
                                            }
                            })}


                        </tbody>
                    </table>
                </div>
                <span id="report_a_bug"></span>
            </div >
            <br />
            <hr />
            <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <p><b>Active Stamp</b> {date}/{month}/{year} . {time}:{min}:{sec}:0{milsec}</p>
            </div >
        </>
    )
}

export default Report;





// ................................................................................................................................................




// // import React from "react";
// import Pic from "../pic/logo.jpg";
// import Web3 from "web3";
// import 'jquery/dist/jquery.min.js';
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery';
// import detectEthereumProvider from "@metamask/detect-provider";
// import React, { useEffect, useState } from "react";
// import Web3Contract3 from "./contract1";
// import { Navigate, useNavigate } from "react-router-dom";

// const currentdate = new Date();
// const year = currentdate.getFullYear();
// // const year = currentdate.setFullYearl;
// const month = currentdate.getMonth();
// const date = currentdate.getDate();
// const time = currentdate.getHours();
// const min = currentdate.getMinutes();
// const sec = currentdate.getSeconds();
// const milsec = currentdate.getMilliseconds();
// console.log(year);
// console.log(month);
// console.log(date);
// console.log(time);
// console.log(min);
// console.log(sec);
// console.log(milsec);

// function Report() {
//     // async function Change() {
//     //     const provider = await detectEthereumProvider();
//     //     if (provider) {
//     //         await provider.request({
//     //             method: 'wallet_requestPermissions',
//     //             params: [{ eth_accounts: {} }],
//     //         });
//     //     }
//     // }

//     // let account;
//     // let { ethereum } = window;
//     // const web3 = new Web3(window.ethereum);
//     // const ABI = [
//     //     {
//     //         "inputs": [
//     //             {
//     //                 "internalType": "string[]",
//     //                 "name": "_discription",
//     //                 "type": "string[]"
//     //             }
//     //         ],
//     //         "name": "adminselect",
//     //         "outputs": [],
//     //         "stateMutability": "nonpayable",
//     //         "type": "function"
//     //     },
//     //     {
//     //         "inputs": [
//     //             {
//     //                 "internalType": "string[]",
//     //                 "name": "_discription",
//     //                 "type": "string[]"
//     //             },
//     //             {
//     //                 "internalType": "uint256[]",
//     //                 "name": "_lablestatus",
//     //                 "type": "uint256[]"
//     //             }
//     //         ],
//     //         "name": "labler",
//     //         "outputs": [],
//     //         "stateMutability": "nonpayable",
//     //         "type": "function"
//     //     },
//     //     {
//     //         "inputs": [
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "_os",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "_app",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "_ver",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "_dis",
//     //                 "type": "string"
//     //             }
//     //         ],
//     //         "name": "submit",
//     //         "outputs": [],
//     //         "stateMutability": "nonpayable",
//     //         "type": "function"
//     //     },
//     //     {
//     //         "inputs": [
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "",
//     //                 "type": "uint256"
//     //             }
//     //         ],
//     //         "name": "AllArray",
//     //         "outputs": [
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "os",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "app",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "ver",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "dis",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "lablestatus",
//     //                 "type": "uint256"
//     //             },
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "selectionstatus",
//     //                 "type": "uint256"
//     //             }
//     //         ],
//     //         "stateMutability": "view",
//     //         "type": "function"
//     //     },
//     //     {
//     //         "inputs": [
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "",
//     //                 "type": "uint256"
//     //             }
//     //         ],
//     //         "name": "AllArray1",
//     //         "outputs": [
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "os",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "app",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "ver",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "string",
//     //                 "name": "dis",
//     //                 "type": "string"
//     //             },
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "lablestatus",
//     //                 "type": "uint256"
//     //             },
//     //             {
//     //                 "internalType": "uint256",
//     //                 "name": "selectionstatus",
//     //                 "type": "uint256"
//     //             }
//     //         ],
//     //         "stateMutability": "view",
//     //         "type": "function"
//     //     },
//     //     {
//     //         "inputs": [],
//     //         "name": "verify",
//     //         "outputs": [
//     //             {
//     //                 "components": [
//     //                     {
//     //                         "internalType": "string",
//     //                         "name": "os",
//     //                         "type": "string"
//     //                     },
//     //                     {
//     //                         "internalType": "string",
//     //                         "name": "app",
//     //                         "type": "string"
//     //                     },
//     //                     {
//     //                         "internalType": "string",
//     //                         "name": "ver",
//     //                         "type": "string"
//     //                     },
//     //                     {
//     //                         "internalType": "string",
//     //                         "name": "dis",
//     //                         "type": "string"
//     //                     },
//     //                     {
//     //                         "internalType": "uint256",
//     //                         "name": "lablestatus",
//     //                         "type": "uint256"
//     //                     },
//     //                     {
//     //                         "internalType": "uint256",
//     //                         "name": "selectionstatus",
//     //                         "type": "uint256"
//     //                     }
//     //                 ],
//     //                 "internalType": "struct report.reportpage[]",
//     //                 "name": "",
//     //                 "type": "tuple[]"
//     //             }
//     //         ],
//     //         "stateMutability": "view",
//     //         "type": "function"
//     //     }
//     // ];
//     // const Address = "0xC15530e66cbDCF0A848b87ce663AFC12E86C7337";

//     // let contract = new web3.eth.Contract(ABI, Address);

//     // useEffect(() => {
//     //     const ConnectMetamask = async () => {
//     //         if (window.ethereum !== "undefined") {
//     //             const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//     //             account = accounts[0];
//     //         }
//     //         getter();
//     //     }
//     //     ConnectMetamask();
//     // }, []);
//     // const sender = async () => {
//     //     const e1 = document.getElementById("os").value;
//     //     const e2 = document.getElementById("app").value;
//     //     const e3 = document.getElementById("ver").value;
//     //     const e4 = document.getElementById("dis").value;
//     //     await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
//     //     window.reload();
//     //     // const data = await contract.methods.submit().call();
//     //     // const data = await contract.methods.enter().call();
//     //     // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;
//     // }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // window.location.reload()
//         sender();

//     };
//     // const [maco, setmaco] = useState([]);
//     // const macoss = () => {
//     //     const tbody = document.getElementById("tbody");
//     //     for (let i = 0; i < maco.length; i++) {
//     //         if (win[i][0] === 'macos') {
//     //             const row = document.createElement("tr");
//     //             const cell1 = document.createElement("td");
//     //             cell1.innerHTML = i + 1;
//     //             const cell2 = document.createElement("td");
//     //             cell2.innerHTML = maco[i][0];
//     //             const cell3 = document.createElement("td");
//     //             cell3.innerHTML = maco[i][1];
//     //             const cell4 = document.createElement("td");

//     //             cell4.innerHTML = maco[i][2];
//     //             const cell5 = document.createElement("td");
//     //             cell5.innerHTML = maco[i][3];



//     //             row.appendChild(cell1);
//     //             row.appendChild(cell2);
//     //             row.appendChild(cell3);
//     //             row.appendChild(cell4);
//     //             row.appendChild(cell5);
//     //             tbody.appendChild(row);

//     //             $(function () {
//     //                 $('#table1').DataTable();
//     //             });
//     //         }

//     //     }

//     // }


//     const [win, setwin] = useState([]);

//     // const wind = () => {
//     //     // window.location.reload();
//     //     const tbody = document.getElementById("tbody");
//     //     for (let i = 0; i < win.length; i++) {
//     //         if (win[i][0] === 'windows') {
//     //             const row = document.createElement("tr");
//     //             const cell1 = document.createElement("td");
//     //             cell1.innerHTML = i + 1;
//     //             const cell2 = document.createElement("td");
//     //             cell2.innerHTML = win[i][0];
//     //             const cell3 = document.createElement("td");
//     //             cell3.innerHTML = win[i][1];
//     //             const cell4 = document.createElement("td");

//     //             cell4.innerHTML = win[i][2];
//     //             const cell5 = document.createElement("td");
//     //             cell5.innerHTML = win[i][3];



//     //             row.appendChild(cell1);
//     //             row.appendChild(cell2);
//     //             row.appendChild(cell3);
//     //             row.appendChild(cell4);
//     //             row.appendChild(cell5);
//     //             tbody.appendChild(row);

//     //             $(function () {
//     //                 $('#table1').DataTable();
//     //             });
//     //         }

//     //     }
//     // }

//     const contract1 = Web3Contract3();
//     // const [contract, setContract] = useState();
//     // setContract(contract1[0]);
//     const contract = contract1[1];
//     const account = contract1[0];
//     useEffect(() => {
//         try {
//             // sender();
//             getter();
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }, [contract]);
//     let Navigate = useNavigate();

//     const sender = async () => {
//         const e1 = document.getElementById("os").value;
//         const e2 = document.getElementById("app").value;
//         const e3 = document.getElementById("ver").value;
//         const e4 = document.getElementById("dis").value;
//         await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
//         // window.reload();
//         // const data = await contract.methods.submit().call();
//         // const data = await contract.methods.enter().call();
//         // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;

//         // <Navigate to="<Report />" />
//         Navigate("/Report")
//         // window.location.reload();

//     }


//     const getter = async () => {
//         // window.reload();
//         const data = await window.contract.methods.verify().call();
//         window.contract.methods.verify().call().then((result) => {
//             console.log(result);
//             setwin(result)
//             // setmaco(result)
//             // const tbody = document.getElementById("tbody");
//             // for (let i = 0; i < result.length; i++) {
//             //     const row = document.createElement("tr");
//             //     const cell1 = document.createElement("td");
//             //     cell1.innerHTML = i + 1;
//             //     const cell2 = document.createElement("td");
//             //     cell2.innerHTML = result[i][0];
//             //     const cell3 = document.createElement("td");
//             //     cell3.innerHTML = result[i][1];
//             //     const cell4 = document.createElement("td");

//             //     cell4.innerHTML = result[i][2];
//             //     const cell5 = document.createElement("td");
//             //     cell5.innerHTML = result[i][3];



//             //     row.appendChild(cell1);
//             //     row.appendChild(cell2);
//             //     row.appendChild(cell3);
//             //     row.appendChild(cell4);
//             //     row.appendChild(cell5);
//             //     tbody.appendChild(row);

//             //     $(function () {
//             //         $('#table1').DataTable();
//             //     });

//             // }
//         })
//         // window.reload();
//         // Navigate("/Report")
//     }




//     return (
//         <>

//             {/* <div>
//                 <button class="btn btn-outline-dark" onClick={Change}>
//                     <h5 style={{ color: "green" }}>Change Account</h5>
//                 </button>
//             </div> */}
//             {/* <div>
//                 <button class="btn btn-btn-outline-primary" onClick={wind}>
//                     wind click
//                 </button>
//             </div>
//             <div>
//                 <button class="btn btn-btn-outline-primary" onClick={macoss}>
//                     mac click
//                 </button>
//             </div> */}
//             <br />
//             {/* <div class="container" style={{ display: "flex" }}>
//                 <button class="btn btn-dark" style={{ marginLeft: "auto" }} onClick={() => window.location.reload(false)}>Click to reload!</button>
//             </div> */}
//             {/* <h1><h1>{`${year} ${year}`}</h1></h1> */}
//             <div className="container">
//                 <h1>Report the bug here</h1>
//                 <hr />
//             </div>
//             <div class="container">
//                 <label for="applicationnme">Choose the os:</label>
//                 <select id="os" name="applicationname" title="operating">
//                     <option value=".">Select</option>
//                     <option value="windows">windows</option>
//                     <option value="macos">mac</option>
//                     <option value="linux">linux</option>
//                     <option value="ubuntu">ubuntu</option>
//                 </select>
//                 <br />
//                 <br />
//                 <label for="versionname">Choose the application:</label>
//                 <select id="app" name="versionname" title="version">
//                     <option value=".">Select</option>
//                     <option value="chrome">chrome</option>
//                     <option value="brave">brave</option>
//                     <option value="game">game</option>
//                     <option value="vs code">vs code</option>
//                     <option value="python">python</option>
//                     <option value="java">jeva</option>
//                 </select>

//                 <br />
//                 <br />

//                 <label for="version">Choose the version:</label>
//                 <select id="ver" name="versionn" title="versionn">
//                     <option value=".">Select</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                 </select>

//                 <br />
//                 <br />
//                 <textarea name="dis" id="dis" placeholder="Type your Discription"></textarea>
//                 <br />
//                 <button type="submit" class="btn btn-primary" id="submitt" onClick={handleSubmit}>Submit</button>
//                 <br />
//                 <hr />
//                 {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
//             </div>
//             {/* <h1>hello</h1> */}
//             <div class="container">
//                 <h1>Your reported bugs:</h1>
//                 <div class="container" style={{ display: "flex" }}>
//                     <button class="btn btn-dark" style={{ marginLeft: "auto" }} onClick={() => window.location.reload(false)}>Click to reload!</button>
//                 </div>
//             </div>
//             <div className="container">
//                 <br />
//                 <div class="container-fluid">
//                     <table id="table1" class="table table-striped table-bordered">
//                         <thead class="thead-dark">
//                             <tr>
//                                 <th scope="col">S.No</th>
//                                 <th scope="col">Operation System</th>
//                                 <th scope="col">Application</th>
//                                 <th scope="col">Version</th>
//                                 <th scope="col">Descripition</th>
//                             </tr>
//                         </thead>
//                         <tbody id="tbody">
//                             {/* { win&& 
                            
//                             } */}
//                         </tbody>
//                     </table>
//                 </div>
//                 <span id="report_a_bug"></span>
//             </div >
//             <br />
//             <hr />
//             <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
//                 <p><b>Active Stamp</b> {date}/{month}/{year} . {time}:{min}:{sec}:0{milsec}</p>
//             </div >
//         </>
//     )
// }

// export default Report;

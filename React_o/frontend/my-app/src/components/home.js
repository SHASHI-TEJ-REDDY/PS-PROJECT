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
import Web3Contract1 from "./contract";
// function Home() {

//     async function Change() {
//         const provider = await detectEthereumProvider();
//         if (provider) {
//             await provider.request({
//                 method: 'wallet_requestPermissions',
//                 params: [{ eth_accounts: {} }],
//             });
//         }
//     }


//     let account;
//     let { ethereum } = window;
//     const web3 = new Web3(window.ethereum);
//     const ABI = [
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_patchname",
//                     "type": "string"
//                 }
//             ],
//             "name": "Deployed",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_patchname",
//                     "type": "string"
//                 }
//             ],
//             "name": "findandreply",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_patchname",
//                     "type": "string"
//                 }
//             ],
//             "name": "findandreplynotverified",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_patchname",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_os",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_app",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_version",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "bytes",
//                     "name": "_file",
//                     "type": "bytes"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_dis",
//                     "type": "string"
//                 }
//             ],
//             "name": "registered",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "data",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "patchname",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "os",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "app",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "version",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "bytes",
//                     "name": "file",
//                     "type": "bytes"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "dis",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "verificationstatus",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "deploymentstatus",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "show",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "string",
//                             "name": "patchname",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "os",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "app",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "version",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "bytes",
//                             "name": "file",
//                             "type": "bytes"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "dis",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "verificationstatus",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "deploymentstatus",
//                             "type": "string"
//                         }
//                     ],
//                     "internalType": "struct register.registerpage[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ];
//     const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
//     let contract = new web3.eth.Contract(ABI, Address);
//     useEffect(() => {
//         const ConnectMetamask = async () => {
//             if (window.ethereum !== "undefined") {
//                 const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//                 account = accounts[0];
//                 // alert(`Account is: ${account}`)
//                 // ConnectContract();
//             }
//             // get();
//         }

//         // const ConnectContract = async () => {

//         //     // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
//         //     get();
//         //     console.log(contract);
//         // }
//         ConnectMetamask();
//     }, []);

//     // const sender = async () => {
//     //     const e1 = document.getElementById("os").value;
//     //     const e2 = document.getElementById("app").value;
//     //     const e3 = document.getElementById("ver").value;
//     //     const e4 = document.getElementById("file").value;
//     //     const e5 = document.getElementById("dis").value;
//     //     await window.contract.methods.registered(e1, e2, e3, e4, e5).send({ from: account });
//     //     // get();
//     //     // window.location.reload();

//     // }

//     // const [contract, setContract] = useState();

//     // const contract1 = Web3Contract1();
//     // // const contract = contract1[1]
//     // console.log(contract)
//     // const account = contract1[0];
//     // useEffect(() => {
//     //     try {
//     //         get();
//     //     }
//     //     catch (error) {
//     //         console.log(error);
//     //     }
//     // }, [contract]);

//     // const get = async () => {
//     //     // window.reload();
//     //     // console.log(contract);
//     //     console.log("vamsi");
//     //     const data = await contract.methods.show().call();
//     //     contract.methods.show().call().then((result) => {
//     //         console.log(result);
//     //         const tbody = document.getElementById("tbody");
//     //         for (let i = 0; i < result.length; i++) {
//     //             if (result[i].deploymentstatus == "Deployed") {
//     //                 const row = document.createElement("tr");
//     //                 const cell1 = document.createElement("td");
//     //                 cell1.innerHTML = i + 1;
//     //                 const cell2 = document.createElement("td");
//     //                 cell2.innerHTML = result[i][0];
//     //                 const cell3 = document.createElement("td");
//     //                 cell3.innerHTML = result[i][1];
//     //                 const cell4 = document.createElement("td");
//     //                 cell4.innerHTML = result[i][2];

//     //                 const cell5 = document.createElement("td");
//     //                 cell5.innerHTML = result[i][3];
//     //                 const cell6 = document.createElement("td");
//     //                 // cell6.innerHTML = result[i][4];
//     //                 const cell8 = document.createElement("td");
//     //                 cell8.innerHTML = result[i][5];
//     //                 // const cell7 = document.createElement("td");
//     //                 // const btn = document.createElement("button");
//     //                 // // const btn2 = document.createElement("button");
//     //                 // btn.textContent = "Download";
//     //                 // // btn2.textContent = "Reject";
//     //                 // cell7.appendChild(btn);
//     //                 // // cell7.appendChild(btn2);
//     //                 // btn.classList.add("btn", "btn-dark")
//     //                 // btn2.classList.add("btn", "btn-dark")
//     //                 const cell7 = document.createElement("td");
//     //                 const btn1 = document.createElement("button");
//     //                 btn1.textContent = "download";
//     //                 btn1.classList.add("btn", "btn-dark");
//     //                 btn1.addEventListener("click", function () {
//     //                     const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(result[i][4]))], { type: 'application/octet-stream' });
//     //                     const fileUrl = URL.createObjectURL(fileBlob);
//     //                     const downloadLink = document.createElement('a');
//     //                     downloadLink.href = fileUrl;
//     //                     downloadLink.download = 'file.txt';
//     //                     downloadLink.click();
//     //                 })
//     //                 cell7.appendChild(btn1);



//     //                 // btn.addEventListener("click", function () {
//     //                 //     window.contract.methods.findandreply(result[i][0]).send({ from: account });

//     //                 // })
//     //                 // btn2.addEventListener("click", function () {
//     //                 //     window.contract.methods.findandreplynotverified(result[i][0]).send({ from: account });
//     //                 // })


//     //                 row.appendChild(cell1);
//     //                 row.appendChild(cell2);
//     //                 row.appendChild(cell3);
//     //                 row.appendChild(cell4);
//     //                 row.appendChild(cell5);
//     //                 row.appendChild(cell8);
//     //                 row.appendChild(cell6);
//     //                 row.appendChild(cell7);
//     //                 tbody.appendChild(row);

//     //                 $(function () {
//     //                     $('#table1').DataTable();
//     //                 });
//     //             }
//     //         }
//     //     })
//     //     // window.location.reload();
//     // }



//     return (
//         <>
//             <div>
//                 <h1>
//                     shashi
//                 </h1>
//             </div>
//             <div>
//                 <button class="btn btn-outline-primary" onclick="change()">
//                     change account
//                 </button>
//             </div>
//             <div>
//                 <button class="btn btn-outline-dark" onClick={Change}>
//                     <h5 style={{ color: "green" }}>Change Account</h5>
//                 </button>
//             </div>
//             <br />
//             <div className="container">
//                 <table id="table1" className="table table-striped table-bordered">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th scope="col">S.No</th>
//                             <th scope="col">Patch Name</th>
//                             <th scope="col">Operation System</th>
//                             <th scope="col">Application</th>
//                             <th scope="col">Version</th>
//                             <th scope="col">Descripition</th>
//                             <th scope="col">file</th>
//                             <th scope="col">download</th>
//                         </tr>
//                     </thead>
//                     <tbody id="tbody">
//                     </tbody>
//                 </table>
//             </div>
//             <hr />
//             <div className="container" id="project">
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Trending Patch</h5>
//                                 <p className="card-text">This is the patch that has been download by most of the users recently.</p>
//                                 <a href="#" className="btn btn-primary">Download</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Recent viewed Patch</h5>
//                                 <p className="card-text">This is the patch,you have viewed recently.</p>
//                                 <a href="#" className="btn btn-primary">Download</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />

//                 <div className="row">
//                     <div className="col-sm-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Most Recomended</h5>
//                                 <p className="card-text">This is most Recomended Patch by your software provider.</p>
//                                 <a href="#" className="btn btn-primary">Download</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-6">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Report a Bug</h5>
//                                 <p className="card-text">Found any Bug in the system report here.</p>
//                                 <a href="report_a_bug.html" className="btn btn-primary">Report</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <hr />
//             <div class="container">
//                 <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
//                     <div class="feature col">
//                         <div
//                             class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
//                             <svg class="bi" width="1em" height="1em">
//                                 {/* <use xlink: href="#collection"></use> */}
//                             </svg>
//                         </div>
//                         <h3 class="fs-2">Know My address</h3>
//                         <p>to Know your current address on which your transaction is going on, click the below button.</p>
//                         <button type="submit" class="btn btn-dark" id="getaddress()" onclick="getadd()">
//                             get address
//                         </button>
//                         <span id="index"></span>

//                     </div>
//                     <div class="feature col">
//                         <div
//                             class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
//                             <svg class="bi" width="1em" height="1em">
//                                 {/* <use xlink: href="#people-circle"></use> */}
//                             </svg>
//                         </div>
//                         <h3 class="fs-2">Our Support</h3>
//                         <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
//                             probably just keep going until we run out of words.</p>
//                         <button class="btn btn-dark">
//                             Get Help
//                         </button>
//                     </div>
//                     <div class="feature col">
//                         <div
//                             class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
//                             <svg class="bi" width="1em" height="1em">
//                                 {/* <use xlink: href="#toggles2"></use> */}
//                             </svg>
//                         </div>
//                         <h3 class="fs-2">Join Us</h3>
//                         <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
//                             probably just keep going until we run out of words.</p>
//                         <button class="btn btn-dark">
//                             Join
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home;










// // import React, { useState, useEffect } from 'react'
// // import { Link, Outlet } from 'react-router-dom';
// // import Web3 from 'web3';
// // import AdminContext from './createcontext';
// // export default function Adminhome() {
// //     let [account, setAccount] = useState("");
// //     let [contractdata, setContractdata] = useState({});
// //     let { ethereum } = window;
// //     useEffect(() => {
// //         async function func1() {
// //             let accounts = await ethereum.request({ method: "eth_requestAccounts" });
// //             setAccount(accounts[0]);
// //             const web3 = new Web3(window.ethereum);
// //             let abi = [
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "Accept",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "Reject",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "no",
// //                             "type": "uint256"
// //                         },
// //                         {
// //                             "internalType": "bytes",
// //                             "name": "metadata",
// //                             "type": "bytes"
// //                         },
// //                         {
// //                             "internalType": "string",
// //                             "name": "filename",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "string",
// //                             "name": "sft",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "string",
// //                             "name": "features",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "addpatch",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [],
// //                     "name": "adminrequests",
// //                     "outputs": [
// //                         {
// //                             "components": [
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "timestamp",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "no",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "software",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "bugs",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "features",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "status",
// //                                     "type": "string"
// //                                 }
// //                             ],
// //                             "internalType": "struct request[]",
// //                             "name": "",
// //                             "type": "tuple[]"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "deploy",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "download",
// //                     "outputs": [
// //                         {
// //                             "internalType": "bytes",
// //                             "name": "",
// //                             "type": "bytes"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "hash",
// //                             "type": "string"
// //                         }
// //                     ],
// //                     "name": "getpatch",
// //                     "outputs": [
// //                         {
// //                             "components": [
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "patchno",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "bytes",
// //                                     "name": "patchfile",
// //                                     "type": "bytes"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "filename",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "patchname",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "software",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "patchfeatures",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "timestamp",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "verifystatus",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "deploystatus",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "deploytime",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "version",
// //                                     "type": "uint256"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "reuploaded",
// //                                     "type": "uint256"
// //                                 }
// //                             ],
// //                             "internalType": "struct patch",
// //                             "name": "",
// //                             "type": "tuple"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [],
// //                     "name": "getpatchhash",
// //                     "outputs": [
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "",
// //                             "type": "string[]"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "software",
// //                             "type": "string"
// //                         }
// //                     ],
// //                     "name": "labeller",
// //                     "outputs": [
// //                         {
// //                             "components": [
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "bugdesc",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "status",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "priority",
// //                                     "type": "string"
// //                                 }
// //                             ],
// //                             "internalType": "struct bug[]",
// //                             "name": "",
// //                             "type": "tuple[]"
// //                         },
// //                         {
// //                             "components": [
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "featurename",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "status",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "priority",
// //                                     "type": "string"
// //                                 }
// //                             ],
// //                             "internalType": "struct feature[]",
// //                             "name": "",
// //                             "type": "tuple[]"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "str",
// //                             "type": "string"
// //                         }
// //                     ],
// //                     "name": "patchhistory",
// //                     "outputs": [
// //                         {
// //                             "components": [
// //                                 {
// //                                     "internalType": "string",
// //                                     "name": "usname",
// //                                     "type": "string"
// //                                 },
// //                                 {
// //                                     "internalType": "uint256",
// //                                     "name": "timestamp",
// //                                     "type": "uint256"
// //                                 }
// //                             ],
// //                             "internalType": "struct userdwnd[]",
// //                             "name": "",
// //                             "type": "tuple[]"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "software",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256[]",
// //                             "name": "bugindex",
// //                             "type": "uint256[]"
// //                         },
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "imp",
// //                             "type": "string[]"
// //                         },
// //                         {
// //                             "internalType": "uint256[]",
// //                             "name": "featureindex",
// //                             "type": "uint256[]"
// //                         },
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "fimp",
// //                             "type": "string[]"
// //                         }
// //                     ],
// //                     "name": "prioritychange",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "sft",
// //                             "type": "string"
// //                         }
// //                     ],
// //                     "name": "ptchcount",
// //                     "outputs": [
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "no",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "reqsta",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "software",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256[]",
// //                             "name": "bugsind",
// //                             "type": "uint256[]"
// //                         },
// //                         {
// //                             "internalType": "uint256[]",
// //                             "name": "featuresind",
// //                             "type": "uint256[]"
// //                         }
// //                     ],
// //                     "name": "requestpatch",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [],
// //                     "name": "returndwndpatches",
// //                     "outputs": [
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "",
// //                             "type": "string[]"
// //                         }
// //                     ],
// //                     "stateMutability": "view",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "name",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         }
// //                     ],
// //                     "name": "reupldstts",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "pchname",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "uint256",
// //                             "name": "version",
// //                             "type": "uint256"
// //                         },
// //                         {
// //                             "internalType": "string",
// //                             "name": "usname",
// //                             "type": "string"
// //                         }
// //                     ],
// //                     "name": "userdownload",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 },
// //                 {
// //                     "inputs": [
// //                         {
// //                             "internalType": "string",
// //                             "name": "software",
// //                             "type": "string"
// //                         },
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "rptdbugs",
// //                             "type": "string[]"
// //                         },
// //                         {
// //                             "internalType": "string[]",
// //                             "name": "rptdfeatures",
// //                             "type": "string[]"
// //                         }
// //                     ],
// //                     "name": "userreport",
// //                     "outputs": [],
// //                     "stateMutability": "nonpayable",
// //                     "type": "function"
// //                 }
// //             ];
// //             let address = "0xcFf4D5e7d63e981557cc6cECd5Fa775cCbfb9557";
// //             let contract = new web3.eth.Contract(abi, address);
// //             setContractdata(contract);
// //         }
// //         func1();
// //     },[]);
// //     return (
// //         <div className="container my-5">
// //             <nav className="navbar navbar-expand-sm bg-dark-subtle">
// //                 <div className="container-fluid">
// //                     <ul className="navbar-nav w-100">
// //                         <li className="nav-item col-sm text-center">
// //                             <Link className="nav-link col-12 text-dark" to="/admin">
// //                                 Patch
// //                                 Details</Link>
// //                         </li>
// //                         <li className="nav-item col-sm text-center">
// //                             <Link className="nav-link col-12 text-dark" to="/admin/deploy">Patch Deployment</Link>
// //                         </li>
// //                         <li className="nav-item col-sm text-center">
// //                             <Link className="nav-link col-12 text-dark" to="/admin/DownloadHistory">Download History</Link>
// //                         </li>
// //                         <li className="nav-item col-sm text-center">
// //                             <Link className="nav-link col-12 text-dark" to = "/admin/req">Request Patch </Link>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             </nav>
// //             <div className="border border-secondary">
// //                 <AdminContext.Provider value={{ contract: contractdata, Account: account }}>
// //                     <Outlet />
// //                 </AdminContext.Provider>
// //             </div>
// //         </div>
// //     )
// // }


function Home() {

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
    //                 "internalType": "string",
    //                 "name": "_patchname",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "Deployed",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_patchname",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "findandreply",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_patchname",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "findandreplynotverified",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_patchname",
    //                 "type": "string"
    //             },
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
    //                 "name": "_version",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "_file",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_dis",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "registered",
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
    //         "name": "data",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "patchname",
    //                 "type": "string"
    //             },
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
    //                 "name": "version",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "file",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "dis",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "verificationstatus",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "deploymentstatus",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "show",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "string",
    //                         "name": "patchname",
    //                         "type": "string"
    //                     },
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
    //                         "name": "version",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "bytes",
    //                         "name": "file",
    //                         "type": "bytes"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "dis",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "verificationstatus",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "deploymentstatus",
    //                         "type": "string"
    //                     }
    //                 ],
    //                 "internalType": "struct register.registerpage[]",
    //                 "name": "",
    //                 "type": "tuple[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
    // const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
    // let contract = new web3.eth.Contract(ABI, Address);
    // useEffect(() => {
    //     const ConnectMetamask = async () => {
    //         if (window.ethereum !== "undefined") {
    //             const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    //             account = accounts[0];
    //             // alert(`Account is: ${account}`)
    //             // ConnectContract();
    //         }
    //         get();
    //     }

    //     // const ConnectContract = async () => {

    //     //     // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
    //     //     get();
    //     //     console.log(contract);
    //     // }
    //     ConnectMetamask();
    // }, []);

    // const sender = async () => {
    //     const e1 = document.getElementById("os").value;
    //     const e2 = document.getElementById("app").value;
    //     const e3 = document.getElementById("ver").value;
    //     const e4 = document.getElementById("file").value;
    //     const e5 = document.getElementById("dis").value;
    //     await window.contract.methods.registered(e1, e2, e3, e4, e5).send({ from: account });
    //     // get();
    //     // window.location.reload();

    // }

    const contract1 = Web3Contract1();
    // const [contract, setContract] = useState();
    // setContract(contract1[0]);
    const contract = contract1[1];
    const account = contract1[0];
    useEffect(() => {
        try {
            get();
            // console.log("hgfhgbv")
        }
        catch (error) {
            console.log(error);
            // console.log("hgfhgbv")
        }
    }, [contract]);


    const get = async () => {
        // window.reload();
        console.log(contract);
        const data = await contract.methods.show().call();
        contract.methods.show().call().then((result) => {
            console.log(result);
            const tbody = document.getElementById("tbody");
            for (let i = 0; i < result.length; i++) {
                if (result[i].deploymentstatus == "Deployed") {
                    const row = document.createElement("tr");
                    const cell1 = document.createElement("td");
                    cell1.innerHTML = i + 1;
                    const cell2 = document.createElement("td");
                    cell2.innerHTML = result[i][0];
                    const cell3 = document.createElement("td");
                    cell3.innerHTML = result[i][1];
                    const cell4 = document.createElement("td");
                    cell4.innerHTML = result[i][2];

                    const cell5 = document.createElement("td");
                    cell5.innerHTML = result[i][3];
                    const cell6 = document.createElement("td");
                    // cell6.innerHTML = result[i][4];
                    const cell8 = document.createElement("td");
                    cell8.innerHTML = result[i][5];
                    // const cell7 = document.createElement("td");
                    // const btn = document.createElement("button");
                    // // const btn2 = document.createElement("button");
                    // btn.textContent = "Download";
                    // // btn2.textContent = "Reject";
                    // cell7.appendChild(btn);
                    // // cell7.appendChild(btn2);
                    // btn.classList.add("btn", "btn-dark")
                    // btn2.classList.add("btn", "btn-dark")
                    const cell7 = document.createElement("td");
                    const btn1 = document.createElement("button");
                    btn1.textContent = "download";
                    btn1.classList.add("btn", "btn-dark");
                    btn1.addEventListener("click", function () {
                        const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(result[i][4]))], { type: 'application/octet-stream' });
                        const fileUrl = URL.createObjectURL(fileBlob);
                        const downloadLink = document.createElement('a');
                        downloadLink.href = fileUrl;
                        downloadLink.download = 'file.pdf';
                        // downloadLink.download = 'file';
                        downloadLink.click();
                    })
                    cell7.appendChild(btn1);



                    // btn.addEventListener("click", function () {
                    //     window.contract.methods.findandreply(result[i][0]).send({ from: account });

                    // })
                    // btn2.addEventListener("click", function () {
                    //     window.contract.methods.findandreplynotverified(result[i][0]).send({ from: account });
                    // })


                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    row.appendChild(cell3);
                    row.appendChild(cell4);
                    row.appendChild(cell5);
                    row.appendChild(cell8);
                    row.appendChild(cell6);
                    row.appendChild(cell7);
                    tbody.appendChild(row);

                    $(function () {
                        $('#table1').DataTable();
                    });
                }
            }
        })
        // window.location.reload();
    }



    return (
        <>
            {/* <div>
                <button class="btn btn-outline-primary" onclick="change()">
                    change account
                </button>
            </div> */}
            {/* <div>
                <button class="btn btn-outline-dark" onClick={Change}>
                    <h5 style={{ color: "green" }}>Change Account</h5>
                </button>
            </div> */}
            <br />
            <div className="container">
                <table id="table1" className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Patch Name</th>
                            <th scope="col">Operation System</th>
                            <th scope="col">Application</th>
                            <th scope="col">Version</th>
                            <th scope="col">Descripition</th>
                            <th scope="col">file</th>
                            <th scope="col">download</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="container" id="project">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Trending Patch</h5>
                                <p className="card-text">This is the patch that has been download by most of the users recently.</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recent viewed Patch</h5>
                                <p className="card-text">This is the patch,you have viewed recently.</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Most Recomended</h5>
                                <p className="card-text">This is most Recomended Patch by your software provider.</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Report a Bug</h5>
                                <p className="card-text">Found any Bug in the system report here.</p>
                                <a href="report_a_bug.html" className="btn btn-primary">Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="container">
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div
                            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em">
                                {/* <use xlink: href="#collection"></use> */}
                            </svg>
                        </div>
                        <h3 class="fs-2">Know My address</h3>
                        <p>to Know your current address on which your transaction is going on, click the below button.</p>
                        <button type="submit" class="btn btn-dark" id="getaddress()" onclick="getadd()">
                            get address
                        </button>
                        <span id="index"></span>

                    </div>
                    <div class="feature col">
                        <div
                            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em">
                                {/* <use xlink: href="#people-circle"></use> */}
                            </svg>
                        </div>
                        <h3 class="fs-2">Our Support</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.</p>
                        <button class="btn btn-dark">
                            Get Help
                        </button>
                    </div>
                    <div class="feature col">
                        <div
                            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em">
                                {/* <use xlink: href="#toggles2"></use> */}
                            </svg>
                        </div>
                        <h3 class="fs-2">Join Us</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.</p>
                        <button class="btn btn-dark">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;





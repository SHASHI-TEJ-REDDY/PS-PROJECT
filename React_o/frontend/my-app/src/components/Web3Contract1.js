// // // // import React from "react";
// // // import React, { useEffect, useEffect } from "react";

// // // const Contract = () => {

// // //         const provider = await detectEthereumProvider();
// // //         if (provider) {
// // //             await provider.request({
// // //                 method: 'wallet_requestPermissions',
// // //                 params: [{ eth_accounts: {} }],
// // //             });
// // //         }



// // //     let account;
// // //     let { ethereum } = ;
// // //     const web3 = new Web3(.ethereum);
// // //     const ABI = [
// // //         {
// // //             "inputs": [
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_patchname",
// // //                     "type": "string"
// // //                 }
// // //             ],
// // //             "name": "Deployed",
// // //             "outputs": [],
// // //             "stateMutability": "nonpayable",
// // //             "type": "function"
// // //         },
// // //         {
// // //             "inputs": [
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_patchname",
// // //                     "type": "string"
// // //                 }
// // //             ],
// // //             "name": "findandreply",
// // //             "outputs": [],
// // //             "stateMutability": "nonpayable",
// // //             "type": "function"
// // //         },
// // //         {
// // //             "inputs": [
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_patchname",
// // //                     "type": "string"
// // //                 }
// // //             ],
// // //             "name": "findandreplynotverified",
// // //             "outputs": [],
// // //             "stateMutability": "nonpayable",
// // //             "type": "function"
// // //         },
// // //         {
// // //             "inputs": [
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_patchname",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_os",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_app",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_version",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "bytes",
// // //                     "name": "_file",
// // //                     "type": "bytes"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "_dis",
// // //                     "type": "string"
// // //                 }
// // //             ],
// // //             "name": "registered",
// // //             "outputs": [],
// // //             "stateMutability": "nonpayable",
// // //             "type": "function"
// // //         },
// // //         {
// // //             "inputs": [
// // //                 {
// // //                     "internalType": "uint256",
// // //                     "name": "",
// // //                     "type": "uint256"
// // //                 }
// // //             ],
// // //             "name": "data",
// // //             "outputs": [
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "patchname",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "os",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "app",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "version",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "bytes",
// // //                     "name": "file",
// // //                     "type": "bytes"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "dis",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "verificationstatus",
// // //                     "type": "string"
// // //                 },
// // //                 {
// // //                     "internalType": "string",
// // //                     "name": "deploymentstatus",
// // //                     "type": "string"
// // //                 }
// // //             ],
// // //             "stateMutability": "view",
// // //             "type": "function"
// // //         },
// // //         {
// // //             "inputs": [],
// // //             "name": "show",
// // //             "outputs": [
// // //                 {
// // //                     "components": [
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "patchname",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "os",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "app",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "version",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "bytes",
// // //                             "name": "file",
// // //                             "type": "bytes"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "dis",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "verificationstatus",
// // //                             "type": "string"
// // //                         },
// // //                         {
// // //                             "internalType": "string",
// // //                             "name": "deploymentstatus",
// // //                             "type": "string"
// // //                         }
// // //                     ],
// // //                     "internalType": "struct register.registerpage[]",
// // //                     "name": "",
// // //                     "type": "tuple[]"
// // //                 }
// // //             ],
// // //             "stateMutability": "view",
// // //             "type": "function"
// // //         }
// // //     ];
// // //     const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
// // //     let contract = new web3.eth.Contract(ABI, Address);
// // //     useEffect(() => {
// // //         const ConnectMetamask = async () => {
// // //             if (.ethereum !== "undefined") {
// // //                 const accounts = await ethereum.request({ method: "eth_requestAccounts" });
// // //                 account = accounts[0];
// // //                 // alert(`Account is: ${account}`)
// // //                 // ConnectContract();
// // //             }
// // //             // get();
// // //         }

// // //         // const ConnectContract = async () => {

// // //         //     // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
// // //         //     get();
// // //         //     console.log(contract);
// // //         // }
// // //         ConnectMetamask();
// // //     }, []);


// // // }



// // // export deafult  Contract;





// // import React, { useState, useEffect } from 'react'
// // import Web3 from "web3";


// // const Contract = () => {
// //     const { ethereum } = ;
// //     const [contract, setContract] = useState(null);
// //     const [account, setAccount] = useState(null);
// //     useEffect(() => {
// //         const ConnectMetamask = async () => {
// //             if (.ethereum !== "undefined") {
// //                 const accounts = await ethereum.request({
// //                     method: "eth_requestAccounts",
// //                 });
// //                 setAccount(accounts[0]);

// //                 const ABI = [
// //                     {
// //                         "inputs": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_patchname",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "name": "Deployed",
// //                         "outputs": [],
// //                         "stateMutability": "nonpayable",
// //                         "type": "function"
// //                     },
// //                     {
// //                         "inputs": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_patchname",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "name": "findandreply",
// //                         "outputs": [],
// //                         "stateMutability": "nonpayable",
// //                         "type": "function"
// //                     },
// //                     {
// //                         "inputs": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_patchname",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "name": "findandreplynotverified",
// //                         "outputs": [],
// //                         "stateMutability": "nonpayable",
// //                         "type": "function"
// //                     },
// //                     {
// //                         "inputs": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_patchname",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_os",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_app",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_version",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "bytes",
// //                                 "name": "_file",
// //                                 "type": "bytes"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "_dis",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "name": "registered",
// //                         "outputs": [],
// //                         "stateMutability": "nonpayable",
// //                         "type": "function"
// //                     },
// //                     {
// //                         "inputs": [
// //                             {
// //                                 "internalType": "uint256",
// //                                 "name": "",
// //                                 "type": "uint256"
// //                             }
// //                         ],
// //                         "name": "data",
// //                         "outputs": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "patchname",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "os",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "app",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "version",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "bytes",
// //                                 "name": "file",
// //                                 "type": "bytes"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "dis",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "verificationstatus",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "deploymentstatus",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "stateMutability": "view",
// //                         "type": "function"
// //                     },
// //                     {
// //                         "inputs": [],
// //                         "name": "show",
// //                         "outputs": [
// //                             {
// //                                 "components": [
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "patchname",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "os",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "app",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "version",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "bytes",
// //                                         "name": "file",
// //                                         "type": "bytes"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "dis",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "verificationstatus",
// //                                         "type": "string"
// //                                     },
// //                                     {
// //                                         "internalType": "string",
// //                                         "name": "deploymentstatus",
// //                                         "type": "string"
// //                                     }
// //                                 ],
// //                                 "internalType": "struct register.registerpage[]",
// //                                 "name": "",
// //                                 "type": "tuple[]"
// //                             }
// //                         ],
// //                         "stateMutability": "view",
// //                         "type": "function"
// //                     }
// //                 ];
// //                 const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
// //                 .web3 = new Web3(.ethereum);
// //                 .contract = await new .web3.eth.Contract(ABI, Address);
// //                 setContract(.contract);
// //             };
// //             ConnectMetamask();
// //         }, []);
// //     return [account, contract];
// // }
// // export default Contract;


// // import React, { useState, useEffect } from 'react'
// // import Web3 from "web3";
// // const web3 = new Web3(.ethereum);
// // useEffect(() => {
// //     let account;
// //     let { ethereum } = ;
// //     const ConnectMetamask = async () => {
// //         if (.ethereum !== "undefined") {
// //             const accounts = await ethereum.request({ method: "eth_requestAccounts" });
// //             account = accounts[0];
// //         }

// //     const [contract, setContract] = useState(null);
// //     const [account, setAccount] = useState(null);
// //         const ABI = [
// //             {
// //                 "inputs": [
// //                     {
// //                         "internalType": "string",
// //                         "name": "_patchname",
// //                         "type": "string"
// //                     }
// //                 ],
// //                 "name": "Deployed",
// //                 "outputs": [],
// //                 "stateMutability": "nonpayable",
// //                 "type": "function"
// //             },
// //             {
// //                 "inputs": [
// //                     {
// //                         "internalType": "string",
// //                         "name": "_patchname",
// //                         "type": "string"
// //                     }
// //                 ],
// //                 "name": "findandreply",
// //                 "outputs": [],
// //                 "stateMutability": "nonpayable",
// //                 "type": "function"
// //             },
// //             {
// //                 "inputs": [
// //                     {
// //                         "internalType": "string",
// //                         "name": "_patchname",
// //                         "type": "string"
// //                     }
// //                 ],
// //                 "name": "findandreplynotverified",
// //                 "outputs": [],
// //                 "stateMutability": "nonpayable",
// //                 "type": "function"
// //             },
// //             {
// //                 "inputs": [
// //                     {
// //                         "internalType": "string",
// //                         "name": "_patchname",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "_os",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "_app",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "_version",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "bytes",
// //                         "name": "_file",
// //                         "type": "bytes"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "_dis",
// //                         "type": "string"
// //                     }
// //                 ],
// //                 "name": "registered",
// //                 "outputs": [],
// //                 "stateMutability": "nonpayable",
// //                 "type": "function"
// //             },
// //             {
// //                 "inputs": [
// //                     {
// //                         "internalType": "uint256",
// //                         "name": "",
// //                         "type": "uint256"
// //                     }
// //                 ],
// //                 "name": "data",
// //                 "outputs": [
// //                     {
// //                         "internalType": "string",
// //                         "name": "patchname",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "os",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "app",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "version",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "bytes",
// //                         "name": "file",
// //                         "type": "bytes"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "dis",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "verificationstatus",
// //                         "type": "string"
// //                     },
// //                     {
// //                         "internalType": "string",
// //                         "name": "deploymentstatus",
// //                         "type": "string"
// //                     }
// //                 ],
// //                 "stateMutability": "view",
// //                 "type": "function"
// //             },
// //             {
// //                 "inputs": [],
// //                 "name": "show",
// //                 "outputs": [
// //                     {
// //                         "components": [
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "patchname",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "os",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "app",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "version",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "bytes",
// //                                 "name": "file",
// //                                 "type": "bytes"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "dis",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "verificationstatus",
// //                                 "type": "string"
// //                             },
// //                             {
// //                                 "internalType": "string",
// //                                 "name": "deploymentstatus",
// //                                 "type": "string"
// //                             }
// //                         ],
// //                         "internalType": "struct register.registerpage[]",
// //                         "name": "",
// //                         "type": "tuple[]"
// //                     }
// //                 ],
// //                 "stateMutability": "view",
// //                 "type": "function"
// //             }
// //         ];
// //         const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
// //         let contract1 = new web3.eth.Contract(ABI, Address);
// //         setContract(contract1)
// //     }

// //     ConnectMetamask();
// // }, []);
// import React, { useEffect, useState } from "react";
// import Web3 from "web3";
// const Con = () => {

//     const { ethereum } = ;
//     const [contract, setContract] = useState(null);
//     const [account, setAccount] = useState(null);
//     useEffect(() => {
//         const connectMetamask = async () => {
//             if (.ethereum !== "undefined") {
//                 const accounts = await ethereum.request({
//                     method: "eth_requestAccounts",
//                 });
//                 setAccount(accounts[0]);
//                 console.log(account + "avhgv")
//             }
//             const ABI = [
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "Deployed",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "findandreply",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "findandreplynotverified",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_os",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_app",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_version",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "bytes",
//                             "name": "_file",
//                             "type": "bytes"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_dis",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "registered",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "data",
//                     "outputs": [
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
//                     "stateMutability": "view",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [],
//                     "name": "show",
//                     "outputs": [
//                         {
//                             "components": [
//                                 {
//                                     "internalType": "string",
//                                     "name": "patchname",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "os",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "app",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "version",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "bytes",
//                                     "name": "file",
//                                     "type": "bytes"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "dis",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "verificationstatus",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "deploymentstatus",
//                                     "type": "string"
//                                 }
//                             ],
//                             "internalType": "struct register.registerpage[]",
//                             "name": "",
//                             "type": "tuple[]"
//                         }
//                     ],
//                     "stateMutability": "view",
//                     "type": "function"
//                 }
//             ];
//             const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
//             .web3 = new Web3(.ethereum);
//             .contract = new .web3.eth.Contract(ABI, Address);
//             setContract(.contract);
//             console.log(contract + "\nvghc")
//         };
//         connectMetamask();
//     }, []);
//     return [account, contract];
// }
// export default Con;





// import React, { useState, useEffect } from 'react'
// import Web3 from "web3";


// const Web3Contract1 = () => {
//     const { ethereum } = window;
//     const [contract, setContract] = useState(null);
//     const [account, setAccount] = useState(null);
//     useEffect(() => {
//         const ConnectMetamask = async () => {
//             if (ethereum !== "undefined") {
//                 const accounts = await ethereum.request({
//                     method: "eth_requestAccounts",
//                 });
//                 setAccount(accounts[0]);
//             }
//             const ABI = [
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "Deployed",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "findandreply",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "findandreplynotverified",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "string",
//                             "name": "_patchname",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_os",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_app",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_version",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "bytes",
//                             "name": "_file",
//                             "type": "bytes"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "_dis",
//                             "type": "string"
//                         }
//                     ],
//                     "name": "registered",
//                     "outputs": [],
//                     "stateMutability": "nonpayable",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [
//                         {
//                             "internalType": "uint256",
//                             "name": "",
//                             "type": "uint256"
//                         }
//                     ],
//                     "name": "data",
//                     "outputs": [
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
//                     "stateMutability": "view",
//                     "type": "function"
//                 },
//                 {
//                     "inputs": [],
//                     "name": "show",
//                     "outputs": [
//                         {
//                             "components": [
//                                 {
//                                     "internalType": "string",
//                                     "name": "patchname",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "os",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "app",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "version",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "bytes",
//                                     "name": "file",
//                                     "type": "bytes"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "dis",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "verificationstatus",
//                                     "type": "string"
//                                 },
//                                 {
//                                     "internalType": "string",
//                                     "name": "deploymentstatus",
//                                     "type": "string"
//                                 }
//                             ],
//                             "internalType": "struct register.registerpage[]",
//                             "name": "",
//                             "type": "tuple[]"
//                         }
//                     ],
//                     "stateMutability": "view",
//                     "type": "function"
//                 }
//             ];
//             const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
//             const web3 = new Web3(ethereum);
//             const contract = new web3.eth.Contract(ABI, Address);

//             setContract(contract);
//         };
//         ConnectMetamask();
//     }, []);
//     // console.log("abvanbavn")
//     console.log(contract);
//     // console.log("jhajhavnb")
//     return [account, contract];
// }
// export default Web3Contract1;





import React, { useState, useEffect } from 'react'
import Web3 from "web3";


const Web3Contract2 = () => {
    const { ethereum } = window;
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    useEffect(() => {
        const connectMetamask = async () => {
            if (window.ethereum !== "undefined") {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]);
            }
            const ABI = [
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_patchname",
                            "type": "string"
                        }
                    ],
                    "name": "Deployed",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_patchname",
                            "type": "string"
                        }
                    ],
                    "name": "findandreply",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_patchname",
                            "type": "string"
                        }
                    ],
                    "name": "findandreplynotverified",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_patchname",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_os",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_app",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_version",
                            "type": "string"
                        },
                        {
                            "internalType": "bytes",
                            "name": "_file",
                            "type": "bytes"
                        },
                        {
                            "internalType": "string",
                            "name": "_dis",
                            "type": "string"
                        }
                    ],
                    "name": "registered",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "data",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "patchname",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "os",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "app",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "version",
                            "type": "string"
                        },
                        {
                            "internalType": "bytes",
                            "name": "file",
                            "type": "bytes"
                        },
                        {
                            "internalType": "string",
                            "name": "dis",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "verificationstatus",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "deploymentstatus",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "show",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "patchname",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "os",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "app",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "version",
                                    "type": "string"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "file",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "string",
                                    "name": "dis",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "verificationstatus",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "deploymentstatus",
                                    "type": "string"
                                }
                            ],
                            "internalType": "struct register.registerpage[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
            const Address = "0xE755d5690Fd264A1CE43ED560E11A0Bbe40ee7be";
            window.web3 = new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            setContract(window.contract);
        };
        connectMetamask();
    }, []);
    return [account, contract];
}
export default Web3Contract2;
import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Web3 from 'web3';
import AdminContext from './createcontext';
export default function Adminhome() {
    let account;
    let { ethereum } = window;
    const web3 = new Web3(window.ethereum);
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
    let contract = new web3.eth.Contract(ABI, Address);
    useEffect(() => {
        const ConnectMetamask = async () => {
            if (window.ethereum !== "undefined") {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                account = accounts[0];
                // alert(`Account is: ${account}`)
                // ConnectContract();
            }
            get();
        }

        // const ConnectContract = async () => {

        //     // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
        //     get();
        //     console.log(contract);
        // }
        ConnectMetamask();
    }, []);

}



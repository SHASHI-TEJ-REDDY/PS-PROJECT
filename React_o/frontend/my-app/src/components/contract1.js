
import React, { useState, useEffect } from 'react'
import Web3 from "web3";


const Web3Contract3 = () => {
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
            // const Address = "0xF420f28D56d8b07b066Aed0d0BE2c2ca13c5582B";
            const ABI = [
                {
                    "inputs": [
                        {
                            "internalType": "string[]",
                            "name": "_discription",
                            "type": "string[]"
                        }
                    ],
                    "name": "adminselect",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string[]",
                            "name": "_discription",
                            "type": "string[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "_lablestatus",
                            "type": "uint256[]"
                        }
                    ],
                    "name": "labler",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
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
                            "name": "_ver",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_dis",
                            "type": "string"
                        }
                    ],
                    "name": "submit",
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
                    "name": "AllArray",
                    "outputs": [
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
                            "name": "ver",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dis",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lablestatus",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "selectionstatus",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
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
                    "name": "AllArray1",
                    "outputs": [
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
                            "name": "ver",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dis",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lablestatus",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "selectionstatus",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "verify",
                    "outputs": [
                        {
                            "components": [
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
                                    "name": "ver",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "dis",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lablestatus",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "selectionstatus",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct report.reportpage[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
            const Address = "0xc1D5c5Bdbc9ebDbbDF5f8c00421361140fDc4daD";
            window.web3 = new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            setContract(window.contract);
        };
        connectMetamask();
    }, []);
    return [account, contract];
}
export default Web3Contract3;
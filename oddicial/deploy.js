function verify() {
    window.open("verify.html");
}
function deploy() {
    window.open("depoly.html", "_self");
}
function support() {
    window.open("support.html");
}
function deployy() {
    window.open("depoly.html", "_self");
}
function report() {
    window.open("report_a_bug.html");
}
function Labeler() {
    window.open("labeler.html");
}
function admin() {
    window.open("admin.html", "_self");
}
function register() {
    window.open("user.html");
}
function verify() {
    window.open("verify.html");
}



let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        // document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
        // alert(`Account is: ${account}`)
    }

}

const connectContract = async () => {
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
            "inputs": [],
            "name": "app",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
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
            "name": "dis",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "file",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
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
            "inputs": [],
            "name": "os",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
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
        },
        {
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const Address = "0x7304bCB9c3ba84CE08d58e110Ab2e94d26e3028E";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
    get();
}
const sender = async () => {
    const e1 = document.getElementById("os").value;
    const e2 = document.getElementById("app").value;
    const e3 = document.getElementById("ver").value;
    const e4 = document.getElementById("file").value;
    const e5 = document.getElementById("dis").value;
    await window.contract.methods.registered(e1, e2, e3, e4, e5).send({ from: account });
    // get();
    window.location.reload();

}

const get = async () => {
    // window.reload();
    const data = await window.contract.methods.show().call();
    window.contract.methods.show().call().then((result) => {
        console.log(result);
        const tbody = document.getElementById("tbody");
        for (let i = 0; i < result.length; i++) {

            if (result[i].verificationstatus != "Rejected") {
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
            cell6.innerHTML = result[i][4];
            const cell8 = document.createElement("td");
            cell8.innerHTML = result[i][5];
            const cell7 = document.createElement("td");
            const btn = document.createElement("button");
            const btn2 = document.createElement("button");
            btn.textContent = "deploy";
            // btn2.textContent = "Reject";
            cell7.appendChild(btn);
            // cell7.appendChild(btn2);
            btn.classList.add("btn", "btn-dark")
            btn2.classList.add("btn", "btn-dark")



            btn.addEventListener("click", function () {
                window.contract.methods.Deployed(result[i][0]).send({ from: account });

            })
            // btn2.addEventListener("click", function () {
            //     window.contract.methods.findandreplynotverified(result[i][0]).send({ from: account });
            // })


            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell8);
            // row.appendChild(cell6);
            row.appendChild(cell7);
            tbody.appendChild(row);

            $(function () {
                $('#table4').DataTable();
            });
        }
        }
    })
    // window.location.reload();
}

function support() {
    window.open("support.html");
}

// function reportanother() {
//     window.open("report_a_bug.html");
// }
function report() {
    window.open("report_a_bug.html", "_self");
}
function Labeler() {
    window.open("labeler.html");
}
function admin() {
    window.open("admin.html");
}
function register() {
    window.open("user.html");
}
function verify() {
    window.open("verify.html");
}

// $(function () {
//     $('#Mytable').DataTable();
// });


// var date = new Date();

//         var day = date.getDate();
//         var month = date.getMonth() + 1;
//         var year = date.getFullYear();

//         if (month < 10) month = "0" + month;
//         if (day < 10) day = "0" + day;

//         var today = year + "-" + month + "-" + day;


//         document.getElementById('Date').value = today;



async function change1() {
    const provider = await detectEthereumProvider();
    if (provider) {
        await provider.request({
            method: 'wallet_requestPermissions',
            params: [{ eth_accounts: {} }],
        });
    }
}

let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        // alert(`Account is: ${account}`)
    }

}

const connectContract = async () => {
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

    const Address = "0xa237489D718B5098F83a26F115cDBf9880BbeF7a";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    // alert("connected") getter();
    getter();
}

const sender = async () => {
    const e1 = document.getElementById("os").value;
    const e2 = document.getElementById("app").value;
    const e3 = document.getElementById("ver").value;
    const e4 = document.getElementById("dis").value;
    await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
    window.reload();
    // const data = await contract.methods.submit().call();
    // const data = await contract.methods.enter().call();
    // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;
}

const getter = async () => {
    // window.reload();
    const data = await window.contract.methods.verify().call();
    window.contract.methods.verify().call().then((result) => {
        console.log(result);
        const tbody = document.getElementById("tbody");
        for (let i = 0; i < result.length; i++) {

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



            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            tbody.appendChild(row);

            $(function () {
                $('#table1').DataTable();
            });

        }
    })
    window.reload();
}
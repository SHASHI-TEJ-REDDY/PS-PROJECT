function support() {
    window.open("support.html");
}
function Labeler() {
    window.open("labeler.html", "_self");
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
function labelsub() {
    // console.log(document.getElementById("des1").i)
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < reslen; i++) {
        arr.push(document.getElementById("des" + `${(i + 1)}`).innerHTML);
    }
    for (let j = 0; j < reslen; j++) {
        arr2.push(document.getElementById("select" + `${(j + 1)}`).value);
    }
    console.log(arr, arr2)
    window.contract.methods.labler(arr, arr2).send({ from: account });

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

    const Address = "0xBb803D744dEe9De0dF21146456753b7465670f25";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    // alert("connected") getter();
    getter();
}

const sender = async (label, dis) => {
    const e1 = document.getElementById("app").value;
    const e2 = document.getElementById("dis").value;
    // const e3 = document.getElementById("ver").value;
    // const e4 = document.getElementById("dat").value;
    await window.contract.methods.submit(e1, e2, e3, e4).send({ from: account });
    window.reload();
    // const data = await contract.methods.submit().call();
    // const data = await contract.methods.enter().call();
    // document.getElementById("report_a_bug").innerHTML = `Your reported bug was Was: ${data}`;
}
let reslen;
const getter = async () => {
    // window.reload();
    const data = await window.contract.methods.verify().call();
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
    })
    // window.reload();
}

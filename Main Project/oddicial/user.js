function openlogin() {
    window.open("Register_patch.html", "_self");
}
function support() {
    window.open("support.html");
}
function verify() {
    window.open("verify.html");
}
function check() {
    window.open("check_bug.html");
}
function report() {
    window.open("report_a_bug.html");
}
function Labeler() {
    window.open("labeler.html");
}
function admin() {
    window.open("admin.html");
}
function register() {
    window.open("user.html", "_self");
}

async function change() {
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
        // document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
        // alert(`Account is: ${account}`)
    }

}

const connectContract1 = async () => {
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
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
    get();

    const ABI2 = [
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

    const Address2 = "0xa237489D718B5098F83a26F115cDBf9880BbeF7a";
    window.web3 = await new Web3(window.ethereum);
    window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
    getter();
}


const sender = async () => {
    let fileinput = document.getElementById("file");
    const file = fileinput.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async () => {
        const fileData = new Uint8Array(reader.result);
        let account = (await web3.eth.getAccounts())[0];
        console.log(fileData);

        const patchname = document.getElementById("patchname").value;
        const e1 = document.getElementById("os").value;
        const e2 = document.getElementById("app").value;
        const e3 = document.getElementById("ver").value;
        // const e4 = document.getElementById("file").value;
        const e5 = document.getElementById("dis").value;
        await window.contract.methods.registered(patchname, e1, e2, e3, fileData, e5).send({ from: account });
    }
    // window.reload();


}

const get = async () => {
    // window.reload();
    const data = await window.contract.methods.show().call();
    window.contract.methods.show().call().then((result) => {
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
            // const cell6 = document.createElement("td");
            // cell6.innerHTML = result[i][4];

            const cell6 = document.createElement("td");
            const btn1 = document.createElement("button");
            btn1.textContent = "download";
            btn1.classList.add("btn", "btn-dark");
            btn1.addEventListener("click", function () {
                const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(result[i][4]))], { type: 'application/octet-stream' });
                const fileUrl = URL.createObjectURL(fileBlob);
                const downloadLink = document.createElement('a');
                downloadLink.href = fileUrl;
                downloadLink.download = 'file.txt';
                downloadLink.click();
                // const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(result[i][4]))], { type: 'application/octet-stream' });
                // const fileUrl = URL.createObjectURL(fileBlob);
                // const downloadLink = document.createElement('a');
                // downloadLink.href = fileUrl;
                // downloadLink.download = 'file.txt';
                // downloadLink.click();
            })
            cell6.appendChild(btn1);
            const cell7 = document.createElement("td");
            cell7.innerHTML = result[i][5];



            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell7);
            row.appendChild(cell6);
            // row.appendChild(cell8);
            // row.appendChild(cell9);
            tbody.appendChild(row);

            $(function () {
                $('#table3').DataTable();
            });
        }
    })
    window.reload();
}

// const getter = async () => {
//     // window.reload();
//     // const data = await window.contract.methods.verify().call();
//     // document.getElementById("submit").innerHTML = `your reported application was: ${data}`;

//     //  await window.contract.methods.getDetails().send({from:account})


//     window.contract2.methods.verify().call().then((result) => {
//         reslen = result.length;
//         console.log(result);
//         const tbody = document.getElementById("tbody1");
//         for (let i = 0; i < result.length; i++) {

//             const row = document.createElement("tr");
//             const cell1 = document.createElement("td");
//             cell1.innerHTML = i + 1;
//             const cell2 = document.createElement("td");
//             cell2.innerHTML = result[i][0];
//             const cell3 = document.createElement("td");
//             cell3.innerHTML = result[i][1];
//             // console.log(document.getElementById(cell3.id).innerHTML);
//             console.log(cell3.innerHTML);
//             const cell4 = document.createElement("td");
//             cell4.innerHTML = result[i][3];
//             cell4.id = "des" + `${(i + 1)}`;

//             const cell5 = document.createElement("td");
//             cell5.innerHTML = result[i][2];


//             // const table = document.getElementById("table12");
//             // const select = document.createElement("select");
//             // const cell10 = document.createElement("td");
//             // select.classList.add("form-select");
//             // for (let i = 1; i <= 5; i++) {
//             //     const option = document.createElement("option");
//             //     option.value = i;
//             //     // option.innerHTML = i;
//             //     option.textContent = i;
//             //     select.appendChild(option);
//             // }
//             // select.id = "select" + (i + 1)
//             // cell10.appendChild(select);



//             row.appendChild(cell1);
//             row.appendChild(cell2);
//             row.appendChild(cell3);
//             row.appendChild(cell5);
//             row.appendChild(cell4);
//             // row.appendChild(cell10);
//             tbody.appendChild(row);

//             $(function () {
//                 $('#table12').DataTable();
//             });

//         }
//     })
//     // window.reload();
// }

const getdata = async () => {

    window.contract2.methods.verify().call().then((result) => {
        const diver = document.getElementById("hero");

        const table = document.createElement("table");
        table.classList.add("table", "table-striped", "table-hover");

        const head = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const body = document.createElement("tbody");

        const headerCell1 = document.createElement("th");
        headerCell1.textContent = "Sno";

        const headerCell2 = document.createElement("th");
        headerCell2.textContent = "Operating system";
        // headerCell2.textContent = "Column 2";

        const headerCell3 = document.createElement("th");
        headerCell3.textContent = "Application";
        const headerCell4 = document.createElement("th");
        headerCell4.textContent = "Version";
        const headerCell5 = document.createElement("th");
        headerCell5.textContent = "Discription";
        const headerCell6 = document.createElement("th");
        headerCell6.textContent = "Priority";

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        headerRow.appendChild(headerCell3);
        headerRow.appendChild(headerCell4);
        headerRow.appendChild(headerCell5);
        headerRow.appendChild(headerCell6);
        head.appendChild(headerRow);

        table.appendChild(head);

        table.setAttribute("id", "Mytable");

        // const names = ["Alice", "Bob", "Charlie", "Dave", "Emily"];

        for (let i = 0; i < result.length; i++) {
            const row = document.createElement("tr");

            const cell1 = document.createElement("td");
            // cell1.textContent = names[i];
            cell1.innerHTML = i + 1;

            const cell2 = document.createElement("td");
            // cell2.textContent = Math.floor(Math.random() * 10) + 1;
            cell2.innerHTML = result[i][0];

            const cell3 = document.createElement("td");
            cell3.innerHTML = result[i][1];

            const cell4 = document.createElement("td");
            cell4.innerHTML = result[i][2];
            const cell5 = document.createElement("td");
            cell5.innerHTML = result[i][3];
            const cell6 = document.createElement("td");
            cell6.innerHTML = result[i][4];

            //         const select = document.createElement("select");
            //         select.classList.add("form-select");
            //         select.innerHTML = `
            //     <option value="0">0</option>
            //     <option value="1">1</option>
            //     <option value="2">2</option>
            //     <option value="3">3</option>
            //     <option value="4">4</option>
            //     <option value="5">5</option>
            //   `;
            //         const cell3 = document.createElement("td");
            //         cell3.appendChild(select);

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            body.appendChild(row);
        }

        table.appendChild(body);

        const submitButton = document.createElement("button");
        submitButton.classList.add("btn", "btn-primary");
        submitButton.textContent = "Update this patch";
        submitButton.onclick = () => {
            // const selectedName = table.querySelector("tr.selected td:first-child").textConte/nt;
            const selectedName = table.querySelector("tr.selected td:first-child").innerHTML;
            const selectedName1 = table.querySelector("tr.selected td:nth-child(2)").innerHTML;
            const selectedName2 = table.querySelector("tr.selected td:nth-child(3)").innerHTML;
            const selectedName3 = table.querySelector("tr.selected td:nth-child(4)").innerHTML;
            const selectedName4 = table.querySelector("tr.selected td:nth-child(5)").innerHTML;
            // const selectedValue = table.querySelector("tr.selected select").value;
            // alert(`name: ${selectedName} ${selectedName1} and selected value: singa reddy s`);
            const OSselect = document.getElementById("os");
            OSselect.value = selectedName1;

            const appselect = document.getElementById("app").value = selectedName2;
            const verselect = document.getElementById("ver").value = selectedName3;
            const disselect = document.getElementById("dis").value = "fixed" + " " + selectedName4;
        };
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.setAttribute("colspan", 3);
        cell.classList.add("text-center");
        cell.appendChild(submitButton);
        row.appendChild(cell);
        body.appendChild(row);

        diver.appendChild(table);

        $(function () {
            $("#Mytable").DataTable();
        });

        table.querySelectorAll("tbody tr").forEach((row) => {
            row.addEventListener("click", () => {
                if (table.querySelector("tr.selected")) {
                    table.querySelector("tr.selected").classList.remove("selected");
                }
                row.classList.add("selected");
            });
        });
    });
}
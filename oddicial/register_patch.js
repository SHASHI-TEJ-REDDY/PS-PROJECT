let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        alert(`Account is: ${account}`)
    }

}

const connectContract = async () => {
    const ABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "c",
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
            "name": "flag",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_un",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_pas",
                    "type": "string"
                }
            ],
            "name": "intput",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "password",
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
            "name": "patch",
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
            "name": "s",
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
            "name": "submit",
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
            "name": "username",
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

    const Address = "0x868990b97Fe9b884D9Ea066bdb278215af011275";
    window.web3 = await new Web3(window.ethereum);
    window.contract1 = await new window.web3.eth.Contract(ABI, Address);
    alert("connected")
}

const iinpput = async () => {
    const e1 = document.getElementById("uusernname").value;
    const e2 = document.getElementById("ppasswword").value;
    await window.contract1.methods.intput(e1, e2).send({ from: account });

    const data = await contract.methods.submit().call();
    // document.getElementById("Register_patch").innerHTML = `Your Patch Was: ${data}`;
    // return data;
    if (data == "1234") {
        window.open("user.html");
    }
    else {
        document.getElementById("Register_patch").innerHTML = 'userId / password wrong';
    }
}
// function windowopen() {
//     if (data == "1234") {
//         window.open("http://127.0.0.1:5501/oddicial/user.html");
//     }
// }

// const vverify = async () => {
//     const data = await window.contract.methods.submit().call();
//     document.getElementById("dataArea").innerHTML = data;
// }

// const ggetppatch = async () => {
//     const data = await contract.methods.submit().call();
//     document.getElementById("Register_patch").innerHTML = `Your Patch Was: ${data}`;
// }
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
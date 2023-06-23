import React, { useState, useEffect } from 'react'
import Web3Contract2 from './Web3Contract1';

const AdminTrackingPatches = () => {
    const Web3 = Web3Contract2();
    const contract2 = Web3[1];
    const address = Web3[0];
    // const web3=Web3[2];
    const [dataArray, setdataArray] = useState([])
    const getdata = () => {
        try {
            contract2.methods.getdetails().call().then((result) => {
                setdataArray(result);
                console.log(result);
            });
        }
        catch (error) {
            console.log(error)
        }
    }
    const setTime = (timestamp) => {
        const milliseconds = timestamp * 1000;
        const dateObject = new Date(milliseconds);
        const formattedTime = dateObject.toLocaleString();
        return formattedTime;
    }
    // const downloadpatch = (fileData) => {
    //     // const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(fileData))], { type: 'application/octet-stream' });
    //     // const fileUrl = URL.createObjectURL(fileBlob);
    //     // const downloadLink = document.createElement('a');
    //     // downloadLink.href = fileUrl;
    //     // downloadLink.download = 'file.txt';
    //     // downloadLink.click();
    // }
    useEffect(() => {
        getdata();
    }, [contract2])
    return (
        <div>
            <br /><br />
            {/* <div className="container">
                <div className="text-center">


                    <table id="table1" className="table table-striped table-borderless table-responsive">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Patch Name</th>
                                <th scope="col">Request No</th>
                                <th scope="col">Patch Platform</th>
                                <th scope="col">Patch Features</th>
                                <th scope="col">Registered Time</th>
                                <th scope="col">Verification Status</th>
                                <th scope="col">Deployment Status</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {dataArray.map((data, dataIndex) => {
                                return (
                                    <>
                                        <tr>

                                            <td>{ }</td>
                                            <td>{data.patchname}</td>
                                            <td> Request No: {data.requestnumber}</td>
                                            
                                            <td>{data.patchplatform}</td>
                                            <td>{data.patchfeatures}</td>
                                            <td>{setTime(data.time)}</td>
                                            <td>{data.verificationstatus}</td>
                                            <td>{data.deploymentstatus}</td>

                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div> */}

            {/* 
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
                        const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(result[i][4]))], {type: 'application/octet-stream' });
            const fileUrl = URL.createObjectURL(fileBlob);
            const downloadLink = document.createElement('a');
            downloadLink.href = fileUrl;
            downloadLink.download = 'file.txt';
            downloadLink.click();
                    })
            cell7.appendChild(btn1);
 */}

            {/* row.appendChild(cell1);
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
            } */}
        </div>
    )
}

// export default AdminTrackingPatches;
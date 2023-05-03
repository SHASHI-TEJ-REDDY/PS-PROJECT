// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract register {
    // string public os;
    // string public app;
    // string public version;
    // // string public file;  
    // bytes public file;
    // string public dis;
    // // string[] public data;

    address developer = 0x87cbE64D8f36e5Baa1934fbCa71e5c0bF52073bF;
    address verify = 0xD3cEB87100755D9A14c643ac285da3c171307651;
    address admin_deploy = 0x3d9BD2726Ae852F0C21FF4c9c81CcAEE7413e08e;
    // address depoly = 0x301Df1bA164B342FE0864A2E5991a83B44CD6c06;
    // address depoly = 0x301Df1bA164B342FE0864A2E5991a83B44CD6c06;


    modifier onlyfordeveloper () {
        require(msg.sender == developer);
        _;
    }

    modifier onlyforverify () {
        require(msg.sender == verify);
        _;
    }

    modifier onlyfordeploy () {
        require(msg.sender == admin_deploy);
        _;
    }


    struct registerpage {
        string patchname;
        string os;
        string app;
        string version;
        // string file;
        bytes file;
        string dis;
        string verificationstatus;
        string deploymentstatus;

    }

    registerpage[] public data;


    function registered(string memory _patchname ,string memory _os,
    string memory _app,
    string memory _version,
    bytes memory _file,
    string memory _dis) public onlyfordeveloper {

        registerpage memory newregister = registerpage(_patchname,_os, _app, _version, _file,_dis,"Not yet sent to verification","Not yet Deployed");
        data.push(newregister);
    }
    function show() public view returns (registerpage[] memory) {
        return data;
    }


    function findandreply(string memory _patchname)  public onlyforverify {
        
            for(uint j=0;j<data.length;j++){
                if(keccak256(abi.encodePacked(_patchname))==keccak256(abi.encodePacked(data[j].patchname)) ){
                 
                        data[j].verificationstatus="Verified";
                      
                    
                }
            }
        
       
    }
    function findandreplynotverified(string memory _patchname) public onlyforverify {
        
        for(uint j=0;j<data.length;j++){
            if(keccak256(abi.encodePacked(_patchname))==keccak256(abi.encodePacked(data[j].patchname)) ){

                data[j].verificationstatus="Rejected";
                
            }
        }
        
        
    }
    function Deployed(string memory _patchname)  public onlyfordeploy {
        
        
        
        for(uint j=0;j<data.length;j++){
            if(keccak256(abi.encodePacked(_patchname))==keccak256(abi.encodePacked(data[j].patchname)) ){
            // check=true;
            data[j].deploymentstatus="Deployed";
            }
        }


        
    
       
    }
}
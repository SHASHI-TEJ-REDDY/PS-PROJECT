// SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.8.2 <0.9.0;
pragma solidity ^0.8.19;

contract register{
    string public username;
    string public password;
    string public s;
    string public patch;
    bool public flag;
    string public c;

    constructor(){
        username = username;
        password = password;
    }

    function intput(string memory _un, string memory _pas) public{
        username = _un;
        password = _pas;
        patch = "Your Patch ID was : 1234";
        flag = true;
        c = "Your Patch Id Was: ";
    }
    // function submit() external pure returns(bool){
    //     if (_un == "shashi")
    //     {
    //         return true;
    //     }
    //     return s;
    // }
    // function print() public view returns(string memory){
    //     return patch;
    // }

    function submit() public view returns(string memory){
        if (keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked("shashi")) && keccak256(abi.encodePacked(username)) == keccak256(abi.encodePacked("shashi")) )
        {
            // flag = true;
            // return "Your Patch ID Was: ";
            return patch;
        }
        else
        {
            // flag = false;
            return "sorry";
        }
        
    }

    // function total(string memory _un, string memory _pas) public view returns(string memory) {
    //     username = _un;
    //     password = _pas;
    //     patch = "1234";

    //     if (keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked("shashi")) )
    //     {
    //         // flag = true;
    //         return patch;
    //     }
    //     else
    //     {
    //         // flag = false;
    //         return "sorry";
    //     }

    // }

}
// SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.8.2 <0.9.0;
pragma solidity ^0.8.19;

contract register{
    string public username;
    string public password;
    string public s;
    string public patch;
    bool public flag;

    constructor(){
        username = username;
        password = password;
    }

    function intput(string memory _un, string memory _pas) public{
        username = _un;
        password = _pas;
        patch = "1234";
        flag = true;
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

    function submit() public{
        if (keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked("shashi")) )
        {
            flag = true;
        }
        else
        {
            flag = false;
        }
    }

    function generatepatch() public view returns(string memory){
        if (flag)
        {
            return patch;
        }
        else{
            return "sorry";
        }
    }

}
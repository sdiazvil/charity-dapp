// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.0;  
  
contract Charity {  
    address public owner;  
    mapping(address => uint) public donations;  
    uint public totalDonations;  
  
    event DonationReceived(address indexed donor, uint amount);  
    event FundsWithdrawn(address indexed receiver, uint amount);  
  
    constructor() {  
        owner = msg.sender;  
    }  
  
    modifier onlyOwner() {  
        require(msg.sender == owner, "Only the owner can perform this action");  
        _;  
    }  
  
    function donate() external payable {  
        require(msg.value > 0, "Donation amount must be greater than zero");  
        donations[msg.sender] += msg.value;  
        totalDonations += msg.value;  
        emit DonationReceived(msg.sender, msg.value);  
    }  
  
    function withdraw(uint _amount) external onlyOwner {  
        require(_amount <= address(this).balance, "Insufficient funds");  
        payable(owner).transfer(_amount);  
        emit FundsWithdrawn(owner, _amount);  
    }  
  
    function getContractBalance() external view returns (uint) {  
        return address(this).balance;  
    }  
}  

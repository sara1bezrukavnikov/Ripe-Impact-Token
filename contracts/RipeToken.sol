pragma solidity ^0.4.20;

contract RipeToken {
    address public donor;
    address public resquer;
    uint public weight;
    
    enum State { InTransit, Received, Aborted }
    State public state;
    
    event Aborted();
    event FoodOnItsWay();
    event ItemReceived();
    
    modifier onlyResquer() {
        require(msg.sender == resquer);
        _;
    }

    modifier onlyDonor() {
        require(msg.sender == donor);
        _;
    }
    
    //The request to donate the food is created 
    function Donate() public payable 
    onlyDonor {
        weight = msg.value;
        donor = msg.sender;
        state = State.InTransit;
        FoodOnItsWay();

    }
    
    //Ordered is cancelled
    function Abort() onlyDonor 
        public
        onlyDonor
    {
        state = State.Aborted;
        Aborted();
    }
    //Order delivered to the resquer
    function orderDelivered() public payable
    onlyResquer {
        state = State.Received;
        resquer.transfer(weight);
        donor.transfer(weight);
        ItemReceived();
    }
    }

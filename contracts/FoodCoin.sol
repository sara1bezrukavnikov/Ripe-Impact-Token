pragma solidity ^0.4.19;

contract FoodCoin {
    
    struct Donation {
        address donatorId;
        address rescuerId;
        uint lbsDonated;
        bool verified;
    }
    
    struct Donator {
        address id;
        string name;
    }
    
    struct Rescuer {
        address id;
        string name;
    }
    
    mapping(address => Donator) public Donators;
    mapping(address => Rescuer) public Rescuers;
    Donation[] public Donations;

    function newDonator(string _name) public {
        Donators[msg.sender] = Donator({
            id: msg.sender,
            name: _name
        });
    }
    
    function newRescuer(string _name) public {
        Rescuers[msg.sender] = Rescuer({
            id: msg.sender,
            name: _name
        });
    }
    
    function newDonation(address _rescuer, uint _lbsDonated) public returns (uint) {
        uint donationId = Donations.push(Donation({
            donatorId: msg.sender,
            rescuerId: _rescuer,
            lbsDonated: _lbsDonated,
            verified: false
        }));
        return donationId;
    }
    
    
}

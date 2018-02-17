pragma solidity ^0.4.20;

contract RipeToken {
    
    struct Donation {
        address donatorId;
        address volunteerOrgId;
        uint lbsDonated;
        bool verified;
    }
    
    struct Donator {
        address id;
        string name;
    }
    
    struct VolunteerOrg {
        address id;
        string name;
    }
    
    Donator[] public Donators;
    mapping(address => uint) DonatorToIndex;
    
    VolunteerOrg[] public VolunteerOrgs;
    mapping(address => uint) VolunteerOrgToIndex;
    
    Donation[] public Donations;

    function newDonator(string _name, address _donatorAddress) public {
        uint donatorIndex = Donators.push(Donator({
            id: msg.sender,
            name: _name
        }));
        DonatorToIndex[_donatorAddress] = donatorIndex;
    }
    
    function getDonators() public view returns(Donator[]) {
        return Donators;
    }
    
    function newVolunteerOrg(string _name, address _volunteerOrgAddress) public {
        uint volunteerOrgIndex = VolunteerOrgs.push(VolunteerOrg({
            id: msg.sender,
            name: _name
        }));
        VolunteerOrgToIndex[_volunteerOrgAddress] = volunteerOrgIndex;
    }
    
    function getVolunteerOrgs() public view returns(VolunteerOrg[]) {
        return VolunteerOrgs;
    }
    
    function newDonation(address _volunteerOrgId, uint _lbsDonated) public returns (uint) {
        uint donationId = Donations.push(Donation({
            donatorId: msg.sender,
            volunteerOrgId: _volunteerOrgId,
            lbsDonated: _lbsDonated,
            verified: false
        }));
        return donationId;
    }
    
    function getDonations() public view returns(Donation[]) {
        return Donations;
    }
    
    function getTotalDonationsByDonator(address _donatorAddress) public view returns (uint){
        uint totalDonations = 0;
        for (uint index = 0; index < Donations.length; index++) {
            if (Donations[index].donatorId == _donatorAddress) {
                totalDonations += Donations[index].lbsDonated;
            }
        }
        return totalDonations;
    }
}


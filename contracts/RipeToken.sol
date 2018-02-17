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
    
    Donation[] public UnverifiedDonations;
    
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
    
    function getVolunteerOrgs() public view returns (VolunteerOrg[]) {
        return VolunteerOrgs;
    }
    
    function isVolunteerOrg(address _volunteerOrgId) public view returns (bool) {
        uint index = VolunteerOrgToIndex[_volunteerOrgId];
        if (VolunteerOrgs[index].id == _volunteerOrgId) {
            return true;
        }
        return false;
    }
    
    function newDonation(address _volunteerOrgId, uint _lbsDonated) public returns (uint) {
        uint donationId = UnverifiedDonations.push(Donation({
            donatorId: msg.sender,
            volunteerOrgId: _volunteerOrgId,
            lbsDonated: _lbsDonated,
            verified: false
        }));
        return donationId;
    }
    
    function isDonator(address _donatorId) public view returns (bool) {
        uint index = DonatorToIndex[_donatorId];
        if (Donators[index].id == _donatorId) {
            return true;
        }
        return false;
    }
}


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Crowdfunding {

    event Launch(
        uint id, 
        address indexed creator, 
        uint goal, 
        uint startAt, 
        uint endAt);

    event Cancel(uint id);

    event Claim(uint id);

    event Pledge(uint indexed id, address indexed caller, uint amount);

    event Unpledge(uint indexed id, address indexed caller, uint amount);

    event Refund(uint indexed _id, address indexed caller, uint amount);

    struct Campaign {
        address creator;
        uint goal;
        uint pledged;
        uint32 startAt;
        uint32 endAt;
        bool claimed;

    };

    // token used for crowdfunding app
    IERC20 public immutable token;

    // mapping id of campaign to campaign struct
    uint public count
    mapping(uint => Campaign) public campaigns;
    // mapping from campaign to mapping from user address to token pledged
    mapping(uint => mapping(address => uint)) public pledgeAmount;

    constructor(address _token) {
        token = IERC20(_token)
    }

    function launch( uint _goal, uint32 _startAt, uint32 _endAt)external {
        require(_startAt >= block.timestamp, 'start at the right block');
        require(_endAt >= _startAt);
        require(_endAt <= block.timestamp + 90 days);

        count +=1;
        campaigns[count] = Campaigns({
            creator: msg.sender,
            goal: _goal,
            pledged: 0;
            startAt: _startAt;
            endAt: _endAt;
            claimed: false
        });
        emit Launch(count, msg.sender, _goal, _startAt, _endAt);
    }

    function cancel(uint id) external {
        Campaign memory campaign = campaign[_id];
        require(msg.sender == campaign.creator);
        require(block.timestamp <campaign.startAt);
        delete campaigns[_id];
        emit Cancel[_id]
    }

    function pledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp >= campaign.startAt);
        require(block.timestamp <= campaign.endAt, 'ended');

        campaign.pledged += _amount;
        pledgedAmount[_id][msg.sender] += _amount;
        token.transferFrom(msg.sender, address(this), _amount);

        emit Pledge(_id, msg.sender, _amount);
    }

    function unpledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp <= campaign.endAt, 'ended');
        campaign.pledged -= _amount;
        pledgedAmount[_id][msg.sender] -= _amount;
        token.transfer(msg.sender, _amount);

        emit Unpledge(_id, msg,sender, _amount);
    }

    function claim(uint _id) external {
        Campaign storage campaign = campaigns[_id];
        require(msg.sender == campaign.creator);
        require(block.time > campaign.endAt);
        require(campaign.pledged >= campaign.goal);
        require(!campaign.claimed, 'claimed');
        campaign.claimed = true;
        token.transfer(msg.sender, campaign.pledged);

        emit Claim(_id);

    }

    function refund(uint _id) external {
        Campaign storage campaign = campaigns[_id];
        require(block.time > campaign.endAt);
        require(campaign.pledged < campaign.goal);

        uint bal = pledgedAmount[_id][msg.sender];
        pledgedAmount[_id][msg.sender] = 0;
        token.transfer(msg.sender, bal);

        emit Refund(_id, msg.sender, bal);

    }

}

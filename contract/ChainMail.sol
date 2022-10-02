// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ChainMail {
    event MailSent(address sender, address reciever, uint256 timeStamp);

    struct Mail {
        address sender;
        address reciever;
        string subject;
        string body;
        uint timeStamp;
        string ipfshash;
        string filename;
    }

    Mail[] mails;

    mapping(address => Mail[]) public inbox;
    mapping(address => Mail[]) public sentMails;

    function sendMail(
        address reciever_,
        string memory subject,
        string memory body,
        uint256 timeStamp,
        string memory hash,
        string memory filename
    ) public {
        require(msg.sender.balance > 0, "You may not have enough funds.");
        inbox[reciever_].push(
            Mail(
                msg.sender,
                reciever_,
                subject,
                body,
                timeStamp,
                hash,
                filename
            )
        );
        sentMails[msg.sender].push(
            Mail(
                msg.sender,
                reciever_,
                subject,
                body,
                timeStamp,
                hash,
                filename
            )
        );
        emit MailSent(msg.sender, reciever_, timeStamp);
    }

    function getMyInBox() public view returns (Mail[] memory) {
        return inbox[msg.sender];
    }

    function getSentEmails() public view returns (Mail[] memory) {
        return sentMails[msg.sender];
    }
}

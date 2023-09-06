pragma solidity ^0.8.0;

contract PictureOwnership {
    mapping(uint256 => address) public pictureToOwner;

    function transferOwnership(uint256 pictureId, address newOwner) public {
        require(msg.sender == pictureToOwner[pictureId], "Only the owner can transfer ownership.");
        pictureToOwner[pictureId] = newOwner;
    }
}

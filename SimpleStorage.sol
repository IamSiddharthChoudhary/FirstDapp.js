// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract SimpleStorage {
    struct person {
        uint256 favoriteNumber;
        string name;
    }

    person[] public People;

    mapping(string => uint256) public personToFavouiteNumber;

    function store(string memory _name, uint256 _favouriteNumber) public {
        person memory person1;
        person1.favoriteNumber = _favouriteNumber;
        person1.name = _name;
        People.push(person1);
        personToFavouiteNumber[person1.name] = person1.favoriteNumber;
    }

    function retrieve(string memory name) public view returns (int256) {
        if (personToFavouiteNumber[name] > 0) {
            return int256(personToFavouiteNumber[name]);
        } else {
            return -1;
        }
    }
}

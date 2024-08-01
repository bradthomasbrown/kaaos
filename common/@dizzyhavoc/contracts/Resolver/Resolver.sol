// SPDX-License-Identifier: 0BSD
pragma solidity 0.8.23;

library Implementer {}
library Destroyer {}
library Wallet {}

struct Config {
    address server;
    uint32[] selectors;
}

contract Resolver {

    mapping(bytes4 => address) public implementations;

    function setImplementations(Config[] calldata configs) external {
        require(msg.sender == address(Implementer));
        for (uint i = 0; i < configs.length; i++) {
            Config calldata config = configs[i];
            address server = config.server;
            uint32[] calldata selectors = config.selectors;
            for (uint j = 0; j < selectors.length; j++) {
                uint32 selector = selectors[j]; // selector is equal to slot
                assembly { sstore(selector, server) } 
            }
        }
    }

    fallback() external {
        assembly {
            if eq(caller(), Destroyer) {
                selfdestruct(Wallet) }
            mstore(0, sload(shr(0xe0, calldataload(0))))
            return(0, 0x20)
        }
    }
    
}
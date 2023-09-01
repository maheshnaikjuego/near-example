import { assert, near } from "near-sdk-js";
import { Contract } from ".";

export function internalAddApprovedOwner({ contract, accountId }: { contract: Contract, accountId: string }) {
    contract.approvedOwners.set(accountId);
}

export function internalAddApprovedMinter({ contract, accountId }: { contract: Contract, accountId: string }) {
    contract.approvedMinters.set(accountId);
}

export function internalRemoveOwner({ contract, accountId }: { contract: Contract, accountId: string }) {
    contract.approvedOwners.remove(accountId)
}

export function internalRemoveMinter({ contract, accountId }: { contract: Contract, accountId: string }) {
    contract.approvedMinters.remove(accountId)
}

export function isApprovedOwner({ contract, accountId }: { contract: Contract, accountId: string }) {
    return contract.approvedOwners.contains(accountId);
}

export function isApprovedMinter({ contract, accountId }: { contract: Contract, accountId: string }) {
    return contract.approvedMinters.contains(accountId);
}

export function assertOnlyOwner({ contract }: { contract: Contract }) {
    let caller = near.predecessorAccountId();
    assert(contract.approvedOwners.contains(caller), "Owner only");
}

export function assertOnlyMinter({ contract }: { contract: Contract }) {
    let caller = near.predecessorAccountId();
    assert(contract.approvedOwners.contains(caller), "Minter only");
}

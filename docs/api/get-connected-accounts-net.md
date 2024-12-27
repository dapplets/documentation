---
id: get-connected-accounts-net
---

# getConnectedAccountsNet

Use the function to get Connected Accounts list.

## Example of use in NEAR Components

```jsx
const { getConnectedAccountsNet } = props

getConnectedAccountsNet(accountId, 'near/testnet').then((data) =>
	console.log(`Connected Accounts for ${accountId}:`, data)
)
```

## Parameters

| Parameter   | Type                                                                      | Description    |
| ----------- | ------------------------------------------------------------------------- | -------------- |
| `accountId` | `string`                                                                  | Account ID     |
| `origin`    | `"near/testnet"`, `"near/mainnet"`, `"ethereum"`, `"twitter"`, `"github"` | Account Origin |

## Returns

| Type                        | Description             |
| --------------------------- | ----------------------- |
| `Promise<string[] \| null>` | Connected Accounts list |

### Return example

```jsx
const result = [
	'dapplets.testnet/near/testnet',
	'MrConCreator/twitter',
	'bos.dapplets.testnet/near/testnet',
	'dapplets/github',
	'0x123454f321c2880f3b9a06b2aabc1b5080420fa7/ethereum',
	'0xf64849376812667bda7d902666229f8b8dd90687/ethereum',
	'dapplets-team.testnet/near/testnet',
]
```

---
sidebar_position: 4
---

# Delegation

Delegation lets Kiwi users upvote, submit, and comment on links without having to sign each action in their wallets.

We use a similar method as Warpcast (Farcaster client) does.

How does Delegation work?
When you mint a Kiwi NFT, it triggers a <u>[Delegator2 contract](https://optimistic.etherscan.io/address/0x08b7ecfac2c5754abafb789c84f8fa37c9f088b0)</u>.

This contract asks your browser (Chrome, Firefox, Safari, etc.) to create a new digital key for you. This key is unique to you and lets you interact with KiwiNews as if you were using the crypto address you minted the NFT with. So you don't need to Connect Wallet each time you open Kiwi.

This key is local, which means it's encrypted and stored inside your browser. It looks like a typical crypto key (a long string of numbers and letters like this: 0xfd6.), and only you can use it because - as we said - stored locally.

:::tip[Important]

This delegation key is used only for KiwiNews (news.kiwistand.com), nothing else. It cannot interact with any other websites or touch any of your funds.

:::

You can learn more by reading our technical explanation:
<u>https://github.com/attestate/delegator2#readme</u>

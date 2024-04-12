---
sidebar_position: 2
---

import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

# Protocol

Kiwi is powered by a P2P Protocol, similar to Farcaster.

Our architecture is much simpler, though.

When the user signs up, they mint a Kiwipass NFT. After 1-5 minutes, our indexer adds their blockchain address to the allowlist. From now on, this address can interact with the protocol.

:::tip[Important]

As of April 2024, minting Kiwipass NFT is an "All you can eat" offer. This means that you pay once and can use Kiwi as much as you want.

:::

How's it possible that there's no gas? Your actions, such as submissions, upvotes, and comments, aren't stored on a blockchain. They're stored on a P2P network, which makes them much cheaper to maintain.

If you'd like to dive deeper, here are two materials that you might find interesting:

**Video from Tim explaining how Kiwi Protocol works:**
<YouTube youTubeId="Rys5UEi2SWg" />

**Protocol documentation**:

<u>[https://attestate.com/kiwistand/main/protocol.html](https://attestate.com/kiwistand/main/protocol.html)</u>

export default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;

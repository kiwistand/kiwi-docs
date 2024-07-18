---
sidebar_position: 1
---

import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

# What is Kiwi

Kiwi is a decentralized version of HackerNews, focusing exclusively on crypto tech, products, and culture. At Kiwi, a community of crypto veterans shares, upvotes, and discusses top crypto essays, news, art, GitHub repos, and Dune Dashboards.

Kiwi stores links and upvotes on the <u>[protocol level](/docs/kiwi-how-works/protocol)</u>. Thanks to that, users can create their own UIs and permissionlessly create apps on top of it.

You can access our app here: <u>[news.kiwistand.com](https://news.kiwistand.com)</u>

Learn why it's called Kiwi here: <u>[howtoeat.kiwi](https://howtoeat.kiwi/)</u>

And discover the story behind the project in this 4 min video by Tim Daubenschutz:
<YouTube youTubeId="WujtU15yAyk" />
<br/>
Or watch this 38 min interview with Tim & Mac on Dev n' Tell podcast:
<YouTube youTubeId="tRqkiCwD-zY" />

export default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;

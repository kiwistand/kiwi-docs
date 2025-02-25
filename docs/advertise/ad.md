---
sidebar_position: 3
---

# Intro

Kiwi is a self-funded project, so to make it more sustainable, we decided to run community ads.

### **Who can you reach with the ads?**

There are about 1,500 people using the Kiwi app per month.

Most Kiwis are crypto natives - devs, founders, operators, creators & investors in Ethereum. They like to read long-form content and learn about new products. They use DeFi but are particularly excited about crypto beyond DeFi - social, infra, NFTs, art, and so on.

Plus, they’re real people, not bots.

### **How could you use our ads?**

Our ads offer more than just exposure - they position your brand as a supporter of Kiwi and its community.

Here's how they look:

![Ad example](/img/ad_example.png "ad example")

#### What Kiwi ads are about:

- **Audience Fit**.

Kiwi helps you reach a niche audience that is hard to find anywhere else. If you think it’s better to reach 100 crypto natives than 10,000 bots, our ads might be good for you.

- **Building Brand Awareness**.

Even if someone doesn’t click on your ad, repeated exposure in the Kiwi feed can help build brand awareness over time.

- **Showcasing your support.**

By advertising with us, you signal that your brand is aligned with Kiwi’s OG crypto values. Our community sees you as contributing to our growth and mission. This alignment can build trust with potential customers who appreciate shared values.

### **How do the ads work?**

Our ad-buying model is based on a [smart contract.](https://github.com/attestate/ad)

**Here’s how it works:**

You can stake an amount of ETH for the contract to be yours. Say you stake 1 ETH, then you'll get to set the title, link, and you'll own the contract. But over 1 month, we'll charge you 1 ETH in fees (100% of the collateral a month). The ETH staked as collateral in the contract is also the price someone has to pay to acquire the ad from you. Here's an example:

- Day 0: You buy the ad from the last owner for 0.5 ETH. You stake 1 ETH in collateral, so the new price to buy the ad from you is then 1 ETH.
- Day 15 (half a month): Now half of your collateral was taxed (0.5 ETH). The price to transfer the ad is 0.5 ETH. Your remaining collateral is 0.5 ETH.
- Day 30 (month): Your ad is about to be taken off the website. In case noone has bought yet, your collateral now is very low 0.0000...1 ETH, and so for someone else to buy the ad space from you is extremely cheap.

Now, what would happen if someone bought your ad for 0.9 ETH on Day 12? The new flow would be:

1. You deposit 1 ETH on Kiwi as collateral
2. On day 12, there are 0.6 ETH left (the rest, 0.4 ETH, is locked for taxes)
3. Alice wants to buy the new ad for 0.9 ETH. What happens then:
   - 0.6 ETH from Alice are sent to you
   - 0.3 ETH from Alice are kept as collateral for the new ad
   - 0.4 ETH from your old collateral are sent to Kiwi for the taxes
   - 0.6 ETH from your old collateral are sent back to you

Now:
- You have 1.2 ETH (0.6 ETH leftover collateral + 0.6 ETH from Alice)
- Alice has 0.3 ETH as collateral on Kiwi
- Kiwi has 0.4 ETH paid from taxes from your ad

**Superscan campaign case study:**

Superscan spent 5.59 USD on Kiwi ads on in August and September. They got 38 clicks in August, and 31 in September, 69 in total. That puts the CPC (Cost Per Click) at 0.08 USD.

All our clicks are unique devices (a proxy for "reach").

### **How do you post your ad?**

**1) Go to <u>[news.kiwistand.com/submit](https://news.kiwistand.com/submit?utm_source=kiwi_docs&utm_medium=website_owned&utm_campaign=ad)</u> and click “Submit story as an ad”**

![Submit ad](/img/ad_submit.png "submit ad")

**2) "Current Price" shows what you have to pay to buy the ad**

**3) "Set Your Price" is the price a new buyer will have to pay to outbid you**

### **How to Maximize Your Ad’s Success**

We're committed to helping our ad buyers get the best results. We wrote a simple <u>[Ads guide
](/docs/advertise/ad_guide)</u>

And here are some ways we can collaborate:

- **Choosing the right format.**

Whether it’s sending traffic to a landing page or highlighting a blog post, we can help you choose the best format for your campaign.

- **Title Optimization**.

A compelling title can make a big difference in getting more clicks. We’ve seen thousands of titles on Kiwi and know what works, so we can help you refine the message for maximum impact.

- **Submitting from your ENS**

Ads submitted by an ENS name known in the community can have higher CTRs than anon wallet addresses. If you are recognized within the community, this can significantly boost engagement.

### **Questions? Reach Out!**

If you have any questions or need a tailored solution, feel free to DM @macbudkowski or @timdaub.

We’re happy to find a solution that fits your requirements, size, and budget.

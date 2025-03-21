---
sidebar_position: 6
---

# Passkeys

### What are Passkeys?

Last year, Google, Apple, and Microsoft <u>[teamed up to enable Passkeys](https://fidoalliance.org/apple-google-and-microsoft-commit-to-expanded-support-for-fido-standard-to-accelerate-availability-of-passwordless-sign-ins/)</u>. Passkeys let you sign into websites and apps by just unlocking your phone, so you don’t need to use passwords anymore.

You can see on this demo <u>[how they look in practice](https://warpcast.com/timdaub.eth/0x54a27231)</u>.

### How do Passkeys work?

Here’s an <u>[explanation](https://blog.google/inside-google/googlers/ask-a-techspert/how-passkeys-work/)</u> from the Google team with some clarification from us:

> “Passkeys are similar to SSL, more recently called TLS [encryption used to make websites safe - Kiwi]. But instead of systems authenticating each other, a person has the corresponding private key on their device.
>
> The cryptography portion of this is that the website can confirm that the user’s device — which biometrics [like FaceID or fingerprint - Kiwi] confirm is in their possession — has the passkey. Because of the cryptography the server never actually learns what the user’s passkey actually is.”

### How we implemented Passkeys on Kiwi

We wanted to implement Passkeys because about 60% of our users are on mobile devices, and 40% are on desktops. The challenge is that you need to hold Kiwipass to submit, upvote, and comment on links. If someone has an NFT on their desktop wallet but doesn’t have it on the mobile one, they can’t use Kiwi on mobile.

Passkeys solve this.

So when we learned that Coinbase shared the <u>[source code](https://github.com/coinbase/smart-wallet)</u> of their Smart Wallet with Passkeys implemented, we decided to reuse it for Kiwi.

We also reached out to Sid Coehlo from the Coinbase Wallet team, who connected us with Harry Noble, who leads the engineering for Smart Wallet and helped us better understand their code.

In a few days, we had the implementation working, and you can use it on Kiwi if you <u>[go to Settings](https://news.kiwistand.com/settings)</u>.

If you’d like to learn how this implementation works on the lower level, here’s the link to the Passkeys function on our GitHub:
<u>https://github.com/attestate/kiwistand/blob/737b7b218b2472a6f84e590a5af7c6a3dee6fc84/src/web/src/Passkeys.jsx</u>

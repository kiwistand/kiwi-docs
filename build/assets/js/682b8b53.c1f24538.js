"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[559],{518:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var o=t(4848),i=t(8453);const n={sidebar_position:5},a="Passkeys",r={id:"kiwi-how-works/passkeys",title:"Passkeys",description:"What are Passkeys?",source:"@site/docs/kiwi-how-works/passkeys.md",sourceDirName:"kiwi-how-works",slug:"/kiwi-how-works/passkeys",permalink:"/kiwi-docs/docs/kiwi-how-works/passkeys",draft:!1,unlisted:!1,editUrl:"https://github.com/attestate/kiwistand/docs/kiwi-how-works/passkeys.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Delegation",permalink:"/kiwi-docs/docs/kiwi-how-works/delegation"},next:{title:"Community",permalink:"/kiwi-docs/docs/category/community"}},h={},c=[{value:"What are Passkeys?",id:"what-are-passkeys",level:3},{value:"How do Passkeys work?",id:"how-do-passkeys-work",level:3},{value:"How we implemented Passkeys on Kiwi",id:"how-we-implemented-passkeys-on-kiwi",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",h1:"h1",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"passkeys",children:"Passkeys"}),"\n",(0,o.jsx)(s.h3,{id:"what-are-passkeys",children:"What are Passkeys?"}),"\n",(0,o.jsxs)(s.p,{children:["Last year, Google, Apple, and Microsoft ",(0,o.jsx)("u",{children:(0,o.jsx)(s.a,{href:"https://fidoalliance.org/apple-google-and-microsoft-commit-to-expanded-support-for-fido-standard-to-accelerate-availability-of-passwordless-sign-ins/",children:"teamed up to enable Passkeys"})}),". Passkeys let you sign into websites and apps by just unlocking your phone, so you don\u2019t need to use passwords anymore."]}),"\n",(0,o.jsxs)(s.p,{children:["You can see on this demo ",(0,o.jsx)("u",{children:(0,o.jsx)(s.a,{href:"https://warpcast.com/timdaub.eth/0x54a27231",children:"how they look in practice"})}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"how-do-passkeys-work",children:"How do Passkeys work?"}),"\n",(0,o.jsxs)(s.p,{children:["Here\u2019s an ",(0,o.jsx)("u",{children:(0,o.jsx)(s.a,{href:"https://blog.google/inside-google/googlers/ask-a-techspert/how-passkeys-work/",children:"explanation"})})," from the Google team with some clarification from us:"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"\u201cPasskeys are similar to SSL, more recently called TLS [encryption used to make websites safe - Kiwi]. But instead of systems authenticating each other, a person has the corresponding private key on their device."}),"\n",(0,o.jsx)(s.p,{children:"The cryptography portion of this is that the website can confirm that the user\u2019s device \u2014 which biometrics [like FaceID or fingerprint - Kiwi] confirm is in their possession \u2014 has the passkey. Because of the cryptography the server never actually learns what the user\u2019s passkey actually is.\u201d"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"how-we-implemented-passkeys-on-kiwi",children:"How we implemented Passkeys on Kiwi"}),"\n",(0,o.jsx)(s.p,{children:"We wanted to implement Passkeys because about 60% of our users are on mobile devices, and 40% are on desktops. The challenge is that you need to hold Kiwipass to submit, upvote, and comment on links. If someone has an NFT on their desktop wallet but doesn\u2019t have it on the mobile one, they can\u2019t use Kiwi on mobile."}),"\n",(0,o.jsx)(s.p,{children:"Passkeys solve this."}),"\n",(0,o.jsxs)(s.p,{children:["So when we learned that Coinbase shared the ",(0,o.jsx)("u",{children:(0,o.jsx)(s.a,{href:"https://github.com/coinbase/smart-wallet",children:"source code"})})," of their Smart Wallet with Passkeys implemented, we decided to reuse it for Kiwi."]}),"\n",(0,o.jsx)(s.p,{children:"We also reached out to Sid Coehlo from the Coinbase Wallet team, who connected us with Harry Noble, who leads the engineering for Smart Wallet and helped us better understand their code."}),"\n",(0,o.jsx)(s.p,{children:"In a few days, we had the implementation working, and you can use it on Kiwi if you go to Settings."}),"\n",(0,o.jsxs)(s.p,{children:["If you\u2019d like to learn how this implementation works on the lower level, here\u2019s the link to the Passkeys function on our GitHub:\n",(0,o.jsx)("u",{children:(0,o.jsx)(s.a,{href:"https://github.com/attestate/kiwistand/blob/737b7b218b2472a6f84e590a5af7c6a3dee6fc84/src/web/src/Passkeys.jsx",children:"https://github.com/attestate/kiwistand/blob/737b7b218b2472a6f84e590a5af7c6a3dee6fc84/src/web/src/Passkeys.jsx"})})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var o=t(6540);const i={},n=o.createContext(i);function a(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);
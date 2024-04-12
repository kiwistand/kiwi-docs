import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Public Good",
    image: "/img/Kiwi_docs.png",
    description: (
      <>
        Our goal is to create a space where the crypto community can exchange
        ideas and have deep, nuanced conversations.
      </>
    ),
  },
  {
    title: "Decentralized & Open Source",
    image: "/img/Kiwi_docs.png",
    description: (
      <>
        Kiwi has been built on an open source Kiwi P2P Protocol. It means that
        everyone can run a node and permissionlessly create their own Kiwi app.
      </>
    ),
  },
  {
    title: "Positive-sum games community",
    image: "/img/Kiwi_docs.png",
    description: (
      <>
        We are people building the decentralized future - primarily web3
        founders, developers, and creators.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />{" "}
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

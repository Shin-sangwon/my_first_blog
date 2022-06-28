import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpg"
      />
      <p>I'm making this by folrlowing the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

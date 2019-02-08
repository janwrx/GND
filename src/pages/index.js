import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import InputForm from "../InputForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <InputForm />
  </Layout>
);

export default IndexPage;

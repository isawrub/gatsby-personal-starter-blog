import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hi, I'm Saurabh"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="A Web Developer And Servant Leader"
          keywords={[`blog`, `engineering manager`, `javascript`, `asp.net`, `.net`]}
          location={this.props.location}
        />
        <img style={{ margin: 0 }} src="./i-am-saurabh.png" alt="I love coffee" />
        <h2>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>Welcome to my personal website.</p>
        <p>
          I am an Engineering Manager at Quovantis Technologies.
          I have been building web applications using .NET and JavaScript for more than a decade.
          I live in the National Capital Region of Delhi, India, with my wife & daughter.
        </p>
        <p>I like to talk about engineering management, leadership and web development here!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

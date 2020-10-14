import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  ErrorPageWrapper,
  Button,
} from "../elements"

const Error = () => {
  return (
    <Layout>
      <SEO title="CV" description="Mike CV" />
      <ErrorPageWrapper>
        <div>
          <h1>Oj, Något gick fel</h1>
          <Button to="/">
            Tillbaka Hem
          </Button>
        </div>
      </ErrorPageWrapper>
    </Layout>
  )
}

export default Error

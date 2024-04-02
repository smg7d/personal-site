import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const SecondPage = () => (
  <Hero/>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage

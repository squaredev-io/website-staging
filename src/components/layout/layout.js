import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../footer/footer'
import Header from '../header/header'
import '../../sass/style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isMobileMenuVisible: false,
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState({ isMobileMenuVisible: !this.state.isMobileMenuVisible })
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== this.state.isScrolled) {
        this.setState({ isScrolled })
      }
    })
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        this.setState({ isMobileMenuVisible: false })
      }
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    "We make it possible to turn your organisation's big data into actionable insights and build a sustainable competitive advantage.",
                },
                {
                  name: 'keywords',
                  content:
                    'Squaredev, software development, big data analytics, data visualisations, graph analytics, knowledge rraph, IOT, IIOT, augmented analytics, digital twins, machine learning, natural language processing, data silos',
                },
              ]}
            >
              <html lang="en" />
              <script
                async
                src="https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver"
              />
            </Helmet>
            <Header
              isScrolled={this.state.isScrolled}
              isMobileMenuVisible={this.state.isMobileMenuVisible}
              toggleMobileMenu={this.toggleMobileMenu}
            />
            {this.props.children}
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { Link } from 'gatsby'
import './header.scss'
import { withPrefix } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = ({ isScrolled }) => (
  <header className={isScrolled ? 'header header-scrolled' : 'header'}>
    <div className="container">
      <div className="row align-items-center justify-content-between d-flex">
        <div className="header__logo">
          <AnchorLink href="#banner1">
            <img src={withPrefix('images/logo.png')} alt="Squaredev" />
          </AnchorLink>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu sf-arrows">
            <li className="menu-active">
              <AnchorLink href="#banner1">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#grid2">What we do</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#imageText3">Our Vision</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#imageText4'>Open Source</AnchorLink>
            </li>
            {/*<li className="menu-has-children">*/}
            {/*<Link to="">*/}
            {/*<span>Open Source</span>*/}
            {/*<FontAwesomeIcon icon={faChevronDown} />*/}
            {/*</Link>*/}
            {/*<ul>*/}
            {/*<li><Link to="/generic">Generic Page</Link></li>*/}
            {/*</ul>*/}
            {/*</li>*/}
            {/*<li><Link to="#contact">Contact</Link></li>*/}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header

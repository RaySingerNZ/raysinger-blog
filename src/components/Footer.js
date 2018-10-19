import React, { Component } from 'react'
import styled from 'styled-components'
//
// import { H5 } from './Html'
import Theme from 'utils/Theme'

const FooterStyles = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  padding: 20px;
  color: ${Theme.colors.primaryDarkest};
  .copyright {
    text-align: center;
    font-weight: bold;
  }
`

export default class Footer extends Component {
  render () {
    return (
      <FooterStyles>
        <div className="copyright">
          &copy; {`20${new Date().getYear() - 100}`} Ray Singer.
        </div>
      </FooterStyles>
    )
  }
}

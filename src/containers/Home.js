import React from 'react'
import { withSiteData } from 'react-static'
import styled, { css } from 'styled-components'



import Color from 'utils/Color'
import Theme from 'utils/Theme'
import { angle } from 'utils/Styles'

import Link from 'components/Link'
import NodeGarden from 'components/NodeGarden'
import { H1, H2, H3, H4, H5, H6, P, Ul, Li, Img, Div, Button, Strong } from 'components/Html'
import GithubIcon from 'components/GithubIcon'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`


const Left = props => <div className="left" {...props} />
const Right = props => <div className="right" {...props} />

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  z-index: 0;
  .inner {
    max-width: ${Theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  ${belowMobile} {
    .left,
    .right {
      flex: 1 1 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .left {
      margin-bottom: 2rem;
    }
  }
`

const layoutLeft = css`
  .left {
    flex: 2 1 200px;
    text-align: right;
    margin-right: 40px;
  }
  .right {
    flex: 7 1 300px;
  }
`

const layoutRight = css`
  .left {
    flex: 2 1 200px;
  }
  .right {
    margin-left: 40px;
    flex: 2 1 200px;
  }
`

const layoutLeftHalf = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const layoutDark = css`
  background: ${Theme.colors.primaryDarker};
  color: white;
`

const Centered = styled.div`
  text-align: center;
  width: 100%;
`

const NodeGardenWrapper = styled(Section)`
  ${section} 
  ${layoutLeft} 
  position: relative;
  background: radial-gradient(
    circle at center,
    ${Theme.colors.primaryDarker} 5%,
    ${Color(Theme.colors.primaryDarker)
    .darken(40)
    .toString()}
  );
  .circle-img {
    border-radius: 50%;
    max-height: 350px;

  };
  color: white;
  h1 {
    color: ${Theme.colors.primaryLighter};
    margin-top: -10px;
  }

`

const SocialMediaLinks = styled(Section)`
  ${section} 
  ${layoutDark} 
  ${layoutRight} 
  ${angle('right')} 
  position: relative;
  .right {
    z-index: 0;
  }
  .inner {
    padding: 2% 10%;
  }
`

export default withSiteData(() => (
  <div>
    <NodeGardenWrapper>
      <NodeGarden color={Color('white').setAlpha(0.1).toString()} style={{ position: 'absolute', top: '0px', left: '0px', zIndex: -1 }}></NodeGarden>     
      <Left>
        <Img className="circle-img" src="/img/Ray_400x400.jpg"/>
      </Left>
      <Right>
        <H1>Kia Ora</H1>
        <P>My name is Ray Singer. Welcome to my personal website and blog.</P>
        <P> 
          Here you'll find topics related to software development, dev-ops, design-thinking, sonic arts, study-advice and more. 
          Basically I write about things I'm into, and well... I'm into a heap of different stuff!
        </P>
        <P>
          I work with the team of clever and fun people at <a href="https://stp.co.nz/">Stratos Technology Partners</a> where we create software applications that make difficult problems simple.
        </P>
        <P>
          During my spare time I do battle on the table tennis court with my colleagues, perform music at festivals throughout Australisia and go on surf/kite/wakeboard trips with my family. 
        </P>
      </Right>
      
    </NodeGardenWrapper>

    <SocialMediaLinks>
      <Left>
        <GithubIcon></GithubIcon>
        <br />
        <br />
        <H2>Skills</H2>
        <P>
          Placeholder for some info. Placeholder for some info. Placeholder for some info. Placeholder for some info.
        </P>
        {/* <Link to="/#contact">
          <Button color="success" burst>
            Some Text
          </Button>
        </Link>{' '}
        <Link to="/features">
          <Button color="primary" burst>
            More Text
          </Button>
        </Link> */}
      </Left>
      <Right>
        <GithubIcon></GithubIcon>
        <br />
        <br />
        <H2>Skills</H2>
        <P>
          Placeholder for some info. Placeholder for some info. Placeholder for some info. Placeholder for some info.
        </P>
        {/* <Link to="/#contact">
          <Button color="success" burst>
            Some Text
          </Button>
        </Link>{' '}
        <Link to="/features">
          <Button color="primary" burst>
            More Text
          </Button>
        </Link> */}
      </Right>
    </SocialMediaLinks>
    <SocialMediaLinks>
      <Left>
        <GithubIcon></GithubIcon>
        <br />
        <br />
        <H2>Skills</H2>
        <P>
          Placeholder for some info. Placeholder for some info. Placeholder for some info. Placeholder for some info.
        </P>
        {/* <Link to="/#contact">
          <Button color="success" burst>
            Some Text
          </Button>
        </Link>{' '}
        <Link to="/features">
          <Button color="primary" burst>
            More Text
          </Button>
        </Link> */}
      </Left>
      <Right>
        <GithubIcon></GithubIcon>
        <br />
        <br />
        <H2>Skills</H2>
        <P>
          Placeholder for some info. Placeholder for some info. Placeholder for some info. Placeholder for some info.
        </P>
        {/* <Link to="/#contact">
          <Button color="success" burst>
            Some Text
          </Button>
        </Link>{' '}
        <Link to="/features">
          <Button color="primary" burst>
            More Text
          </Button>
        </Link> */}
      </Right>
    </SocialMediaLinks>
    
  </div>
))

import React from 'react'
import { withSiteData } from 'react-static'
import styled, { css } from 'styled-components'

import Color from 'utils/Color'
import Theme from 'utils/Theme'
import { angle } from 'utils/Styles'

import Link from 'components/Link'
import NodeGarden from 'components/NodeGarden'
import { H1, H2, H3, H4, H5, H6, P, Ul, Li, Img, Div, Button, Strong } from 'components/Html'
import ProfileIcon from 'components/svg/ProfileIcon'
import BlogIcon from 'components/svg/BlogIcon'
import TwitterIcon from 'components/svg/TwitterIcon'
import LinkedInIcon from 'components/svg/LinkedInIcon'


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
    padding-right: 50px;
  }
  .right {
    flex: 7 1 300px;
  }
`

const layoutCenter = css`
  .left {
    padding: 0 20px;
    flex: 2 1 200px;
  }
  .right {
    padding: 0 20px;
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

const SocialMediaLinksRight = styled(Section)`
  ${section} 
  ${layoutDark} 
  ${layoutCenter} 
  ${angle('right')} 
  position: relative;
  padding-top: 5rem;
  .right {
    z-index: 0;
  }
  .inner {
    padding: 2% 10%;
  }
`

const SocialMediaLinksLeft = styled(Section)`
  ${section} 

  ${layoutCenter} 
  ${angle('left')}
  padding-top: 5rem; 
  padding-bottom: 5rem; 
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
          Here you'll find topics related to software development, from dev-ops to design-thinking. 
          I'm a full-stack developer with a background in design. I write about things I'm into, and well... I'm into a heap of different stuff!
        </P>
        <P>
          I work with the team of clever and fun people at <a href="https://stp.co.nz/">Stratos Technology Partners</a> where we create software applications that make difficult problems simple.
        </P>
        <P>
          During my spare time I battle-it-out on the table tennis court with my colleagues, perform music at festivals throughout Australisia and go on surf/kite/wakeboard trips with my family. 
        </P>
      </Right>
      
    </NodeGardenWrapper>

    <SocialMediaLinksRight>
      <Left>
        <BlogIcon></BlogIcon>
        <br />
        <br />
        <H2>Blog</H2>
        <P>
          Tips, tricks, insight, banter and fun. They say you never really understand something until you can explain it.  
        </P>
        <Link to="/blog">
          <Button color="success" burst>
            Browse Topics
          </Button>
        </Link>
      </Left>
      <Right>
        <ProfileIcon></ProfileIcon>
        <br />
        <br />
        <H2>About</H2>
        <P>
          Who, what, why, when? More about my journey from designer to developer and beyond.
        </P>
        <Link to="/about">
          <Button color="success" burst>
            Read More
          </Button>
        </Link>
      </Right>
    </SocialMediaLinksRight>
    <SocialMediaLinksLeft>
      <Left>
        <TwitterIcon></TwitterIcon>
        <br />
        <br />
        <H2>Twitter</H2>
        <P>
          I don't tweet often but when I do it's usually to announce that I have published a new blog article.
        </P>
        <Link to="https://twitter.com/raysingernz">
          <Button color="success" burst>
            Let's Tweet
          </Button>
        </Link>
      </Left>
      <Right>
        <LinkedInIcon></LinkedInIcon>
        <br />
        <br />
        <H2>LinkedIn</H2>
        <P>
          LinkedIn is currently my abandoned CV. Note to self: keep it up-to-date with interesting content.
        </P>
        <Link to="https://www.linkedin.com/in/ray-singer-38710780">
          <Button color="success" burst>
            Let's Link Up
          </Button>
        </Link>
      </Right>
    </SocialMediaLinksLeft>
    
  </div>
))

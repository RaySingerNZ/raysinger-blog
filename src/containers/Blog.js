import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled, { css } from 'styled-components'
//
import { angle } from 'utils/Styles'
import Color from 'utils/Color'
import Theme from 'utils/Theme'
import NodeGarden from 'components/NodeGarden'
import { H1, H2, H3, H4, H5, H6, P, Ul, Li, Img, Div, Button, Strong } from 'components/Html'


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
    padding: 5% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    padding: 0 20px 100px;
    flex: 2 1 200px;
  }
  .right {
    padding: 0 20px 100px;
    flex: 2 1 200px;
  }
`

const layoutDark = css`
  background: ${Theme.colors.primaryAlmostBlack};
  color: white;
`

const BlogNodeGardenWrapper = styled(Section)`
  ${section} 
  ${layoutLeft}
  position: relative;
  min-height: 200px;
  background: radial-gradient(
    circle at center,
    ${Theme.colors.primaryDarker} 5%,
    ${Color(Theme.colors.primaryDarker)
    .darken(40)
    .toString()}
  );
  color: white;
  h1 {
    color: ${Theme.colors.primaryLighter};
    margin-top: -10px;
  }
`

const BlogPostsWrapper = styled(Section)`
  ${section}
  ${layoutCenter}
  ${layoutDark}
  ${angle('right')} 
  position: relative;
  min-height: 600px
  .right {
    z-index: 0;
  }
  .inner {
    padding: 2% 10%;
  }
  h2 {
    color: ${Theme.colors.primaryLighter};
  }
`

const BlogBelowPosts = styled(Section)`
  ${section}
  position: relative;
  min-height: 150px
  .right {
    z-index: 0;
  }
  .inner {
    padding: 2% 10%;
  }
`

export default withRouteData(({ posts }) => (
  <div>
    <BlogNodeGardenWrapper>
      <NodeGarden color={Color('white').setAlpha(0.1).toString()} style={{ position: 'absolute', top: '0px', left: '0px', zIndex: -1 }}></NodeGarden>
      <Right>
        <H1>It's Blog Time!</H1>
        <P>From Dev-Ops to Design-Thinking.</P>
      </Right>      
    </BlogNodeGardenWrapper>
    <BlogPostsWrapper>
      <Left>
        <H2>All Posts:</H2>
        <ul>
          {posts.map(post => (
            <li key={post.data.slug}>
              <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
            </li>
          ))}
        </ul>
      </Left>  
    </BlogPostsWrapper>
    <BlogBelowPosts>
      <Left>
        <br />
      </Left>
    </BlogBelowPosts>
  </div>
))

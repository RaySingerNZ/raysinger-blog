import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//
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

const layoutBlogContent = css`
  background: white;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: black;
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
  ${layoutBlogContent}
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

export default withRouteData(({ post }) => (
  <div className="blog-post">
  <BlogNodeGardenWrapper>
    <NodeGarden color={Color('white').setAlpha(0.1).toString()} style={{ position: 'absolute', top: '0px', left: '0px', zIndex: -1 }}></NodeGarden>
    <Right>
      <H3>{post.data.title}</H3>
      <Link to="/blog/"><H4>{'<'} Back</H4></Link>
    </Right> 
  </BlogNodeGardenWrapper>
  <BlogPostsWrapper>
    <Left>
      <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
      <hr />
      <Img className="image" src={post.data.thumbnail} alt="" />
      <br />
      <Div className="markdown">
        <Markdown source={post.content} escapeHtml={false} />
      </Div>
    </Left>
  </BlogPostsWrapper>
  </div>
))

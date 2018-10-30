import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled, { css } from 'styled-components'
//
import { angle } from 'utils/Styles'
import Color from 'utils/Color'
import Theme from 'utils/Theme'
import NodeGarden from 'components/NodeGarden'
import { H1, H2, H3, H4, H5, H6, P, Ul, Li, Img, Div, Button, Strong } from 'components/Html'

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
    padding: 5% 10%;
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
    flex: 2 1 200px;
  }
  .right {
    flex: 2 1 200px;
  }
`

const layoutDark = css`
  background: ${Theme.colors.primaryDarker};
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
  ${belowMobile} {
    .right {
      margin-top: 1.5em;
    }
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

const IndividualPostWrapper = styled.section`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  article {
    padding: 1.75em;
    background-color: ${Theme.colors.primaryAlmostBlack};
    border-radius: 5px;
    margin: 1em;
    width: calc(40% - 1.5em);
  }

  article .image {
    border-radius: 5px 5px 0 0;
    display: block;
    margin-bottom: 1.75em;
    position: relative;
    width: calc(100% + 3.5em);
  }

  article .image img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }

  ${belowTablet} {
    article {
      margin: 1em 0;
      width: calc(90% - 1em);
    }
  }
  
  ${belowMobile} {
    article {
      margin: 1em 0;
      width: calc(90% - 1em);
    }
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
        <IndividualPostWrapper>
        {posts.map(post => (
            <article key={post.data.slug}>
              <div><Link to={`/blog/post/${post.data.slug}`}><img className="image" src={post.data.thumbnail} alt="" /></Link></div>     
              <div><Link to={`/blog/post/${post.data.slug}`}><H4>{post.data.title}</H4></Link></div>
              <div><P>{post.data.blurb}</P></div>       
            </article>
          ))}
      </IndividualPostWrapper>
      </Left>  
    </BlogPostsWrapper>
    <BlogBelowPosts>
      <Left>
        <br />
      </Left>
    </BlogBelowPosts>
  </div>
))

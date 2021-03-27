import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import TopNavbar from "./header/topnavbar";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./pages/post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Loading from "./pages/loading";
import Title from "./title";
import PageError from "./pages/page-error";
import Service from "./pages/services";
import BootstrapCss from './styles/bootstrap.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import Arrow from "../images/arrow.svg";
import included from "../images/included.svg";
import Cross from "../images/cross.svg";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="no" />
        <link rel="preconnect" href="https://backend.hostwp.no" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} /> 
          <Page when={data.isPage} />
          <Service when={data.isTjenester} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site. */}
      <FooterContainer>
        <Footer/>
      </FooterContainer>      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #0077b5;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
    --scrollbarBG: #fff;
    --thumbBG: #000;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    margin: 0;
    color: #043959;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a {
    color: var(--brand);
  }
  a,
  a:visited {  
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: #043959;
    }
  }
  .price_card .price {
    :after {
      content: " /mnd";
      font-size: 18px;
      font-weight: normal;
      color: #333;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color:var(--black);
    font-weight: 400;
  }
  h1 {
    font-size: 56px;
    font-weight: 500;
    color:var(--brand);
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5rem;
  }
  .growth_buttons .wp-block-button__link {
    background:url(${Arrow}) no-repeat right center;
  }
  input:focus:invalid {
    background: url(${Cross}) no-repeat 98% 45% white;
    background-size: 15px;
  }
  input:invalid {
    background: url(${Cross}) no-repeat 98% 45% white;
    background-size: 15px;
  }
  #root {
    display:flex;
    flex-direction: column;
    height: 100%;
  }
  .container {
    max-width: 1200px;
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section{
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
  .included li {
    list-style-image: url(${included});
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 34px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const HeadContainer = styled.div`
  z-index: 2;
`;

const FooterContainer = styled.div`
  display: flex;
  width:100%;
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

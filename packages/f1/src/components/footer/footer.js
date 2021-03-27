import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import logo from "../../images/logo.svg";


const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <div className="footer-grid">
          <div className="footer-widget">
            <img src={logo} alt="logo" width="150px" height="50px" />            
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Tjenester</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/tjenster/nettside/">Nettside</Link></li>
              <li><Link className="widget-list-link" link="/tjenster/nettbutikk/">Nettbutikk</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/vps">VPS hosting</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/dedikert">Dedikert hosting</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/domene/">Domene</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Sitemap</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/">Hjem</Link></li>
              <li><Link className="widget-list-link" link="/tjenester/">Tjenester</Link></li>
              <li><Link className="widget-list-link" link="/support/">Support</Link></li>
              <li><Link className="widget-list-link" link="/blog/">Blog</Link></li>
              <li><Link className="widget-list-link" link="/planer-og-priser/">Planer og priser</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Teknologi</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://frontity.org/">Frontity</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://wordpress.org/">WordPress</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://github.com/aamodtgroup/">GitHub</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Følg oss</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com/hostwp">Facebook</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com/hostwp">Twitter</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/hostwp/">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <hr className="divider div2" />
        <div className="copyright-grid">
          <div className="column1">
            <p className="copyright">© 2021 HostWP</p>
          </div>
          <div className="column2">
            <p className="copyright"><Link link="/personvern">Personvern</Link></p>
          </div>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  display: block;
  width:100%;
  max-width:1200px;
  justify-content:center;
  margin: 0 auto;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: calc(1rem + 50px);
  color:#0077b5;
  .footer-grid {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 0.8fr repeat(4,auto);
  }
  .footer-widget {
    line-height: 24px;
    margin-bottom: 35px;
    :not(:first-of-type) {
      margin-left: 32px;
    }
    .widget-title {
      color:#0077b5;
      margin-bottom:1.2rem;
      font-size:16px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    p {
      font-size:16px;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:#000;
          &:hover {
            color:var(--brand);
          }
        }
      }
    }
  }
  .divider {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    margin: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }
  .copyright-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .column2 {
    text-align: right;
  }
  .copyright {
    font-size: 14px;
    margin: 1rem 0;
    color: #333;
  }
  .copyright a {
    color: #333;
  }
  .form-text-container {
    margin: 0px;
    width: 100%;
  }
  .form-text-container h4 {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
  .form-text-container p {
    font-size: 14px;
    line-height: 20px;
    color: rgba(15,28,100,0.8);
  }
  .newsletter-container {
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: flex;
    margin: 50px auto;
  }
  .form-container {
    width: 100%;
  }
  .newsletter-form {
    margin-left: auto;
    max-width: 400px;
  }
  .newsletter {
    width: 100%;
    height: 50px;
    padding: 3px;
    display: grid;
    // grid-template-rows: repeat(1,auto);
    grid-template-columns: auto auto;
    // row-gap: .5rem;
    border: 1px solid rgba(12,17,43,0.08);
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgb(12 17 43 / 12%);
  }
  .newsletter input {
    width: 100%;
    padding-left: 16px;
    padding-right: 6px;
    border: none;
    background: transparent;
    font-size: 16px;
    line-height: 24px;
    color: rgba(15,28,100,0.8);
    margin: 0;
  }
  .newsletter button {
    position: static;
    background-color: #0077b5;
    color: #ffffff;
    line-height: 16px;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 4px 8px 0 rgb(12 17 43 / 12%), 0 1px 4px 0 rgb(12 17 43 / 16%);
  }
  .newsletter .form-group {
    margin-bottom: 0;
    input {
      height: 100%;
    }
    label {
      display: none;
    }
  }
  .msg-alert {
    display: none;
  }
  // .msg-alert {
  //   height: auto;
  //   width: 100%;
  //   text-align: left; 
  //   font-size: 16px;
  //   z-index: 3;
  //   background-color: #fff;
  //   padding: 1rem;
  //   :empty {
  //     visibility:hidden;
  //   }
  //   :not(:empty) {
  //     border: 1px solid rgba(12,17,43,0.08);
  //     border-radius: 8px;
  //     visibility:visible;
  //     animation: cssAnimation 0s ease-in 5s forwards;
  //     @keyframes cssAnimation {
  //       to {
  //           width:0;
  //           height:0;
  //           visibility:hidden;
  //           padding: 0;
  //       }
  //     }
  //   }
  //   p {
  //     margin: 0;
  //   }
  // }
  @media screen and (max-width: 800px) {
    padding: 20px 15px;
    .footer-grid {
      display: grid;
      grid-template-rows: 70px repeat(3,auto);
      grid-template-columns: 1fr 1fr;
      padding-top: 25px;
      padding-bottom: 0px;
      flex-wrap: wrap;
    }
    .footer-widget {
      :first-of-type {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
    .footer-widget {
      :not(:first-of-type) {
        margin-left: 0;
      }
    }
    .newsletter-container {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`;

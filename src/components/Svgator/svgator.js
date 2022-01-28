import React, {Component} from 'react';
import './svgator.css'

class Svgator extends Component{
   render(){
    return( 
      <div className="header-overall">
        <div className="header-top">
          <div className="menus-svgator">
            <div className="logo-svgator">
              SVGATOR
            </div>
            <ul className="svgator-nav">
              <li className="svgator-submenu">
                <a href="" className="svgator-submenuText">Blog</a>
              </li>
              <li className="svgator-submenu">
                <a href="" className="svgator-submenuText">Tutorials</a>
              </li>
              <li className="svgator-submenu">
                <a href="" className="svgator-submenuText">Pricing</a>
              </li>
              <li className="svgator-submenu">
                <a href="" className="svgator-submenuText">Log In</a>
              </li>
              <li className="svgator-submenu">
                <a href="" className="svgator-signupText">Sign UP</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='header'>
          <h1>The Easiest Way to 
            <span>Animate Svg</span>
          </h1>
          <p className="discover-content">Discover the ultimate SVG animation platform - animate illustrations, logos, icons, and more.
           <strong className="coding-content">
             No coding skills required.
           </strong>
          </p>
        </div> 
      </div>
    );  
   }
}
export default Svgator;

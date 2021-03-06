import React, {Component} from 'react';
import './svgator.css'
import Vscode from '../../images/vscode.png';
import VscodeExt from '../../images/vscodeext.png';
import RevImg from '../../images/revImg.png';
import RotateImg from '../../images/rotateImg.png';
import Pencloud from '../../images/pencloud.png';
import Tutorials from '../../images/tutorials.png';
import CustomEase from '../../images/customEase.png';
import VerticalLine from '../../images/VerticalLine.png'

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
            <span>Animate SVG</span>
          </h1>
          <p className="discover-content">Discover the ultimate SVG animation platform - animate illustrations, logos, icons, and more.
           <strong className="coding-content">
             No coding skills required.
             <svg class="coding-line" viewBox="0 0 274 8"><path fill="none" stroke="#FFF" stroke-width="2" d="M174,456.290698 C307.466899,452.763566 398.466899,451 447,451" transform="translate(-173 -450)"></path></svg>
           </strong>
          </p>
          <div className="three-column">
            <div className="content-fields">
              <div></div>
            </div>
            <a class="getstarted-content">GET STARTED</a>
            <div className="getstarted-space"></div>
            <div className="play-button">
              <button class="button-content" type="button">
                <div>
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  </svg>Play Video
                </div>
              </button>
            </div>
          </div>
          <img src={Vscode} alt="vscode" />
        </div> 
        <div className="four-colum">
          <div className="four-columntext">
            <svg className="first-content" viewBox="0 0 280 94" fill="none"><path d="M28.8835 18.7423L1.37576 66.3898C1.26891 66.573 1.20032 66.776 1.17412 66.9865C1.14793 67.197 1.16467 67.4106 1.22335 67.6144C1.28202 67.8183 1.38141 68.0081 1.5155 68.1724C1.6496 68.3368 1.81561 68.4723 2.00353 68.5707C9.68318 72.5175 18.5867 73.3595 26.8701 70.9223C35.1534 68.4851 42.1822 62.9553 46.5005 55.4782L74.8244 6.43342C67.0999 1.97384 57.9203 0.765297 49.3048 3.07363C40.6893 5.38197 33.3436 11.0181 28.8835 18.7423V18.7423Z" fill="#B5B6BB"></path><path d="M30.9949 6.44062L28.9004 8.53516L38.5264 18.1612L40.6209 16.0666L30.9949 6.44062Z" fill="#DADADD"></path><path d="M28.0662 10.0514C30.5201 10.0514 32.5094 8.06214 32.5094 5.60823C32.5094 3.15432 30.5201 1.16504 28.0662 1.16504C25.6123 1.16504 23.623 3.15432 23.623 5.60823C23.623 8.06214 25.6123 10.0514 28.0662 10.0514Z" fill="#DADADD"></path><path d="M24.3809 35.5549V90.6076C24.3804 90.8191 24.4226 91.0285 24.5049 91.2233C24.5872 91.4182 24.7079 91.5944 24.8598 91.7415C25.0117 91.8887 25.1917 92.0037 25.3891 92.0797C25.5864 92.1557 25.797 92.1912 26.0084 92.184C34.6363 91.7655 42.7724 88.0437 48.7311 81.7899C54.6897 75.5361 58.014 67.2296 58.0152 58.5916V1.92285C49.0952 1.92285 40.5405 5.46614 34.233 11.7733C27.9254 18.0805 24.3815 26.6349 24.3809 35.5549Z" fill="#DADADD"></path><path d="M34.752 35.5552C34.7495 38.611 35.3495 41.6374 36.5176 44.4612C37.6857 47.285 39.3989 49.8508 41.5594 52.012C43.7199 54.1731 46.2853 55.8872 49.1087 57.0561C51.9322 58.225 54.9583 58.8259 58.0142 58.8244V12.293C51.8447 12.293 45.9278 14.7438 41.5653 19.1063C37.2028 23.4688 34.752 29.3857 34.752 35.5552V35.5552Z" fill="white"></path><path d="M78.7761 41.6183L58.0156 35.5615V58.8238C62.757 58.8231 67.385 57.3738 71.2799 54.6699C75.1747 51.966 78.1504 48.1366 79.8084 43.6946C79.8855 43.491 79.9196 43.2737 79.9088 43.0563C79.8979 42.8389 79.8423 42.626 79.7454 42.4311C79.6485 42.2362 79.5124 42.0634 79.3456 41.9235C79.1788 41.7837 78.9849 41.6798 78.7761 41.6183V41.6183Z" fill="#A4A5AC"></path><path d="M89.8108 24.5713C87.5242 17.9587 83.2328 12.2235 77.5339 8.1641C71.8351 4.1047 65.0124 1.92306 58.0156 1.92285V35.5549L88.7576 26.5871C88.9619 26.5282 89.1521 26.4286 89.3168 26.2941C89.4815 26.1596 89.6172 25.9931 89.7156 25.8046C89.8141 25.6162 89.8733 25.4097 89.8897 25.1977C89.906 24.9857 89.8792 24.7726 89.8108 24.5713V24.5713Z" fill="#A4A5AC"></path><path d="M48.3816 29.6168C50.4208 29.6168 52.0738 27.9638 52.0738 25.9246C52.0738 23.8855 50.4208 22.2324 48.3816 22.2324C46.3425 22.2324 44.6895 23.8855 44.6895 25.9246C44.6895 27.9638 46.3425 29.6168 48.3816 29.6168Z" fill="#242938"></path><path d="M111.203 18.833H135.784C148.195 18.833 156.244 25.4408 156.244 36.8825C156.244 48.3241 148.186 54.8528 135.784 54.8528H119.908V75.2413H111.203V18.833ZM135.551 47.1081C143.689 47.1081 147.56 43.1555 147.56 36.8778C147.56 30.5118 143.691 26.5638 135.551 26.5638H119.908V47.1127L135.551 47.1081Z" fill="#242938"></path><path d="M157.053 55.2486C157.053 41.468 167.529 34.1348 178.49 34.1348C189.369 34.1348 199.843 41.468 199.843 55.2486C199.843 69.0293 189.38 76.3602 178.49 76.3602C167.529 76.3602 157.053 69.0269 157.053 55.2486ZM191.382 55.2486C191.382 47.0272 185.418 41.7912 178.49 41.7912C171.477 41.7912 165.516 47.0272 165.516 55.2486C165.516 63.47 171.477 68.7061 178.49 68.7061C185.418 68.7061 191.382 63.4747 191.382 55.2486Z" fill="#242938"></path><path d="M206.531 18.833H214.901V75.232H206.531V18.833Z" fill="#242938"></path><path d="M224.014 18.833H232.384V75.232H224.014V18.833Z" fill="#242938"></path><path d="M241.5 91.3498L242.79 83.6934C243.843 84.2151 245.001 84.491 246.176 84.5002C248.431 84.5002 249.882 83.3725 250.931 80.5476L252.944 75.4696L236.506 35.2461H245.934L257.297 63.8443L268.417 35.2461H277.845L258.343 83.2749C255.764 89.6409 252.065 92.2194 246.497 92.2194C244.791 92.247 243.096 91.952 241.5 91.3498Z" fill="#242938"></path></svg>
            <svg  data-name="Layer 1" viewBox="0 0 237.9 41.6"><g id="34101591-00c3-4fd5-9ca8-0f95e95be323" data-name="Layer 2"><g id="c08de82f-55bd-47eb-a992-651c8554dd58" data-name="logos"><path id="7be6f4f0-2d93-4f50-9215-43580a9f1977" data-name=" 247grad" d="M3.7,1.2C7.4.2,16.8-1,22.2,2.3S29,14.1,20.8,20.8C13.4,26.9,9.6,29.6,7,31.8c-2.3,2-1.6,4.4,1.3,4.4H23.5c2.2,0,3,.1,3,2.2s-.6,2.5-3,2.5H6.5c-1.6,0-6.4,0-6.4-6,0-5.5,6.2-8.8,12.2-13.6s9-6.7,9-11.3-6.1-5-9.1-5a29.79,29.79,0,0,0-7.3.9c-1.1.3-3.4,1.2-3.4-1.7C1.5,2.4,1.6,1.8,3.7,1.2ZM55.9,36.8v-23c0-3.4-.9-3.4-2.5-3.4s-2.5,0-2.5,3.4V27.5H37.6c-2,.1-2.2-1.9-1.7-4.1S42,6.3,42.8,3.9,43.7.7,41,.7c-1.5,0-2.7,0-3.7,2.7-1.2,3.1-6,16.6-6.9,20.1s-1.4,8.6,8,8.6H50.8v4.7c0,2.8-.2,3.9,2.2,4.1h.7C56.1,40.7,55.9,39.6,55.9,36.8ZM62.3,5.5h16c2,0,3,1.3,2.1,3.5S66.9,35.2,65.6,37.9s-1.2,3,1.3,3,3.1,0,4.6-2.8S82,18.3,83.8,13.9s3-7.4,1.1-10.2A6.69,6.69,0,0,0,79,.6H62c-2.2,0-2.3,1-2.3,2.3C59.8,5.2,60.5,5.5,62.3,5.5Zm59.8-.7c0-1.7,0-2.5-3.4-3.5S106.1-1.4,99.2,2.5s-6.9,10.6-6.9,13.1V27.5c0,3.1,1.8,14.1,14.7,14.1h6.7c1,0,8.8,0,8.8-8.7V23c0-1.2.2-2.8-2.3-2.8h-8.1c-1.4,0-1.7.6-1.7,1.7v1.4c0,.5-.1,1.8,2.2,1.8h4.8v8.5c0,1.7,0,3.4-7.4,3.4s-12.1-2.5-12.1-9.8V14.4c0-2.7,1.4-8.6,9.8-9.2S119,6.3,120,6.7s2.1.8,2.1-1.9Zm77.5,36.5c-1.4,0-2.5-.1-3-2.1-.1-.6-.8-3.1-1.8-6.6H174.1c-.9,3.5-1.6,6-1.8,6.6-.5,2-1.6,2.1-3,2.1-2.1,0-3.6,0-2.6-3,1.2-3.7,6.9-24.5,9-30.8,2-6,3.9-7.4,8.5-7.6h.6c4.6.1,6.5,1.5,8.5,7.6,2,6.3,7.8,27,9,30.8.9,3-.5,3-2.7,3Zm-6.1-13.8c-2.3-8.3-5.1-18.3-5.6-20-.8-2.4-2.2-2.7-3.1-2.7h-.6c-.9,0-2.3.3-3.1,2.7-.6,1.8-3.3,11.7-5.6,20ZM159.5,41c-1.2,0-3,.3-4-1.1s-7.8-12.1-10-15.1h-10v14c0,1.8-.9,2.3-2.7,2.3s-2.6-.7-2.6-2.2V6.9c0-4,2.3-6.2,7.3-6.2h12.4c2.8,0,11,1,11,12.4,0,8.7-4.5,10.9-9.1,11.5,1.6,2.6,7.5,11.9,9.1,14C162.7,40.9,160.8,41,159.5,41Zm-11-21.2c6.2,0,7-3.5,7-7.3,0-6.9-5.4-7-6.9-7h-9.7c-2.7,0-3.4.8-3.4,2.2v12Zm89.4-5.5V25.6c0,3,.1,15.3-15.3,15.3h-10a5.31,5.31,0,0,1-5.3-5.2V8.7c0-3.6.1-8,7.2-8h7.3c3.7-.1,16.1.2,16.1,13.6Zm-5.3-.5c0-2.2-1.3-7.9-10.9-7.9h-6.9c-1,0-2,.4-2,2.6V33.7c0,1.4.4,2.5,2.5,2.5H225c1.4,0,7.6-1.8,7.6-8.3Z" ></path></g></g></svg>
            <svg id="25a37593-0c7c-4a12-907f-2cd205f24ec9" data-name="Layer 1" viewBox="0 0 250.7 87.7"><defs><clipPath id="b2899483-5a1c-4aab-93f1-f95e87e5cd9a"><polygon points="38 9.2 40.7 11.4 45.8 19.5 48.3 28.9 49.3 35.6 49.3 43.9 48.4 53.9 46 63.1 38 73 38 9.2"></polygon></clipPath><clipPath id="c6e30490-94af-411a-8fe2-5f56858b3998"><polygon points="38 9.2 35.3 11.4 30.1 19.5 27.6 28.9 26.6 35.6 26.6 43.9 27.5 53.9 30 63.1 38 73 38 9.2"></polygon></clipPath></defs><path d="M76.5,57.7V29.9a14.44,14.44,0,0,0-7.2-12.5L45.5,3.6A14.45,14.45,0,0,0,31,3.6L7.2,17.5A14.16,14.16,0,0,0,0,29.9V57.7A14.44,14.44,0,0,0,7.2,70.2L31,84.1a14.45,14.45,0,0,0,14.5,0L69.4,70.3A14.73,14.73,0,0,0,76.5,57.7Z"></path><path d="M49.7,44.4a22.67,22.67,0,0,0-22.8,0L.2,59.9a14.23,14.23,0,0,0,7,10.3L31,84.1a14.45,14.45,0,0,0,14.5,0L69.4,70.3a14.23,14.23,0,0,0,7-10.3Z"></path><path d="M72.3,67.9,49.7,54.7a22.67,22.67,0,0,0-22.8,0L4.2,67.9a13.31,13.31,0,0,0,3,2.3L31,84.1a14.45,14.45,0,0,0,14.5,0L69.4,70.3A13.74,13.74,0,0,0,72.3,67.9Z"></path><path d="M49.7,65.1a22.67,22.67,0,0,0-22.8,0L12.6,73.4,31,84.1a14.45,14.45,0,0,0,14.5,0L64,73.4Z"></path><polyline points="29.2 23.8 76.5 50.9 76.5 29.9 38 9.2"></polyline><polygon points="38 9.2 35.3 11.4 30.1 19.5 27.6 28.9 26.6 35.6 26.6 43.9 27.5 53.9 30 63.1 38 73 38 9.2"></polygon><polygon points="38 9.2 40.7 11.4 45.8 19.5 48.3 28.9 49.3 35.6 49.3 43.9 48.4 53.9 46 63.1 38 73 38 9.2"></polygon><ellipse cx="38.1" cy="41.3" rx="7.3" ry="9.1"></ellipse><polygon points="31.4 62.7 29 53.5 28 43.5 28 35.2 29.1 28.5 31.6 19.2 36.7 11 38 10 38 9.2 35.3 11.4 30.1 19.5 27.6 28.9 26.6 35.6 26.6 43.9 27.5 53.9 30 63.1 38 73 38 70.9 31.4 62.7"></polygon><g ><path d="M49.7,65.3,35.8,57.4l1.4-2.5,13.9,7.9Z"></path></g><g><path d="M26.3,65.3l-1.4-2.5,13.9-7.9,1.4,2.5Z"></path></g><polygon points="7.4 55.4 6.1 58.1 5.9 61.4 23.5 51.6 23.2 50.9 16.2 50.4 7.4 55.4"></polygon><rect x="16.9" y="43.72" width="38.9" height="1.2" transform="translate(-16.96 23.26) rotate(-29.09)"></rect><polygon points="5.9 61.4 10.2 63.3 13.8 62.8 22.6 57.5 23.7 52.1 23.5 51.7 5.9 61.4"></polygon><polygon points="64.7 23.5 67.7 23.8 70.6 25.4 53 35.2 52.6 34.6 55.9 28.4 64.7 23.5"></polygon><polygon points="70.6 25.5 70 30.1 67.6 32.9 58.4 37.6 53.3 35.6 53.1 35.2 70.6 25.5"></polygon><path d="M115,17.3H97.1V62.9h4.4V45.7H115a13.19,13.19,0,0,0,13.2-13.2v-2A13.19,13.19,0,0,0,115,17.3Zm8.8,15.2a8.75,8.75,0,0,1-8.8,8.8H101.5V21.7H115a8.75,8.75,0,0,1,8.8,8.8Z"></path><path d="M157.2,38a14.64,14.64,0,0,0-11.8-5.8,15.9,15.9,0,0,0,0,31.8h0a14.49,14.49,0,0,0,11.8-5.8V64h4.4V32.9h-4.4ZM145.6,60.1a12,12,0,1,1,11.8-14.5v5.1a12.26,12.26,0,0,1-11.8,9.4Z"></path><path d="M195.5,38a14.64,14.64,0,0,0-11.8-5.8,15.9,15.9,0,0,0,0,31.8h0a14.49,14.49,0,0,0,11.8-5.8V64h4.4V16.1h-4.4ZM183.8,60.1a12,12,0,1,1,11.8-14.5v5.1a12.18,12.18,0,0,1-11.8,9.4Z"></path><path d="M232.2,38a14.64,14.64,0,0,0-11.8-5.8,15.9,15.9,0,0,0,0,31.8h0a14.49,14.49,0,0,0,11.8-5.8V64h4.4V16.1h-4.4ZM220.5,60.1a12,12,0,1,1,11.8-14.5v5.1a12.18,12.18,0,0,1-11.8,9.4Z"></path><rect x="246.1" y="16.1" width="4.4" height="47.9"></rect><polygon points="38 73 51.5 80.5 63.9 73.4 46 63.1 38 73"></polygon></svg>
            <svg id="486d90a5-96ce-4a94-b1f2-fb69808ed877" data-name="Layer 1" viewBox="0 0 219.7 63.2"><g id="0c9f8ce9-95eb-4f6c-b3a5-67cea67d01c4" data-name="Layer 2"><g id="232b9a0e-bfc9-4fe6-9097-61384eef7031" data-name="logos"><path id="07af3530-8cfb-4443-8d34-79f3e05fe703" data-name="logmein" d="M22,43.1a1.37,1.37,0,0,1,1.4,1.4h0v4.1A1.37,1.37,0,0,1,22,50H1.4A1.37,1.37,0,0,1,0,48.6H0V13.4A1.37,1.37,0,0,1,1.4,12H6.7a1.37,1.37,0,0,1,1.4,1.4V41.7a1.37,1.37,0,0,0,1.4,1.4Zm30.2-7.8v2A13.49,13.49,0,0,1,38.8,50.8H37.5A13.57,13.57,0,0,1,24,37.3v-2A13.51,13.51,0,0,1,37.5,21.8h1.3A13.55,13.55,0,0,1,52.2,35.3Zm-7.5-1.1a6.55,6.55,0,0,0-13.1-.5v4.8a6.55,6.55,0,1,0,13.1.5V34.2ZM81.5,23.9V49c0,2.8-1.2,11.3-13.1,11.3S54,51.5,56.5,51.5h4.6c2,0,2.7,3.8,6.4,3.8s7-1.3,7-6.5c0-1.4.3-3.3-1.4-2.1h0a11,11,0,0,1-6.9,2.7c-6.5,0-11.8-6.2-11.8-13.9s5.3-13.9,11.8-13.9a10.6,10.6,0,0,1,7.1,2.8.78.78,0,0,0,1.1,0,.76.76,0,0,0,.2-.5v-.2A1.42,1.42,0,0,1,76,22.4h4.1a1.52,1.52,0,0,1,1.4,1.5ZM74.7,35.7c0-4.5-2.9-8.1-6.5-8.1s-6.5,3.6-6.5,8.1,2.9,8.1,6.5,8.1S74.7,40.2,74.7,35.7Zm49.5-23.5h-8.8a2.19,2.19,0,0,0-1.9,1.4l-8.1,22.7c0,.1-.2.2-.3.2s-.1-.1-.2-.2L96.8,13.6a2.19,2.19,0,0,0-1.9-1.4H86.1a1.37,1.37,0,0,0-1.4,1.4h0V48.5a1.37,1.37,0,0,0,1.4,1.4H91a1.37,1.37,0,0,0,1.4-1.4h0V26.1a.56.56,0,0,1,.6-.5c.2,0,.3.1.4.3l8,22.5a2.19,2.19,0,0,0,1.9,1.4h3.5a2.19,2.19,0,0,0,1.9-1.4l8-22.5a.44.44,0,0,1,.7-.2c.2.1.3.2.3.4V48.5a1.37,1.37,0,0,0,1.4,1.4H124a1.37,1.37,0,0,0,1.4-1.4h0V13.6a1.33,1.33,0,0,0-1.2-1.4Zm30.7,23.1v1.8a.94.94,0,0,1-1,1H135.7a.94.94,0,0,0-1,1v.1a6.72,6.72,0,0,0,7,6.1,7.28,7.28,0,0,0,6-3.3,1.37,1.37,0,0,1,.8-.5h4.1a1,1,0,0,1,1,1,.6.6,0,0,1-.1.4,13.47,13.47,0,0,1-12.2,7.8h-.6a13.4,13.4,0,0,1-13.4-13.4v-2a13.4,13.4,0,0,1,13.4-13.4h.6A13.38,13.38,0,0,1,154.9,35.3Zm-7.5-3.1a6.42,6.42,0,0,0-12.5,0,.92.92,0,0,0,.7,1.1h10.9a.9.9,0,0,0,.9-.9v-.2ZM188.1,0a31.6,31.6,0,1,0,31.6,31.6A31.54,31.54,0,0,0,188.1,0ZM177.4,48.8a1.32,1.32,0,0,1-1.3,1.3h-5.5a1.32,1.32,0,0,1-1.3-1.3V14a1.32,1.32,0,0,1,1.3-1.3h5.5a1.32,1.32,0,0,1,1.3,1.3Zm31-18V49.2a.9.9,0,0,1-.9.9h-5.4a.9.9,0,0,1-.9-.9h0v-17c0-1.9-2.2-4.1-5-4.1h-.4a5.59,5.59,0,0,0-5.6,5.6V45.1h0v4a.94.94,0,0,1-1,1h-5a.94.94,0,0,1-1-1v-25a.94.94,0,0,1,1-1h5a.94.94,0,0,1,1,1v1.5a.43.43,0,0,0,.4.4c.1,0,.2-.1.3-.2a8.83,8.83,0,0,1,6.7-3.4h2.5a8.48,8.48,0,0,1,8.4,7.8v.2Z"></path></g></g></svg>
          </div>
        </div>
        <div className="focus-content">
          <div className="focus-contentText">
            <div className="focus-text">
              <div className="coding-animation">
                <div>
                  <h2>Focus on <span className="coding-textContents"> coding</span></h2>
                  <span className="animate-text">
                    <svg class="cloud-line" xmlns="http://www.w3.org/2000/svg" width="504" height="106" viewBox="0 0 504 106"><path fill="none" stroke="#007aff" stroke-linecap="round" stroke-width="43" d="M1106,1813.61193 C1391.48757,1788.3249 1542.09692,1785.22818 1557.82804,1804.32178 C1581.42472,1832.96217 1297.6495,1822.13368 1191.16891,1835.26224 C1084.68832,1848.39079 1016.09991,1866.56524 1566,1841.45052" transform="translate(-1084 -1770)"></path></svg>
                    <span className="animating-text">animating</span>
                  </span>
                </div>
                <p className="intutive-interface">
                  <strong>Intuitive interface</strong>
                  <br />Packed with all the tools you need, SVGator is the ultimate 
                  SVG animation generator: a thoughtfullydesigned, intuitive interface, right at your fingertips.</p>
                <p className="intutive-interface">
                  <strong>Quick workflow</strong>
                  <br />Take your SVG to a whole new level without writing a single line of code. Focus on creating the animation; SVGator takes care of the rest.</p>
              </div>
              <img src={VscodeExt} alt="vscodeExt" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 110" class="r_C"><path d="M 0 0 L 1920 0 L 960 110 Z" fill="#fff"></path></svg>
            </div>
            <div className="make-interactive">
              <div className="make-overall">
                <h2 className="make-text">
                  <span className="maketext-content">Make</span>
                  <span className="inter-cloudsection">
                    <svg class="inter-clouds" xmlns="http://www.w3.org/2000/svg" width="504" height="106" viewBox="0 0 504 106">
                      <path fill="none" stroke="#B053D8" stroke-linecap="round" stroke-width="43" d="M1106,1813.61193 C1391.48757,1788.3249 1542.09692,1785.22818 1557.82804,1804.32178 C1581.42472,1832.96217 1297.6495,1822.13368 1191.16891,1835.26224 C1084.68832,1848.39079 1016.09991,1866.56524 1566,1841.45052" transform="translate(-1084 -1770)"></path>
                    </svg>
                    <span class="interactive-contents">interactive</span>
                  </span>                  
                </h2>
              </div>
              <span className="maketext-content">SVG animations</span>
              <div className="control-overall">
                <div className="control-section">
                  <p className="control-content">
                    <strong>Control how it starts</strong>
                    <br/>
                    Set the animation to start on click, on scroll, and more, to flash out a full user experience with interactive SVG animations, using a worry-free animation tool that is always one click away.
                  </p>
                  <p className="control-content">
                    <strong>Choose how it ends</strong>
                    <br/>
                    Control what happens on the second click or on mouse out to make your animation more engaging.
                  </p>
                </div>
                <img src={RevImg} className="rev-img" alt="revImg" />
              </div>
              <div className="tryout-overall">
                <div className="tryout-section">
                 <div className="focus-text">
                  <div className="coding-animation">
                    <div className="codingcontent-overall">
                      <h2 className="try-outtext">Try Out all</h2>
                      <span className="animate-text">
                        <svg class="cloud-line" xmlns="http://www.w3.org/2000/svg" width="504" height="106" viewBox="0 0 504 106"><path fill="none" stroke="#60f" stroke-linecap="round" stroke-width="43" d="M1106,1813.61193 C1391.48757,1788.3249 1542.09692,1785.22818 1557.82804,1804.32178 C1581.42472,1832.96217 1297.6495,1822.13368 1191.16891,1835.26224 C1084.68832,1848.39079 1016.09991,1866.56524 1566,1841.45052" transform="translate(-1084 -1770)"></path></svg>
                        <span className="animating-text">animators</span>
                      </span>
                    </div>
                    <p className="intutive-interface">
                      <strong>Endless possibilities</strong>
                      <br />Animate icons, logos, backgrounds, and other illustrations. Power up your SVG with various path, morph, filter, or color animations.</p>
                    <p className="intutive-interface">
                      <strong>Clipping masks</strong>
                      <br />Make your animation visible only inside clearly-defined shapes with the help of clipping masks. Use the most advanced features for SVG animation.</p>
                    <img src={RotateImg} className="rotate-img" alt="" />
                  </div>
                </div>
                </div>
              </div>
              <div className="createline-overall">
                <div className="createline-text">
                  <h2 className="line-createcontent">Create line animation easily</h2>
                  <p className="intutive-interface">
                    <strong>Animate stroke properties</strong>
                    <br />Spice up your animated SVG with the Stroke Offset and Stroke Dash animators. You can use these powerful features for handwriting, self-drawing,or self-erasing effects.</p>
                </div>
                <img src={Pencloud} className="pencloud-img" alt="pencloud" />
                <svg class="T_cH" id="egnhcunrwss1" viewBox="0 0 3840 428" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="egnhcunrwss2" d="M -959.9999916050001 149.1093567752451 L -959.9999916050001 253.37080779132774 C -342.8872491052291 225.6052855489633 38.07265039270979 325.7891325000072 802.0182333078544 336.1880683110421 C 1716.1636977795608 363.5919067600257 2185.6431714689343 255.64651900018077 2880.000008395 253.37080779132774 L 2880.000008395 79.36113435077675 C 2115.090541677342 18.98101107370621 1353.8602095186743 200.25488734503165 752.2424254396817 210.84504442625206 C 89.33522795708838 222.68924007595834 -367.5703140560604 157.3343627073675 -959.9999916050001 149.1093567752451 Z" transform="matrix(1 0 0 1 959.99999160500010 0)" fill="rgb(9,21,95)" stroke="none" stroke-width="1"></path></svg> 
              </div>
              <div className="pro-overall">
                <div className="pro-text">
                  <h3 className="pro-createcontent">Be a pro right away</h3>
                  <p className="intutive-interface">
                    <strong>Tutorials at your fingertips</strong>
                    <br />Get started easily with step-by-step tutorials, or read the instructions in our help center.</p>
                  <p className="intutive-interface">
                    <strong>Always just a click away</strong>
                    <br />There is no need to download a software or plugin on your device. You can start animating SVG online from anywhere, at any time.</p>
                  <img src={Tutorials} className='tutorials-img' alt="tutorials" />
                </div>
              </div>
              <div className="createline-overall">
                <div className="createline-text">
                  <h2 className="line-createcontent">Export a single animated </h2>
                  <span className="svg-file">SVG file</span>
                  <p className="intutive-interface">
                    <strong>Simple and efficient</strong>
                    <br />While you are focusing on creative work, SVGator???s got you covered with generating and wrapping all of your code into a single animated SVG file that you can export at the end.</p>
                    <p className="intutive-interface">
                    <strong>CSS or JavaScript</strong>
                    <br />You are free to choose CSS or JavaScript as the animation type!</p>
                </div>
                <div class="javascript-img"><img class="V_cN" src="//cdn.svgator.com/assets/main-page/fold7/export-settings-2.png" alt="" /></div>
                <div class="V_cL">
                <svg class="V_cH" id="eh00m6ibv6o1" viewBox="0 0 3840 560" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <defs><linearGradient id="eh00m6ibv6o2-fill" x1="0" y1="251.490000" x2="1920" y2="251.490000" spreadMethod="pad" gradientUnits="userSpaceOnUse">
                <stop id="eh00m6ibv6o2-fill-0" offset="0%" stop-color="rgb(133,4,245)"></stop>
                <stop id="eh00m6ibv6o2-fill-1" offset="100%" stop-color="rgb(0,123,245)"></stop>
                </linearGradient>
                <radialGradient id="eh00m6ibv6o3-fill" cx="0" cy="0" r="829.480000" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 950.80999999999995 180.06000000000000)">
                <stop id="eh00m6ibv6o3-fill-0" offset="0%" stop-color="rgb(243,114,142)"></stop><stop id="eh00m6ibv6o3-fill-1" offset="100%" stop-color="rgb(243,124,188)"></stop></radialGradient></defs><path id="eh00m6ibv6o2" d="M 0 165.97062217945083 L 0 395.32 C 217.09180534986538 340.86592626412397 416.5234689741484 319.23349865399763 810.9076262827841 313.70521027083794 C 1393.7893522098543 309.54016184850883 1525.6459590657626 202.4135850089463 1899.926815697628 190.5888882129194 C 2364.758972447086 175.1090187321229 2311.1478017161903 234.33481304359012 2829.9492525343335 238.67710912866667 C 3353.9305181538293 243.06056441834113 3415.2417722354953 397.5243381012177 3839.8627098833326 413.67963797583747 L 3839.8627098833326 196.70625821291938 C 3611.152341014989 208.61743709292767 3440.4368195173993 203.7907454778326 3119.721092417239 150.7607318399157 C 2903.3636486957053 114.52751358965924 2567.024851118625 94.24955105179427 2234.364371743374 91.31664565424423 C 1695.626797922146 97.1396149254071 1668.7827698239732 160.64030710940798 1140.301665091333 181.52891551278418 C 627.4739563531356 200.6865989945897 447.005247212403 102.55319296419984 0 165.97062217945083 Z" fill="url(#eh00m6ibv6o2-fill)" stroke="none" stroke-width="1"></path><path id="eh00m6ibv6o3" d="M 0.1372901166666671 368.93720306918607 L 0.8636098833333364 519.299091345466 C 367.31050797287645 524.4439919202013 902.1713846037094 451.65393858884653 1196.0608769044163 419.19990576341644 C 1606.0399277842964 374.1163301460687 1789.285071596835 421.2480724906286 2201.5138492080728 402.1528871613503 C 2588.403250809504 390.09169785057225 2638.193067802619 342.43231474155914 2915.9318486043317 359.19568408366666 C 3192.649789535955 374.93524998557615 3476.739333725641 497.22746787985153 3840.726319766665 497.22746787985153 L 3840.726319766665 314.22523992154976 C 3453.3446002822047 334.18445350969154 3240.1190321754825 279.5331729773579 2896.245067113725 281.3438010328236 C 2546.1949322177015 281.4429282865709 2301.81846532739 256.5736913327145 1871.905715183243 225.6808768324902 C 1460.320301426128 218.05682549912774 1383.8977248940328 286.24010567638805 1057.8818947788188 310.2950463604105 C 637.8292505154628 348.7568266886804 476.38467290238674 376.8836838460019 0.1372901166666671 368.93720306918607 Z" fill="url(#eh00m6ibv6o3-fill)" stroke="none" stroke-width="1"></path></svg></div>
                <div className="createline-texts">
                  <h2 className="line-createcontent">Animate SVG <br/>like never <br/>before</h2> 
                  <p className="intutive-interface">
                    <strong>Full timing control</strong>
                    <br />Get full control over your animation with easing functions: use presets or customize the easing graph.</p>
                    <p className="intutive-interface">
                    <strong>Seamless workflow</strong>
                    <br />Fine-tune the timing, path, and speed of your SVG animations. Add, delete, drag, or duplicate keyframes within minutes.</p>
                    <img src={CustomEase} alt="customEase" />
                    
                </div> 
                <img src={VerticalLine} className="vertical-line" alt="verticalLine" />              
              </div>
            </div>
          </div>
        </div>
        <div className="started-content">
          <div className="get-started">
            <h3 className="started-today">Get started with SVGator today</h3>
            <p className="gettingstarted-content">Getting started on your next SVG animation project is effortless, whether you???re a complete beginner or a seasoned pro.</p>
            <a href="https://app.svgator.com/auth/register" class="signup-button" aria-label="Sign up">Sign up</a>
          </div>
        </div>
        {/* <div className="footer-overallcontent">
          <div className="footer-header">
            <div className="svgator-logo">
              <div>SVGator</div>
            </div>
            <div className="first-footercontent">
              <div className="first-content">
                <h3 className="svgator-footer">SVGATOR</h3>
                <ul className="footertext-content">
                  <li className="footerlist-content">
                    <a className="contents-footer" href="https://www.svgator.com/about-us">About us</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/contact">Contact</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/pricing">Pricing</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/terms-of-service">Terms of Service</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
                <div class="second-content">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li>
                      <a href="/help">Help Center</a>
                    </li>
                    <li>
                      <a href="/tutorials">Tutorials</a>
                    </li>
                    <li>
                      <a href="https://www.svgator.com/resources/20-reasons-use-svg-animations">eBook</a>
                    </li>
                    <li>
                      <a href="https://www.svgator.com/blog">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-overallcontent">
          <div className="container">
            <div className="row display-footer">
              <div className="col-md-3">
                <p className="svgator-footerheader">Svgator</p>
                <ul className="footertext-content">
                  <li className="footerlist-content">
                    <a className="contents-footer" href="https://www.svgator.com/about-us">About us</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/contact">Contact</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/pricing">Pricing</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/terms-of-service">Terms of Service</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 second-footercontents">
                <p className="svgator-footerheader">Resources</p>
                <ul className="footertext-content">
                  <li className="footerlist-content">
                    <a className="contents-footer" href="https://www.svgator.com/about-us">Help Center</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/contact">Tutorials</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/pricing">eBook</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/terms-of-service">Blog</a>
                  </li>
                </ul>
              </div> 
              <div className="col-md-3 third-footercontents">
                <p className="svgator-footerheader">Features</p>
                <ul className="footertext-content">
                  <li className="footerlist-content">
                    <a className="contents-footer" href="https://www.svgator.com/about-us">Mobile Expert</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/contact">Animate Icons</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/pricing">CSS Loader</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/terms-of-service">Create SVG</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Interactive SVG</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Logo Animation</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 fourth-footercontents">
              <p className="svgator-footerheaders">Features</p>
                <ul className="footertext-content">
                  <li className="footerlist-content">
                    <a className="contents-footer" href="https://www.svgator.com/about-us">Morph Animation</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/contact">Move on Path</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/pricing">Path Animation</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/terms-of-service">SVG Animation Tool</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Vector Animation</a>
                  </li>
                  <li className="footerlist-content">
                    <a className="contents-footer" href="/privacy-policy">Ecommerece Animations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-content">
            ??2022 SVGator. All Rights Reserved.
          </div>
        </div>
      </div>
    );  
   }
}       
export default Svgator;


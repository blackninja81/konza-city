import './footer.scss'
import Image from "next/image";
import instagram from '../../../../public/assets/images/logo/instagram.svg'
import tiktok from '../../../../public/assets/images/logo/tiktok.svg'
import logo from "../../../../public/assets/images/logo/logo.png";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <Image
            className="main-logo"
            src={logo}
            height={180}
            width={180}
            alt="ultraclean-logo"
          />
      </div>
      <div className='footer-link'>
        <h3>External Links</h3>
        <ul>
          <li><a href='/'>Kenya Ministry of ICT</a></li>
          <li><a href='/about'>Kenya Revenue Authority</a></li>
          <li><a href='/about'>Huduma Centre</a></li>
          <li><a href='/about'>E-Citizen</a></li>
          <li><a href='/about'>EPZA</a></li>
        </ul>
      </div>
      <div className='footer-link'>
        <ul>
          <li><a href='/'>Kenya Investment Authority</a></li>
          <li><a href='/about'>Kenya Vision 2030</a></li>
          <li><a href='/about'>ICT Authority</a></li>
          <li><a href='/about'>National Environment</a></li>
          <li><a href='/about'>Management Authority</a></li>
        </ul>
      </div>
      <div className='footer-link'>
        <ul>
          <li><a href='/'>National Construction Authority</a></li>
          <li><a href='/about'>National Land Commission</a></li>
          <li><a href='/about'>Public Service Commission</a></li>
          <li><a href='/about'>Ministry of Land, Housing, & Urban Development</a></li>
          <li><a href='/about'>KenInvest</a></li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h4>Contact Us</h4>
        <span className="socials">
        <a href="#" target="_blank">
        <Image
            src={instagram}
            height={20}
            width={20}
            alt="instagram-image"
            />
            </a>
            <a href="#" target="_blank">
            <Image
            src={tiktok}
            height={20}
            width={20}
            alt="tiktok-image"
            />
            </a>
        </span>
        <p>Email: info@info.com</p>
        <p>Phone: +254 123 456 789</p>
      </div>
    </div>
  )
}

export default Footer;

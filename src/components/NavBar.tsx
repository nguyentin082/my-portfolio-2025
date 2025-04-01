import logo from '../assets/logoWhite.png';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

function NavBar() {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img
                        src={logo}
                        alt="SniT's Logo"
                        className="mx-2"
                        width={130}
                        height={33}
                    />
                </a>
            </div>
            {/* Link */}
            <div className="flex flex-row">
                <div className="sm:m-8 m-3 flex items-center justify-center sm:gap-4 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/nguyentin082/"
                        target="_blank"
                        aria-label="Linkedin"
                    >
                        <FaLinkedin className="sm:text-3xl text-2xl" />
                    </a>
                </div>
                <div className="sm:m-8 m-3 flex items-center justify-center gap-4 text-2xl">
                    <a
                        href="https://github.com/nguyentin082/"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <FaGithub className="sm:text-3xl text-2xl" />
                    </a>
                </div>
                <div className="sm:m-8 m-3 flex items-center justify-center gap-4 text-2xl">
                    <a
                        href="https://www.facebook.com/trungtin.h.nguyen.908/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="sm:text-3xl text-2xl" />
                    </a>
                </div>
                <div className="sm:m-8 m-3 flex items-center justify-center gap-4 text-2xl">
                    <a
                        href="https://www.instagram.com/trungtin.h.nguyen.908/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="sm:text-3xl text-2xl" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

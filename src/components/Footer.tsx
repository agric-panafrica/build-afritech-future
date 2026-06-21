import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const linkedInUrl =
  'https://www.linkedin.com/in/samuel-baah-9a8500192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-brand-ink text-white/90">
      <div className="brand-rule h-1" aria-hidden="true" />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          <div className="space-y-4 md:col-span-6">
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" />
              <span className="text-xl font-extrabold text-white">AFRITECH CAPITAL</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              We help African tech founders prepare the strategy, financial model, and pitch materials investors expect before a serious raise.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase text-white/70">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-white/85 transition-colors duration-200 hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-white/85 transition-colors duration-200 hover:text-accent">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-white/85 transition-colors duration-200 hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-white/85 transition-colors duration-200 hover:text-accent">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/85 transition-colors duration-200 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-3">
            <h4 className="text-xs font-semibold uppercase text-white/70">Connect</h4>
            <div className="flex space-x-3.5">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:text-accent"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:text-accent"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 p-2.5 text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:text-accent"
                aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-1.5 pt-2 text-xs text-white/75">
              <p>afritechcapitalghana@gmail.com</p>
              <p>+233-24-350-3268</p>
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/70 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Afritech Capital Ghana. All rights reserved.
          </p>
          <p>
            Investor readiness for African founders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

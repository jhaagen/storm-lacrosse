import React from 'react';
import ButtonLink from './ButtonLink';
import { contact } from '../data/season';
import './Footer.scss';

function Footer({ compact = false }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        {!compact && (
          <div className="site-footer__top">
            <div>
              <h2 className="display site-footer__title">Questions?</h2>
              <a className="site-footer__email" href={`mailto:${contact.email}`}>{contact.email}</a>
              <p className="site-footer__note">Season updates go out through the GameChanger app.</p>
            </div>
            <ul className="plain-list site-footer__social">
              <li><ButtonLink href={contact.facebook} variant="outline">Facebook</ButtonLink></li>
              <li><ButtonLink href={contact.instagram} variant="outline">Instagram</ButtonLink></li>
            </ul>
          </div>
        )}
        <div className="site-footer__bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Storm | Fort Wayne Boys Lacrosse. All Rights Reserved.</p>
          <p>fwblacrosse.org</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

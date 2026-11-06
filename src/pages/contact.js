import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { ArrowIcon, BoltIcon } from '../components/Icons';
import { contact } from '../data/season';

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<><span className="line">Got questions?</span>{' '}<span className="line text-green">Hit us up.</span></>}
        lead="Have questions about Fort Wayne Storm Lacrosse? We'd love to hear from you."
        outlineWord="Hello"
      />
      <Section className="section--flush-top contact">
        <a className="link-card link-card--green contact__email" href={`mailto:${contact.email}`}>
          <span>
            <span className="eyebrow">Email us</span>
            <span className="display contact__address">{contact.email}</span>
          </span>
          <ArrowIcon diagonal className="link-card__arrow" />
        </a>
        <ul className="plain-list grid contact__social">
          <li>
            <a className="link-card link-card--outline" href={contact.facebook}>
              <span>
                <span className="contact__follow">Follow</span>
                <span className="display link-card__name">Facebook</span>
              </span>
              <ArrowIcon diagonal className="link-card__arrow" />
            </a>
          </li>
          <li>
            <a className="link-card link-card--outline" href={contact.instagram}>
              <span>
                <span className="contact__follow">Follow</span>
                <span className="display link-card__name">Instagram</span>
              </span>
              <ArrowIcon diagonal className="link-card__arrow" />
            </a>
          </li>
        </ul>
        <p className="notice">
          <BoltIcon className="notice__bolt" />
          <span><strong>Already registered?</strong> Team updates, schedule changes and game info go out through the GameChanger app.</span>
        </p>
      </Section>
    </>
  );
}

export default Contact;

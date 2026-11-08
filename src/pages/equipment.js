import React from 'react';
import Eyebrow from '../components/Eyebrow';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { ArrowIcon, BoltIcon } from '../components/Icons';
import { vendors } from '../data/season';

const CHECKLIST = [
  { name: 'Helmet', note: 'Must fit properly' },
  { name: 'Stick' },
  { name: 'Gloves' },
  { name: 'Elbow pads' },
  { name: 'Chest protector' },
  { name: 'Cleats' },
  { name: 'Athletic cup' },
  { name: 'Mouth guard' },
];

const CARE_TIPS = [
  { title: 'Air it out', body: "Don't leave damp gear zipped in the bag. Take it out and let it air out every day." },
  { title: 'Wipe it down', body: 'Clean pads and helmets with a damp cloth and an anti-bacterial spray.' },
  { title: 'Stuff it', body: 'Push newspaper into wet gloves and stick pockets to soak up moisture.' },
];

function Equipment() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title={<>Gear <span className="text-green">up.</span></>}
        lead="Here's everything a field player needs, where to buy it and how to keep it from smelling like a locker room."
        outlineWord="Gear"
        aside={
          <div className="callout cut-corner">
            <h2 className="display callout__title">New to lacrosse?</h2>
            <p>Borrow gear first. We loan equipment to new players so they can try the sport before buying anything.</p>
          </div>
        }
      />

      <Section className="section--flush-top checklist">
        <h2 className="display checklist__title">The checklist</h2>
        <ul className="plain-list checklist__grid">
          {CHECKLIST.map((item, index) => (
            <li key={item.name} className="checklist__item">
              <span className="outline-num checklist__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span>
                <span className="checklist__name">{item.name}</span>
                {item.note && <span className="checklist__note">{item.note}</span>}
              </span>
            </li>
          ))}
        </ul>
        <p className="notice notice--green">
          <BoltIcon className="notice__bolt" />
          <span><strong>Goalies:</strong> you need specialized gear. Check with the club before you buy.</span>
        </p>
      </Section>

      <Section className="vendors">
        <Eyebrow>Where to shop</Eyebrow>
        <h2 className="display h2-section">Suggested vendors</h2>
        <ul className="plain-list grid vendors__grid">
          {vendors.map((vendor) => (
            <li key={vendor.name}>
              <a className="link-card link-card--outline" href={vendor.url}>
                <span className="display link-card__name">{vendor.name}</span>
                <ArrowIcon diagonal className="link-card__arrow" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" angle="top" className="care">
        <Eyebrow>Gear care</Eyebrow>
        <h2 className="display h2-section">Keep it fresh.</h2>
        <ul className="plain-list grid care__tips">
          {CARE_TIPS.map((tip) => (
            <li key={tip.title} className="care__tip">
              <h3 className="care__title">{tip.title}</h3>
              <p>{tip.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default Equipment;

import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import Eyebrow from '../components/Eyebrow';
import Section from '../components/Section';
import RegisterBlock from '../components/RegisterBlock';
import { ArrowIcon, BoltIcon } from '../components/Icons';
import { areaTeams, fees, links, photos, practices, teams } from '../data/season';

const BAND_ITEMS = ['Grades 3–8', '10U · 12U · 14U', 'No experience needed', 'Travel team'];

const WHO_CARDS = [
  { title: 'Travel team', body: 'We play right here in the Fort Wayne, Indy and South Bend area, with league games all spring and a tournament.' },
  { title: 'Volunteer coaches', body: "Storm is run by volunteers who know the game and are invested in every player's success." },
  { title: 'Every level', body: "Seasoned player or first time picking up a stick, there's a place for you here." },
];

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__outline" aria-hidden="true">
          <span className="outline-word">Storm</span>
        </div>
        <div className="wrap home-hero__inner">
          <div className="home-hero__text">
            <p className="home-hero__tag label"><span>Spring 2027 registration is open</span></p>
            <h1 className="display h1-home">
              <span className="line">Bring</span>{' '}
              <span className="line">the <span className="text-green">Storm.</span></span>
            </h1>
            <p className="lead home-hero__lead">
              Youth boys travel lacrosse for grades 3–8 in Fort Wayne. Brand new to the game or already hooked, players of every experience level are welcome on the Storm.
            </p>
            <div className="home-hero__actions">
              <ButtonLink href={links.registration} hero arrow>Register now</ButtonLink>
              <ButtonLink to="/schedule/" variant="outline" hero>See the schedule</ButtonLink>
            </div>
            <p className="home-hero__note label">${fees.early} early rate through {fees.earlyDeadline}</p>
          </div>
          <div className="home-hero__media">
            <img
              src="/assets/storm-game.jpg"
              alt="Storm player in a white number 45 jersey raising his stick to pass during a spring game"
              width="600"
              height="400"
            />
            <BoltIcon className="home-hero__bolt" />
          </div>
        </div>
      </section>

      <div className="band-wrap">
        <ul className="plain-list band">
          {BAND_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && <li className="band__bolt" aria-hidden="true"><BoltIcon /></li>}
              <li>{item}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      <Section className="who">
        <div className="row who__intro">
          <div className="col">
            <Eyebrow>01 / Who we are</Eyebrow>
            <h2 className="display h2-section">
              <span className="line">Love the game.</span>{' '}
              <span className="line">Build the skills.</span>
            </h2>
          </div>
          <p className="col who__copy">
            The Fort Wayne Storm builds a love for lacrosse and real skills in players from grades 3–8, in a positive, supportive place to learn, grow and have fun. Players make friends, get better every week and get ready for the next level.
          </p>
        </div>
        <ul className="plain-list grid who__cards">
          {WHO_CARDS.map((card, index) => (
            <li key={card.title} className="who__card">
              <span className="outline-num who__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="display who__card-title">{card.title}</h3>
              <p>{card.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" angle="both" className="season">
        <div className="section-head">
          <div>
            <Eyebrow>02 / The season</Eyebrow>
            <h2 className="display h2-section">January to May.</h2>
          </div>
          <Link to="/schedule/" className="text-link">Full schedule and maps <ArrowIcon /></Link>
        </div>
        <ul className="plain-list grid season__cols">
          <li className="season__col">
            <p className="display season__big" aria-hidden="true">Jan</p>
            <h3 className="season__title">Winter training</h3>
            <p>
              {practices.winter.when}, {practices.winter.time}<br />
              {practices.winter.datesLong}<br />
              {practices.winter.where}
            </p>
          </li>
          <li className="season__col">
            <p className="display season__big" aria-hidden="true">Mar</p>
            <h3 className="season__title">Outdoor practice</h3>
            <p>
              {practices.spring.when}, {practices.spring.time}<br />
              {practices.spring.datesLong}<br />
              {practices.spring.where}
            </p>
          </li>
          <li className="season__col season__col--accent">
            <p className="display season__big" aria-hidden="true">Game</p>
            <h3 className="season__title">Spring games</h3>
            <p>About 10 spring games plus a tournament. The 2027 game schedule is coming soon on GameChanger.</p>
          </li>
        </ul>
      </Section>

      <Section className="teams">
        <Eyebrow>03 / Pick your team</Eyebrow>
        <h2 className="display h2-section">Three teams. One Storm.</h2>
        <p className="teams__intro">Teams are placed by birthdate. Each team is capped so every player gets real playing time.</p>
        <ul className="plain-list grid teams__cards">
          {teams.map((team) => (
            <li key={team.name} className="teams__card">
              <h3 className="display teams__name">{team.name}</h3>
              <p className="teams__label">Born between</p>
              <p className="teams__range">{team.range}</p>
              {team.note && <p className="teams__note">{team.note}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <RegisterBlock />

      {photos.length === 3 && (
        <Section className="photo-strip" aria-label="Storm photos">
          <ul className="plain-list grid">
            {photos.map((photo) => (
              <li key={photo.src} className="photo-strip__item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section className="next">
        <div className="row">
          <div className="col">
            <Eyebrow>04 / What's next</Eyebrow>
            <h2 className="display h2-section">
              <span className="line">Ready for</span>{' '}
              <span className="line">high school.</span>
            </h2>
            <p className="next__copy">Storm's goal is to make sure our players are ready to compete in high school and beyond.</p>
            <Link to="/area-teams/" className="text-link text-link--green">See area teams</Link>
          </div>
          <div className="col">
            <ul className="plain-list chips" aria-label="Area high school and college programs">
              {areaTeams.highSchool.map((team) => (
                <li key={team.name} className="chip">{team.name}</li>
              ))}
              {areaTeams.college.map((team) => (
                <li key={team.name} className="chip chip--green">{team.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;

import React from 'react';
import { Center } from './center';
import { Twitter } from './icons/twitter';
import { Linkedin } from './icons/linkedin';
import { Github } from './icons/github';

export const Footer: React.FC = () => (
  <footer className="footer" id="contact">
    <Center className="interested">
      <h3>Kiinnostuitko?</h3>
      <p>
        Lisätietoa meistä, referenssiprojekteistamme ja siitä miten voisimme
        auttaa teidän tiimiänne saat ottamalla yhteyttä <br />
        sähköpostitse osoitteeseen riku@rareagency.fi tai puhelimitse{' '}
        <strong>+358&nbsp;50&nbsp;470&nbsp;0715</strong>. <br />
        Kerromme mielellämme lisää!
      </p>
    </Center>
    <Center className="grid">
      <img src="../static/logo-black.png" alt="Rare Agency" className="logo" />

      <address className="details">
        <div>3092335-9</div>
        <div>+358&nbsp;50&nbsp;470&nbsp;0715</div>
        <div>riku@rareagency.fi</div>
      </address>

      <address className="location">
        <div>Polttimonkatu 4</div>
        <div>33210&nbsp;Tampere</div>
        <div>Finland</div>
      </address>

      <section className="face riku">
        <img
          className="rounded-face"
          src="./static/faces/riku.jpg"
          alt="Riku Rouvila"
        />
        <address>
          <strong className="name">Riku&nbsp;Rouvila</strong>
          <span>Lead&nbsp;Developer</span>
          <span>riku@rareagency.fi</span>
          <span className="social">
            <a href="https://www.linkedin.com/in/rikurouvila/">
              <Linkedin />
            </a>
            <a href="https://github.com/rikukissa">
              <Github />
            </a>
            <a href="https://twitter.com/rikurouvila">
              <Twitter />
            </a>
          </span>
        </address>
      </section>

      <section className="face pyry">
        <img
          className="rounded-face"
          src="./static/faces/pyry.jpg"
          alt="Pyry Rouvila"
        />
        <address>
          <strong className="name">Pyry&nbsp;Rouvila</strong>
          <span>Frontend&nbsp;Creator</span>
          <span>pyry@rareagency.fi</span>
          <span className="social">
            <a href="https://www.linkedin.com/in/naf/">
              <Linkedin />
            </a>
            <a href="https://github.com/naftis">
              <Github />
            </a>
          </span>
        </address>
      </section>

      <section className="face janne">
        <img
          className="rounded-face"
          src="./static/faces/janne.jpg"
          alt="Janne Kallunki"
        />
        <address>
          <strong className="name">Janne&nbsp;Kallunki</strong>
          <span>Full-stack&nbsp;Designer</span>
          <span>janne@rareagency.fi</span>
          <span className="social">
            <a href="https://www.linkedin.com/in/jkallunki/">
              <Linkedin />
            </a>
            <a href="https://github.com/jkallunki">
              <Github />
            </a>
            <a href="https://twitter.com/kallunkj">
              <Twitter />
            </a>
          </span>
        </address>
      </section>

      <section className="face cihan">
        <img
          className="rounded-face"
          src="./static/faces/cihan.jpg"
          alt="Cihan Bebek"
        />
        <address>
          <strong className="name">Cihan&nbsp;Bebek</strong>
          <span>Lead&nbsp;Developer</span>
          <span>cihan@rareagency.fi</span>
          <span className="social">
            <a href="https://www.linkedin.com/in/cihan-bebek/">
              <Linkedin />
            </a>
            <a href="https://github.com/keksike">
              <Github />
            </a>
            <a href="https://twitter.com/keksike">
              <Twitter />
            </a>
          </span>
        </address>
      </section>
    </Center>

    <style jsx>{`
      :global(.interested) {
        text-align: center;
        border-bottom: 1px solid #8a8a8a;
        padding-bottom: 3rem;
        margin-bottom: 5rem !important;
      }
      .name {
        font-weight: bold;
      }
      :global(.grid) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas:
          'logo riku janne'
          'logo riku janne'
          'details riku janne'
          'details pyry cihan'
          'location pyry cihan'
          'location pyry cihan';
        grid-gap: 2rem;
      }
      .logo {
        grid-area: logo;
      }
      .details {
        grid-area: details;
      }
      .location {
        grid-area: location;
      }
      .riku {
        grid-area: riku;
      }
      .pyry {
        grid-area: pyry;
      }
      .janne {
        grid-area: janne;
      }
      .cihan {
        grid-area: cihan;
      }

      .face {
        display: flex;
        align-items: center;
      }
      .face img {
        margin-right: 2rem;
      }

      .logo {
        width: 150px;
        filter: invert(1);
      }
      .footer {
        background: linear-gradient(
          95.62deg,
          #000d1a 40.28%,
          hsla(210, 100%, 3%, 1) 99.06%
        );
        padding: 3rem 0;
        color: #fff;
      }

      .addresses {
        display: flex;
        margin-top: 2rem;
      }

      address {
        display: flex;
        flex-direction: column;
        font-style: normal;
        line-height: 1.75rem;
      }
      .rounded-face {
        width: 130px;
        border-radius: 130px;
      }

      @media (max-width: 1000px) {
        :global(.grid) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            'logo logo'
            'riku riku'
            'pyry pyry'
            'janne janne'
            'cihan cihan'
            'location details';
          justify-items: center;
        }
        .logo {
          margin-bottom: 2rem;
        }
        .details,
        .location {
          margin-top: 2rem;
        }
      }

      @media (max-width: 1000px) {
        :global(.grid) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            'logo logo'
            'riku pyry'
            'janne cihan'
            'location details';
          justify-items: center;
        }
        .logo {
          margin-bottom: 2rem;
        }
        .details,
        .location {
          margin-top: 2rem;
        }
      }

      @media (max-width: 750px) {
        :global(.grid) {
          grid-template-areas:
            'logo logo'
            'riku riku'
            'pyry pyry'
            'janne janne'
            'cihan cihan'
            'location details';
        }
      }

      @media (max-width: 350px) {
        :global(.grid),
        .face {
          display: block;
        }
        .location,
        .face {
          margin-bottom: 3rem;
        }
      }
      .social {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
      }
      .social :global(svg) {
        fill: #fff;
        margin-right: 7px;
      }
    `}</style>
  </footer>
);

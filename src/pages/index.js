import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h2>Hello!</h2>
      </header>
      <p>
      Johnahtan Moes is a former construction salesman turned coding ninja.
      <br/>
      He is a passionate web developer, a loving friend and time magazine’s person of the year in 2006.
      <br/>
      He enjoys solving tough technical solutions through creative development and long walks on the beach. 
      </p>
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            Check out my projects
          </a>
        </Scroll>
      </footer>
    </section>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            YoYoBoat
          </h2>
          <h3>
            Client Project
          </h3>
        </header>
        <p>
        YoYoBoat is a peer to peer rental market place to connect boat owners to boat renters. I helped oversee the 
        development of the site and work with the owners to raise seed money from investors.
        </p>
        <a href="https://www.yoyoboat.com" target="_blank" className="button style1"  >
          See the Site Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            The Wellness Habit Podcast
          </h2>
          <h3>
            Client Project
          </h3>
        </header>
        <p>
        The Wellness Habit is a web application for a podcast about health, bodywork, and personal fitness.
        The site also is a scheduler for personal training and bodywork sessions.
        </p>
        <a href="https://www.thewellnesshabit.co" target="_blank" className="button style1"  >
          See the Site Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            WaterWays
          </h2>
          <h3>
            Client Project
          </h3>
        </header>
        <p>
        WaterWays is a mobile-first web application used for tracking natural springs,
         seeps, and artesian well water sources. Using Google API, community users are 
         able to find, locate, and contribute new locations to the map.
        </p>
        <a href="https://github.com/Johnman747/WaterWays" target="_blank" className="button style1"  >
          See the Repo Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            Eventure
          </h2>
          <h3>
            Prime Digital Academy Solo Project
          </h3>
        </header>
        <p>
          Eventure is an easy to use party planner web app. Users can create, update and delete events. They can also see events in their area. When an event is created the user it sends out emails with a dynamicly created url for the guests to click and be grought to the website to RSVP.
        </p>
        <a href="https://github.com/Johnman747/Eventure" target="_blank" className="button style1"  >
          See the Repo Here
        </a>
      </div>
    </article>

  <article className="container box">
  </article>
    <section id="banner">
      <header>
        <h2>Send me a Message!</h2>
        <h3>Johnathan.moes@gmail.com</h3>
      </header>
          <a href="mailto:Johnathan.moes@gmail.com" className="button style2">
            I would love to hear from you!
          </a>
    </section>


    <Footer />
  </Layout>
);

export default IndexPage;

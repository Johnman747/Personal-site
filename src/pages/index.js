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
        Im A Passionate Fullstack Developer, UI/UX Enthusiast and Web
        <br />
        Developer Who Enjoys Solving Tough Technical Solutions Through Creative Development.
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
            Eventure
          </h2>
          <h3>
            Prime Digital Academy Solo Project
          </h3>
        </header>
        <p>
          Eventure is an easy to use party planner web app. Users can create, update and delete events. They can also see events in their area. When an event is created the user it sends out emails with a dynamicly created url for the guests to click and be grought to the website to RSVP.
        </p>
        <a href="https://github.com/Johnman747/Eventure" className="button style1"  >
          See the Repo Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            Movie-Sagas
          </h2>
          <h3>
            Prime Digital Academy Project
          </h3>
        </header>
        <p>
          This is an application that is a full CRUD application. You can view movie details that are stored in the database. You can edit that information as well as add and delete genres to the movie.        </p>
        <a href="https://github.com/Johnman747/movie-sagas" className="button style1" >
          See the Repo Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            Student-Feedback
          </h2>
          <h3>
            Prime Digital Academy Project
          </h3>
        </header>
        <p>
          This is a project that displays the usage of hash routing and making database requests from client side.
        </p>
        <a href="https://github.com/Johnman747/Student-feedback" className="button style1"  >
          See the Repo Here
        </a>
      </div>
    </article>

    <article id="first" className="container box style3">
      <div className="inner">
        <header>
          <h2>
            PetHotel-Server
          </h2>
          <h3>
            A server created in Java with my team
          </h3>
        </header>
        <a href="https://github.com/Johnman747/PetHotel-Server" className="button style1"  >
          See the Repo Here
        </a>
      </div>
    </article>

  <article className="container box">
  </article>
    <section id="banner">
      <header>
        <h2>Send me a Message!</h2>
      </header>
          <a href="#first" className="button style2 scrolly">
            I would love to hear from you!
          </a>
    </section>

{/* <article className="container box style3">
      <header>
        <h2>Elements</h2>
        <p>This starter has other elements.</p>
        <br />
        Check it out
        <Link to="/Element"> here </Link>
      </header>
    </article> */}

    <Footer />
  </Layout>
);

export default IndexPage;

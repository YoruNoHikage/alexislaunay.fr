import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Animation from '../components/animation'
import Illustration from '../components/illustration'

import '../css/knacss.css'
import '../css/header.css'
import '../css/styles.css'

const IndexPage = () => (
  <Layout>
    <SEO
      lang="en"
      title="Web developer"
      description="I mainly build web applications and with what's left, I help organizing events about video games, I write blog posts, I play pop punk and I go to concerts... among everything else."
      meta={[
        {
          name: `og:image`,
          content: 'https://www.alexislaunay.fr/img/me.jpg',
        },
      ]}
    />
    <header className="header">
      <div className="header-background">
        <div className="header-mask" />
      </div>

      <div id="header" role="banner" className="line w100">
        <h1 className="inbl">
          <Link to="/" rel="author">
            Alexis Launay
          </Link>
        </h1>
        <div className="inbl languages">
          <Link to="/">FR</Link> | <Link to="/en">EN</Link>
        </div>
        <nav id="navigation" role="navigation">
          <ul>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#get-in-touch">Get in touch</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="header-content"
        itemScope
        itemType="http://schema.org/Person"
      >
        <div className="header-left">
          <div className="avatar">
            <img
              itemProp="image"
              className="avatar-img"
              src="img/me.jpg"
              alt="Alexis Launay"
            />
          </div>
          <div className="social">
            <a
              className="social-link social-link--twitter"
              href="https://twitter.com/YoruNoHikage"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path
                  d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
            <a
              className="social-link social-link--linkedin"
              href="https://linkedin.com/in/alexislaunay"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path
                  d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
            <a
              className="social-link social-link--github"
              href="https://github.com/YoruNoHikage"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
              </svg>
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-title">
            <p className="header-right-title-title">Hello,</p>
            <p className="header-right-title-subtitle">
              I am <span itemProp="name">Alexis Launay</span>,{' '}
              <span itemProp="jobTitle">web &amp; game developer</span>.
            </p>
            <p className="header-right-title-subtitle">
              I do web stuff at{' '}
              <a className="link" href="https://inyo.me">
                Inyo
              </a>
              .
            </p>
          </div>
          <div className="header-right-buttons">
            <a href="book.pdf" className="button">
              Portfolio / Book
            </a>
            <a href="cv.pdf" className="button">
              CV
            </a>
          </div>
        </div>
      </div>
      <div className="header-meta">
        <div className="header-meta-location">
          <a
            target="_blank"
            className="link header-meta-location-link"
            href="https://encrypted.google.com/maps/@35.7000354,139.765032,49a,35y,116.82h,69.29t/data=!3m1!1e3"
            rel="noopener noreferrer"
          >
            <svg
              className="icon header-meta-location-icon"
              fill="#000"
              height={16}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 73.359 100"
              enableBackground="new 0 0 73.359 100"
              xmlSpace="preserve"
            >
              <path d="M36.68,0C16.457,0,0,16.454,0,36.678c0,26.153,31.386,60.164,32.724,61.597    c1.021,1.1,2.453,1.726,3.956,1.726c1.499,0,2.931-0.625,3.955-1.726c1.338-1.432,32.725-35.444,32.725-61.597    C73.359,16.453,56.903,0,36.68,0z M22.202,35.523c0-7.998,6.482-14.482,14.478-14.482c7.996,0,14.478,6.482,14.478,14.482    c0,7.996-6.481,14.478-14.478,14.478C28.685,50,22.202,43.518,22.202,35.523z" />
            </svg>{' '}
            Ochanomizu, Tokyo
          </a>
        </div>
      </div>
    </header>

    <div id="main" role="main" className="line">
      <section id="experiences" className="slide pam">
        <h2>Expériences</h2>
        <ul id="legends">
          <li className="game">Jeux</li>
          <li className="website">Sites web</li>
        </ul>
        <div className="grid">
          <div id="projects" className="grid3">
            <div className="project pas website">
              <h3>Inyo</h3>
              <p>
                During{' '}
                <a href="https://www.techstars.com/programs/paris-program/">
                  TechStars Paris
                </a>
                's acceleration program, we built{' '}
                <a
                  href="https://inyo.me"
                  title="Smart Assistant for freelancers"
                >
                  Inyo
                </a>
                . It's a tool to ease the communication between a freelancer and
                their client.
              </p>
            </div>
            <div className="project pas website">
              <h3>Prototypo</h3>
              <p>
                As always fascinated by graphics design, I worked on{' '}
                <a
                  href="https://prototypo.io"
                  title="Create easily your own typefaces"
                >
                  Prototypo
                </a>
                . It's a typedesign tool that can help you build the font you
                want et the technology behind enables us to showcase interactive
                visual experiments.
              </p>
            </div>
            <div className="project pas game">
              <h3>Brezeliad : A Tale of Brocéliande</h3>
              <p>
                It has been promoted in{' '}
                <a
                  href="http://stunfest.fr"
                  title="Video games festival in Rennes, France"
                >
                  Stunfest 2014
                </a>
                . Made in C++ with SFML 2.1, it's about local history from where
                I was born. <br />
                More informations on the{' '}
                <a href="http://brezeliad.yorunohikage.fr">website's game</a>.
              </p>
            </div>
            <div className="project pas game">
              <h3>SamsarA</h3>
              <p>
                Game made in 2014 during Global Game Jam (video game making in
                48 hours). This game is a concept in which the player moves
                towards blindly in his memory and must guide himself to some
                points. It was made in C++ with SFML 2.1.
              </p>
            </div>
            <div className="project pas game">
              <h3>Heart of Jump</h3>
              <p>
                Game made in 2013 during Global Game Jam (contest to create a
                video game in 48 hours). This game is mixing rythm and runner
                game. It has been made in C++ with SFML 2.0.
              </p>
            </div>
            <div className="project pas website">
              <h3>JeuxAmateurs.fr</h3>
              <p>
                French website about video games made by people during their
                free time. Currently, this website is frozen but a new version
                is coming.
              </p>
            </div>
            <div className="project pas game">
              <h3>8-Bit Robot Music Party</h3>
              <p>
                Game made in 2011 during highschool in a contest organised by
                engineer school EFREI. It mixes rythm and platforms game. With
                it, we won 3 prizes :{' '}
                <strong>
                  2<sup>nd</sup> place in Software
                </strong>{' '}
                category, <strong>Favorite</strong> prize and{' '}
                <strong>Special</strong> prize.
              </p>
            </div>
            <div className="project pas">
              <h3>What's next ?</h3>
              <p>
                Interested in visual experiments and interactivity. Teach and
                train people with things I know motivates me too!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="illustration" className="slide pam">
        <Illustration />
      </section>
    </div>

    <footer id="footer" role="contentinfo" className="line">
      <section id="get-in-touch" className="slide pam">
        <h2>Contact</h2>

        <form
          className="small-w100"
          id="form_contact"
          action="contact.php"
          method="POST"
        >
          <p
            id="status"
            style={{ display: 'none' }}
            className="txtcenter pam"
          />
          <div className="grid">
            <div className="grid3">
              <div className="small-w25">
                <label htmlFor="name" className="pas right">
                  Name :{' '}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="pas w100"
                  placeholder="Write your name"
                  required
                />
              </div>
              <p className="small-w25" id="name_status" />
              <div className="small-w25">
                <label htmlFor="mail" className="pas right">
                  Mail :{' '}
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  className="pas w100"
                  placeholder="Write your email address"
                  required
                />
              </div>
              <p className="small-w25" id="mail_status" />
              <div className="small-w25">
                <label htmlFor="message" className="pas right">
                  Message :{' '}
                </label>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  className="pas w100"
                  placeholder="Write your message"
                  required
                  defaultValue={''}
                />
              </div>
              <p className="small-w25" id="message_status" />
            </div>
          </div>
          <div className="w100 txtcenter pam">
            <button className="button-white-blue" type="submit">
              ✉ Send
            </button>
          </div>
        </form>
      </section>
      <section style={{ minHeight: 0 }}>
        <Animation />
      </section>
    </footer>
  </Layout>
)

export default IndexPage

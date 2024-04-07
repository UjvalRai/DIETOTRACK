import React from 'react'

import './Landing.css'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div className="main">
  <div className="page">
    <nav>
      <div id="nav-l">
        <img src="./Asset/download (6).png" alt="" />
        <h3>
          <span>D</span>ietoTrack
        </h3>
      </div>
      <div id="nav-c">
        <h4>
          <span>Achieve Your Health Goals</span>
        </h4>
      </div>
      <div id="nav-r">
        {/* <li ><a href="./sign-in/sign-in.html">sign in</a></button> */}
        <Link to="signup">
        <button>sign up</button>
        </Link>
        <Link to="signin">
        <button >sign in</button>
        </Link>
      </div>
    </nav>
    <section className="hero">
      <div className="hero-l">
        <div className="l-b1" id="img1">
          <h4>Personalized Diet Plans</h4>
          <img src="./Asset/download (7).png" alt="" />
        </div>
        <div className="l-b1" id="img2">
          <h4>Nutrition Made Easy</h4>
          <img src="./Asset/download (9).png" alt="" />
        </div>
        <div className="l-b1" id="img3">
          <h4>Track Your Progress</h4>
          <img src="./Asset/download (8).png" alt="" />
        </div>
      </div>
      <div className="hero-m">
        <div id="hero-m-up">
          <img src="./Asset/download (1).png" alt="" />
        </div>
        <div id="hero-m-down">
          <img src="./Asset/download (2).png" alt="" />
          <img src="./Asset/download (4).png" alt="" />
        </div>
      </div>
      <div className="hero-r">
        <div className="hero-r-up">
          <h4>
            " Eat to nourish your body, not to feed your emotions. Balance is
            key; enjoy treats in moderation. Listen to your body's needs; it
            knows best. Your health is your wealth. "
          </h4>
          <div className="all-h3">
            <h3>&gt; Healthy Eating Made Simple</h3>
            <h3>&gt; Meal Planning Made Effortless</h3>
            <h3>&gt; Transform Your Diet</h3>
            <h3>&gt; Get Fit, Stay Healthy</h3>
          </div>
        </div>
        <div className="hero-r-down">
          <h4>Help !</h4>
        </div>
      </div>
    </section>
  </div>
</div>

  )
}

export default Landing
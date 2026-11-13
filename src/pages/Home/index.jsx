import "./index.css"
import Navbar from "../../component/Navbar"
import website from "../../assets/images/website-min.png"
import fire from "../../assets/images/785116.png"
import Performance from "../../assets/images/download.png"
import span from "../../assets/images/download 4.png"
import Data from "../../assets/images/download (1).png"
import prevention from "../../assets/images/download (2).png"
import bandwidth from "../../assets/images/download (3).png"
import support from "../../assets/images/team-4-min.png"

const Home = () => {
  const products = {

  }




  return (
    <main>
      <Navbar />
      <section className="Hosting">
        <div className="container">
          <div className="left-right">
            <div className="left">
              <div >
                <img src={fire} alt="fire" />
                <p >Don't miss limited-time savings:<span style={{ color: "#fb8516 " }} >Savings 20%</span></p>
                <p className="saving"></p>
              </div>

              <h1>Everything for Your Site to Succeed</h1>
              <p>Image from <a href="https://www.freepik.com">Freepik</a></p>

              <div className="starting">
                <a href="#">Get Start</a>

                <div>
                  <p>Starting at only
                    <br />
                    <span>$4.75/mo*</span>
                  </p>
                </div>
              </div>

            </div>
            <div className="right">
              <img src={website} alt="website" />
            </div>

          </div>
        </div>

      </section>

      <section className="icons">
        <h2> Pick your perfect web hosting plan</h2>
        <div className="container">
          <div className="carts">
            <div className="cart">
              <img src={Performance} alt="Performance" />
              <h4>Maximum
                <br />
                Performance
              </h4>
              <p>
                Sample text. Click to select the Text Element.
              </p>
              <span>
                <img src={span} alt="span" />
              </span>
            </div>
            <div className="cart">
              <img src={Data} alt="Performance" />
              <h4> Fully Secure
                <br />
                Data Centers
              </h4>
              <p>
                Sample text. Click to select the Text Element.
              </p>
              <span>
                <img src={span} alt="span" />
              </span>
            </div>
            <div className="cart">
              <img src={prevention} alt="Performance" />
              <h4>DDos Attack
                <br />
                Prevention
              </h4>
              <p>
                Sample text. Click to select the Text Element.
              </p>
              <span>
                <img src={span} alt="span" />
              </span>
            </div>
            <div className="cart">
              <img src={bandwidth} alt="Performance" />
              <h4> Get Unmetered
                <br />
                Bandwidth
              </h4>
              <p>
                Sample text. Click to select the Text Element.
              </p>
              <span>
                <img src={span} alt="span" />
              </span>
            </div>
          </div>
        </div>

      </section>

      <section className="section-3">
        <div className="section-3-left">
          <h2> 20+ Years Experience</h2>
          <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          </p>
          <a href="#">Get Started</a>

        </div>

        <div className="section-3-right">
          <h2>Who We Are</h2>
          <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          </p>
          <a>Get Started</a>

        </div>

      </section>

      <section >
        <div className="container">
          <div className="support">

            <div className="left">
              <img src={support} alt="support" />
            </div>
            <div className="right">
              <h2> 24/7/365 Support </h2>
              <p>Sample text. Click to select the Text Element. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>Image from <a href="https://www.freepik.com">Freepik</a></p>
              <div className="get">
                <a href="#">Get Start</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;

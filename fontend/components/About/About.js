import style from "./About.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div className={style.about}>
        <div className={style.aboutus}>
          <h1>About Us</h1>
          <p>
            Computer technology revolutionized typography in the 20th century.
            Personal computers in the 1980s like the Macintosh allowed type
            designers to create types digitally using commercial graphic design
            software. Digital technology also enabled designers to create more
            experimental typefaces, alongside the practical fonts of traditional
            typography. Designs for typefaces could be created faster with the
            new technology, and for more specific functions. The cost for
            developing typefaces was drastically lowered, becoming widely
            available to the masses. The change has been called the
            “democratization of type” and has given new designers more
            opportunities to enter the field.
          </p>
        </div>
      </div>
      <div className={style.team}>
        <h1 style={{ textAlign: "center" }}>Our Team</h1>
        <hr />
        <p style={{ textAlign: "center" }}>
          Currently, we are three geek and will grow up soon
        </p>
        <div className={style.teamarea}>
          <div className={style.border}>
            <h1>Jose Shams</h1>
            <h2>Co-founder & CEO</h2>
            <img
              src="http://thetheme.io/thejobs/assets/img/avatar-1.jpg"
              alt=""
            />
            <div>
              <button>
                <AiFillFacebook />{" "}
              </button>
              <button>
                <AiFillLinkedin />{" "}
              </button>
              <button>
                <AiFillInstagram />{" "}
              </button>
            </div>
            <p>
              Curabitur eros tellus, eleifend eu ligula sed, vestibulum
              venenatis justo. Nunc semper augue non enim lacinia, fermum
              condimenm nulla finibus curabitur quis.
            </p>
          </div>
          <div className={style.border}>
            <h1>Mary Amiri</h1>
            <h2>Co-founder & CEO</h2>

            <img
              src="http://thetheme.io/thejobs/assets/img/avatar-3.jpg"
              alt=""
            />
            <div>
              <button>
                <AiFillFacebook />{" "}
              </button>
              <button>
                <AiFillLinkedin />{" "}
              </button>
              <button>
                <AiFillInstagram />{" "}
              </button>
            </div>
            <p>
              Curabitur eros tellus, eleifend eu ligula sed, vestibulum
              venenatis justo. Nunc semper augue non enim lacinia, fermum
              condimenm nulla finibus curabitur quis.
            </p>
          </div>
          <div className={style.border}>
            <h1>John Doe</h1>
            <h2>Marketing manager</h2>

            <img
              src="http://thetheme.io/thejobs/assets/img/avatar-2.jpg"
              alt=""
            />
            <div>
              <button>
                <AiFillFacebook />{" "}
              </button>
              <button>
                <AiFillLinkedin />{" "}
              </button>
              <button>
                <AiFillInstagram />{" "}
              </button>
            </div>
            <p>
              Curabitur eros tellus, eleifend eu ligula sed, vestibulum
              venenatis justo. Nunc semper augue non enim lacinia, fermum
              condimenm nulla finibus curabitur quis.
            </p>
          </div>
        </div>
      </div>
      <div className={style.back}>
        <div className={style.company}>
          <div>
            <h1>About</h1>
            <p>
              An employment website is a web site that deals specifically with
              employment or careers. Many employment websites are designed to
              allow employers to post job requirements for a position to be
              filled and are commonly known as job boards. Other employment
              sites offer employer reviews, career and job-search advice, and
              describe different job descriptions or employers. Through a job
              website a prospective employee can locate and fill out a job
              application.
            </p>
          </div>
          <div
            style={{
              borderRight: "2px solid grey",
              marginRight: "10px",
              borderLeft: "2px solid grey",
              padding: "0 15px",
            }}
            className={style.left}
          >
            <h2>COMPANY</h2>
            <ul>
              <li>About us</li>
              <li>How it works</li>
              <li>Help center</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className={style.tren}>
            <h2>TRENDEING JOBS</h2>
            <ul>
              <li>Front-end developer</li>
              <li>Android developer</li>
              <li>iOS developer</li>
              <li>Full stack developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

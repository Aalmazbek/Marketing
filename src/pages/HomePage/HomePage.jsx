import React from 'react';
import playIcon from './assets/playIcon.svg';
import illustration from './assets/illustration.png';
import './HomePage.css';
import spotify from './assets/brand_spotify.png';
import slack from './assets/brand_slack.png';
import netflix from './assets/brand_netflix.png';
import heroku from './assets/brand_heroku.png';
import vimeo from './assets/brand_vimeo.png';
import airbnb from './assets/brand_airbnb.png';
import ratio from './assets/ImageRatio.png';
import SEO from './assets/SEOIcon.png';
import arrow from './assets/arrowIcon.png';
import social from './assets/socialIcon.png';
import search from './assets/searchIcon.png';
import email from './assets/emailIcon.png';
import planning from './assets/planning.png';
import optimizing from './assets/optimizing.png';
import results from './assets/results.png';
import research from './assets/research.png';
import faqs from './assets/faqs.png'

function HomePage() {
  return (

    <section>
      <div className={`container  first__container`}>
        <div className={`first__container-description`}>
          <p>DIGITAL MARKETING</p>
          <h1>Boosts Your <br /> Website Traffic</h1>
          <p>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus <br /> ipsum laoreet sapien, quis venenatis ante odio sit <br /> amet eros. </p>
          <div className={`first__container-buttons`}>
            <button>Try for free</button>
            <button>
              <img src={playIcon} alt="Icon for play video" />
              See Our Work
            </button>
          </div>
        </div>
        <img src={illustration} alt="illustration png" className={`first__illustration`} />
      </div>

      <div className={`container brands__container`}>
        <img src={spotify} alt="brand_spotify.svg" />
        <img src={slack} alt="brand_slack.png" />
        <img src={netflix} alt="brand_netflix.png" />
        <img src={heroku} alt="brand_heroku.png" />
        <img src={vimeo} alt="brand_vimeo.png" />
        <img src={airbnb} alt="brand_airbnb.png" />
      </div>

      <img src={ratio} alt="" className={`container section__image`} />

      <div className={`container second__container`}>
        <div className={`second__container-about-us`}>
          <p>ABOUT US</p>
          <h1>Who We Are</h1>
          <p>
            In hac habitasse platea dictumst. Aliquam lobortis. Lorem <br />
            ipsum dolor sit amet, consectetuer adipiscing elit. In dui <br />
            magna, posuere eget, vestibulum et, tempor auctor, justo. <br />
            Pellentesque habitant morbi tristique senectus et netus et <br />
            malesuada fames ac turpis egestas.
          </p>
          <button className={`second__container-button`}>
            learn more
          </button>
        </div>
        <div className={`second__container-about`}>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>150</p>
              <p className={`about__static-title`}>PROJECTS</p>
            </div>
            <p className={`about__static-description`}>Praesent turpis. Praesent blandit laoreet nibh. <br /> Nunc nonummy metus.</p>
          </div>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>32k</p>
              <p className={`about__static-title`}>HAPPY CLIENTS</p>
            </div>
            <p className={`about__static-description`}>Praesent blandit laoreet nibh. Suspendisse pulvinar, <br /> augue ac venenatis condimentum.</p>
          </div>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>20</p>
              <p className={`about__static-title`}>YEARS OF EXPERIENCE</p>
            </div>
            <p className={`about__static-description`}>Praesent blandit laoreet nibh. Suspendisse pulvinar, <br /> augue ac venenatis condimentum.</p>
          </div>
        </div>
      </div>

      <div className={`container third__container`}>
        <div className={`third__container-description`}>
          <p>Our Services</p>
          <h1>We Provide</h1>
          <p>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
        </div>
        <div className={`third__container-blocks`}>
          <div className={`third__container-block first__block`}>
            <img src={SEO} alt="" />
            <h1>SEO</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block second__block`}>
            <img src={email} alt="" />
            <h1>Email Marketing</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block third__block`}>
            <img src={search} alt="" />
            <h1>Search Engine <br /> Oprimization </h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block forth__block`}>
            <img src={social} alt="" />
            <h1 > Social Marketing</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className={`container forth__container`}>
        <div className={`third__container-description`}>
          <p>Work Flow</p>
          <h1>Working Process</h1>
          <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, <br /> suscipit non, turpis.</p>
        </div>
        <div className={`forth__container-blocks`}>
          <div className={`forth__container-block one`}>
            <img src={planning} alt="" />
            <p>Planning</p>
          </div>
          <div className={`forth__container-block two`}>
            <img src={research} alt="" />
            <p>Research</p>
          </div>
          <div className={`forth__container-block three`}>
            <img src={optimizing} alt="" />
            <p>Optimizing</p>
          </div>
          <div className={`forth__container-block four`}>
            <img src={results} alt="" />
            <p>Results</p>
          </div>
        </div>
      </div>

      <div className={`container our__work`}>
        <div className={`third__container-description`}>
          <p>Our Work</p>
          <h1>Case Studies</h1>
        </div>
        <div className={`our__work-blocks`}>
          <div className={`our__work-first`}>
            <p className={`our__work-title`}>marketing</p>
            <h1 className={`our__work-description`}>General Electric</h1>
          </div>
          <div className={`our__work-second`}>
            <div className={`our__work-secondBlock`}>
              <div className={`our__work-branding`}>
                <div></div>
                <div>
                  <p>branding</p>
                  <h1>Bank of America</h1>
                  <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                  <button> learn more </button>
                </div>
              </div>
              <div className={`our__work-seo`}>
                <p className={`our__work-title`}>SEO</p>
                <h1 className={`our__work-description`}>Louis Vuitton</h1>
              </div>
            </div>
            <div className={`our__work-secondBlock`}>
              <div className={`our__work-marketing`}>
                <p className={`our__work-title`}>marketing</p>
                <h1 className={`our__work-description`}>Gillette</h1>
              </div>
              <div className={`our__work-branding`}>
                <div></div>
                <div>
                  <p>SOCIAL</p>
                  <h1>Louis Vuitton</h1>
                  <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                  <button> learn more </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`our__work-third`}>
            <p className={`our__work-title`}>WEB</p>
            <h1 className={`our__work-description`}>Gillette</h1>
          </div>
        </div>
        <button>View All</button>
      </div>

      <div className={`team__container`}>
        <div className={`team__container-description`}>
          <p>team</p>
          <h1>Meet Our Team</h1>
          <p>Since wire-frame renderings are relatively <br /> simple and fast to calculate, they are often <br /> used in cases</p>
        </div>
        <div className={`team__container-persons`}>
          <div className={`team__container-Pena`}>
            <div></div>
            <h1 className={`team__container-name`}>Eleanor Pena</h1>
            <p className={`team__container-profession`}>UI Designer</p>
          </div>
          <div className={`team__container-Ralph`}>
            <div></div>
            <h1 className={`team__container-name`}>Eleanor Pena</h1>
            <p className={`team__container-profession`}>UI Designer</p>
          </div>
          <div className={`team__container-Marvin`}>
            <div></div>
            <h1 className={`team__container-name`}>Eleanor Pena</h1>
            <p className={`team__container-profession`}>UI Designer</p>
          </div>
        </div>
      </div>

      <div className={`container pricing-container`}>
        <div className={`third__container-description`}>
          <p>Pricing</p>
          <h1>Check Our Pricing</h1>
          <p>Choose the perfect plan for your needs. <br /> Always flexible to grow</p>
        </div>
        <div class="switch">
          <p>MONTHLY</p>
          <input type="checkbox" />
          <p>YEARLY (save 10%)</p>
        </div>
        <div>

        </div>
      </div>

      <div className={`container FAQS__container`}>
        <div>
          <div className={`third__container-description`}>
            <p>FAQS</p>
            <h1>Frequently Asked <br /> Questions</h1>
          </div>
          <div className={`FAQS__container-description`}>
            <p>Sed augue ipsum, egestas nec, vestibulum et</p>
            <h1>Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate <br /> arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,</h1>
            <hr className={`FAQS__container-hr`}/>
            <p>Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.</p>
            <hr className={`FAQS__container-hr`}/>
            <p>Ut varius tincidunt libero.</p>
            <hr className={`FAQS__container-hr`}/>
            <p>In ut quam vitae odio lacinia tincidunt.</p>
            <hr className={`FAQS__container-hr`}/>
            <p>Fusce vel dui Morbi nec metus.</p>
            <hr className={`FAQS__container-hr`}/>
          </div>
        </div>
        <div>
          <img src={faqs} alt="" />
        </div>
      </div>
      {/* <img src={ratio} alt="" className={`container section__image`} /> */}

    </section>
  )
}

export default HomePage
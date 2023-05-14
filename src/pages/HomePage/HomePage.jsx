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
import basic from './assets/basicIcon.png'
import premium from './assets/premiumIcon.png'
import standard from './assets/standardIcon.png'



import LatestPosts from '../../components/LatestPosts/LatestPosts'
import Testimonials from '../../components/Testimonials/Testimonials'
import { useTranslation } from 'react-i18next'


function HomePage() {

  // const darkScheme = useSelector(state => state.general.darkScheme)

  const { t } = useTranslation()

  return (

    <section className='HomePage'>
      <div className={`container  first__container`}>
        <div className={`first__container-description`}>
          <p>{t("HomePage.first__container.title")}</p>
          <h1>{t("HomePage.first__container.h1")}</h1>
          <p>{t("HomePage.first__container.p")}</p>
          <div className={`first__container-buttons`}>
            <button>{t("HomePage.first__container.button-1")}</button>
            <button>
              <img src={playIcon} alt="Icon for play video" />
              {t("HomePage.first__container.button-2")}
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
          <p>{t("HomePage.second__container.title")}</p>
          <h1>{t("HomePage.second__container.h1")}</h1>
          <p>{t("HomePage.second__container.p")}</p>
          <button className={`second__container-button`}>
            {t("HomePage.second__container.button")}
          </button>
        </div>
        <div className={`second__container-about`}>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>150</p>
              <p className={`about__static-title`}>{t("HomePage.second__container.projects")}</p>
            </div>
            <p className={`about__static-description`}>Praesent turpis. Praesent blandit laoreet nibh. <br /> Nunc nonummy metus.</p>
          </div>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>32k</p>
              <p className={`about__static-title`}>{t("HomePage.second__container.clients")}</p>
            </div>
            <p className={`about__static-description`}>Praesent blandit laoreet nibh. Suspendisse pulvinar, <br /> augue ac venenatis condimentum.</p>
          </div>
          <div className={`abuot__static`}>
            <div>
              <p className={`about__static-count`}>20</p>
              <p className={`about__static-title`}>{t("HomePage.second__container.experience")}</p>
            </div>
            <p className={`about__static-description`}>Praesent blandit laoreet nibh. Suspendisse pulvinar, <br /> augue ac venenatis condimentum.</p>
          </div>
        </div>
      </div>

      <div className={`container third__container`}>
        <div className={`third__container-description`}>
          <p>{t("HomePage.third__container.title")}</p>
          <h1>{t("HomePage.third__container.h1")}</h1>
          <p>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
        </div>
        <div className={`third__container-blocks`}>
          <div className={`third__container-block first__block`}>
            <img src={SEO} alt="" />
            <h1>{t("HomePage.third__container.seo")}</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block second__block`}>
            <img src={email} alt="" />
            <h1>{t("HomePage.third__container.email")}</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block third__block`}>
            <img src={search} alt="" />
            <h1>{t("HomePage.third__container.search")}</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
          <div className={`third__container-block second__block`}>
            <img src={social} alt="" />
            <h1>{t("HomePage.third__container.social")}</h1>
            <p>Nunc nonummy metus. <br /> Donec elit libero</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className={`container forth__container`}>
        <div className={`third__container-description`}>
          <p>{t("HomePage.forth__container.title")}</p>
          <h1>{t("HomePage.forth__container.h1")}</h1>
          <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, <br /> suscipit non, turpis.</p>
        </div>
        <div className={`forth__container-blocks`}>
          <div className={`forth__container-block one`}>
            <img src={planning} alt="" />
            <p>{t("HomePage.forth__container.planning")}</p>
          </div>
          <div className={`forth__container-block two`}>
            <img src={research} alt="" />
            <p>{t("HomePage.forth__container.research")}</p>
          </div>
          <div className={`forth__container-block three`}>
            <img src={optimizing} alt="" />
            <p>{t("HomePage.forth__container.optimizing")}</p>
          </div>
          <div className={`forth__container-block four`}>
            <img src={results} alt="" />
            <p>{t("HomePage.forth__container.results")}</p>
          </div>
        </div>
      </div>

      <div className={`container our__work`}>
        <div className={`our__work-descriptian`}>
          <p>{t("HomePage.our__work.title")}</p>
          <h1>{t("HomePage.our__work.title")}</h1>
        </div>
        <div className={`our__work-blocks`}>
          <div className={`our__work-first`}>
            <p className={`our__work-title`}>{t("HomePage.our__work.marketing")}</p>
            <h1 className={`our__work-description`}>General Electric</h1>
          </div>
          <div className={`our__work-second`}>
            <div className={`our__work-secondBlock`}>
              <div className={`our__work-branding`}>
                <div></div>
                <div>
                  <p>{t("HomePage.our__work.branding")}</p>
                  <h1>{t("HomePage.our__work.bank")}</h1>
                  <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                  <button>{t("HomePage.our__work.button")}</button>
                </div>
              </div>
              <div className={`our__work-seo`}>
                <p className={`our__work-title`}>{t("HomePage.our__work.seo")}</p>
                <h1 className={`our__work-description`}>Louis Vuitton</h1>
              </div>
            </div>
            <div className={`our__work-secondBlock`}>
              <div className={`our__work-marketing`}>
                <p className={`our__work-title`}>{t("HomePage.our__work.marketing")}</p>
                <h1 className={`our__work-description`}>Gillette</h1>
              </div>
              <div className={`our__work-branding`}>
                <div></div>
                <div>
                  <p>{t("HomePage.our__work.social")}</p>
                  <h1>Louis Vuitton</h1>
                  <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                  <button>{t("HomePage.our__work.button")}</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`our__work-third`}>
            <p className={`our__work-title`}>{t("HomePage.our__work.web")}</p>
            <h1 className={`our__work-description`}>Gillette</h1>
          </div>
        </div>
        <button>{t("HomePage.our__work.button-2")}</button>
      </div>

      <div className={`team__container`}>
        <div className={`container team__container-wrapper`}>
          <div className={`team__container-description`}>
            <p>{t("HomePage.team__container.title")}</p>
            <h1>{t("HomePage.team__container.h1")}</h1>
            <p>Since wire-frame renderings are relatively <br /> simple and fast to calculate, they are often <br /> used in cases</p>
          </div>
          <div className={`team__container-persons`}>
            <div className={`team__container-Pena`}>
              <div></div>
              <h1 className={`team__container-name`}>Eleanor Pena</h1>
              <p className={`team__container-profession`}>{t("HomePage.team__container.designer")}</p>
            </div>
            <div className={`team__container-Ralph`}>
              <div></div>
              <h1 className={`team__container-name`}>Ralph Edwards</h1>
              <p className={`team__container-profession`}>{t("HomePage.team__container.manager")}</p>
            </div>
            <div className={`team__container-Marvin`}>
              <div></div>
              <h1 className={`team__container-name`}>Marvin McKinney</h1>
              <p className={`team__container-profession`}>{t("HomePage.team__container.developer")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container pricing__container`}>
        <div className={`third__container-description`}>
          <p>{t("HomePage.pricing__container.title")}</p>
          <h1>{t("HomePage.pricing__container.h1")}</h1>
          <p>{t("HomePage.pricing__container.choose")}</p>
        </div>
        <div class="switch">
          <p>{t("HomePage.pricing__container.monthly")}</p>
          <input type="checkbox" />
          <p>{t("HomePage.pricing__container.yearly")}</p>
        </div>
      </div>

      <div className={`container blocks__container`}>
        <div className={`blocks__container-block1`}>
          <h1>{t("HomePage.blocks__container.basic")}</h1>
          <a className={`blocks__container-price`}>$29</a>
          <img src={basic} alt="" />
          <a className={`blocks__container-description`}>Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien</a>
          <p>{t("HomePage.blocks__container.auto")}</p>
          <p>{t("HomePage.blocks__container.online")}</p>
          <p>{t("HomePage.blocks__container.posting")}</p>
          <button>{t("HomePage.blocks__container.button")}</button>
        </div>
        <div className={`blocks__container-block2`}>
          <h1>{t("HomePage.blocks__container.standard")}</h1>
          <a className={`blocks__container-price`}>$59</a>
          <img src={standard} alt="" />
          <a className={`blocks__container-description`}>Maecenas nec odio et ante tincidunt tempus.</a>
          <p>{t("HomePage.blocks__container.auto")}</p>
          <p>{t("HomePage.blocks__container.online")}</p>
          <p>{t("HomePage.blocks__container.posting")}</p>
          <p>{t("HomePage.blocks__container.unique")}</p>
          <button>{t("HomePage.blocks__container.button")}</button>
        </div>
        <div className={`blocks__container-block3`}>
          <h1>{t("HomePage.blocks__container.premium")}</h1>
          <a className={`blocks__container-price`}>$99</a>
          <img src={premium} alt="" />
          <a className={`blocks__container-description`}>Sed lectus. Sed consequat, leo eget bibendum sodales</a>
          <p>{t("HomePage.blocks__container.auto")}</p>
          <p>{t("HomePage.blocks__container.online")}</p>
          <p>{t("HomePage.blocks__container.posting")}</p>
          <p>{t("HomePage.blocks__container.unique")}</p>
          <p>{t("HomePage.blocks__container.design")}</p>
          <button>{t("HomePage.blocks__container.button")}</button>
        </div>
      </div>

      <div className={`container FAQS__container`}>
        <div>
          <div className={`third__container-description`}>
            <p>{t("HomePage.FAQS__container.title")}</p>
            <h1>{t("HomePage.FAQS__container.h1")}</h1>
          </div>
          <div className={`FAQS__container-description`}>
            <p>Sed augue ipsum, egestas nec, vestibulum et</p>
            <h1>Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate <br /> arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,</h1>
            <hr className={`FAQS__container-hr`} />
            <p>Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.</p>
            <hr className={`FAQS__container-hr`} />
            <p>Ut varius tincidunt libero.</p>
            <hr className={`FAQS__container-hr`} />
            <p>In ut quam vitae odio lacinia tincidunt.</p>
            <hr className={`FAQS__container-hr`} />
            <p>Fusce vel dui Morbi nec metus.</p>
            <hr className={`FAQS__container-hr`} />
          </div>
        </div>
        <div>
          <img src={faqs} alt="" />
        </div>
      </div>
      {/* <img src={ratio} alt="" className={`container section__image`} /> */}

      <Testimonials />
      <LatestPosts />

    </section>


  )
}

export default HomePage
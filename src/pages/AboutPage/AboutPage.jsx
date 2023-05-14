import React from 'react'
import './AboutPage.css';

import firstIcon from './assets/firstIcon.png';
import arrowIcon from './assets/arrowIcon.svg';
import clients from './assets/clients.png';
import projects from './assets/projects.png';
import experience from './assets/experience.png';
import awards from './assets/awards.png';
import playIcon from './assets/playIcon.png';
import transparency from './assets/transparency.png';
import customer from './assets/customer.png';
import reputation from './assets/reputation.png';
import cooperation from './assets/cooperation.png';

import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';
import seven from './assets/seven.png';
import eigth from './assets/eigth.png';

import LatestPosts from '../../components/LatestPosts/LatestPosts'
import Testimonials from '../../components/Testimonials/Testimonials'
import { useTranslation } from 'react-i18next'


function AboutPage() {


  const { t } = useTranslation()

  return (
    <section>

      <div className={`container first__container`}>
        <img src={firstIcon} alt="" />
        <div className={`first__container-description`}>
          <h1>{t("AboutPage.first__container.title")}</h1>
          <p>
            Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc <br />
            fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie <br />
            non, velit.</p>
          <p>
            Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere <br />
            iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent <br />
            venenatis metus at tortor pulvinar varius.
          </p>
          <button>
            {t("AboutPage.first__container.button")}
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>

      <div className={`container second__container`}>
        <div className={`second__container-block`}>
          <img src={experience} alt="" />
          <h1>12</h1>
          <p>{t("AboutPage.second__container.experience")}</p>
        </div>
        <div className={`second__container-block`}>
          <img src={awards} alt="" />
          <h1>20</h1>
          <p>{t("AboutPage.second__container.awards")}</p>
        </div>
        <div className={`second__container-block`}>
          <img src={projects} alt="" />
          <h1>150</h1>
          <p>{t("AboutPage.second__container.projects")}</p>
        </div>
        <div className={`second__container-block`}>
          <img src={clients} alt="" />
          <h1>32k</h1>
          <p>{t("AboutPage.second__container.clients")}</p>
        </div>
      </div>

      <div className={`container vision__container`}>
        <div className={`vision__container-block`}>
          <h1>{t("AboutPage.vision__container.title")}</h1>
          <button> <img src={playIcon} alt="" /> </button>
          <p>{t("AboutPage.vision__container.description")}</p>
        </div>
      </div>

      <div className={`container value__container`}>
        <h1>{t("AboutPage.value__container.title")}</h1>
        <div className={`value__container-blocks`}>
          <div className={`value__container-block`}>
            <img src={customer} alt="" />
            <h1>{t("AboutPage.value__container.customer")}</h1>
            <p>Aenean urna dictum <br /> adipiscing nec, cras quisque.</p>
          </div>
          <div className={`value__container-block`}>
            <img src={transparency} alt="" />
            <h1>{t("AboutPage.value__container.transparency")}</h1>
            <p>Aenean urna dictum <br /> adipiscing nec, cras quisque.</p>
          </div>
          <div className={`value__container-block`}>
            <img src={reputation} alt="" />
            <h1>{t("AboutPage.value__container.reputation")}</h1>
            <p>Aenean urna dictum <br /> adipiscing nec, cras quisque.</p>
          </div>
          <div className={`value__container-block`}>
            <img src={cooperation} alt="" />
            <h1>{t("AboutPage.value__container.cooperation")}</h1>
            <p>Aenean urna dictum <br /> adipiscing nec, cras quisque.</p>
          </div>
        </div>
      </div>







      <div className={`container story__container`}>
        <div className={`container story__container-description`}>
          <h1>{t("AboutPage.story__container.title")}</h1>
          <p>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
        </div>
        <div className={`story__container-blocks`}>
          <div className={`story__container-block-one`}>
            <div className={`story__container-block card-1`}>
              <p>2020</p>
              <h1>{t("AboutPage.story__container.business")}</h1>
              <a>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</a>
            </div>
            <div className={`story__container-block card-3`}>
              <p>2018</p>
              <h1>{t("AboutPage.story__container.business")}</h1>
              <a>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</a>
            </div>
          </div>
          <div className={`story__container-block-three`}>
            <div className={`circle__one`}></div>
            <div className={`circle__two`}></div>
            <div className={`circle__three`}></div>
            <div className={`circle__four`}></div>
          </div>
          <div className={`story__container-block-two`}>
            <div className={`story__container-block card-2`}>
              <p>2021</p>
              <h1>{t("AboutPage.story__container.business")}</h1>
              <a>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</a>
            </div>
            <div className={`story__container-block card-4`}>
              <p>2019</p>
              <h1>{t("AboutPage.story__container.business")}</h1>
              <a>Curabitur ullamcorper ultricies nisi. Praesent <br /> nonummy mi in odio. Donec mollis hendrerit risus.</a>
            </div>
          </div>
        </div>
      </div>















      <div className={`container key__container`}>
        <div className={`container key__container-description`}>
          <h1>{t("AboutPage.key__container.title")}</h1>
          <p>{t("AboutPage.key__container.description")}</p>
        </div>
        <div className={`key__container-cards`}>
          <div className={`key__container-card`}>
            <img src={one} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={two} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={three} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={four} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
        </div>
        <div className={`key__container-cards`}>
          <div className={`key__container-card`}>
            <img src={five} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={six} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={seven} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
          <div className={`key__container-card`}>
            <img src={eigth} alt="" />
            <h1>Eleanor Pena</h1>
            <p>{t("AboutPage.key__container.marketing")}</p>
          </div>
        </div>
      </div>



      <Testimonials />
      <LatestPosts />
    </section>
  )
}

export default AboutPage
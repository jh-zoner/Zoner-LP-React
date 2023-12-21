import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './versatile-a.css'

const VersatileA = (props) => {
  return (
    <div className="versatile-a-container">
      <Helmet>
        <title>
          versatile-a - Easy to use phoot editor – Zoner Photo Studio X
        </title>
        <meta
          property="og:title"
          content="versatile-a - Easy to use phoot editor – Zoner Photo Studio X"
        />
      </Helmet>
      <header data-role="Header" className="versatile-a-header">
        <div className="versatile-a-container01">
          <img src="/logo_zps.svg" className="versatile-a-image" />
          <div className="versatile-a-nav">
            <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          </div>
        </div>
        <div className="versatile-a-btn-group">
          <button className="versatile-a-button button">
            Start 7-day trial
          </button>
        </div>
        <div data-role="BurgerMenu" className="versatile-a-burger-menu">
          <svg viewBox="0 0 1024 1024" className="versatile-a-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="versatile-a-mobile-menu">
          <nav>
            <div className="versatile-a-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="versatile-a-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="versatile-a-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="versatile-a-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="versatile-a-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="versatile-a-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="versatile-a-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="versatile-a-hero">
        <div className="versatile-a-hero1">
          <div className="versatile-a-container03">
            <div className="versatile-a-container04">
              <h1 className="versatile-a-hero-heading heading1">
                The only photo editor you&apos;ll ever need
              </h1>
              <span className="versatile-a-hero-sub-heading">
                Meet Zoner Photo Studio X, the most universal photo software. No
                edit is too small, no challenge too big. Every tool you need is
                right here.
              </span>
              <div className="versatile-a-btn-group1">
                <button className="versatile-a-hero-button1 button">
                  <span className="versatile-a-text">
                    Start free 7-day trial
                  </span>
                  <img
                    alt="image"
                    src="/microsoft-windows-22.svg"
                    className="versatile-a-image2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="versatile-a-details">
        <div className="versatile-a-details1">
          <div className="versatile-a-container05">
            <span className="versatile-a-text01 sectionTitle">
              <span>easy photo editing</span>
              <br></br>
            </span>
            <h2 className="versatile-a-details-heading heading2">
              Edit image without headaches
            </h2>
            <span className="versatile-a-details-sub-heading">
              You will love how easy is it to edit your photos with Zoner Photo
              Studio. Just pick a photo, switch to editing and make it happen!
            </span>
          </div>
          <img
            alt="image"
            src="/2022_09_lp_ppc_jpeg_small_en%20(1)-1000w.jpg"
            loading="lazy"
            className="versatile-a-details-image"
          />
        </div>
      </div>
      <div className="versatile-a-features">
        <div className="versatile-a-features-container">
          <div className="versatile-a-features1">
            <div className="versatile-a-container06">
              <span className="versatile-a-text04 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="versatile-a-features-heading heading2">
                Key Features
              </h2>
              <span className="versatile-a-features-sub-heading">
                Discover the powerful features of our software product
              </span>
            </div>
            <div className="versatile-a-container07">
              <FeatureCard
                Heading="Responsive Design"
                SubHeading="Our website is designed to look great on all devices, from desktops to smartphones."
              ></FeatureCard>
              <FeatureCard
                Heading="Intuitive User Interface"
                SubHeading="Our user interface is designed to be user-friendly and easy to navigate, ensuring a seamless experience for your customers."
              ></FeatureCard>
              <FeatureCard
                Heading="Powerful Integration"
                SubHeading="Our software product seamlessly integrates with popular tools and platforms, allowing you to streamline your workflow."
              ></FeatureCard>
              <FeatureCard
                Heading="Customizable Templates"
                SubHeading="Choose from a variety of professionally designed templates and customize them to match your brand identity."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="versatile-a-pricing">
        <div className="versatile-a-pricing1">
          <div className="versatile-a-container08">
            <span className="versatile-a-text07 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="versatile-a-pricing-heading heading2">
              Some title for a pricing section
            </h2>
            <span className="versatile-a-pricing-sub-heading">
              Some catchy text for a pricing section
            </span>
          </div>
          <div className="versatile-a-container09">
            <div className="versatile-a-pricing-card">
              <div className="versatile-a-container10">
                <span className="versatile-a-text10 heading3">Free</span>
                <span className="versatile-a-free-plan-description">
                  A short description for the free plan
                </span>
              </div>
              <div className="versatile-a-container11">
                <span className="versatile-a-text11">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="versatile-a-free-plan-price">0</span>
              </div>
              <div className="versatile-a-container12">
                <div className="versatile-a-container13">
                  <span className="versatile-a-text14">✔</span>
                  <span className="versatile-a-free-plan-features">
                    A feature of the free plan
                  </span>
                </div>
                <div className="versatile-a-container14">
                  <span className="versatile-a-text15">✔</span>
                  <span className="versatile-a-free-plan-features1">
                    A feature of the free plan
                  </span>
                </div>
                <div className="versatile-a-container15">
                  <span className="versatile-a-text16">✔</span>
                  <span className="versatile-a-free-plan-features2">
                    A feature of the free plan
                  </span>
                </div>
                <div className="versatile-a-container16">
                  <span className="versatile-a-text17">✔</span>
                  <span className="versatile-a-free-plan-features3">
                    A feature of the free plan
                  </span>
                </div>
              </div>
              <button className="versatile-a-button1 button">
                Continue with Free
              </button>
            </div>
            <div className="versatile-a-pricing-card1">
              <div className="versatile-a-container17">
                <span className="versatile-a-text18 heading3">BASIC</span>
                <span className="versatile-a-basic-plan-description">
                  A short description for the basic plan
                </span>
              </div>
              <div className="versatile-a-container18">
                <span className="versatile-a-text19">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="versatile-a-basic-plan-pricing">7</span>
                <span className="versatile-a-text22">/ month</span>
              </div>
              <div className="versatile-a-container19">
                <div className="versatile-a-container20">
                  <span className="versatile-a-text23">✔</span>
                  <span className="versatile-a-text24">
                    All features of FREE plan
                  </span>
                </div>
                <div className="versatile-a-container21">
                  <span className="versatile-a-text25">✔</span>
                  <span className="versatile-a-basic-plan-features">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="versatile-a-container22">
                  <span className="versatile-a-text26">✔</span>
                  <span className="versatile-a-basic-plan-features1">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="versatile-a-container23">
                  <span className="versatile-a-text27">✔</span>
                  <span className="versatile-a-basic-plan-features2">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="versatile-a-container24">
                  <span className="versatile-a-text28">✔</span>
                  <span className="versatile-a-basic-plan-features3">
                    A feature of the basic plan
                  </span>
                </div>
              </div>
              <button className="versatile-a-button2 button">
                Try the Basic plan
              </button>
            </div>
            <div className="versatile-a-pricing-card2">
              <div className="versatile-a-container25">
                <span className="versatile-a-text29 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="versatile-a-pro-plan-description">
                  A short description for the pro plan
                </span>
              </div>
              <div className="versatile-a-container26">
                <span className="versatile-a-text32">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="versatile-a-pro-plan-pricing">20</span>
                <span className="versatile-a-text35">/ month</span>
              </div>
              <div className="versatile-a-container27">
                <div className="versatile-a-container28">
                  <span className="versatile-a-text36">✔</span>
                  <span className="versatile-a-text37">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="versatile-a-container29">
                  <span className="versatile-a-text38">✔</span>
                  <span className="versatile-a-pro-plan-features">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="versatile-a-container30">
                  <span className="versatile-a-text39">✔</span>
                  <span className="versatile-a-pro-plan-features1">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="versatile-a-container31">
                  <span className="versatile-a-text40">✔</span>
                  <span className="versatile-a-pro-plan-features2">
                    A feature of the pro plan
                  </span>
                </div>
              </div>
              <button className="versatile-a-button3 button">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="versatile-a-gallery">
        <div className="versatile-a-gallery1">
          <h1 className="versatile-a-gallery-heading heading2">
            Explore Our Product
          </h1>
          <span className="versatile-a-gallery-sub-heading">
            Take a look at our software product in action
          </span>
          <div className="versatile-a-container32">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1598018553943-29ace5bf9867?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1663885193694-bbeae8c95b2a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1632505084024-f6bc3021fcce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1610261041212-36cac535c7a3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1665989181458-0a23511beef9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1592323360850-e317605f0526?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1670102054424-99386d3a5537?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1653522501282-dd322ecd1367?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1672790654325-0a6516f34ed1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1596263522014-258cf7e39330?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjI5OTc2M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="versatile-a-banner">
        <div className="versatile-a-banner1">
          <h1 className="versatile-a-banner-heading heading2">Our mission</h1>
          <span className="versatile-a-banner-sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
            Integer in dignissim tortor. Sed non volutpat turpis. Mauris luctus
            rutrum mi ut rhoncus. Integer in dignissim ortor.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <button className="versatile-a-banner-button button">
            Read More
          </button>
        </div>
      </div>
      <div className="versatile-a-faq">
        <div className="versatile-a-faq-container">
          <div className="versatile-a-faq1">
            <div className="versatile-a-container33">
              <span className="versatile-a-text41 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="versatile-a-text44 heading2">Common questions</h2>
              <span className="versatile-a-text45">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="versatile-a-container34">
              <Question
                Answer="The cost of the website depends on various factors such as the complexity of the design, number of pages, and additional features required. Please contact us for a personalized quote."
                Question="What is the cost of the website?"
              ></Question>
              <Question
                Answer="Yes, we offer customization options to ensure that the website aligns with your brand identity. Our team of designers will work closely with you to create a professional and modern design."
                Question="Can I customize the design of the website?"
              ></Question>
              <Question
                Answer="Our websites for software products typically include features such as responsive design, user-friendly interface, integration with third-party tools, and search engine optimization. We can also incorporate additional features based on your specific requirements."
                Question="What features are included in the website?"
              ></Question>
              <Question
                Answer="The development time for the website depends on its complexity and the availability of content and resources from your end. On average, it takes around 4-6 weeks to complete a website project."
                Question="How long does it take to develop the website?"
              ></Question>
              <Question
                Answer="Yes, we offer ongoing support and maintenance services to ensure that your website remains up-to-date and functions smoothly. Our team is available to assist you with any technical issues or updates you may require."
                Question="Do you provide ongoing support after the website is launched?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="versatile-a-footer">
        <footer className="versatile-a-footer1">
          <div className="versatile-a-container35">
            <span className="versatile-a-logo">COMPANY</span>
            <nav className="versatile-a-nav2 versatile-a-nav2">
              <span className="versatile-a-nav1 versatile-a-nav1">Home</span>
              <span>Features</span>
              <span className="versatile-a-nav3">Pricing</span>
              <span className="versatile-a-nav4">Testimonials</span>
              <span className="versatile-a-nav5">Contact</span>
            </nav>
          </div>
          <div className="versatile-a-separator"></div>
          <div className="versatile-a-container36">
            <span className="versatile-a-text62">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="versatile-a-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="versatile-a-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="versatile-a-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="versatile-a-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default VersatileA

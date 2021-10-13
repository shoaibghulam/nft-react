import React,{useState} from 'react'
import {Navbar,Nav,Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaTwitter, FaFacebook, FaGoogle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const sliderTwo = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Home=() =>{
  const [sliderImage,SetSliderImage]=useState([
    'https://themekaverse.com/images/meka_09.jpg',
    'https://themekaverse.com/images/meka_01.jpg',
    'https://themekaverse.com/images/meka_02.jpg',
    'https://themekaverse.com/images/meka_03.jpg',
    'https://themekaverse.com/images/meka_04.jpg',
    'https://themekaverse.com/images/meka_05.jpg',
    'https://themekaverse.com/images/meka_06.jpg',
    'https://themekaverse.com/images/meka_07.jpg',
    'https://themekaverse.com/images/meka_08.jpg',
  ])
    return (
        <>
         <section id="hero">
         <header class="container custom-header">
          <Row>
          <Col md={6} lg={6} xs={3} sm={3}>
         <div className="nav-logo">
      <img src="https://themekaverse.com/images/logo.svg"/>
      <span className="mobile-icon">Kovbasy</span>
     
</div>
</Col>
<Col md={6} lg={6} xs={9} sm={9}  className="text-right nav-icon">
      <a href="#deets">
      <FaTwitter />
      </a>
      <a href="#deets">
      <FaFacebook />
      </a>
      <a href="#deets">
      <FaGoogle />
      </a>
      <a className="connect-btn" href="#deets">
      Connect wallet
      </a>
      </Col>
      </Row>
           </header>
           {/* video background start */}
<div className="video-container">
      <video autoplay loop muted id="video-bg" preload="" playsinline="">

        <source src="https://themekaverse.com/images/hero_mn.mp4" type="video/mp4" />

      </video>
      </div>
      <a className="hero-main-btn" href="https://opensea.io/collection/mekaverse" target="_blank">
	<div className="element">
		<div className="text">View on Opensea</div>
	</div>
</a>
         </section>
        
    <Container className="presentation">
    <Row>
    <Col md={6} lg={6} xs={12} sm={12}>
    <h2>
        <div class="degrade">8,888 unique Mekas</div> who need Drivers. </h2>
        <p>The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.</p>
        <p>Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.</p>
        <p>The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.</p>
        <p>Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.</p>
    </Col>
    <Col md={6} lg={6} xs={12} sm={12}>
    <video className="various"  autoplay loop>
        <source src="https://themekaverse.com/images/various.mp4" type="video/mp4"/>
        </video>
    </Col>
    </Row>
    </Container>
    {/* slider start */}
    <Container>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-padding-bottom"
      dotListClass=""
      draggable
      focusOnSelect
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    responsive={responsive}>
    {sliderImage.map((image)=>
    
  <div>
    <img src={image} className="gallery-image" />
  </div>
    )}

</Carousel>
    </Container>
    {/* slider end */}



    {/* cc start */}
    <section id="roadmap" className="">
	<div className="container custom-road-map">
	<div className="text-center roadmap-desc">
        <h1>Roadmap</h1>
        <p className="intro" >
        This roadmap outlines our goals and where we want to take Royal Babies. We have a lot of ideas and concepts that we are working on. We also listen to fan submitted ideas. It may evolve over time and hopefully become even better!
        </p>
      </div>
		<div className="middle row relative">
			<div className="timeline ">
				<div className="line">
					<div className="progression" /></div>
				<div className="step row done">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
							<div className="number degrade">5%</div>
							<h3>Out the womb </h3></div>
						<p>All 10,000 Babies will be revealed. Each will be unique with its own characteristics. The rarity of each trait will be announced the next day. </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             
							<div className="number degrade">15%</div>
							<h3>Mommy’s milk</h3></div>
						<p >
            We don’t want our babies to cry. Every baby needs a baby bottle with milk. The Royals will release the baby bottles.
              </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             
							<div className="number degrade">25%</div>
							<h3>Onesie time</h3></div>
						<p>
            All babies will be able to choose between 2 items. A t-shirt and a very limited-edition onesie. Only pre-orders will be accepted for the merch release.
              </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             

							<div className="number degrade">50%</div>
							<h3>Babies Love Mother Earth</h3></div>
						<p>
            We will donate 10% of project proceeds to a Wildlife conservation of our communities choosing. The survey will be held on our twitter and discord.
               </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             

							<div className="number degrade">75%</div>
							<h3>Baby Meets Founder</h3></div>
						<p >
            We want to meet our community. Interacting on discord is fun and all but we want to hang with you guys in person. We will host an NFT raffle launch and 8-12 lucky winners will be able to come with us to a state of your choosing. We plan do host this event in spring break or summer.
              </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             

							<div className="number degrade">90%</div>
							<h3>Babies Say their first words</h3></div>
						<p >
            We want to meet our community. Interacting on discord is fun and all but we want to hang with you guys in person. We will host an NFT raffle launch and 8-12 lucky winners will be able to come with us to a state of your choosing. We plan do host this event in spring break or summer.
              </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             
            

							<div className="number degrade">100%</div>
							<h3> 1st Birthday</h3></div>
						<p >
            As promised, every year, a percentage of trading royalties will go back to the community. That’s right, these babies are lifelong passive income assets. All NFT holders will have to input their wallet address when we ask for it and we will split the dividends among all holders.
              </p>
					</div>
				</div>
				<div className="step row">
					<div className="dot">
						<div className="shape" /></div>
					<div className="details">
						<div className="title row ">
             
            

							<div className="number degrade">105%</div>
							<h3> Teens</h3></div>
						<p >
            If you think the babies were a great success, you won’t believe what we have in store for our next project. Announcements will be made and Babies will be the first to hear about them.
              </p>
					</div>
				</div>
			</div>
			<div className="box">
				<video id="helmet" tabIndex={0} preload playsInline>
					<source src="https://themekaverse.com/images/helmet.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
</section>
    {/* cc  end */}
    {/* container team start */}
    <Container className="team-section">
      <Row>
        <Col md={5} lg={5} xs={12} sm={12}>
       <h2> Who are we? </h2>
       <h2  class="degrade team-degrade">Creative teams</h2>
      
        </Col>
        <Col md={7} lg={7} xs={12} sm={12}>
      <p>
      Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
      </p>
      
        </Col>
      </Row>
    </Container>
    {/* container team end */}

    {/* nft data start */}
    <Container className="nft-arts">
      <Row>
        <Col md={4} lg={4} xs={12} sm={12}>
          <h2 className="home-art-title">Matt.B </h2>
          <img src={sliderImage[0]} className="img-fluid" />
        </Col>
        <Col md={8} lg={8} xs={12} sm={12}>
        <h2 className="home-art-title">NFTs Artworks </h2>
        <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-padding-bottom"
     
      responsive={sliderTwo}
      showDots
>

    
  <div>
    <img src={sliderImage[4]} className="img-fluid home-art-two pr-2" />
  </div>
  <div>
    <img src={sliderImage[1]} className="img-fluid home-art-two pr-2" />
  </div>


</Carousel>
        </Col>
      </Row>
    </Container>
    <Container className="nft-arts">
      <Row>
        <Col md={4} lg={4} xs={12} sm={12}>
          <h2 className="home-art-title">Matt.B </h2>
          <img src={sliderImage[0]} className="img-fluid " />
        </Col>
        <Col md={8} lg={8} xs={12} sm={12}>
        <h2 className="home-art-title">NFTs Artworks </h2>
        <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-padding-bottom"
     
      responsive={sliderTwo}
      showDots
>

    
  <div>
    <img src={sliderImage[4]} className="img-fluid home-art-two pr-2" />
  </div>
  <div>
    <img src={sliderImage[1]} className="img-fluid home-art-two  pr-2" />
  </div>


</Carousel>
        </Col>
      </Row>
    </Container>
    {/* nft data end */}

    {/* section descord start */}
    <section id="discord">
	<div className="container">
		<h2 className="sr-top-fast">Join the community</h2>
		<p className="sr-top-fast-delayed">MekaVerse Discord already has over 150,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.</p>
		<div className="sr-top-more-delayed" >
      <a href="https://discord.com/invite/mekaverse" rel="noopener" target="_blank" className="cta">Join our Discord</a>
      </div>
		<div className="meka sr-bottom-more-delayed" />
    </div>
</section>
    {/* section descord end */}

    {/* footer start */}
    <footer>
      <Container>
        <Row>
          <Col  md={8} lg={8} xs={12} sm={12}>
          <div className="footer-logo">
      <img src="https://themekaverse.com/images/logo.svg"/>
      <span>Kovbasy</span>
      <p>8,888 unique mekas who need drivers.</p>
</div>
<div className="copyright">
©2021 MekaVerse. All rights reserved.


</div>
          </Col>
          <Col  md={4} lg={4} xs={12} sm={12} className="footer-right">
            <ul>
            


              <li><a href="#">Home</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Smart Contract</a></li>
            </ul>
            <div className="footer-icon">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGoogle /></a>
                          </div>
            </Col>

        </Row>
      </Container>
    </footer>
    {/* footer end */}
        </>
    )
}
export default Home;

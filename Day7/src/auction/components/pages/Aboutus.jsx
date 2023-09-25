import React from 'react';
import './aboutus.css';
import boto from '../maragatha.jpeg'
import bts from '../tony.jpg';
import btns from '../winner.jpeg'
import Footer from '../../Footer/foot';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// import Footera from './Footera';

function AboutUs() {
  return (
    <>
       <Link to="/page2"><BiArrowBack/></Link>
    <div className="about-us">
        <h1 className="name2">|BIDBUDDY</h1>
      <main>
        <section className="about-description">
          <h2 className='c'>About Us</h2>
          <p>
            Welcome to BidBuddy, your premier online auction platform where
            you can explore a world of unique items, connect with collectors,
            and participate in exciting auctions. We are specializing in import-export 
            of bulk electronics products, gadgets, e-commerce, entertainment shopping and premium
            brands distribution. We are operating from Delhi(India) to Sydney(Australia).            
          </p>
          <p>
            BidBunny conducted it's 1st online auction on 17th Feburary 2004.
            Since then we are proudly India's No-1 Online Auctioneer with 20k+ Registered Members.
            We give you the chance to get the products you dream about at amazing prices!.You 
            can buy brand new Iphones at lowest cost ever in India.Look at our homepage to see what 
            products are up for auction right now.
          </p>
          <p>
          If you don’t win an auction, you will never have to walk away empty handed from BidBunny because 
          you can buy the product for a discount price using the Buy Now option. You'll never have to pay 
          more than the Value Price (MRP) for any products.
          Long-term relationship with our suppliers and partners. Just login and give a try,We think you will find that mixing 
          online auction competition into the "joy of shopping" makes it all even more fun at BidBunny.
          </p>
        </section>

        <section className="team-members">
          <h2 className='y'>Our Team</h2>
          <div className="team-member">
            <img
              src={bts}
              alt="Team Member 1"
              className="team-member-image"
              />
            <h3 className='m'>Mark Antony</h3>
            <p>CEO & Founder</p>
            <p className="team-member-description">
              Mark is a passionate collector and entrepreneur who founded
              BidBunny to bring together collectors from around the world.
            </p>
          </div>
          <div className="team-member">
            <img
              src={btns}
              alt="Team Member 2"
              className="team-member-image"
              />
            <h3 className='x'>Jane Smith</h3>
            <p>CTO</p>
            <p className="team-member-description">
              Jane is a tech enthusiast with a deep understanding of online
              marketplaces. She ensures that BidBunny runs smoothly and
              securely.
            </p>
          </div>
          <div className="team-member">
            <img
                src={boto}
                alt="Team member 3"
                className="team-member-image"
            />
            <h3 className='j'>Thomas Shelby</h3>
            <p>Trouble Shooter</p>
            <p className="team-member-description">
                Shelby is a great trouble shooter.Receive inquiries 
                and advise on best procedures to troubleshoot 
                hardware/software issues.
           </p>    
          </div>
        </section>
      </main>
     <Footer /> 
    </div>
                </>
  );
}

export default AboutUs;
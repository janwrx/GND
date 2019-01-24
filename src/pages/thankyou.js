import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby';
import '../assets/thankyou.css'

const ThankYou = () => (
 <Layout>
    <SEO title="Thank You For Your Donation" />
    <center>
        <div style={{margin: 50}}class="w3-container w3-center w3-animate-zoom">
         <p style={{paddingTop: 50, fontSize: 50, height: 100, color: `white`}}>THANK YOU!</p>
        </div>
         <p style={{color: `white`}}>You will receive a donation confirmation via e-mail in a few minutes</p>
    <Link style={{ padding: 10, color: `white`, border: `2px solid white`, borderRadius: 10,}} to="/">Donate Again
    </Link>
    </center>
    <div className="mediabuttons">
    <center>
    <a href="https://www.facebook.com/gurunanakdwara/" class="fa fa-facebook"></a>
    <a href="https://twitter.com/gurunanakdwara" class="fa fa-twitter"></a>
    <a href="https://www.instagram.com/gurunanakdwara/" class="fa fa-instagram"></a>
    <a href="https://www.youtube.com/c/GuruNanakDwara" class="fa fa-youtube"></a>
    </center>
    </div>
</Layout>
)

export default ThankYou

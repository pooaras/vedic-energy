import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import DotNavigation from './DotNavigation';
import Slider from './Components/Slider/Slider';
function App() {
  
  return (
    <div className="App">
      <section className="fpage">
     
   
     
            <div className="nav">
            
            <a className='navicon' href="#home"><h5>Home</h5></a>
            <a className='navicon' href="#about"><h5>About Us</h5></a>
            <a className='navicon' href="#service"><h5>Services</h5></a>
            <a className='navicon'href="#articles"><h5>Blog</h5></a>
            <a className='navicon'href="#contact"><h5>Contact</h5></a>
            <Button className='qbtn' variant='success'>Get a Quote </Button> 
            </div>
           
            
   
      <div className='ved'>
      <h1 className='h'>Vedic Energie</h1>
      <h3 >Connecting World To Green Energy Solutions And Carbon Free Future.</h3><br/>
      <Button variant='success' size='lg'>SCHEDULE NOW </Button> 
      </div></section>
      <div id="service" className='service'>
      <h1 className='ser'>Our Services</h1>
      <p className='serv'>Green solutions can help you in cost-cutting of energy by reducing energy consumption, generating clean energy, taking advantage of<br/> 
government incentives, and improving building design. By adopting green solutions, individuals and businesses can save money on energy <br/>
bills and promote a more sustainable future for all.</p>
<div className='sercon'>
  <img className='winpic' src="wind-solar.jpg" alt="solar pannel"/>
    <ul className='epts'>
    <li><h5 className='pts'>Energy Calculation</h5></li>
    <li><h5 className='pts'>Energy Saving</h5></li>
    <li><h5 className='pts'>Energy Demand Management</h5></li>
    <li><h5 className='pts'>Reduce bills and save money</h5></li>
    <li><h5 className='pts'>Energy Supply Solution</h5></li>
    <li><h5 className='pts'>Renewable Energy Solutions</h5></li>
 
      </ul></div></div>
      <div className='launch'>
      <h1>New Launch</h1>
      
      <img className='winpi' src="wind-solar.jpg" alt="solar pannel"/>
      <div className='ltex'><h3>Energy Calculator</h3> 
      <p>It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout. The point of using Lorem 
Ipsum is that it has a more-or-less normal distribution of letters, as 
opposed to using 'Content here, content here', making it look like readable 
English. Many desktop publishing packages and web page editors now use 
Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
uncover many web sites still in their infancy. Various versions have evolved 
over the years, sometimes by accident, sometimes on purpose (injected</p>
<Button variant='success' size='lg'>Learn More </Button> 
      </div>
      </div>

      <div className='review'>
      <h1 style={{paddingTop:"30px"}}>What our clients say</h1>

      
      {/* <DotNavigation numberOfDots={5} /> */}
      <Slider/>
      </div>
      
      <div className='emblem'>
                <img className='emb' style={{background:"none"}} src="emblem.png" alt='emblem'></img>
                <img className='emb'style={{background:"none"}} src="emblem.png" alt='emblem'></img>
                <img className='emb'style={{background:"none"}} src="emblem.png" alt='emblem'></img>
                <img className='emb'style={{background:"none"}} src="emblem.png" alt='emblem'></img>
            </div>
    <div className='sch'>
    <h1 className='shu'>SEE WHAT WE CAN DO FOR YOU</h1>
      <h1>Schedule Your <h1 className='yelo'>First Meeting</h1></h1><br/>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point <br/>
of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', <br/>
making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their <br/>
default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved <br/>
over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br></br>
      <Button variant='warning' size='lg'>SCHEDULE NOW </Button> 
    </div>
     <div className='card'>
      <h1 id="articles">Recent Articles</h1>
      <Row>
     <Card className='car' style={{ width: '24rem', backgroundColor: "#D3D3D3	"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body >
        <Card.Title>Sustainable Fashion</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be 
distracted by the readable content of a page when 
looking at its layout. The point of using Lorem Ipsum is 
that it has a more-or-less normal distribution of letters, 
as opposed to using 'Content here, content here', 
making it look like readable English. Many desktop 
publishing packages and web page editors now use 
Lorem Ipsum as their default model text, and a search 
for 'lorem ipsum' will uncover many web sites still in 
their infancy. Various versions have evolved over the 
years, sometimes by accident, sometimes on purpose 
(injected humour and the like).
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='car' style={{ width: '24rem', backgroundColor: "#D3D3D3"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body >
        <Card.Title>Sustainable Fashion</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be 
distracted by the readable content of a page when 
looking at its layout. The point of using Lorem Ipsum is 
that it has a more-or-less normal distribution of letters, 
as opposed to using 'Content here, content here', 
making it look like readable English. Many desktop 
publishing packages and web page editors now use 
Lorem Ipsum as their default model text, and a search 
for 'lorem ipsum' will uncover many web sites still in 
their infancy. Various versions have evolved over the 
years, sometimes by accident, sometimes on purpose 
(injected humour and the like).
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='car' style={{ width: '24rem', backgroundColor: "#D3D3D3"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body >
        <Card.Title>Sustainable Fashion</Card.Title>
        <Card.Text>
        It is a long established fact that a reader will be 
distracted by the readable content of a page when 
looking at its layout. The point of using Lorem Ipsum is 
that it has a more-or-less normal distribution of letters, 
as opposed to using 'Content here, content here', 
making it look like readable English. Many desktop 
publishing packages and web page editors now use 
Lorem Ipsum as their default model text, and a search 
for 'lorem ipsum' will uncover many web sites still in 
their infancy. Various versions have evolved over the 
years, sometimes by accident, sometimes on purpose 
(injected humour and the like).
        </Card.Text>
      </Card.Body>
      
    </Card>
    </Row>
     </div>

    <div id="contact" className='contact'>
    
    <div className='clin'><ul>
      <h5>Quick Links</h5>
      <li>Home</li>
      <li>About Us</li>
      <li>Blog</li>
      <li>Testimonial</li>
      <li>Our Team</li>
      <li>Careers</li>
      </ul>
      </div>
    <div className='clin'><ul><h5>Services</h5>
      <li>Energy Calculation</li>
      <li>Energy Demand Management</li>
      <li>Energy Supply Solution</li>
      <li>Renewable Energy Solution</li>
      <li>Reduce Energy Bills</li>
      <li>Energy Saving</li>
      </ul></div>
    <div className='clin'><ul><h5>Contact</h5>
      <li>31 Steeplebush Ave Unit 1 <br/>
Brampton, ON L6R 3B4</li>
    <li>+91 98439 37773</li>
    <li>contact@vedicenergie.com</li>
    <br/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d441471.5906996136!2d76.87611388807017!3d12.245962541747518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679472712578!5m2!1sen!2sin" width="250" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </ul></div>
    </div>

    <div className='copyrit'>
    <h6>COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY | SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY</h6>
    </div>
    </div>
  );
}

export default App;

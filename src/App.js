import './App.css';
import logo from './logo.svg';
import desktop from './desktop.jpg';
import pcs from './pcs.jpg';
import keybord from './keybord.jpg';
import gaming from './gaming.jpg';
import { useState } from 'react';
function App() {
  const [open,setOpen] = useState(false);
  const toggle =()=>{
    setOpen(!open);
  }
  return (
    <div className="container">
      <header>
        <div className='logo'><img src={logo} alt='logo' /></div>
        <div className={`nav ${open ?'open' :'close'}`}>
          <ul>
            <li><a href='0' >home</a></li>
            <li><a href='0' >New</a></li>
            <li><a href='0' >Popular</a></li>
            <li><a href='0' >Trending</a></li>
            <li><a href='0' >Categories</a></li>
          </ul>
        </div>
        <div className='icon' onClick={toggle}>
        <i className={`${open?'fa-solid fa-xmark':'fa-solid fa-bars'}`}></i>
        </div>
      </header>

      <div className='top'><img src={desktop} alt='game' /></div>
      <div className='middle'>
        <h1 className='mid'>The Bright Future of Web 3.0?</h1>
        <div> <p className='para'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But it really fulfilling its promise?</p>
          <button id='btn'>READ MORE</button></div></div>
      <div className='bottom'>
        <div className='bottom'>
          < img src={pcs} alt='pcs' /><div>
            <h2>01</h2><h3>Reviving Retro PCs</h3><p>What happens when old PCs are given modern upgrade?</p></div></div>
        <div className='bottom'>
          < img src={keybord} alt='keybord' />
          <div>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets</p></div>
        </div>
        <div className='bottom'>
          < img src={gaming} alt='gaming' />
          <div>
            <h2>03</h2><br />
            <h3> The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p></div>
        </div>
      </div>
      <div className='side'>
        <div>
          <h1>New</h1>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p></div>
        <hr />
        <div>
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the possible adverse effects of on-deman AI image generation?</p>
        </div>
        <hr />
        <div>
          <h3>Is VC Funding Drying Up?</h3>
          <p>Private funding by VC firms is down 50% YOY We take a look at what that means</p>
        </div>
      </div>

    </div>
  );
}

export default App;

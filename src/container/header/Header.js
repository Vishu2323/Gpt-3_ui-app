import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const header = () => {
  return (
  <div classname="gpt3__header-section" id="home">
      <div className='gpt3__header-content'>
           <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
           <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
             <img src={people} alt='people'/>
             <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
     </div>
        <div className="gpt3__header-image">
          <div className='gpt3__header-image-h1'>
          <h1>"AI is a tool. The choice about how it gets deployed is ours."</h1>
          </div>
          <img src={ai} alt='ai'/>
        </div>
  </div>
  )
}

export default header

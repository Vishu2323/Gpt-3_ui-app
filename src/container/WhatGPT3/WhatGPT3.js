import React from 'react';
import './what.css';
// import {Feature} from './Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      {/* <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." /> */}
      <h1><pre>What is
                GPT-3?</pre></h1>
      <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
       {/* <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." /> */}
      {/* <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" /> */}
      {/* <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />  */}
     <div className='gpt3__whatgpt3-container-cards'> <h1>Chatbots</h1>
      <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
      </div>
      <div className='gpt3__whatgpt3-container-cards'>
      <h1>Knowledgebase</h1>
       <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
       </div>

       <div className='gpt3__whatgpt3-container-cards'>
      <h1>Education"</h1>
      <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
      </div>
      </div> 
  </div>
  )
}

export default WhatGPT3;

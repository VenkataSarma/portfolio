import React from 'react';
import intro from './Assets/PROF.jpg';

function Intro() {
  const scrollToFooter = () => {
    const footer = document.getElementById('Footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='Name'>
        <div className='image'>
          <img src={intro} alt='My photo' />
        </div>
        <div className='matter'>
          <p className='p1'> Hello there I'm</p>
          <h1 className='Myname'>Venkata Sarma Vedam</h1>
          <p className='p2'>A Data Science Undergraduate</p>
          <div className='container'>
            <div className='buttons'>
              <button
                className='btn-1'
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1-8CMqhZCp6zXefs3kR_q61XDmGlWd_po/view?usp=sharing',
                    '_blank'
                  )
                }
              >
                Resume
              </button>
              <button className='btn-2' onClick={scrollToFooter}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

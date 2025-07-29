import React from 'react';
import stu from './Assets/STU-TEACH.png';
import wea from './Assets/WEATHER.png'
import word from './Assets/WORD.png';
import rock from './Assets/ROCK.png';
import loan from './Assets/LOAN.jpeg';
import edu from './Assets/EDU.png';


function WebDevelopment() {
  return (
    <div>
      <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/cps.git" target="_blank" rel="noopener noreferrer">
            <h1 className='pro_title'>Masterly – Personalized Learning Platform</h1>
          </a>
          <div className='picdes'>
          <p className='description'>Masterly is a personalized learning platform that creates adaptive learning paths based on user progress and performance.
            It provides AI-driven course recommendations, mastery tracking, and analytics dashboards for learners. The platform ensures competency-based progression and supports effective, self-paced skill development.</p>
             <img src={edu} alt='My photo' />
        </div>
        </div>
       </div>
      <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/Bank-Loan-Status-Prediction" target="_blank" rel="noopener noreferrer">
            <h1 className='pro_title'>Bank Loan Status Prediction</h1>
          </a>
          <div className='picdes'>
          <p className='description'>Bank Loan Status Prediction is a web-based machine learning application that predicts loan approval based on user financial details.
             Built with Python and Streamlit, it uses models like Logistic Regression, Random Forest, SVM, and Gradient Boosting. 
             The system preprocesses data through scaling, encoding, and handling missing values to ensure accuracy. 
             It supports both single and batch predictions, offering a user-friendly, interactive tool for real-world loan assessment.</p>
             <img src={loan} alt='My photo' />
        </div>
        </div>
       </div>
       <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/performance-evaluation.git" target="_blank" rel="noopener noreferrer">
            <h1 className='pro_title'>Student-Teacher Performance Evaluation</h1>
          </a>
          <div className='picdes'>
          <p className='description'>The Student-Teacher Performance Evaluation project is a full-stack application designed to evaluate and monitor the performance of both students and teachers.
             It collects feedback, attendance, grades, and engagement metrics through structured forms and analytics dashboards. Admins can view detailed reports to identify areas of improvement. 
            The system ensures transparency and supports continuous improvement in the academic environment.</p>
             <img src={stu} alt='My photo' />
        </div>
        </div>  
       </div>
       <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/weather-dashboard-cloudapp.git" target="_blank" rel="noopener noreferrer">
          <h1 className='pro_title'>Live Weather Forecast Application[Using API]</h1>
          </a>
          <div className='picdes'>
          <p className='description'>Weather Forecast Application is a responsive web app that fetches real-time weather data using a public weather API. 
            Users can search for any city to view current temperature, humidity, and weather conditions. 
            The app is built using HTML, CSS, JavaScript, and API integration. It is hosted on Firebase, enabling smooth deployment and real-time updates.</p>
             <img src={wea} alt='My photo' />
        </div>
        </div>
       </div>
       <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/WordGuessingGame.git" target="_blank" rel="noopener noreferrer">
            <h1 className='pro_title'>Word Guessing Game</h1>
          </a>
          <div className='picdes'>
          <p className='description'>The Word Guessing Game is a browser-based interactive game built using HTML, CSS, and JavaScript.
Players are given a series of jumbled or masked words to guess within limited attempts.
The game provides instant feedback, tracks score, and encourages learning through fun.
It’s designed to improve vocabulary and logical thinking in an engaging way.</p>
             <img src={word} alt='My photo' />
        </div>
        </div>
       </div>
       <div className='pro'>
        <div className='pro1'>
        <a href="https://github.com/VenkataSarma/WordGuessingGame.git" target="_blank" rel="noopener noreferrer">
            <h1 className='pro_title'>Rock-Paper-Scissors</h1>
          </a>
          <div className='picdes'>
          <p className='description'>The Rock Paper Scissors Game is a web-based interactive app built using HTML, CSS, and JavaScript.
It allows users to play against the computer with real-time results after each round.
The game logic determines the winner based on standard rules and displays scores instantly.
It offers a simple, responsive, and fun user experience to demonstrate basic JavaScript concepts.</p>
             <img src={rock} alt='My photo' />
        </div>
        </div>
       </div>
       
        
    </div>
  );
}

export default WebDevelopment;

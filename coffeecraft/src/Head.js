import backgroundImage from './assets/images/2023-01-28_11.41.15.png'; 
import React from 'react';


function Head() {
    return(
        
      <div className="h-96 p-96 relative overflow-hidden padding">
        <div className="h-full absolute bottom-0 left-0 w-full shadow-black"
             style={{
               backgroundImage: `url(${backgroundImage})`,
               backgroundSize: 'cover',
               boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
             }}>
<div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 flex items-center justify-center">
  <div className="flex flex-col items-center">
    <h1 className="text-7xl font-bold text-white text-center mt-[-3vh] text-shadow-lg  ">
      Welcome to
    </h1>
    <h2 class="text-7xl font-bold text-center mt-4 bg-gradient-to-r from-amber-900 to-yellow-600 text-transparent bg-clip-text animate-pulse">CoffeeCraft</h2>
    <p className="text-xl  max-w-2xl text-center mt-4 overflow-arquee text-white font-semibold  ">Welcome to CoffeeCraft, a Forge modded Minecraft server that offers a unique and immersive gaming experience. Our server is dedicated to all things coffee and modding, and we've curated a collection of mods that allow you to explore new dimensions, craft custom items, and enhance your gameplay in countless ways.</p>
<div className="flex justify-center mt-8 z-10">
<button className="inline-flex items-center px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transform hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none cursor-pointer">
  <i className="fas fa-download mr-2"></i> Install
</button>
<button className="ml-12 inline-flex items-center px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transform hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none cursor-pointer">
  <i className="fas fa-book mr-2"></i> Learn More
  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
</button>
</div>

  </div>
  </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-current text-blue-600 absolute bottom-0 left-0 min-w-full">
          <path fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,266.7C840,245,960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-current text-black absolute bottom-0 left-0 min-w-full">
    <defs>
      <linearGradient id="shadow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="black" stopOpacity="1" />
        <stop offset="50%" stopColor="black" stopOpacity=".5" />
        <stop offset="100%" stopColor="blue-600" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fillOpacity=".2" d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,266.7C840,245,960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320" fill="url(#shadow-gradient)"></path>
    <path fillOpacity=".6" d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,266.7C840,245,960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320" fill="url(#shadow-gradient)"></path>
  </svg>
  
        
        </div>
    );
  }
  
  export default Head;
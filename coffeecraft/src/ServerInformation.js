import React from 'react';
import CardOneImage from './assets/images/2023-01-25_16.20.14.png'
import 'animate.css';

function ServerProvider() {
    return (
<div className="bg-gradient-to-b from-blue-600 to-gray-700 rounded-md p-6">
  <div className="bg-white rounded-md shadow-md p-6 flex items-center">
    <div className="w-1/2 bg-gray-900 rounded-tl rounded-bl p-7 pr-7 relative">
      <div className="text-xl font-medium text-white">99.99% Uptime <i className="fas fa-arrow-up mr-2 animate-bounce"></i></div>       
      <div className="text-white bold">Our Minecraft server has an uptime of 99%, which means that players can enjoy a seamless gaming experience without worrying about frequent disruptions or downtimes. We take pride in ensuring that our server is always up and running, and we have invested in state-of-the-art technology and infrastructure to achieve this high level of reliability. Our team of experienced administrators constantly monitors the server to detect and fix any issues that may arise, and we have implemented a range of measures to protect the server against attacks and unauthorized access. With our 99% uptime guarantee, players can rest assured that they can always log in and play their favorite Minecraft games whenever they want. In addition to our 99% uptime guarantee, we also strive to provide an engaging and enjoyable gaming experience for all players on our Minecraft server. We offer a wide variety of game modes and activities, including survival, creative, mini-games, and more, to cater to different play styles and preferences. Our team of moderators ensures that the server is a safe and welcoming environment for everyone, enforcing rules and resolving disputes to ensure that everyone can enjoy the game without fear of harassment or griefing. We also encourage player feedback and suggestions, regularly incorporating new features and updates based on player input. Our goal is to create a community-driven server that fosters creativity, collaboration, and fun, where players can connect with others from around the world and forge lasting friendships. Whether you are a seasoned Minecraft player or a newcomer to the game, we invite you to join our server and experience the thrill of Minecraft like never before.</div>
      <div className="mt-2 flex items-center text-sm font-medium text-gray-500">
      </div>
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-transparent to-black opacity-60"></div>
    </div>
    <div className="relative">
  <img src={CardOneImage} alt="My Image" className="rounded-md shadow-md" />
  <div className="absolute w-full inset-0 rounded-md bg-gradient-to-br from-transparent to-black opacity-60 right-0"></div>
  <div className="absolute top-3 left-3 p-6">
    <h2 className="text-2xl font-bold text-white">Coffee</h2>
    <p className="text-sm font-medium text-gray-300">Coffeesucks at minecraft</p>
  </div>
</div>


  </div>
</div>
    );
}

export default ServerProvider;
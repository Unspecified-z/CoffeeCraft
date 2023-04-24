import React from 'react';
import CardOneImage from './assets/images/2023-01-25_16.20.14.png'

function ServerProvider() {
    return (
<div className="bg-blue-600">
  <div className="max-w-7xl  mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white">
      Minecraft Server Hosting
    </h2>
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow-md rounded-lg px-6 py-6">
      <div className="w-full sm:w-full md:w-fullshadow-xl">
      <img src={CardOneImage} className="rounded-xl shadow-2xl"  />
    </div>
        <h3 className="text-lg font-medium text-gray-900">
          Poopy Poop
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">$9.99/month</span>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg px-6 py-6">
      <div className="w-full sm:w-full md:w-fullshadow-xl">
      <img src={CardOneImage} className="rounded-xl shadow-2xl"  />
    </div>
        <h3 className="text-lg font-medium text-gray-900">
          Poopy Poop
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">$9.99/month</span>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg px-6 py-6">
      <div className="w-full sm:w-full md:w-fullshadow-xl">
      <img src={CardOneImage} className="rounded-xl shadow-2xl"  />
    </div>
        <h3 className="text-lg font-medium text-gray-900">
          Poopy Poop
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">$9.99/month</span>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
              );
}
export default ServerProvider;
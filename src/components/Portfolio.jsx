import React from 'react';
import Simongame from '../assets/portfolio/Simongame.jpg'
import drumkitcanva from '../assets/portfolio/drumkitcanva.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import todocanva from '../assets/portfolio/todocanva.jpg'
import tindogcanva from '../assets/portfolio/tindogcanva.jpg'

const Portfolio = () => {

  const handleDemoClick = (demoUrl) => {
   // window.open(demoUrl, '_blank'); // Open demoUrl in a new tab
    if (demoUrl) {
      window.open(demoUrl, '_blank'); // Open demoUrl in a new tab
    } else {
      alert("Demo link is under process");
    }
  };

  // Function to handle clicks on the Code button
  const handleCodeClick = (codeUrl) => {
    window.open(codeUrl, '_blank'); // Open codeUrl in a new tab
  };

  const portfolios = [
    {
      id: 1,
      src: Simongame,
      demoUrl: 'https://63b67bb367b2076de991d28d--cheery-selkie-810160.netlify.app/      ', 
      codeUrl: 'https://github.com/saurabh551/simongamefinal', 
    },
    {
      id: 2,
      src: drumkitcanva,
      demoUrl: 'https://63b6789c1cd7006ad5d797bd--bucolic-meerkat-ca1cc7.netlify.app/      ', 
      codeUrl: 'https://github.com/saurabh551/drumkiit', 
    },
    {
      id: 3,
      src: reactWeather,
      demoUrl: null, 
      codeUrl: 'https://github.com/saurabh551/weather-application', 
    },
    {
      id: 4,
      src: todocanva,
      demoUrl: 'https://exquisite-youtiao-4767cc.netlify.app/', 
      codeUrl: 'https://github.com/saurabh551/ToDolistReact', 
    },
    {
      id: 5,
      src: tindogcanva,
      demoUrl: 'https://enchanting-twilight-cdd67f.netlify.app/',
      codeUrl: 'https://github.com/saurabh551/MeetDog',

    },
   
  ];

return (
  <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src,  demoUrl, codeUrl }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button onClick={() => handleDemoClick(demoUrl)}  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button onClick={() => handleCodeClick(codeUrl)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;



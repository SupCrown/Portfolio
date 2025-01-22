import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white pt-20 pb-20">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-center">
        About Me
      </h1>
      <div className="max-w-4xl px-6 mx-auto space-y-8 text-lg md:text-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          luctus mi ut lectus bibendum, sed pharetra ligula fermentum.
        </p>
        <p>
          Cras aliquam, ipsum in tincidunt vehicula, justo erat volutpat
          libero, ac viverra metus est sed velit.
        </p>
        <p>
          Vivamus non orci at augue pellentesque mollis sed et ipsum. Nulla
          facilisi. Donec varius fringilla ex, vel tristique lorem.
        </p>
        <p>
          Aenean laoreet lorem at quam consectetur, et fermentum massa
          vulputate. Ut tristique, ipsum a finibus fermentum, odio enim
          condimentum tortor, a porttitor arcu augue sed lorem.
        </p>
        <p>
          Praesent vel lacinia ipsum. Fusce tincidunt, erat non consequat
          tincidunt, nisl sapien sagittis turpis, a sagittis felis justo in
          arcu.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <p className="text-sm">Scroll Down</p>
        <div className="w-6 h-6 border-4 border-white rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default About;
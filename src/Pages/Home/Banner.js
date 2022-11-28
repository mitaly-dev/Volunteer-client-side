import React from 'react';
const Banner = () => {
    return (
        <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="m-auto">
                    <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-20 text-white">
                        <h1 className="text-4xl font-bold leading-none sm:text-5xl ">
                            <p>Best Way To Make A <span className='text-yellow'>Difference</span></p>
                            <p>In The <span className='text-yellow'>Lives</span> Of Others</p>
                        </h1>
                        <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow text-gray-900">Get started</button>
                           
                            <button className="px-8 py-3 m-2 text-lg border hover:border-yellow">Watch Video</button>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React from "react";

const HomeBanner = () => {
  return (
    <div className="hero bg-base-200 mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwc2VsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className="w-1/2 rounded-lg shadow-2xl p-5 w-2/4 mt-5"
          alt="hero-img"
        />
        <div>
          <h1 className="text-4xl font-bold text-cyan-700">
            Sell and Buy your Cars and Get Earned A lot!
          </h1>
          <p className="py-6">
            We create a huge network to share your used Cars and to earn
            from selling your used and Cars!
          </p>
          <button className="btn btn-primary">Start Exporing!</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

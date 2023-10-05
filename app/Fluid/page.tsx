"use client";
import React, { useEffect } from "react";

import FluidSimulator from "../../Core/modules/FluidSimulator";

const Fluid2D = () => {
  useEffect(() => {
    new FluidSimulator({
      $wrapper: document.body,
    });
  }, []);
  return (
    <div className="flex justify-center py-6">
      <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-300 to-purple-400 text-transparent bg-clip-text px-6 py-3 rounded-md">
        Fluid-2D
      </h1>
    </div>
  );
};

export default Fluid2D;

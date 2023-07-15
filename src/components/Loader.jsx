import React, { useState, useEffect } from "react";
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi loading selama 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="bg-white z-20 absolute h-full  text-center w-[32%]">
          <i class="fa-solid fa-spinner fa-spin fa-2x mt-44"></i>
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Loading;



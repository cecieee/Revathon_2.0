import React from 'react';

const BehindTheScenes = () => {
  return (
    <section className="py-20 " style={{fontFamily: "Mechsuit, Inter, sans-serif"}}>
      <div className="container w-[90vw] m-auto mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Behind The <span className="text-[#3abfbc]">Scenes</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[600px]">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 bg-zinc-800 rounded-lg overflow-hidden relative group">
                <img src="/assets/images/bh1.jpeg" alt="Behind the scenes 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            {/* Small Image 1 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden relative group">
                <img src="/assets/images/bh2.jpeg" alt="Behind the scenes 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            {/* Small Image 2 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden relative group">
                <img src="/assets/images/bh3.jpeg" alt="Behind the scenes 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            {/* Wide Image */}
            <div className="col-span-2 bg-zinc-800 rounded-lg overflow-hidden relative group">
                <img src="/assets/images/bh4.jpeg" alt="Behind the scenes 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;

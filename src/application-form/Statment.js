import React, { useState, useEffect } from 'react';

export default function Statement({ onCancel }) {
  // State to track screen width
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1300);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1300);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <section className="flex flex-col items-center px-4 py-8"
        style={
          isLargeScreen
            ? {}
            : { paddingBottom: "180px" }
        }>
        <h1 className="text-2xl font-bold text-gray-800">Supporting Information</h1>
        <div className="space-y-4 text-center py-8">
          <p className="text-lg lg:text-base font-medium text-gray-600 pb-2 tracking-wide">
            aqsaabdullah38403@gmail.com
          </p>
          <p className="text-lg lg:text-base font-medium text-gray-600 tracking-wide">
            AQSA Waheed
          </p>

          <p className="uppercase text-[10px] tracking-[0.6px] w-[600px] mx-auto leading-6 mb-4 ">
            YOU CAN PROVIDE ADDITIONAL (SUPPORTING) INFORMATION TO HELP US BETTER UNDERSTAND YOU AS A PERSON AND YOUR
            QUALIFICATIONS/SUITABILITY FOR THE ROLE/PROGRAM/INTERNSHIP. PLEASE PROVIDE US WITH ADDITIONAL DETAILS WHICH YOU BELIEVE
            WILL SUPPORT YOUR APPLICATION.
          </p>

          <textarea
            id="about_us"
            className="w-full h-[500px] text-[14px] lg:text-[12px] tracking-[2px] placeholder:opacity-50 placeholder:font-normal bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none resize-none"
            placeholder="Supporting Information..."
            style={{ height: "260px" }}

          ></textarea>


          <div className="absolute block lg:hidden"
            style={
              isLargeScreen
                ? { gap: '30px', bottom: '100px', right: '180px' }
                : { display: 'flex', gap:"355px", bottom: '-80px', marginBottom: '50px' }
            }
          >
            <button className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] 
            rounded-xl flex items-center text-center justify-center flex-col uppercase"
            style={
              isLargeScreen
                ? {}
                : {marginTop: '15px' }
            }
            >
              ADD Supporting Statement
            </button>
            <button
              className="lg:hidden h-[120px] w-[120px] bg-white text-black tracking-widest text-[14px] mt-4 
              rounded-xl flex items-center text-center justify-center border-black border border-opacity-60"
              onClick={onCancel} 
            >
              CANCEL
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
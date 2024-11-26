import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const TokenSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="bg-dark-gray p-8 flex justify-between items-center space-x-8">
            {/* Left: Launch Your Token */}
            <div>

                <div className="flex items-center justify-center">
                    <Link
                        href="/launch-token"
                        className="bg-[#5B5B6C4F] text-white flex items-center rounded-tl-[80px] rounded-br-[80px] hover:bg-gray-800 transition relative px-8 py-4"
                        style={{ width: "450px", height: "160px" }}
                    >
                        {/* Text Content */}
                        <div className="flex flex-col justify-center pl-8">
                            <span className="font-montserrat  text-[36px] leading-[40px] text-white font-extrabold">
                                LAUNCH YOUR
                            </span>
                            <span className="font-montserrat font-extrabold text-[36px] leading-[40px] text-lime-500">
                                TOKEN
                            </span>
                        </div>
                        {/* Arrow Icon */}
                        <span className="text-white text-[50px] pr-8 absolute ml-[230px] mt-[30px] font-extrabold">→</span>
                    </Link>
                </div>
            </div>


            <div className='flex justify-center space-x-2'>
                 <div className="bg-gray-800 w-[221.62px]  h-[265.85px] p-4 rounded-xl flex flex-col relative text-left transition-transform transform hover:scale-105 duration-300">
                    
                    <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#1E1E25] rounded-br-full "></div>
=
                    <div className="absolute left-[-27px] top-[-27px] h-[70px] w-[70px] flex items-center justify-center">
                        <img
                            src="/Frame263.png" // Replace with the correct path
                            alt="Creator Avatar"
                            className="h-16 w-16 rounded-full border-2 border-lime-500 bg-gray-900"
                        />
                    </div>

                    <div className="absolute h-[30.12px] w-[265px] right-0 top-[265px]
                    bg-lime-500 text-black font-extrabold  py-2 px-3 transform origin-top-right 
                    rounded-tl-xl rounded-tr-xl rotate-90"
                        style={{ fontFamily: "Montserrat", fontSize: 18, fontWeight: 900 }}>
                        KING OF THE MONSTERS
                    </div>


                    <div className="  absolute top-[60px] left-2 flex flex-col space-y-3 ">
                        <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                            <img src="/weblogo1.png" alt="World Icon" className="h-3 w-3" />
                        </div>
                        <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                            <img src="/twitterlogo1.png" alt="X Icon" className="h-3 w-3" />
                        </div>
                        <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                            <img src="/Maskgroup2.png" alt="Telegram Icon" className="h-3 w-3" />
                        </div>
                    </div>

                    <div className="flex items-center  justify-center mt-4 ">
                        <img
                            src="/nft.png"
                            alt="NFT Promo"
                            className="w-[126.95px] h-[111.34px] rounded-lg"
                        />
                    </div>

                    <div className="absolute top-[10px] right-[10px] text-gray-400 text-[9px] mr-10">
                        Created by 0cf7..by68g
                    </div>

                    <h3
                        className="text-white mt-4 w-auto h-[27px]  flex items-center justify-center  ml-[-37px]"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        <span style={{ fontSize: "8.5px" }}>CAT SWAP PROMOTION</span> <span className="text-lime-500 ml-1 font-bold text-[10px]">(PROMOTION)</span>
                    </h3>



                    <div className='flex items-center  space-x-3  -ml-2'>

                        <div className="bg-[#212122] text-lime-500 font-semibold text-sm px-6  rounded-lg mt-2 py-0 w-[86.37px] h-[45px] top-[170.37px] left-[11.45px]">
                            <span className='text-[9px]  ml-[-15px] '>MCAP</span>   <span className="text-white  ml-[-15px]">19.99k</span>
                        </div>

                        <div className="text-gray-400 text-[9px] mt-[30px] text-center flex  space-x-1">
                            <span>
                                <FontAwesomeIcon icon={faClock} className="w-[11px] h-[11px]" />
                            </span>
                            <span>9h 32min ago</span>
                        </div>

                    </div>

                </div> 



                {/* Right: Buttons Section */}
                <div className='flex flex-col pt-12 space-y-5'>

                    <Link
                        href="/"
                        className="bg-[#A8FF2F] w-[305px] h-[81px] block rounded-tl-[80px] rounded-br-[80px] 
             border-[6px] ml-28 mt-[-50px] text-black px-7 py-4
             rounded-lg text-center font-bold hover:bg-lime-600 transition left-[259px]"
                        style={{ borderColor: '#3C3C3C' }}
                    >
                        PUMPZILLA TOKEN
                    </Link>


                    <div>
                        <button
                            onClick={openModal}
                            className="bg-[#5B5B6C4F] ml-5 mt-3 w-[406px] h-[99.92px] text-lime-500 px-6 py-3 rounded-full text-center font-bold hover:bg-gray-800 transition flex items-center justify-center space-x-6"
                        >
                            <img
                                src="/Maskgroup3.png"
                                alt="Gear Icon"
                                className="h-[75.45px] w-[91.07px] -ml-[40px]"
                            />
                            <span
                                className="text-[30px] flex space-x-1"
                                style={{ fontFamily: "ROUND 8", fontWeight: "500", fontStyle: "italic" }}
                            >
                                <span className="text-white font-extrabold">HOW</span>
                                <span className="text-white font-extrabold">IT</span>
                                <span className="text-lime-500 font-extrabold">WORKS</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>


            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </section>
    );
};

export default TokenSection;

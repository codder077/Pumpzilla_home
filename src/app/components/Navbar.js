'use client';

export default function Navbar() {
    return (
        <nav className="bg-[#A6FF0F] flex items-center justify-between px-4 py-2 border-b-4 border-[#1D1D1D]">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="/logo.png" // Replace with your logo's path
                    alt="Pumpzilla Logo"
                    className=" m-4 h-12 w-auto"
                />
            </div>

            <div className="flex justify-normal space-x-2">
                <div className="flex items-center space-x-3">
                    {/* Launch Button */}
                    <button className="bg-black text-white px-4 py-2 text-sm font-bold hover:bg-gray-800  rounded-full">
                        LAUNCH
                    </button>

                    {/* Icon Buttons */}
                    <button className="bg-[#1D1D1D] rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800">
                    <img
                    src="/twitterlogo1.png" // Replace with your logo's path
                    alt="Pumpzilla Logo"
                    className="h-4 w-auto"
                />
                    </button>
                    <button className="bg-[#1D1D1D] rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800">
                        <img
                            src="/Maskgroup2.png" // Replace with your Telegram icon's path
                            alt="Telegram Icon"
                            className="w-5 h-5"
                        />
                    </button>
                </div>

                {/* Right: Connect Wallet */}
                <button className="bg-white text-[#1D1D1D] px-5 py-2 rounded-full text-sm font-bold border-2 border-black hover:bg-gray-100">
                    CONNECT WALLET
                </button>
            </div>

        </nav>
    );
}

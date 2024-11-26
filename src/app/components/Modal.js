import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-[#1D1D1D] w-[90%] max-w-4xl rounded-lg p-8 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* Modal Content */}
                <div className="text-center text-white">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-white">
                        PUMP, <span className="text-lime-500">PROFIT</span>, REPEAT!
                    </h1>
                    <p className="text-gray-300 mt-4">
                        Each token is a fair launch with no presale and no team allocation — 
                        <br /> making it all about the community.
                    </p>

                    {/* Circular Flowchart Section */}
                    <div className="mt-8 flex flex-col items-center">
                        <div className="relative">
                            <img
                                src="/assets/Flowchart.png" // Replace with the actual path of your flowchart image
                                alt="Flowchart"
                                className="w-[300px] md:w-[400px]"
                            />
                        </div>
                    </div>

                    {/* Documentation Link */}
                    <div className="mt-6">
                        <p className="text-gray-300 text-lg">
                            Want more details? Dive into our{" "}
                            <a href="/documentation" className="text-lime-500 underline">
                                documentation
                            </a>
                        </p>
                    </div>

                    {/* Explore Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-white">
                            Explore <span className="text-lime-500">PumpZilla Token</span>
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Learn more about our exciting PumpZilla Token and how it powers the ecosystem.
                        </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-6">
                        <a
                            href="/token-page"
                            className="bg-lime-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-lime-400 transition"
                        >
                            GO TO TOKEN PAGE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

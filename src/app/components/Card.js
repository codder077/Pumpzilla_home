import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function Card({ data }) {
    const { timeAgo, image, title, creator, description, marketCap } = data;
  
    return (
      <div className="bg-white text-white  shadow-lg p-4 relative w-[316px] h-[449px]  rounded-3xl  ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-green-400 bg-[#262626] w-[108px] h-[27px] top-[12px] left-[14px] rounded-full pl-2">
          <FontAwesomeIcon icon={faClock} className="w-[18px] h-[18px] text-[#A8FF2F]" />
            <span className="text-white text-xs font-medium w-[77.87px] h-[19.67px] top-[-1.41px] left-[42.13px] mt-1 ml-2 " style={{
    fontFamily: "Montserrat", 
    fontWeight: 900,
    fontSize: "8.83px",
    
  }}>{timeAgo}</span>

          </div>
          <div className=" top-[60px] left-2 flex flex-row space-x-2 ">
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
        </div>
  
        {/* Image Section */}
        <div className="mb-2 ">
          <img
            src={image}
            alt={title}
            className="rounded-3xl object-cover w-full h-48"
          />
        </div>
  
        {/* Content Section */}
        <h2
  className="flex items-center font-bold text-black w-[294px] h-[34px] top-[253px] left-[10px] "
>
  <span
    className="text-black font-extrabold font-Bebas"
    style={{
      fontWeight: 900,
      fontSize: "12px",
      lineHeight: "24px",
    }}
  >
    {title}
  </span>
  <span
    className="text-black ml-1 font-extrabold font-montserrat"
    style={{
      fontWeight: 900,
      fontSize: "17px",
      lineHeight: "30px",
    }}
  >
    (PROMOTION)
  </span>
</h2>

<p
  className="text-sm text-[#262626B5] mb-2 font-montserrat font-bold "
  style={{
    fontWeight: 700,
    fontSize: "12.78px",
    lineHeight: "14.36px",
  }}
>
  Created by {creator}
</p>
<div
  className="bg-[#D9D9D9] text-[#262626C2] text-[7.55px] p-3 rounded-tl-[20px] rounded-tr-[20px] text-sm mb-2 overflow-hidden font-extrabold "
  style={{
    width: "294px",
    height: "58px",
    top: "313px",
    left: "10px",
    gap: "0px", // Opacity must be applied as a number
    background: "#D9D9D9",
  }}
>
  {description}
</div>

  
        {/* Footer Section */}
        <div
  className="bg-[#262626] text-center text-[#A8FF2F] py-4 rounded-bl-[20px] rounded-br-[20px] text-lg font-bold w-[294px] h-[59px]"
  style={{
    boxShadow: '6px 6px 13.8px 0px rgba(0, 0, 0, 0.79)',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: 900,
    lineHeight: '24.38px',
    textAlign: 'center',
    textDecorationSkipInk: 'none',
    textUnderlinePosition: 'from-font',
  }}
>
  MARKET CAP : {marketCap}
</div>

      </div>
    );
  }

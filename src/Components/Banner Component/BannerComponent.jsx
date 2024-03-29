import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const BannerComponent = () => {
    return (
        <div className="border bg-[#FFFFFF] rounded-md font-poppins p-14">
            <div className="flex items-center flex-col md:flex-row justify-between gap-5 md:gap-0">
                <div className="flex items-center gap-[10px]">
                    <button className="bg-[#EBF0F5] flex items-center gap-2 font-medium px-3 py-2 rounded">
                        <input type="radio" name="radio-1" className="radio w-4 h-4" />
                        <span className="text-[10px] text-[#09182E]">One way</span>
                    </button>
                    <button className="bg-[#006CE4] flex items-center gap-2 font-medium px-3 py-2 rounded">
                        <input type="radio" name="radio-1" className="radio w-4 h-4 text-[#FFFFFF]" />
                        <span className="text-[10px] text-[#FFFFFF]">Round Trip</span>
                    </button>
                </div>
                <div className="flex items-center gap-[10px]">
                    <button className="bg-[#EBF0F5] flex items-center gap-2 font-medium px-3 py-2 rounded">
                        <span className="text-[10px] text-[#006CE4]">1 Traveller</span>
                        <IoIosArrowDown className="text-[10px] text-[#006CE4]" />
                    </button>
                    <button className="bg-[#EBF0F5] flex items-center gap-2 font-medium px-3 py-2 rounded">
                        <span className="text-[10px] text-[#006CE4]">Economy</span>
                        <IoIosArrowDown className="text-[10px] text-[#006CE4]" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center gap-5">
                <div className="mt-5 border flex items-center px-10 py-2 rounded-lg ">
                    <h1 className="text-[#1E1E1E] text-sm font-semibold border-r border-r-[#09182E]  pr-3">DAC</h1>
                    <div className="pl-3">
                        <h3 className="text-sm font-semibold text-[#1E1E1E]">Dhaka</h3>
                        <h5 className="text-[10px] ">Hazrat Shahjalal International</h5>
                    </div>
                </div>
                <div className="mt-5 border flex items-center px-10 py-2 rounded-lg">
                    <h1 className="text-[#1E1E1E] text-sm font-semibold border-r border-r-[#09182E]  pr-3">Cxb</h1>
                    <div className="pl-3">
                        <h3 className="text-sm font-semibold text-[#1E1E1E]">Cox’s Bazar</h3>
                        <h5 className="text-[10px]">Cox’s Bazar international</h5>
                    </div>
                </div>
                <div className="mt-5 border flex items-center px-10 py-2 rounded-lg">
                    <h1 className="text-[#1E1E1E] text-sm font-semibold border-r border-r-[#09182E]  pr-3">03</h1>
                    <div className="pl-3">
                        <h3 className="text-sm font-semibold text-[#1E1E1E]">October</h3>
                        <h5 className="text-[10px]">Tuesday, 2023</h5>
                    </div>
                </div>
                <div className="mt-5 border flex items-center px-10 py-2 rounded-lg">
                    <h1 className="text-[#1E1E1E] text-sm font-semibold border-r border-r-[#09182E]  pr-3">05</h1>
                    <div className="pl-3">
                        <h3 className="text-sm font-semibold text-[#1E1E1E]">October</h3>
                        <h5 className="text-[10px]">Tuesday, 2023</h5>
                    </div>
                </div>
                <div className="mt-5 border flex items-center px-5 py-[14px] rounded-lg bg-[#FFB700]">
                    <button>
                        <FaSearch className="text-2xl text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerComponent;
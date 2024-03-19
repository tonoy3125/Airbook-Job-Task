

const BannerComponent = () => {
    return (
        <div className="border bg-[#FFFFFF] rounded-md font-poppins p-14">
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
            
        </div>
    );
};

export default BannerComponent;
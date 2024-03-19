import BannerComponent from "../../Components/Banner Component/BannerComponent";


const Banner = () => {
    return (
        <div>
            <div className=" min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/p1YMNnH/65f2285bce36a62e819a38d134b77bed.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="max-w-6xl mx-auto">
                    <h1 className="mb-5 text-[40px] font-bold"><span>Welcome to</span> <span className="text-[#006CE4]">AirBook</span></h1>
                    <div>
                        <BannerComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
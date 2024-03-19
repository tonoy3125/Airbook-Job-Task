import BannerComponent from "../../Components/Banner Component/BannerComponent";
import Navbar from "../Shared/Navbar/Navbar";


const Banner = () => {
    return (
        <div className="relative" style={{ height: '521px', left: '-22px' }}>
            <div className="h-full w-full" style={{
                backgroundImage: 'url(https://i.ibb.co/p1YMNnH/65f2285bce36a62e819a38d134b77bed.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="bg-white/90 mx-10 border">
                    <Navbar />
                </div>
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
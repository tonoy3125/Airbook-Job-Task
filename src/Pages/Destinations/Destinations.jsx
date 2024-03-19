

const Destinations = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto mt-20 mb-20">
            <h1 className="text-[32px] font-semibold mb-10">Featured Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card  bg-base-100 shadow-xl px-2">
                    <figure className="mb-5">
                        <img src="https://i.ibb.co/3CM5DZd/099c0ca3306b04e27f0f2329587e43b6.jpg" alt="Shoes" className="rounded-xl w-[340px] h-[230px]" />
                    </figure>
                    <h1 className="text-lg font-bold text-[#09182E] mb-4 ml-2" >Stopover opportunity in İstanbul with Turkish Airlines</h1>
                    <button className="bg-[#FFB700] px-16 py-2 mx-auto text-[15px] font-medium text-[#09182E] rounded-md mb-4">View More</button>
                </div>
                <div className="card  bg-base-100 shadow-xl px-2">
                    <figure className="mb-5">
                        <img src="https://i.ibb.co/n1zy3LN/ec02d253c0726f352d37b0858f01cd3f.jpg" alt="Shoes" className="rounded-xl w-[340px] h-[230px]" />
                    </figure>
                    <h1 className="text-lg font-bold text-[#09182E] mb-4 ml-2">Discover the timeless city with Touristanbul of Turkish Airlines</h1>
                    <button className="bg-[#FFB700] px-16 py-2 mx-auto text-[15px] font-medium text-[#09182E] rounded-md mb-4">View More</button>
                </div>
                <div className="card  bg-base-100 shadow-xl px-2">
                    <figure className="mb-5">
                        <img src="https://i.ibb.co/VxWTmCM/918f128af604d26b32560b6eb10faccf.jpg" alt="Shoes" className="rounded-xl w-[340px] h-[230px]" />
                    </figure>
                    <h1 className="text-lg font-bold text-[#09182E] mb-4 ml-2">The best of Abu Dhabi with exclusive Etihad Airways!</h1>
                    <button className="bg-[#FFB700] px-16 py-2 mx-auto text-[15px] font-medium text-[#09182E] rounded-md mb-4">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
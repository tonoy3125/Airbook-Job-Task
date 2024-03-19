/* eslint-disable react/no-unescaped-entities */
import { MdVerified } from 'react-icons/md';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Offers = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto mt-20 mb-20">
            <h1 className="text-[32px] font-semibold mb-10">Deals and Offers</h1>
            <Swiper

                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 640px
                    425: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}

            >
                {/* Slider 1 */}
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5 mb-14">
                        <figure><img src="https://i.ibb.co/gyvVZLF/ffb96e0e5c51c764ad1be283b8f88c63.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5">
                        <figure><img src="https://i.ibb.co/gyvVZLF/ffb96e0e5c51c764ad1be283b8f88c63.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5">
                        <figure><img src="https://i.ibb.co/ggrRNth/bd2a194917550c4334c07048753d2361.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5">
                        <figure><img src="https://i.ibb.co/gyvVZLF/ffb96e0e5c51c764ad1be283b8f88c63.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5">
                        <figure><img src="https://i.ibb.co/gyvVZLF/ffb96e0e5c51c764ad1be283b8f88c63.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center bg-base-100 shadow-xl gap-5 pr-5">
                        <figure><img src="https://i.ibb.co/ggrRNth/bd2a194917550c4334c07048753d2361.png" alt="Movie" className='rounded-md' /></figure>
                        <div className="">
                            <h2 className="w-48 text-sm font-medium text-[#09182E]">With bkash payment only</h2>
                            <p className='text-lg font-semibold text-[#006CE4]'>Up to 14% discount on the base fare of domestic flights</p>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Offers;
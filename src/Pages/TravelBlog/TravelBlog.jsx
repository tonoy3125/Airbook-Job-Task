// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButton from './SwiperNavButton';





const TravelBlog = () => {
    const blogs = [
        {
            "image": "https://i.ibb.co/sR1xLYM/Rectangle-18-2.png",
            "text": "Work and Travel",
            "date": "2024-03-19",
            "title": "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
            "user": "Raju"
        },
        {
            "image": "https://i.ibb.co/JHHL41Q/Rectangle-18-1.png",
            "text": "Work and Travel",
            "date": "2024-03-19",
            "title": "Historical Journeys: Stepping Back in Time Through Travel is defined",
            "user": "Rakib"
        },
        {
            "image": "https://i.ibb.co/Kmq0BrF/Rectangle-18.png",
            "text": "Work and Travel",
            "date": "2024-03-19",
            "title": "Sustainable Tourism: Preserving the Planet While Seeing It All",
            "user": "Sakib"
        },
        {
            "image": "https://i.ibb.co/sR1xLYM/Rectangle-18-2.png",
            "text": "Work and Travel",
            "date": "2024-03-19",
            "title": "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
            "user": "Raju"
        },
    ]


    return (
        <div className="my-16 bg-[#F2F6F6] py-16">
            <div className=" max-w-6xl mx-auto flex justify-between items-center flex-col lg:gap-10 lg:flex-row">
                {/* image */}

                {/* slider */}
                <div className="">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        className="max-w-6xl"
                    >
                        {
                            blogs?.map(blog => <SwiperSlide key={blog._id}>

                                <div className="max-w-lg mx-auto">
                                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={blog?.image} alt="" />
                                        </a>
                                        <p className='p-3 text-[#FFB700] '>{blog.text} <span className='text-[#09182E] ml-5'>{blog.date}</span></p>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="text-[#09182E] font-bold  text-2xl tracking-tight mb-2">{blog.title}</h5>
                                            </a>
                                            <div>

                                                <div className="flex items-center justify-between">
                                                    <div className='flex items-center gap-5'>
                                                        <div>
                                                            <img src='https://readymadeui.com/profile_2.webp' className="w-10 h-10 rounded-full" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-black font-semibold">John Doe</p>
                                                            <p className="text-xs text-gray-500 mt-0.5">johndoe23@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <a className="text-[#FFB700]   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                                        Read more
                                                    </a>                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                        <SwiperNavButton />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TravelBlog;
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="">
            <div className="navbar  container mx-auto mt-2 mb-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/blog">Blog</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/offer">Offer</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/airlines">Airlines</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/about">About</NavLink></li>

                        </ul>
                    </div>
                    <div className="ml-14 md:ml-0 flex items-center gap-2 ">
                        <svg width="36" height="51" viewBox="0 0 36 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.1662 12.0698H28.5569V5.09345C28.5569 3.39564 27.1729 2.01164 25.4751 2.01164H24.4934V0.402344H25.4751C28.062 0.402344 30.1662 2.5065 30.1662 5.09345V12.0698Z" fill="url(#paint0_linear_1052_85)" />
                            <path d="M7.43889 12.0698H5.82959V5.09345C5.82959 2.5065 7.93375 0.402344 10.5207 0.402344H11.5024V2.01164H10.5207C8.82288 2.01164 7.43889 3.39564 7.43889 5.09345V12.0698Z" fill="url(#paint1_linear_1052_85)" />
                            <path d="M22.1036 2.41395H13.8962C13.2283 2.41395 12.6892 1.87483 12.6892 1.20697C12.6892 0.539115 13.2283 0 13.8962 0H22.1036C22.7715 0 23.3106 0.539115 23.3106 1.20697C23.3106 1.87483 22.7715 2.41395 22.1036 2.41395Z" fill="url(#paint2_linear_1052_85)" />
                            <path d="M7.49512 47.6111V48.8181C7.49512 49.7072 8.21528 50.4274 9.10442 50.4274C9.99355 50.4274 10.7137 49.7072 10.7137 48.8181V47.6111H7.49512Z" fill="url(#paint3_linear_1052_85)" />
                            <path d="M25.2778 47.6111V48.8181C25.2778 49.7072 25.998 50.4274 26.8871 50.4274C27.7763 50.4274 28.4964 49.7072 28.4964 48.8181V47.6111H25.2778Z" fill="url(#paint4_linear_1052_85)" />
                            <path d="M13.2526 35.65L2.8606 46.0421C3.51638 46.3559 4.24862 46.5369 5.0251 46.5369H19.0703L13.2526 35.65Z" fill="url(#paint5_linear_1052_85)" />
                            <path d="M0 26.3602V39.4237L8.51319 30.9105L0 26.3602Z" fill="url(#paint6_linear_1052_85)" />
                            <path d="M30.9709 10.5288H5.02503C2.24899 10.5288 0 12.7778 0 15.5538V21.3272L2.02772 21.5968L3.48815 20.1363C4.00313 19.6213 4.83996 19.6213 5.35896 20.1363C5.87394 20.6513 5.87394 21.4881 5.35896 22.0071L5.32678 22.0393L15.9642 23.4635L19.9191 19.5087C20.6835 18.7443 21.5284 18.0804 22.4336 17.5333C23.3388 16.9861 24.3044 16.5476 25.3022 16.2458C26.1632 15.9843 26.9517 16.2056 27.4546 16.7125C27.9616 17.2195 28.1828 18.004 27.9213 18.865C27.6156 19.8627 27.181 20.8283 26.6339 21.7335C26.0827 22.6388 25.4229 23.4877 24.6585 24.2481L20.7036 28.2029L22.1278 38.8404L22.16 38.8082C22.675 38.2932 23.5118 38.2932 24.0308 38.8082C24.5458 39.3232 24.5458 40.16 24.0308 40.679L22.5704 42.1394L23.1578 46.5409H30.975C33.751 46.5409 36 44.2919 36 41.5158V15.5498C36 12.7738 33.751 10.5248 30.975 10.5248L30.9709 10.5288Z" fill="url(#paint7_linear_1052_85)" />
                            <defs>
                                <linearGradient id="paint0_linear_1052_85" x1="20.8691" y1="-7.1172" x2="42.3224" y2="20.6251" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1052_85" x1="2.20532" y1="-7.1172" x2="23.6586" y2="20.6251" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1052_85" x1="5.90334" y1="-1.55577" x2="6.68143" y2="7.54991" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1052_85" x1="5.43879" y1="45.796" x2="8.61543" y2="55.4518" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_1052_85" x1="23.2215" y1="45.796" x2="26.3981" y2="55.4518" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_1052_85" x1="-7.49557" y1="28.6335" x2="2.32426" y2="67.5203" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint6_linear_1052_85" x1="-5.43898" y1="17.9409" x2="16.0469" y2="55.1814" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint7_linear_1052_85" x1="-23" y1="-12.6873" x2="22.0956" y2="107.199" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#006CE4" />
                                    <stop offset="1" stop-color="#006CE4" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h1 className=" font-poppins text-center md:text-left text-base md:text-2xl lg:text-3xl font-bold"><span className="text-[#FFB700]">Air</span><span className="text-[#006CE4]">Book</span></h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex font-poppins">
                    <ul className=" flex gap-5">
                        <li className="text-[#1E1E1E] text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/blog">Blog</NavLink></li>
                        <li className="text-[#1E1E1E] text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-gray-50 font-bold underline" : ""
                        } to="/offer">Offer</NavLink></li>
                        <li className="text-[#1E1E1E] text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/airlines">Airlines</NavLink></li>
                        <li className="text-[#1E1E1E] text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/about">About</NavLink></li>



                    </ul>
                </div>

                {/* User login and logout toggle */}

                <div className="navbar-end flex items-center gap-5 font-poppins">
                    <button className='sm:text-xl text-white font-medium bg-blue-600 px-2 sm:px-5 py-2 rounded-md'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
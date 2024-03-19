const Newsletter = () => {
    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto gap-[200px] my-20">
            <div>
                <img src="https://i.ibb.co/4tD6vRK/Isolation-Mode.png" alt="" className="h-[386px] w-[394px]" />
            </div>
            <div className="flex-1">
                <h3 className="text-[Black] text-[40px] font-bold">Subscribe to our <br />Newsletter</h3>
                <p className=" text-[#006CE4] text-[20px] mt-5">Subscribe to our newsletter and stay <br /> updated. </p>
                <div className="mt-5">
                    <input type="email" placeholder="Your email" className="p-4 w-full rounded-xl" />
                </div>
                <div className="mt-5">
                    <button className="p-4 w-full rounded-xl bg-[#FFB700] outline-none text-center font-medium  text-[#09182E] text-xl">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
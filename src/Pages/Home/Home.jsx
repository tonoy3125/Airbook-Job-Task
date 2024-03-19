import Airlines from "../Airlines/Airlines";
import Banner from "../Banner/Banner";
import Offers from "../Deals And Offers/Offers";
import Destinations from "../Destinations/Destinations";
import Newsletter from "../NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations />
            <Offers />
            <Airlines />
            <Newsletter />
        </div>
    );
};

export default Home;
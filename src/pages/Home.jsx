import Hero from "../components/Hero";
import wave from"../assets/wave.svg"
const Home = () => {
    return (
        <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-117px)]">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;
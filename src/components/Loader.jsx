import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className={` min-h-[calc(100vh-116px)]
        flex 
        flex-col 
        justify-center 
        items-center `}>
            <ScaleLoader color="#F92FD3" />
        </div>
    );
};

export default Loader;
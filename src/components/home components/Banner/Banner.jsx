import { Link } from 'react-router-dom';
import img from '../../../assets/images/banner_1.png'

const Banner = () => {
    return (
        <div className="h-[calc(100vh-80px)] grid grid-cols-2 items-center px-10 bg-fuchsia-600">
            <div className="space-y-4">
                <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  explicabo.</h1>
                <Link to={'/login'}><button className="btn mt-4">Explore More</button></Link>
            </div>
            <div>
                <img className='w-full rounded-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;
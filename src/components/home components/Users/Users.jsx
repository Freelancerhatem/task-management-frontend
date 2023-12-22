
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Users = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="fade-up"  className="h-[60vh] px-10">
            <h1 className="text-3xl font-semibold  text-center">Who using our site</h1>
            <div className="flex items-center justify-center gap-5 mt-6">
                <div>
                    <h1 className="text-xl font-semibold">Developers</h1>
                    <img className="h-[300px]" src="https://img.freepik.com/premium-photo/high-angle-view-software-developer-writing-code-while-using-computer-data-systems-office_236854-44145.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=sph" alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Graphics Designer</h1>
                    <img className="h-[300px]" src="https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais" alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Freelancer</h1>
                    <img className="h-[300px]" src="https://thumbs.dreamstime.com/b/freelancer-written-laptop-screen-69897268.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Users;
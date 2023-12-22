import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";


const Navbar = () => {
    const{signOutUser,user}=useAuth();
    return (
        <div className="px-10 bg-fuchsia-300 h-14">
            <nav className="flex items-center h-full gap-4">

                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-fuchsia-400 rounded-md p-2" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/create"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-fuchsia-400 rounded-md p-2" : ""
                    }
                >
                    Sign up
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-fuchsia-400 rounded-md p-2" : ""
                    }
                >
                    Sign in
                </NavLink>

                <NavLink
                    to="/task"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-fuchsia-400 rounded-md p-2" : ""
                    }
                >
                    Task
                </NavLink>
                {
                    user? 
                    <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-fuchsia-400 rounded-md p-2" : ""
                    }
                >
                    Dashboard
                </NavLink>
                :''
                }
                
                <div>
                {
                    user ?
                    <button onClick={()=>signOutUser()} className="btn">Sign out</button>
                    :''
                }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
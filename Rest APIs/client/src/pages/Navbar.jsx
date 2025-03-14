import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
    const navigate = useNavigate() ; 
    const logoutHandler = async()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/v1/user/logout");
            if(res.data.success){
                toast.success(res.data.message); 
                navigate("/login"); 
            }
        }   
        catch(error){
        }
    }
    return (
        <div className="bg-gray-600">
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-lg">{"sneha arora"}</h1>
                <Button onClick={logoutHandler}>Logout</Button>
            </div>
        </div>
    )
}

export default Navbar; 
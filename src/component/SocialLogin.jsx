import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import useHook from '../Hook/useHook';



const SocialLogin = () => {

    const {googleLogin , twitterLogin} = useHook()

    const handleSocial = (loginWithSOcial) =>{
        loginWithSOcial()
        .then(() => {})
    }

    return (
        <div>
            <div className="divider">continue with</div>
            <button onClick={()=>handleSocial(googleLogin)} className="btn btn-wide mx-14 mb-5"> <FcGoogle size={35}  /> Google</button>
            <button onClick={() => handleSocial(twitterLogin)} className="btn btn-wide mx-14 mb-5"> <BsTwitter size={35}  /> Twitter</button>
   
            
        </div>
    );
};

export default SocialLogin;
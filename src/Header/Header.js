import react,{memo,useState} from "react";

const Header=({islogin})=>{
    const isLogin=useState(islogin);

    return (
        isLogin?<p>yes is logged in</p>:<p>no you are not logged in</p>
    );
}

export default memo(Header);
import Image from "next/image";
// import logoImg from '../public/dunya-logo.png'
//this component is for the logo that appears above the searchbars
const Logo = () => {    
    return (
        <div className = "bg-aqua  bg-gradient-to-b from-aqua via-aqua to-white h-64  mb-7 justify-center flex flex-col">
            <Image className = "absolute inset-0 top-0 mx-auto mt-14" src = "/dunya-logo.svg" alt="..." width={400} height={533}/>
        </div>
    );
};

export default  Logo; 
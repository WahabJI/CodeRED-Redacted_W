import Image from "next/image";
// import logoImg from '../public/dunya-logo.png'
//this component is for the logo that appears above the searchbars
const Logo = () => {    
    return (
        <div className = "bg-aqua w-full h-56 mb-10">
            <Image className = "absolute inset-0 top-0 right-96 left-96 mr-40 ml-40 mt-14" src = "/dunya-logo.svg" alt="..." width={400} height={533}/>
            {/** <div>
                <Image className = "rounded-full" src = "/AliZain.jpg" width = "150" height = "150"></Image>
            </div> **/ }
        </div>
    );
};

export default  Logo; 
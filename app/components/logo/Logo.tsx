import Image from "next/image";
import logoImg from '../logo/dunya-logo.png'
//this component is for the logo that appears above the searchbars
const Logo = () => {    
    return (
        <div className = "bg-green-300 w-full h-">
            <Image  src = "../public/dunya-logo.png" alt="..." width={10} height={10}/>
            {/** <div>
                <Image className = "rounded-full" src = "/AliZain.jpg" width = "150" height = "150"></Image>
            </div> **/ }

                
        </div>
    );
};

export default  Logo; 
import Link from 'next/link'
import Image from 'next/image'

//this component is for the header at the top of the screen
const Header = (props:any) => {    
    return (
        <div className="absolute top-0 right-0 font-semibold text-white mr-6 mt-2.5 text-lg rounded-lg hover:text-xl hover:underline">
            <Image className = "relative inline-block mr-1.5 -mt-0.5" src = "/login.svg" alt="..." width={24} height={24}/>
            {/* <Link href="./pages/LoginPage" className="no-underline text-white">login</Link> */}
        </div>
    );
};

export default  Header; 
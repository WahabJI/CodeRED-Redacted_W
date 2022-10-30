import Image from 'next/image'
import ActivityButton from '../button/activityButton';


//this component is for the header at the top of the screen
const Activities = (props:any) => {    
    return (
        <div>
            <h4 className="text-marine text-center text-xl font-semibold">
                {/* <div className="flex flex-row w-full justify-center">
                <Image className = "relative block mb-2.5" src = "/wallet.svg" alt="..." width={24} height={24}/>
                </div> */}
                Spend Time In the Place For You.
            </h4>
            <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center gap-x-16 mx-auto mt-3">
                    <Image className = "relative block mb-4 left-8" src = "/foodie.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 left-2" src = "/hiker.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 right-6" src = "/beach.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 right-9" src = "/nightlife.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 right-12" src = "/adventure.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 right-12" src = "/nature.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 right-11" src = "/shopping.svg" alt="..." width={24} height={24}/>

                    <ActivityButton>
                    </ActivityButton>
                </div>
            </div>
        </div>
    );
};

export default Activities; 
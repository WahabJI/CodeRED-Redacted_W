import Image from 'next/image'

//this component is for the header at the top of the screen
const Activities = (props:any) => {    
    return (
        <div>
            <h4 className="text-marine text-center text-xl font-semibold mt-8">
                {/* <div className="flex flex-row w-full justify-center">
                <Image className = "relative block mb-2.5" src = "/wallet.svg" alt="..." width={24} height={24}/>
                </div> */}
                Spend Time In the Place For You.
            </h4>
        </div>
    );
};

export default Activities; 
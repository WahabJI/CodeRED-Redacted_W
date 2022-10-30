import Image from 'next/image'
import BudgetButton from '../button/budgetButton'

//this component is for the header at the top of the screen
const Budget = (props:any) => {    
    return (
        <div>
            <h3 className="text-marine text-center text-xl font-semibold mt-8 mb-4">
                {/* <div className="flex flex-row w-full justify-center">
                    <Image className = "relative block mb-2.5" src = "/wallet.svg" alt="..." width={24} height={24}/>
                </div> */}
                Choose Your Budget
            </h3>
            <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full gap-x-24 ml-0.5 mb-5">
                    <Image className = "relative block mb-4" src = "/backpack.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4" src = "/luggage.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4" src = "/shopping.svg" alt="..." width={24} height={24}/>
                </div>
                <BudgetButton>
                </BudgetButton>
            </div>
        </div>
    );
};

export default  Budget; 
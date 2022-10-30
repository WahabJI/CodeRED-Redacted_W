import Image from 'next/image'
import BudgetButton from '../button/budgetButton'

//this component is for the header at the top of the screen
const Budget = (props:any) => {    
    return (
        <div>
            <h3 className="text-marine text-center text-xl font-semibold mb-4">
                Choose Your Budget
            </h3>
            <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center gap-x-16 pb-10 mx-auto">
                    <Image className = "relative block mb-4 right-0.25" src = "/backpack.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 left-2" src = "/luggage.svg" alt="..." width={24} height={24}/>
                    <Image className = "relative block mb-4 left-2.5" src = "/shopping.svg" alt="..." width={24} height={24}/>
                    
                    <BudgetButton>
                    </BudgetButton>
                </div>
            </div>
        </div>
    );
};

export default  Budget; 
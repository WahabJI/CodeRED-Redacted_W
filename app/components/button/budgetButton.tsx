import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

//this component is for the header at the top of the screen
    const budgetButton = (props: any) => {    
    let [plan, setPlan] = useState('startup')

    return (
        <div className='ml-96 mr-96 absolute left-52'>
        <RadioGroup value={plan} onChange={setPlan}>
                <div className="flex flex-row justify-center w-full gap-5 ml-2 mt-4 mb-4">
                <RadioGroup.Option value="Backpacker">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg w-20 h-30 border-2 border-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Backpacker</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Mid-Range">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg w-20 h-30 border-2 border-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Mid-Range</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Splurger">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg w-20 h-30 border-2 border-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Splurger</p>
                    )}
                    </RadioGroup.Option>
                </div>
            </RadioGroup>
            
            {/* <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='1'>
            </input>      */}
            {/* <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='2'>
            </input>        
            <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='3'>
            </input>            */}
        </div>
    );
};

export default budgetButton;
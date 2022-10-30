import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

//this component is for the header at the top of the screen
    const budgetButton = (props: any) => {    
    let [plan, setPlan] = useState('startup')

    return (
        <div className='mx-auto absolute justify-center'>
            <RadioGroup value={plan} onChange={setPlan}>
                <div className="flex flex-row justify-evenly w-full gap-x-5 mt-4 mb-4">
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
        </div>
    );
};

export default budgetButton;
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const ActivityButton = (props: any) => {
    let [plan, setPlan] = useState('startup')

    return(
        <div className='mx-auto absolute justify-center'>
            <RadioGroup value={plan} onChange={setPlan}>
                <div className="flex flex-row justify-evenly w-full gap-x-4 mt-4 mb-4 my-3 text-center">
                <RadioGroup.Option value="foodie">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Foodie</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="hiking">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Hiking</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="beach">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Beach</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="nightlife">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Nightlife</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="adventure">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Adventure</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="outdoorsy">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Outdoorsy</p>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="shopping">
                    {({ checked }) => (
                        <p className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Shopping</p>
                    )}
                    </RadioGroup.Option>
                </div>
            </RadioGroup>
        </div>
    );
};

export default ActivityButton;
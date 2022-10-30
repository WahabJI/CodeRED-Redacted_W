import { useState } from "react";
import { setEnvironmentData } from "worker_threads";

// let destination: string;
// this component is the search bar for the destination.
const DestinationSearchBar = () => {
    const [destination, setDestination] = useState('');
    console.log("destination", destination)

    //gonna remove all of these awful any keywords later
    const handleSubmit = async (event: any) => {
        console.log("Destination Chosen: ", destination)
    }


    return(
        <div>
            <form>
                {/*the margins and padding below is very hardcoded rn */}
                <label className = "text-semibolded ml-1 relative block text-left" htmlFor = "destination">To:</label>
                <input 
                    className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1" 
                    type="text" 
                    id="destination" 
                    name="destination" 
                    placeholder="City or Airport"
                    value={destination}
                    onChange={({target}) => setDestination(target?.value)}
                />
            </form>
        </div>
    );
};

export function validateForm(){

}

export default DestinationSearchBar;
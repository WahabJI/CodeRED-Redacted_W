// this component is the search bar for the destination.
const DestinationSearchBar = () => {
    return(
        <div>
            <form className = "text-semibolded text-center mt-3">
                {/*the margins and padding below is very hardcoded rn */}
                <label className = "mr-8" htmlFor = "destination">To:</label>
                <input className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1" type="text" id="destination" name="destination" placeholder="City or Airport"/>
            </form>
        </div>
    );
};

export default DestinationSearchBar;
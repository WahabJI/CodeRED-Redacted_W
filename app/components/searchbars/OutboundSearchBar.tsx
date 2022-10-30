//This is the searchbar for where your flight is originating
const OutboundSearchBar = () => {
    return(
        <div>
            <form className = "text-semibolded text-center">
                <label className = "ml-1 relative block text-left" htmlFor = "outbound">From: </label>
                <input className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1" type="text" id="outbound" name="outbound" placeholder="City or Airport"/>
            </form>
        </div>
    );
};

export default OutboundSearchBar;
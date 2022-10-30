// import DatePicker from 'react-datepicker/dist/react-datepicker';
import OutboundSearchBar from '../searchbars/OutboundSearchBar'
import DestinationSearchBar from '../searchbars/DestinationSearchBar'
import DepartDate from '../searchbars/DepartDate'
import ArrivalDate from '../searchbars/ArrivalDate'
import SearchButton from '../button/searchButton'
import TripButton from '../button/tripButton'

const SearchBar = () => {
    return(
        <div className="rounded-lg shadow-lg border-solid border-2 border-inherit box-border content-center absolute mx-auto left-12 right-12 h-40 w-min -mt-24">
            <div className="flex flex-row justify-center gap-x-4 mx-10 mt-4">
                <OutboundSearchBar/>
                <DestinationSearchBar/>
                <DepartDate/>
                <ArrivalDate/>
                <SearchButton/>
            </div>
            <div className="flex flex-row justify-left gap-x-2.5 mx-10">
                <TripButton>
                </TripButton>
            </div>
        </div>
    );
};

export default SearchBar;
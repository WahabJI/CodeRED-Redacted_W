const DepartDate = () => {
    return(
        <div>
            <form className = "text-semibolded text-center">
                <label className = "ml-1 relative block text-left" htmlFor = "departDate">Depart Date: </label>
                <input className="bg-grey-200 border-2 border-grey-200 rounded-lg p-1 pl-1 w-28" type="text" id="departDate" name="departDate" placeholder="DD MM YY"/>
            </form>
        </div>
    );
};

export default DepartDate;
import Link from 'next/link'
//this component is for the header at the top of the screen
const searchButton = () => {    
    return (
        <button className = "bg-marine hover:bg-deep_marine text-white text-center text-sm font-bold px-4 py-0.5 leading-tight rounded w-24 h-9 ml-1 mt-6">
            <Link href="/results" className="no-underline text-white">Search ➜</Link>
        </button>
    );
};

export default  searchButton; 
import Image from "next/image";

const resultCards = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        {/* <Image className="w-full" src="/mountain.jpg" alt="Mountain"></Image> */}
        <div className="px-6 py-4">
          <div className="font-bold text-l mb-2">Option 1</div>
          <div className="font-bold text-xl text-center mb-2">$727</div>
          <p className="text-gray-700 text-base text-left w-full">
            <ul className="list-outside">
                <li><div className="font-bold">Departure Date:</div> 11/07/2022, 10:20AM </li>
                <li><div className="font-bold">Arrival Date:</div> 11/08/2022, 11:30PM </li>
                <li><div className="font-bold">Leaving From:</div> Houston, TX (IAH) </li>
                <li><div className="font-bold">Arriving At:</div> Doha Hamad Intl (DOH) </li>
                <li><div className ="font-bold">Airline:</div> Multiple Airlines </li>
                <li><div className="font-bold">Layovers:</div> 2 Layovers (Newark, Istanbul)</li>
                <li><div className="font-bold">Round Trip:</div>No</li>

            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Backpacker
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Long Layovers
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Foodie
          </span>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        {/* <Image className="w-full" src="/river.jpg" alt="River"></Image> */}
        <div className="px-6 py-4">
          <div className="font-bold text-l mb-2">Option 2</div>
          <div className="font-bold text-xl text-center mb-2">$1,666</div>
          <p className="text-gray-700 text-base text-left w-full">
            <ul className="list-outside">
                <li><div className="font-bold">Departure Date:</div> 11/07/2022, 10:25AM </li>
                <li><div className="font-bold">Arrival Date:</div> 11/09/2022 12:05AM </li>
                <li><div className="font-bold">Leaving From:</div> Houston, TX (IAH) </li>
                <li><div className="font-bold">Arriving At:</div> Bangkok Suvarnabhumi (BKK) </li>
                <li><div className ="font-bold">Airline:</div> United Airlines </li>
                <li><div className="font-bold">Layovers:</div> 1 in Tokyo (NRT)</li>
                <li><div className="font-bold">Round Trip:</div>Yes, departs from BKK 11/15/2022 back to Houston (IAH)</li>

            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Foodie
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Outdoorsy
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Mid-Range Budget
          </span>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        {/* <Image className="w-full" src="/forest.jpg" alt="Forest"></Image> */}
        <div className="px-6 py-4">
          <div className="font-bold text-l mb-2">Option 3</div>
          <div className="font-bold text-xl text-center mb-2">$793</div>
          <p className="text-gray-700 text-base text-left w-full">
            <ul className="list-outside">
                <li><div className="font-bold">Departure Date:</div> 11/07/2022, 7:55AM CST </li>
                <li><div className="font-bold">Arrival Date:</div> 11/08/2022, 7:50PM CST </li>
                <li><div className="font-bold">Leaving From:</div> Houston, TX (IAH) </li>
                <li><div className="font-bold">Arriving At:</div> Taipei City (TPE) </li>
                <li><div className ="font-bold">Airline:</div> United Airlines </li>
                <li><div className="font-bold">Layovers:</div> 2 layovers (Las Vegas, San Francisco)</li>
                <li><div className="font-bold">Round Trip:</div>No</li>

            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Night Life
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #One Way
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Multiple Layovers
          </span>
        </div>
      </div>
    </div>
  );
};

export default resultCards;
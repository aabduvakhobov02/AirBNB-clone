import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-6 xl:px-24">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center rounded-full md:shadow-sm md:border-2 hover:shadow-md">
        <input
          className="flex-grow pl-6 bg-transparent outline-none font-semibold text-lg text-black placeholder-black"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Start your search"
        />
        <SearchIcon className="hidden lg:inline-flex h-10 text-white bg-red-400 rounded-full p-2 cursor-pointer md:m-2" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-2">
        <div className="flex items-center pr-1">
          <p className="hidden lg:inline cursor-pointer font-semibold text-lg py-3 px-4 rounded-full hover:bg-gray-100 ">
            Become a Host
          </p>
          <div className="p-3 hover:bg-gray-100 rounded-full">
            <GlobeAltIcon className="h-6" />
          </div>
        </div>
        <div className="flex items-center space-x-3 rounded-full border-2 pl-2 pr-1 py-1 hover:shadow-md">
          <MenuIcon className="h-6 text-gray-800 pl-1" />
          <UserCircleIcon className="h-10 text-gray-500" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              min="1"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex justify-around">
            <button className="text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

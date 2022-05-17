import { FiSearch } from 'react-icons/fi';

// sticky top-0 z-30

export default function Header() {
  return (
    <header className="relative z-30 pt-12 bg-secondary">
      <div className="flex gap-x-4 items-center">
        <div className="relative">
          <FiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 w-5 h-auto text-gray-400" />
          <input
            type="text"
            placeholder="Search new place"
            className="px-16 py-3 pl-10 rounded-md outline-none placeholder:text-sm"
          />
        </div>
        <div className="relative">
          <select
            className="block w-full px-3 py-1.5 m-0 text-base font-normal text-gray-700 bg-transparent focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>All Places</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </header>
  );
}
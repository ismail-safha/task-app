import React from "react";

const FormSearch = () => {
  return (
    <section className=" w-full ">
      <div className=" mx-auto bg-indigo-500 rounded-lg p-14">
        <form>
          <h2 className="text-4xl font-bold font-display text-primary-text !text-white">
            Finder
          </h2>
          <p className=" my-6 text-secondary-text leading-tight !text-white opacity-60 mt-3">
            Try searching for catalytics using their code or/and maker.
          </p>

          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search your domain name"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin cursor-not-allowed">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSearch;

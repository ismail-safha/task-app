interface HomeProps {
  posts: any[]; // Replace `any[]` with the actual type of `posts`
}
const ProductList = ({ posts }: HomeProps) => {
  // console.log(posts);
  return (
    <div className="flex-grow w-full py-10 flex flex-col items-stretch">
      {/* text */}
      <div className="px-2 sm:px-6 lg:px-8 xl:px-12 mb-8">
        <button className="inline-flex relative  items-center justify-between transition-all duration-300 py-2.5 px-6  leading-4 text-white  hover:bg-primary-500 rounded-full border border-transparent focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 shadow-sm focus:outline-none text-base bg-lime-700 !rounded-md">
          <div className="flex-grow">Hide Generic Catalytics</div>
        </button>
      </div>
      <div className="px-2 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center flex-grow justify-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold font-display text-primary-text">
            Generic Catalytics
          </h2>
        </div>
      </div>
      {/*======================= data=============== */}
      <div className="grid grid-cols-1 w-full gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((catalytic) => (
          <div
            key={catalytic._id}
            className="px-4 mx-auto overflow-hidden relative border border-gray-200 rounded-md transition bg-[#31414703]"
          >
            <img
              className="w-80 relative h-80  mx-auto rounded-md overflow-hidden"
              src={catalytic.images[0]}
              alt="product"
            />
            <div className="p-6 ">
              <h2 className="text-4xl font-bold font-display text-primary-text !text-2xl !font-normal">
                {catalytic.ref}
              </h2>
              <div className="flex mt-2 mb-6 space-x-2">
                <span className="inline-flex capitalize items-center px-5 py-1.5 rounded-full text-sm !font-light border border-undefined-200 border-[#3141470D] bg-[#31414708] text-[#314147]">
                  {catalytic.maker}
                </span>
                <span className="inline-flex capitalize items-center px-5 py-1.5 rounded-full text-sm !font-light border border-undefined-200 border-[#3141470D] bg-[#31414708] text-[#314147]">
                  {catalytic.type}
                </span>
              </div>
              <div className="data-hj-suppress flex flex-wrap items-end space-x-4">
                <div className="flex space-x-4">
                  <h2 className="text-4xl font-bold font-display text-primary-text !font-normal !text-4xl">
                    ${catalytic.price.toFixed(2)}
                  </h2>
                  <div className="flex w-full items-center">
                    <div className="flex space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 rotate-45 text-primary-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        ></path>
                      </svg>
                      <span className="text-primary-500">
                        +0.00% ${catalytic.yesterdayPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* =========================================== */}
    </div>
  );
};

export default ProductList;

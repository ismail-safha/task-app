// import { request } from "graphql-request";
// import { useState } from "react";
// //
// const SEARCH_QUERY = `
// query SearchCatalyticsWithPagination($page: Float!, $byPage: Float!, $query: String!, $brand: String, $activePagination: Boolean, $priceOnly: Boolean, $maker: String) {
//   searchWithPagination(page: $page, byPage: $byPage, query: $query, brand: $brand, maker: $maker, priceOnly: $priceOnly, activePagination: $activePagination) {
//     items {
//       ...Catalytic
//     }
//     paging {
//       totalPages
//       currentPage
//       hasNextPage
//       totalItems
//       hasPreviousPage
//     }
//   }
// }

// fragment Catalytic on Catalytic {
//   _id
//   maker
//   brand
//   ref
//   type
//   images
//   price
//   yesterdayPrice
// }
// `;

// const FormSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();

//     const data = await request(
//       "https://api.catalyticworks.com/graphql",
//       SEARCH_QUERY,
//       {
//         page: 1,
//         byPage: 10,
//         query: searchTerm,
//       },
//       {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JhZDBjMGQ5ZGJkYTZiMWRkYmI5N2QiLCJyb2xlIjoiYnV5ZXItYWRtaW4iLCJpYXQiOjE2NzgxOTgwMjh9.nO6ObQMaAIbCJ4m3AVnHbhX71wyPj4IR9VtROYHLxnU`,
//       }
//     );

//     setSearchResults(data.searchWithPagination.items);
//   };

//   return (
//     <section className=" w-full ">
//       <div className=" mx-auto bg-indigo-500 rounded-lg p-14">
//         <form onSubmit={handleSearch}>
//           <h2 className="text-4xl font-bold font-display text-primary-text !text-white">
//             Finder
//           </h2>
//           <p className=" my-6 text-secondary-text leading-tight !text-white opacity-60 mt-3">
//             Try searching for catalytics using their code or/and maker.
//           </p>

//           <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
//             <input
//               className="text-base text-gray-400 flex-grow outline-none px-2 "
//               type="text"
//               placeholder="Search Catalytics"
//               value={searchTerm}
//               onChange={(event) => setSearchTerm(event.target.value)}
//             />
//             <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
//               <button
//                 type="submit"
//                 className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin cursor-not-allowed"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* this is problem */}
//         {searchResults.map((item) => (
//           <div key={item._id}>
//             <h3>{item.brand}</h3>
//             <p>{item.ref}</p>
//             <img src={item.images[0]} alt="" />
//             <span>{item.maker}</span>
//             {/* <p>{item.price.toFixed(2)}</p> */}
//             {/* <p>{item.yesterdayPrice.toFixed(2)}</p> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FormSearch;
//=========
import { request } from "graphql-request";
import { useState } from "react";

interface Catalytic {
  _id: string;
  maker: string;
  brand: string;
  ref: string;
  type: string;
  images: string[];
  price: number;
  yesterdayPrice: number;
}

interface SearchData {
  searchWithPagination: {
    items: Catalytic[];
    paging: {
      totalPages: number;
      currentPage: number;
      hasNextPage: boolean;
      totalItems: number;
      hasPreviousPage: boolean;
    };
  };
}

const SEARCH_QUERY = `
  query SearchCatalyticsWithPagination(
    $page: Float!, 
    $byPage: Float!, 
    $query: String!, 
    $brand: String, 
    $activePagination: Boolean, 
    $priceOnly: Boolean, 
    $maker: String
  ) {
    searchWithPagination(
      page: $page, 
      byPage: $byPage, 
      query: $query, 
      brand: $brand, 
      maker: $maker, 
      priceOnly: $priceOnly, 
      activePagination: $activePagination
    ) {
      items {
        ...Catalytic
      }
      paging {
        totalPages
        currentPage
        hasNextPage
        totalItems
        hasPreviousPage
      }
    }
  }

  fragment Catalytic on Catalytic {
    _id
    maker
    brand
    ref
    type
    images
    price
    yesterdayPrice
  }
`;
const authToken = process.env.ACCESS_KEY;
const FormSearch = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Catalytic[]>([]);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: SearchData = await request(
      "https://api.catalyticworks.com/graphql",
      SEARCH_QUERY,
      {
        page: 1,
        byPage: 10,
        query: searchTerm,
      },
      {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JhZDBjMGQ5ZGJkYTZiMWRkYmI5N2QiLCJyb2xlIjoiYnV5ZXItYWRtaW4iLCJpYXQiOjE2NzgxOTgwMjh9.nO6ObQMaAIbCJ4m3AVnHbhX71wyPj4IR9VtROYHLxnU`,
      }
    );

    setSearchResults(data.searchWithPagination.items);
  };

  return (
    <section className=" w-full ">
      <div className=" mx-auto bg-indigo-500 rounded-lg p-14">
        <form onSubmit={handleSearch}>
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
              placeholder="Search Catalytics"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button
                type="submit"
                className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin "
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {/* THIS IS PROBLEM */}
        {searchResults.map((item) => (
          <div key={item._id}>
            <h3>{item.brand}</h3>
            <p>{item.ref}</p>
            <img src={item.images[0]} alt="" />
            <span>{item.maker}</span>
            {/* <p>{item.price.toFixed(2)}</p> */}
            {/* <p>{item.yesterdayPrice.toFixed(2)}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FormSearch;

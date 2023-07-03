// import React, { useContext } from "react";
// import { MovieContext } from "./MovieContext";

// const PageAdjustment = () => {
//   const { page, setPage, movies, totalPages } = useContext(MovieContext);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setPage(newPage);
//     }
//   };

//   return (
//     <div className="page-adjust">
//       <button
//         onClick={() => handlePageChange(page - 1)}
//         disabled={page === 1}
//       >
//         Last
//       </button>
//       <span>
//         {page}/{movies.total_pages ? movies.total_pages : totalPages}
//       </span>
//       <button
//         onClick={() => handlePageChange(page + 1)}
//         disabled={page === (movies.total_pages ? movies.total_pages : totalPages)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default PageAdjustment;

import { Pagination } from '@mui/material';
import "./Pagination.css";
import React from "react";

const CustomPagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  return (
    <div className="pagination-container">
      
      {/* Material-UI Pagination component */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
       
      />

    </div>
  );
};

export default CustomPagination;

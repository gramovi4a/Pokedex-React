// Pagination file
import "./Pagination.css";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import React from "react";

const Pagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i); // give as the page numbers
  }

  return (
    <div className="pagination-container">

      {/* Previous button */}
      <div className="arrow-button">
        <SlArrowLeft
          onClick={currentPage !== 1 ? () => paginate(currentPage - 1) : undefined}
          className="pagination-button"
        />
      </div>
      
      <div className="page-numbers">
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            href="!#"
            className={number === currentPage ? "page-link active" : "page-link"}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next button */}
      <div className="arrow-button">
        <SlArrowRight
        onClick={currentPage !== Math.ceil(totalPokemons / pokemonsPerPage) ? () => paginate(currentPage + 1) : undefined}
          className="pagination-button"
        />
      </div>
    </div>
  );
};

export default Pagination;

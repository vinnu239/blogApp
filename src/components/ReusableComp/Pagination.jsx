import React from 'react';

const Pagination = ({ totalPages,currentPage, onPageChange }) => {
    // const totalPages = Math.ceil(totalItems / itemsPerPage);
    // Function to generate page numbers
    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    disabled={currentPage === i}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return <div>{generatePageNumbers()}</div>;
};

export default Pagination;

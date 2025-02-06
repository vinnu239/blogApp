import { useState, useEffect } from "react";

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    // Calculate the indices of the first and last items on the current page
    useEffect(() => {
        console.log("usepagination data", items);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, itemsPerPage, items]);


    const totalPages = (items.length > 0 ? Math.ceil(items.length / itemsPerPage) : null);
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return {
        currentPage,
        currentItems,
        handlePageChange,
        totalPages,
    }

}

export default usePagination;
import React, { useState } from 'react';

export const SearchInput = ({ items }) => {

    const [val, setVal] = useState("");

    const handleOnChange = (e) => {
        setVal(e.target.value);
    }
    const FilteredItems = items.filter(item =>
        item.toLowerCase().includes(val.toLowerCase())
    );

    // filter with starting with and the word availble in the array
    // const FilteredItems = items.filter(item =>
    //     item.toLowerCase().startsWith(val.toLowerCase()) && 
    //     item.toLowerCase().includes(val.toLowerCase())
    //   );

    return (
        <>
            <input
                value={val}
                onChange={handleOnChange}
            />
            <ul>
            {FilteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    )
}
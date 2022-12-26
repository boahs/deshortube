import React, {useState} from 'react'

const [searchInput, setSearchInput] = useState("");

const testData = [
    {name: 'Working', status: 'Online'}
];

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
};
searchInput.length > 0 ? testData.filter((data) => {
    return data.name.match(searchInput);
}): null;

const searchBar = () => {};

export default searchBar();
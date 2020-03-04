import React from "react";
import { Input } from "reactstrap"

import { SearchBar } from "../components/styles"

const EmpSearch = props => {
    return (

        <SearchBar>
            <Input
             type="text"
             name="searchTerm"
             id="searchTerm"
             placeholder="Search employee..."
             onChange={props.handleInputChange}
             value={props.searchTerm}
             />
        </SearchBar>
    )
};

export default EmpSearch;
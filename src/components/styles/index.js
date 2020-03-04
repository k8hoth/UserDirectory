import styled from "styled-components";

const purple = "#996666";
const lightGray = "#ffebe6";
const darkPurple = "#280f19";
const white = "#ffccbe";

export const HeaderBar = styled.article`
border-bottom: 3px solid ${darkPurple};
background-color: ${purple};
color: ${white};
text-align: center;
`

export const SearchBar = styled.article`
background-color: ${darkPurple};
padding: 2rem;
input {
    display: block;
    margin : auto;
    width: 250px
}
`
export const EmployeeBar = styled.article`
border-bottom: 2px solid ${lightGray};
border-top: 2px solid ${lightGray};
margin-top: 5px;
`
export const EmployeeCardBar = styled.article`
.card-body {
    padding: 0px 0 0 100px;
}

.no-gutters {
    width: 20rem;
}
#ec {
    margin-top: 2rem;
}
li {
    list-style: none;  
}
`
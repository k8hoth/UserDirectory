import styled from "styled-components";

const purple = "#996666";
const lightGray = "#ffebe6";
const darkPurple = "#280f19";
const white = "#ffffff";

export const HeaderBar = styled.article`
border-bottom: 3px solid ${darkPurple};
background-color: ${darkPurple};
padding: ${20}; 
color: ${white};
text-align: left;
font-size: 20px
`

export const SearchBar = styled.article`
background-color: ${darkPurple};
padding: rem;
input {
    display: block;
    margin : auto;
    width: 300px
alignment: left;

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
    background: ${lightGray}
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
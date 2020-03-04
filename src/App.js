import React, {useState} from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmpSearch from "./components/empSearch";
import EmpCard from "./components/empCard";
import sampleData from "./data/sample.json";


function App() {
  const [employee, setEmployee] = useState({
    searchTerm: "",
    data: sampleData.results,
    searchResults: []
  })

  const { searchTerm, data, searchResults } = employee;

  const handleInputChange = e => {
    const searchResults = data.filter(employee => employee.email.toLowerCase().includes(e.target.value.toLowerCase()));
    setEmployee({ ...employee, searchResults, searchTerm: e.target.value});
  }

  const returnResults = () => {
    if (searchResults.length) {

      return searchResults.map(record => (
        <EmpCard
        key={record.registered.date}
        id={record.registered.date}
        image = {record.picture.large}
        first = {record.name.first}
        last = {record.name.last}
        phone={record.phone}
        email = {record.email}
        
        />
      ))
    } else {

      return data.map(record => (
      <EmpCard
      key={record.registered.date}
      id={record.registered.date}
      image = {record.picture.large}
      first = {record.name.first}
      last = {record.name.last}
      phone={record.phone}
      email = {record.email}
     
      />
    ))

    }
    
  }

  return (
    <div className="App">
      <NavBar />
      <EmpSearch
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
      />
      
      <Container>
        {returnResults()}
      </Container>
    </div>
  );
}

export default App;
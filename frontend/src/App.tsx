import NavBar from "components/navbar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  //<> fragment, pois só pode ter uma tag no retorno =)
  return (
    <> 
      <NavBar/>
      <div className="container">
        <h1 className="text-primary"> Olá React! </h1>
        <DataTable></DataTable>
      </div>
      <Footer/>
    </>
  );
}

export default App;

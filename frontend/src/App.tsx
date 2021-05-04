import NavBar from "components/navbar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  //<> fragment, pois só pode ter uma tag no retorno =)
  return (
    <> 
      <NavBar/>
      <div className="container">
        <h1 className="text-primary"> Dashboard Vendas </h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de sucesso
            </h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
          <h5 className="text-center text-secondary">
              Taxa de sucesso
            </h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">
            Todas as Vendas
          </h2>
        </div>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

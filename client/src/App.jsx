import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="background-grdnt">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      {/* <Table /> */}
    </div>
  );
};

//gradient-bg-welcome
export default App;

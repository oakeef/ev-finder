import "./App.css";

function App() {
  const brands = ["audi", "bmw", "tesla", "porsche"];

  return (
    <>
      <h1>Find the used EV that suits you</h1>
      <div className="card">
        <p>
          This website helps you find the used EV that you are looking for based
          on your specific needs
        </p>
      </div>
      <div>
        <select>
          {brands.map((brand) => (
            <option value="brand">{brand}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;

const CompareContainer = ({ compare, setCompare }) => {
  const isDifferent = (key) => {
    const values = compare.map((p) => p[key]);
    return new Set(values).size > 1;
  };

  const removeProduct = (id) => {
    setCompare(compare.filter((p) => p.id !== id));
  };

  const comparisonKeys = {
    name: "Name",
    price: "Price",
    brand: "Brand",
    battery: "Battery (mAh)",
    screen: "Screen (inches)",
    rearCamera: "Rear Camera (MP)",
    os: "Operating System",
    FPSensor: "Fingerprint Sensor",
    frontCamera: "Front Camera (MP)",
  };

  return (
    <>
      {compare.length >= 2 && (
        <div className="compare-section" id="compare-section">
          <button className="clear" onClick={() => setCompare([])}>
            Clear All
          </button>

          <div className="compare-table">
            <div className="row header">
              <div></div>
              {compare.map((p) => (
                <div key={p.id}>
                  <div>
                    {p.name}
                    <button onClick={() => removeProduct(p.id)}> X </button>
                  </div>
                </div>
              ))}
            </div>

            {Object.keys(comparisonKeys).map((key) => (
              <div
                className={`row ${isDifferent(key) ? "highlight" : ""}`}
                key={key}
              >
                <div className="label">{comparisonKeys[key]}</div>
                {compare.map((p) => (
                  <div key={p.id}>{p[key]}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CompareContainer;

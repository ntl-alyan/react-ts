import React, { useEffect, useState } from 'react';
import ProductsTable from '../TestComponents/TestTable'; 
import { ColorRing } from "react-loader-spinner";

function Products() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      let res = await fetch('https://dummyjson.com/products');
      const response = await res.json();
      
      if (response && response.products) {
        
        setTableData(response.products);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              colors={["#284E93", "#284E93", "#284E93", "#284E93", "#284E93"]}
            />
          </div>
        ) : (
          <div>
            {isError ? (
              <div className="alert alert-danger" role="alert">
                Error Occurred! Please try again.
              </div>
            ) : (
              <div>
                <h4 className="alert alert-primary">Products Data</h4>
                <ProductsTable data={tableData} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

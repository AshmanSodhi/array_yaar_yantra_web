import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = () => {
  const [data, setData] = useState([]); // Ensure state starts as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://array-yaar-yantra-ml.onrender.com/data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Fetched data:", jsonData);

        if (Array.isArray(jsonData.data)) {
          setData(jsonData.data);
        } else {
          console.error("API did not return an array!", jsonData);
          setData([]); // Fallback to an empty array
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className="table">
      <h2>WEEKLY FORECAST</h2>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>NORMALIZED EFFICIENCY</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{new Date(item.Date).toLocaleDateString()}</td>
                <td>{item.Normalized_Efficiency?.toFixed(2) || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="2">No data available</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

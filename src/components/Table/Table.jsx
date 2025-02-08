import React from 'react'
import './Table.css'
const Table = () => {
  return (
    <div className='table'>
    <h2>WEEKLY FORECAST</h2>
      <table>
        <tr>
            <th>DATE</th>
            <th>NORMALIZED EFFICIENCY</th>
        </tr>
        <tr>
            <td>9-02-2025</td>
            <td>0.32</td>
        </tr>
        <tr>
            <td>10-02-2025</td>
            <td>0.52</td>
        </tr>
        <tr>
            <td>11-02-2025</td>
            <td>0.44</td>
        </tr>
        <tr>
            <td>12-02-2025</td>
            <td>0.91</td>
        </tr>
        <tr>
            <td>13-02-2025</td>
            <td>0.37</td>
        </tr>
        <tr>
            <td>14-02-2025</td>
            <td>0.41</td>
        </tr>
        <tr>
            <td>15-02-2025</td>
            <td>0.36</td>
        </tr>
        
      </table>
    </div>
  )
}

export default Table

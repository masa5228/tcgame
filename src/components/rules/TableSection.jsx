import React from 'react';
import './TableSection.css';

const TableSection = ({ title, headers, rows, description }) => {
  return (
    <div className="table-section">
      {title && <h3 className="table-title">{title}</h3>}
      {description && <p className="table-description">{description}</p>}
      <div className="table-wrapper">
        <table className="rule-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;

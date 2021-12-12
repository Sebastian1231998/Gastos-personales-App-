import React from "react";
import { Line } from 'react-chartjs-2';

const GraficaPresupuesto = () => {
    
    const data = {
        labels: ['Septiembre', 'Octubre','Noviembre','Diciembre'],
        datasets: [
          {
            label: 'Dinero Mensual',
            data: [1150000, 2500000, 3050000, 3700000,4000000],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

  const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

  return (
    <div
      className="container-grafica"
      style={{ width: "100%" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default GraficaPresupuesto;

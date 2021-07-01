import Chart from "chart.js/auto";
import { useEffect } from "react";

function Grafica() {
  useEffect(() => {
    let ctx = document.getElementById("estadisticaproyecto").getContext("2d");

    let estadisticaproyecto = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["rgba(45, 114, 201)"],
            borderColor: ["rgba(45, 114, 201)"],
            tension: 0.5,
            borderWidth: 2,
          },
          {
            label: "",
            data: [23, 5, 2, 3],
            backgroundColor: ["rgba(178, 223, 138)"],
            borderColor: ["rgba(178, 223, 138)"],
            tension: 0.5,
            borderWidth: 2,
          },
          {
            label: "",
            data: [10, 3, 5, 2, 3, 23],
            backgroundColor: ["rgba(166, 206, 277)"],
            borderColor: ["rgba(166, 206, 277)"],
            tension: 0.5,
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              font: {
                size: 8,
              },
            },
            beginAtZero: false,
          },
          x: {
            ticks: {
              font: {
                size: 8,
              },
            },
          },
        },
      },
    });
    return () => {
      estadisticaproyecto.destroy();
    };
  }, []);

  return <canvas id="estadisticaproyecto" width="90" height="50" />;
}

export default Grafica;

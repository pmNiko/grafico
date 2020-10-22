import React, {useEffect} from 'react';
import Chart from 'chart.js';

const Grafico = () => {
    const cr = React.createRef();

    useEffect(() => {
        const ctx = cr.current.getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Phyton', 'Ruby', 'JavaScript', 'Java', 'Smalltalk', 'Json'],
                datasets: [{
                    label: 'Lenguajes de Programación',
                    data: [10, 60, 30, 50, 45, 17],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, []);

    return (    
        <canvas ref={cr}></canvas>
    );
}
 
export default Grafico;
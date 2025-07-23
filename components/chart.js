import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

export function LineChart() {
    const [dataPoints, setDataPoints] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    x: new Date(item.x),
                    y: item.y
                }));
                setDataPoints(formattedData);
                setIsLoaded(true);
            });
    }, []);

    const options = {
        animationEnabled: true,
        backgroundColor: 'transparent',
        theme: 'light2',
        title: {
            text: 'Nifty 50 Index',
            fontSize: 18,
        },
        data: [{
            type: 'line',
            xValueFormatString: 'MMM YYYY',
            yValueFormatString: '#,##0.00',
            dataPoints,
        }]
    };

    return isLoaded ? <CanvasJSChart options={options} /> : null;
}

export function PieChartQ1() {
    const options = {
        animationEnabled: true,
        backgroundColor: 'transparent',
        width: null,
        height: 210,
        title: {
            text: 'Market Share - Q1',
            fontSize: 18,
        },
        data: [{
            type: 'pie',
            startAngle: 240,
            indexLabel: '{label} - {y}%',
            dataPoints: [
                { y: 35, label: 'Apple' },
                { y: 25, label: 'Samsung' },
                { y: 20, label: 'Huawei' },
                { y: 20, label: 'Others' }
            ]
        }]
    };

    return <CanvasJSChart options={options} />;
}

export function PieChartQ2() {
    const options = {
        animationEnabled: true,
        backgroundColor: 'transparent',
        width: null,
        height: 210,
        title: {
            text: 'Market Share - Q2',
            fontSize: 18,
        },
        data: [{
            type: 'pie',
            startAngle: 240,
            indexLabel: '{label} - {y}%',
            dataPoints: [
                { y: 30, label: 'Apple' },
                { y: 28, label: 'Samsung' },
                { y: 22, label: 'Huawei' },
                { y: 20, label: 'Others' }
            ]
        }]
    };
    return <CanvasJSChart options={options} />;
}

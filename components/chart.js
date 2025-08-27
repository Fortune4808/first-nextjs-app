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

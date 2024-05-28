"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, animator } from 'chart.js';
import generateNameFromKey from '@/app/functions/generateNameFromKey';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SingleStatChart({ data }: { data: { type: string, values: number[] } }) {
    const name = generateNameFromKey(data.type)
    const chartData = {
        labels: data.values.map((_, index) => `${index + 1}`),
        datasets: [
            {
                label: name,
                data: data.values,
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        animator: true,
        label: {
            display: false
        }
    };

    return <div className='col-span-1 bg-gray-900 rounded-lg p-5'>
        <h3 className='text-2xl'>{name}</h3>
        <Line data={chartData} options={options} />
    </div>;
};

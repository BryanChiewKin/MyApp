'use client';

import { ResponsiveTimeRange } from '@nivo/calendar';
import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
// Missing: Ensure necessary CSS for Nivo is imported
// import '@nivo/calendar/dist/nivo-calendar.css'; // Example CSS import

const MyResponsiveTimeRange = ({ data }: { data: { day: string, value: number }[] }) => {
    return (
        <ResponsiveTimeRange
            data={data}
            from="2023-01-01"
            to="2023-12-12"
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
        />
    );
};

export default function Calendar() {
    function generateDataForYear2023() {
        const data = [];
        let currentDate = new Date("2023-01-01");
        const endDate = new Date("2023-12-31");

        while (currentDate <= endDate) {
            const value = Math.floor(Math.random() * 301);
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            data.push({
                value: value,
                day: formattedDate
            });

            currentDate = new Date(currentDate); // Clone date object
            currentDate.setDate(currentDate.getDate() + 1); // Increment date
        }

        return data;
    }

    const dataArray = generateDataForYear2023();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>These are the stats for the year.</CardDescription>
            </CardHeader>
            <CardContent className='h-[200px] flex items-center w-full'>
                <MyResponsiveTimeRange data={dataArray} />
            </CardContent>
        </Card>
    );
}







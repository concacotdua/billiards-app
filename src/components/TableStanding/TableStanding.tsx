import React from 'react';
import Image from 'next/image';
import { gamer } from '@images'; // Ensure this matches the alias setup

function TableStanding() {
    const data = [
        {
            pos: 1,
            team: { name: 'Team A', country: 'Country A' },
            w: 10,
            l: 2,
            t: 1,
            pts: 31,
            diff: 15,
            avatar: gamer.gamer1
        },
        {
            pos: 2,
            team: { name: 'Team B', country: 'Country B' },
            w: 8,
            l: 4,
            t: 2,
            pts: 26,
            diff: 10,
            avatar: gamer.gamer2
        },
        {
            pos: 3,
            team: { name: 'Team C', country: 'Country C' },
            w: 7,
            l: 5,
            t: 2,
            pts: 23,
            diff: 8,
            avatar: gamer.gamer3
        },
        {
            pos: 4,
            team: { name: 'Team D', country: 'Country D' },
            w: 6,
            l: 6,
            t: 2,
            pts: 20,
            diff: 5,
            avatar: gamer.gamer4
        },
        {
            pos: 5,
            team: { name: 'Team E', country: 'Country E' },
            w: 5,
            l: 7,
            t: 2,
            pts: 17,
            diff: 3,
            avatar: gamer.gamer1
        },
        {
            pos: 6,
            team: { name: 'Team F', country: 'Country F' },
            w: 4,
            l: 8,
            t: 2,
            pts: 14,
            diff: 1,
            avatar: gamer.gamer2
        },
    ];
    const ListItems = ['Pos', 'Team', 'W', 'L', 'T', 'PTS', 'DIFF', 'Action'];
    
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-tertiary-color border-b uppercase text-white text-2xl">
                        {ListItems.map((item, index) => (
                            <th key={index} className="py-2 px-4 text-left">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 text-2xl">
                            <td className="py-2 px-4 my-6">{row.pos}</td>
                            <td className="py-2 px-4 flex items-center my-8">
                                <Image
                                    src={row.avatar}
                                    alt="Avatar"
                                    width={45}
                                    height={45}
                                    className="rounded-none mr-2"
                                />
                                <div className="flex flex-col mx-2">
                                    <div className="font-semibold uppercase">{row.team.name}</div>
                                    <div className="text-sm text-gray-500 uppercase">{row.team.country}</div>
                                </div>
                            </td>
                            <td className="py-2 px-4">{row.w}</td>
                            <td className="py-2 px-4">{row.l}</td>
                            <td className="py-2 px-4">{row.t}</td>
                            <td className="py-2 px-4">{row.pts}</td>
                            <td className="py-2 px-4">{row.diff}</td>
                            <td className="py-2 px-4">
                                <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-blue-600">+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableStanding;

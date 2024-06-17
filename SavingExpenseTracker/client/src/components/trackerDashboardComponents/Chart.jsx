import React from 'react'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Title from "./Title";

import { default as api } from '../../redux/apiSlice';

export default function Chart() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery;
  
  const lineData = [
    { label: "January", income: 5000, expense: 3000 },
    { label: "February", income: 5200, expense: 3200 },
    { label: "March", income: 5500, expense: 3500 },
  ];


  return (
    <div className='w-full md:w-2/3'>
      <Title title='Transaction Activity' />

      <ResponsiveContainer width={"100%"} height={500} className='mt-5'>
        <LineChart width={500} height={300} data={lineData}>
          <CartesianGrid strokeDasharray='3 3' />
          <YAxis />
          <XAxis />
          <Legend />
          <Line type='monotone' dataKey={"income"} stroke='#8884d8' />
          <Line type='monotone' dataKey={"expense"} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

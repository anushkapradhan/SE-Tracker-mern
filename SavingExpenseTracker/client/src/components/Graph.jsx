import React from 'react'

import { Doughnut } from 'react-chartjs-2'; // npm i react-chartjs-2
import { Chart, ArcElement } from 'chart.js'; // npm i chartjs

import Labels from './Labels';

import { chart_data, getRemaining, getTotal } from '../helper/helper';
import { default as api } from '../redux/apiSlice';


Chart.register(ArcElement);

export default function Graph() {
    
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    // console.log(data);
    //console.log(getSum(data));

    const { total_remaining, savingsAmt, investmentAmt } = getRemaining(data);
    console.log(getRemaining(data));
    
    let graphData;

    if (isFetching){
        graphData = <div>Fetching</div>;
    }else if (isSuccess){
        // chart_data(data);
        // console.log(getTotal(data));
        // console.log(getLabels(data, 'type'));
        graphData = <Doughnut {...chart_data(data)}></Doughnut>
    }else if (isError){
        graphData = <div>Error</div>;
    }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
    
    <div className="item">
        <div className="chart relative">
            { graphData }
            <h3 className="mb-4 font-bold title">
                Total
                <span className="block text-3xl text-emerald-400">
                    Rs.{ getTotal(data) ?? 0 }
                </span>
            </h3>
            
        </div>

        <div className="flex flex-col py-10 gap-4">
            {/* Labels */}
            <Labels></Labels>
        </div>
        <h2 className="mb-4 font-bold title">
            Total Remaining Amount with you:
            <span className="block text-3xl text-emerald-400">
                Rs.{ total_remaining ?? 0 }
            </span>
        </h2>
        <h2 className="mb-4 font-bold title">
            Total Savings Rs.{ savingsAmt ?? 0 }
        </h2>
        <h2 className="mb-4 font-bold title">
            Total Investment Rs.{ investmentAmt ?? 0 }
        </h2>
    </div>
    

    </div>
  )
}

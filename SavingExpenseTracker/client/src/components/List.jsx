import React, { useState } from 'react'

import { default as api } from '../redux/apiSlice';

import 'boxicons'; // npm i boxicons
import { FaArrowDownShortWide } from "react-icons/fa6"; // npm i react-icons


export default function List() {
    const [ show, setShow ] = useState(false);

    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    
    const [ deleteTransaction ] = api.useDeleteTransactionMutation();
    
    let Transactions;

    // deleting the transaction and from its history as well
    const handleClick = (e) => {
        //console.log(e.target.dataset.id);
        if (!e.target.dataset.id) return 0;
        deleteTransaction({
            _id: e.target.dataset.id
        });
    }


    if (isFetching){
        Transactions = <div>Fetching</div>;
    }else if (isSuccess){
        Transactions = data.map((v, i) => <Transaction key={i} category={v} handler={handleClick}></Transaction>);
    }else if (isError){
        Transactions = <div>Error</div>;
    }


  return (
    <div className="flex flex-col py-2 gap-3">
        <div className="flex place-items-center justify-center gap-3 py-4">
        <h1 className='font-bold text-xl'>Transaction History</h1>
        <button onClick={() => setShow(!show)} className='px-2 py-2 rounded-full focus:outline-none hover:border-black hover:border-2'>
        <FaArrowDownShortWide size='20px'></FaArrowDownShortWide></button>
        </div>
        {
            show ? Transactions : <p className='text-xs'>'(Click on the arrow to see history)'</p>
        }
    </div>
  )
}

function Transaction({ category, handler }){
    if (!category) return null;
    return (
        <div className="flex place-items-center bg-gray-50 py-1 rounded-r" style={{ borderRight:`8px solid ${category.color ?? "#e5e5e5"}`}}>
            {/* <button className="px-3 py-2 ml-2 my-1 rounded-full bg-blue-600" onClick={handler}><box-icon data-id={category._id ?? ''} color={category.color ?? "#e5e5e5"} size="15px" name="trash"></box-icon></button> */}
            <button className="px-3 py-2 ml-2 my-1 rounded-full hover:border-black" style={{ backgroundColor: category.color }} onClick={handler}><box-icon data-id={category._id ?? ''} color="black" size="15px" name="trash"></box-icon></button>
            <span className="block w-full">{ category.name ?? ""}</span>
            <span className="block w-full">Rs. { category.amount ?? 0} /-</span>
        </div>
    )
}

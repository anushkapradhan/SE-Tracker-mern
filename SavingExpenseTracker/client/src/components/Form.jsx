import React from 'react'

import { useForm } from 'react-hook-form'; // npm i react-hook-form (library)
import List from './List';

import { default as api } from '../redux/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [ addTransaction ] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if (!data) return {};
        //console.log(data);
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount');
    };

  return (
    <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
        <form id="form" onSubmit = {handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text" {...register('name')} placeholder="Salary, Rent, SIP, Etc..." className="form-input" />
                </div>
                <select {...register('type')} className="form-input">
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expenses">Expenses</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder="Amount" className="form-input" />
                </div>
                <div className="submit-btn">
                    <button className="border py-2 text-white bg-black hover:bg-blue-600 focus:outline-none w-full">Make Transaction</button>
                </div>
            </div>
        </form>
        <List></List>
    </div>
  )
}


import Graph from '../components/Graph';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

export default function Tracker() {

  return (
    <div className='mx-4 my-2 poppins-regular'>
        <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
            <h1 className='text-4xl py-8 mb-10 bg-black text-white rounded'>
            Savings and Expense Tracker
            </h1>
            <span className=''>
                <Link to={'/'}>Go Home</Link>
            </span>
            {/* grid columns */}
            <div className='grid md:grid-cols-2 gap-4'>
                {/* Chart */}
                <Graph></Graph>
                {/* Form */}
                <Form></Form>
            </div>
        </div>
    </div>
  )
}

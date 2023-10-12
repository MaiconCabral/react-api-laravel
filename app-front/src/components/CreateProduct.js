import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const endpoint = 'http://react-api-laravel.local/api/product';

const CreateProduct = () => {
    //hooks
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    //func
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price: price, stock: stock})
        navigate('/')
    }

    //view
  return (
    <div>
        <h3>Create Product</h3>

        <div className='d-grid gap-2'>
                <Link to="/" className='btn btn-success btn-md mt-2 mb-5 text-white'>back Home</Link>
        </div>

        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input 
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input 
                    value={stock}
                    onChange={ (e)=> setStock(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default CreateProduct;
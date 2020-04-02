import React, { Fragment, useState } from 'react'

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async ev => {
        ev.preventDefault()
        try {
            const body = { description }
            await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            window.location = '/'
        } catch (err) {
            console.error(err.message)
        }
    }

    return <Fragment>
        <h1 className='text-center mt-5'>Pern Todo List</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
            <input
                type='text'
                className='form-control'
                value={description}
                onChange={ev => setDescription(ev.target.value)}></input>
            <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
}

export default InputTodo
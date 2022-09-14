import React from 'react'
import { useState } from 'react'

export const TodoAdd = ({ onSumitClick }) => {
    const [inputText, setInputText] = useState(
        {
            id: new Date().getTime() * 3,
            description:'',
            done:false,
        }
    )

    const onChangeInput = (e) => {
        setInputText({
            ...inputText,
            description:e.target.value,
            id: new Date().getTime() * 3,
        })

    }
    const buttonClick = (event) => {
        event.preventDefault();

        if(!inputText.description.trim()) return;

        onSumitClick(inputText)
        setInputText({
            ...inputText,
            description:'',
        })
    }
        return (
    <>
        <h4>Agregar TODO</h4>
        <hr />
        <form action="">
            <input 
                type='text'
                placeholder='Que hay que hacer'
                className='form-control'
                value={inputText.description}
                onChange={onChangeInput}
            />

            <button
                type='sumit'
                className='btn btn-outline-primary mt-1'
                onClick={ (e) => buttonClick(e) }
                >
                Agregar
            </button>
        </form>
    </>
  )
}

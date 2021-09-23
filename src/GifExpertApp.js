import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Naruto']);

    /*
    const handleAdd = () => {
        // setCategories([...categories, 'Naruto']);
        //el set tiene una funcion de callbak en el cual es primer argumento es el estado anterior, 
        // y debe regresar el nuevo estado
        setCategories( cats => [...cats, 'Naruto']); 
    };*/


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick = {handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                        category ={ category }
                        key= { category }/>
                    })
                }
            </ol>
        </>
    )
}

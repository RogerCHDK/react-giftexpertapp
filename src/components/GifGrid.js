// Version usando custom hooks
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGirdItem } from './GifGirdItem';


export const GifGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs(category);
    return (
        <> 
         <h3 className="animate__animated animate__bounce"> { category } </h3>
         { loading && <p className="animate__animated animate__flash">Loading</p>}
         <div className="card-grid">
                { images.map( img => 
                <GifGirdItem 
                key={ img.id }
                { ...img }/> //hack, puedo mandar las propiedades individuales usando el operador spread, sino tendria que hacer: props.img.id
                ) }
        </div>
        </>
    )
}







/*
Primera version funcionanado, usando useEffect
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGirdItem } from './GifGirdItem';

export const GifGrid = ({ category }) => {

    useEffect( () => {
        getGifs( category ).then(
            setImages
        )
    }, [ category ]); //esto hace que solo se ejecute una sola vez, aunque se vuelva a renderizar el hook, solo cambia en caso de que la categpria llegue a cambiar

    const [images, setImages] = useState([]);
    
    return (
        <> 
         <h3> { category } </h3>
        <div className="card-grid">
                { images.map( img => 
                <GifGirdItem 
                key={ img.id }
                { ...img }/> //hack, puedo mandar las propiedades individuales usando el operador spread, sino tendria que hacer: props.img.id
                ) }
        </div>
        </>
    )
}*/

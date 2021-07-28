import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value); //asi obtenemos el valor del input en cuanto cambia
        setInputValue(e.target.value); //despues le asignamos ese valor para que lo renderize
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //evito que se refresque la pagina
        if (inputValue.trim().length > 2) { //valido que no este vacio el input
            setCategories( categories => [ inputValue, ...categories]); //obtengo el valor de estado actual, y despues agrego lo que esta en el iput
            setInputValue(''); //Limpio el input
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type= "text"
                value= {inputValue}
                onChange={ handleInputChange }/>
        </form>
    );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
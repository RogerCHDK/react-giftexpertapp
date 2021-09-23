import React from 'react'
import PropTypes from 'prop-types';

export const GifGirdItem = ( {title, url} ) => {
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt= {title} />
            <p>{ title }</p> 
        </div>
    )
}

GifGirdItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

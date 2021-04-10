import React from 'react';

const Publication = ({name, tasks, alt, url, color}) => {
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Done exersises: {tasks}</p>
            <img src={url} alt={alt}></img>
            <p>{color}</p>
        </div>
    )
}

export default Publication;
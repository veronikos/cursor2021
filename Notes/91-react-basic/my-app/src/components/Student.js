import React from 'react';

const Student = ({name, tasks}) => {
    return(
        <div>
            <h3>Name: {name}</h3>
            <p>Done exersises: {tasks}</p>
        </div>
    )
}

export default Student;
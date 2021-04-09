import React from 'react';

const a = 0;
const red = "red"
const green = "green"

const classNameChanger = a === 0 ? red : green

const Student = ({name, tasks}) => {
    return(
        <div>
            <h3 className={classNameChanger}>Name: {name}</h3>
            <p>Done exersises: {tasks}</p>
        </div>
    )
}

export default Student;
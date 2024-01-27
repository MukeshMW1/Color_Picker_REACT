import React, { useState } from 'react';


function ColorPicker() {

    const [color, setColor] = useState("#ffffff")


    function handleColorChange(e) {

        setColor(e.target.value);
    }


    return (
        <div className="color-picker-containeer">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ background: color }}>
                <p>Color: {color}</p>

            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />



        </div>


    )

}


export default ColorPicker
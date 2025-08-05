function ColorInput({ color, setColor }) {

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    return(
        <input
            value={color}
            type="color"
            onChange={changeColor}            
        />
    )
}

export default ColorInput
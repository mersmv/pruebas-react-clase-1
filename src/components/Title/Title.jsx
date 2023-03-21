import { v4 } from "uuid";

const Title = ({ text, name, boolean, isUndefined, isNull, array, object }) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>boolean: {boolean}</p>
            <p>undefined: {isUndefined}</p>
            <p>null: {isNull}</p>
            {array.map(numbers => (
                <p key={v4()} >{numbers} </p>
            ))}
            <p>object: {object.a}</p>
        </div>
    )
}

export default Title;
import './Button.css' // Don't do like I did and import the css 😥

function Button(props) { /* we can name the parameter however we want, but they are called props by convention */
    console.log(props);

    return (
        <button className={`${props.color}  ${props.radius}`}>
            {props.text}
        </button>
    )
}

export default Button;
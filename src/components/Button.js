import PropTypes from "prop-types"

const Button = (props) => {
    return (
        <div>
            <button onClick = {props.onClick} className = "btn" style = {props.btnStyle}>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    text: "No Button Name",
    btnStyle: {
        border: "2px solid royalblue",
        color: "goldenrod",
        backgroundColor: "purple",
    }
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
}

export default Button

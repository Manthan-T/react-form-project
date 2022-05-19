import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAddSubItem, showAddSubItem }) => {
    return (
        <>
            <header className = "header">
                <h1 style = {{ color: "goldenrod" }}>{title}</h1>
                <Button text = {showAddSubItem ? "Close Form" : "Add Sub-Item"}
                    btnStyle = {{border: `2px solid ${showAddSubItem ? "blue" : "royalblue"}`, color: `${showAddSubItem ? "rgb(0, 219, 102)" : "goldenrod"}`, backgroundColor: `${showAddSubItem ? "crimson" : "purple"}`}} onClick = {onAddSubItem} showAddSubItem = {showAddSubItem}/>
            </header>
            <p className = "subtext">Double click sub-items to bookmark</p>
            <p className = "subtext">You can only add sub-items from an item</p>
        </>
    )
}

Header.defaultProps = {
    title: "No Page Name"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

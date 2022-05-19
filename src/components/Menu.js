import MenuItem from "./MenuItem"

const Menu = (props) => {
    return (
        <>
            {props.menu.map((item) => (
                <MenuItem key = {item.id} item = {item} onItemEnter = {props.onItemEnter} onReturn = {props.onReturn} showAddSubItem = {props.showAddSubItem}>{item.text}</MenuItem>
            ))}
        </>
    )
}

export default Menu

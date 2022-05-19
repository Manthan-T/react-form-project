import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa"

import AddItems from "./AddItems"

let isInItem = false

const MenuItem = (props) => {
    const [subItems, setSubItems] = useState([
    ])

    const addSubItem = async (item) => {
        const res = await fetch(`http://localhost:5000/${props.item.id}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(item)
        })

        const data = await res.json()
        setSubItems([...subItems, data])
    }

    const deleteSubItem = async (id) => {
        await fetch(`http://localhost:5000/${props.item.id}/${id}`, {
            method: "DELETE"
        })

        setSubItems(subItems.filter((subItem) => subItem.id !== id))
    }

    const bookmark = async (id) => {
        const itemToToggle = await fetchSubItem(id)
        const updateTask = { ...itemToToggle, bookmarked: !itemToToggle.bookmarked }

        const res = await fetch(`http://localhost:5000/${props.item.id}/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateTask)
        })

        const data = await res.json()
        setSubItems(subItems.map((subItem) => subItem.id === id ? { ...subItem, bookmarked: data.bookmarked} : subItem))
    }

    useEffect(() => {
      const getSubItems = async () => {
        const itemsFromServer = await fetchSubItems()
        setSubItems(itemsFromServer)
      }
      getSubItems()
    }, [])//look
  
    const fetchSubItems = async () => {
      const res = await fetch(`http://localhost:5000/${props.item.id}`)
      const data = await res.json()
      
      return data;
    }
  
    const fetchSubItem = async (id) => {
      const res = await fetch(`http://localhost:5000/${props.item.id}/${id}`)
      const data = await res.json()
      
      return data;
    }

    return (
        <div className = "menu-item">
            {!isInItem ?
                <h3>{props.item.text} <FaArrowRight style = {{ color: "red", cursor: "pointer" }}
                    onClick = {() => {
                        props.onItemEnter(props.item.id)
                        isInItem = !isInItem
                    }
                }/></h3>
            :
                <>
                    <h3><FaArrowLeft style = {{ color: "red", cursor: "pointer" }}
                        onClick = {() => {
                            props.onReturn()
                            isInItem = !isInItem
                        }
                    }/>{props.item.text}</h3>
                    {props.showAddSubItem && <AddItems onAdd = {addSubItem}/>}
                    <div className = "container">
                        {subItems.map((subItem) => (
                            <div className = {`${subItem.bookmarked ? "bookmarked" : " "}`} onDoubleClick = {() => bookmark(subItem.id)} style = {{ cursor: "pointer" }}>
                                <h3>{subItem.title} <FaTimes style = {{ color: "red", cursor: "pointer" }} onClick = {() => deleteSubItem(subItem.id)}/></h3>
                                <h4>{subItem.description}</h4>
                                <h5>Date Made: {subItem.dateMade}</h5>
                                <h5>Code:
                                    <iframe title = "code" src = {subItem.code} frameBorder = "0" height = "200" width = "95%"></iframe>
                                </h5>
                                <h5>Languages used: {subItem.languages}</h5>
                                <br/>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default MenuItem

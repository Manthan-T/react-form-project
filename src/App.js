import { useState, useEffect } from "react"

import Header from "./components/Header"
import Menu from "./components/Menu"

function App() {
  const [showAddSubItem, setShowAddSubItem] = useState(false)
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setMenu(itemsFromServer)
    }
    getItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch("http://localhost:5000/items")
    const data = await res.json()
    
    return data;
  }

  const goToItem = (id) => {
    setMenu(menu.filter((item) => item.id === id))
  }

  const goToMenu = () => {
    setMenu(document.location.reload())
  }

  return (
    <div style = {{ backgroundColor: "purple" }} className = "container">
      <div>
        <Header title = "Home Page" onAddSubItem = {() => setShowAddSubItem(!showAddSubItem)} showAddSubItem = {showAddSubItem}/>
        {menu.length > 0 ? (<Menu menu = {menu} onItemEnter = {goToItem} onReturn = {goToMenu} showAddSubItem = {showAddSubItem}/>) : ("The server is not on")}
      </div>
    </div>
  );
}

export default App;

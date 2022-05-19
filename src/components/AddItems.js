import { useState } from "react"

const AddItems = ({ onAdd }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dateMade, setDateMade] = useState("")
    const [code, setCode] = useState("")
    const [languages, setLanguages] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert("Please add a title")
            return
        }
        
        if (!description) {
            alert("Please add a description")
            return
        }
        
        if (!dateMade) {
            alert("Please add the date made")
            return
        }
        
        if (!code) {
            alert("Please add some code")
            return
        }
        
        if (!languages) {
            alert("Please add the languages used")
            return
        }

        onAdd({ title, description, dateMade, code, languages })
        setTitle("")
        setDescription("")
        setDateMade("")
        setCode("")
        setLanguages("")
    }

    let illegalPattern = /[^a-z0-9A-Z]/

    const validate = (text) => {
        
    }

    return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className = "form-control">
                <label>Item</label>
                <input type = "text" placeholder = "Add Item" value = {title} onChange = {(e) => {
                    setTitle(e.target.value)
                    validate(e.target.value)
                }}/>
            </div>
            <div className = "form-control">
                <label>Description</label>
                <input type = "text" placeholder = "Add Description" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            </div>
            <div className = "form-control">
                <label>Date Made</label>
                <input type = "date" value = {dateMade} onChange = {(e) => setDateMade(e.target.value)}/>
            </div>
            <div className = "form-control">
                <label>Code</label>
                <input type = "file" value = {code} onChange = {(e) => setCode(e.target.value)}/>
            </div>
            <div className = "form-control">
                <label>Languages Used</label>
                <input type = "text" placeholder = "Add Languages" value = {languages} onChange = {(e) => setLanguages(e.target.value)}/>
            </div>

            <input type = "submit" value = "Save Item" className = "btn btn-block"/>
        </form>
    )
}

export default AddItems

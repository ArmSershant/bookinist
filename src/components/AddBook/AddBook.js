import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./AddBook.module.css"
import axios from "axios"
import { API_BASE_URL } from "../../constants"
const AddBook = () => {
  const navigate = useNavigate()
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    aboutAuthor: "",
    description: "",
    price: "",
    photo: "",
    authorPhoto: "",
  })
  const [error, setError] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    for (let key in book) {
      if (!book[key]) {
        return setError(`${key} is required`)
      }
      if (key === "price" || key === "pages") {
        if (!Number.isInteger(+book[key])) {
          return setError(`${key} should be a numeric `)
        }
      }
    }
    setError("")
    axios.post(API_BASE_URL, book).then((r) => {
      setBook({
        title: "",
        author: "",
        pages: "",
        aboutAuthor: "",
        description: "",
        price: "",
        photo: "",
        authorPhoto: "",
      })
      navigate("/books")
    })
  }

  return (
    <div>
      <h1>AddBook</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {Object.keys(book).map((elm, index) => {
          return (
            <FormGroup
              key={index}
              title={elm}
              value={book[elm]}
              onChange={(e) => setBook({ ...book, [elm]: e.target.value })}
            />
          )
        })}
        <button className={styles.button}>Save</button>
      </form>
    </div>
  )
}
export default AddBook

const FormGroup = ({ title, onChange, value }) => {
  return (
    <div className={styles.group}>
      <label>{title}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

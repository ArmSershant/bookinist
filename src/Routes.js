import { useRoutes } from "react-router-dom"
import AddBook from "./components/AddBook/AddBook"
import BookDetails from "./components/BookDetails/BookDetails"
import BookList from "./components/BookList/BookList"
import Home from "./components/Home/Home"
import NavBar from "./components/Navbar/Navbar"
export const MyRoutes = () => {
  const routing = useRoutes([
    {
      element: <Home />,
      path: "",
    },
    {
      path: "Books",
      element: <NavBar />,
      children: [
        { path: "", element: <BookList /> },
        { path: "add", element: <AddBook /> },
        { path: "item/:id", element: <BookDetails /> },
      ],
    },
    {
      path: "",
      element: <h1>Page not found!</h1>,
    },
  ])
  return routing
}

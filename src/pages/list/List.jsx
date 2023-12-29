import "./list.scss"
import { useEffect } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ title, columns, apiUrl, newLink,buttonTitle }) => {

  useEffect(() => {
    console.log(buttonTitle)
  }, []);
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title={title} columns={columns} apiUrl={apiUrl} newLink={newLink} buttonTitle={buttonTitle} />
      </div>
    </div>
  )
}

export default List
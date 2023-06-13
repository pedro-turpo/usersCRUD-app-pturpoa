import { useEffect, useState } from "react"
import Header from "./components/Header"
import UserForm from "./components/UserForm"
import axios from "axios"
import UserList from "./components/UserList"
const BASE_URL = 'https://users-crud.academlo.tech'

const DEFAULT_VALUES = {
  birthday: "",
  first_name: "",
  last_name: "",
  email: "",
  password:""
}


function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const changeShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url = BASE_URL + "/users/"

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((error) => console.log(error))
  }

  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/"

    axios
    .post(url, data)
      .then(() => {
        getAllUsers()
        resetUserForm(reset)
    })
    .catch((error) => console.log(error))
  }

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios
    .delete(url)
    .then(() => getAllUsers())
    .catch((error) => console.log(error))
  }

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios
    .patch(url, data)
      .then(() => {
        getAllUsers()
        resetUserForm(reset)
      })
    .catch((error) => console.log(error))
  }

  const resetUserForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <main className="font-[Lato] min-h-screen border border-b-amber-900">
      <Header changeShowModal ={ changeShowModal }  />
      <UserForm
        isShowModal={isShowModal}
        changeShowModal={changeShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetUserForm={resetUserForm}
      />

      <UserList users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} />
      
    </main>
  )
}

export default App

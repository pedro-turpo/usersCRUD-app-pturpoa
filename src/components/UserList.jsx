import User from "./User"

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate}) => {
    return (
        <section className="flex flex-wrap gap-4 max-w-[1200px] mx-auto">
            {
                users.map((user) => <User key={user.id} user={user} deleteUser={ deleteUser } changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} />)
            }
        </section>
    )
}
export default UserList
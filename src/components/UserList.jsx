import User from "./User"

const UserList = ({ users, deleteUser }) => {
    return (
        <section className="flex flex-wrap gap-4 max-w-[1024px] mx-auto">
            {
                users.map((user) => <User key={user.id} user={user} deleteUser={ deleteUser } />)
            }
        </section>
    )
}
export default UserList
const User = ({ user, deleteUser }) => {

    const handleClickDeleteUser = () => {
        deleteUser(user.id)
    }

    return (
        <article className="bg-gray-300/40 rounded-lg min-w-[260px] mx-auto py-2">
            {/* Name */}
            <h4 className="text-center font-bold text-[18px] mx-2 p-2 border-b-2">{user.first_name} {user.last_name}</h4>

            {/* Email */}
            <div className="mx-5 my-3">
                <h5 className="text-gray-400">Correo</h5>
                <span>{user.email}</span>
            </div>

            {/* Birthday */}
            <div className="mx-5 my-3">
                <h5 className="text-gray-400">Birthday</h5>
                <span><i className='bx bxs-gift text-orange-500'></i> {user.birthday || "No birthday"}</span>
            </div>

            <div className="flex justify-end gap-2 pr-3 pb-2">
                <button type="button" className="border h-10 w-10 rounded-md bg-secondary text-white text-xl" onClick={handleClickDeleteUser}><i className='bx bxs-trash'></i></button>

                <button type="button" className="border h-10 w-10 rounded-md bg-gray-400/70 text-white text-xl" ><i className='bx bx-edit'></i></button>
            </div>

        </article>
    )
}
export default User
const Header = ({ changeShowModal }) => {

    const handleClickOpenModal = () => {
        changeShowModal()
    }
    return (
        /*// TODO: Header Section */
        <section className="flex justify-between items-center p-6 h-[100px]">
            <h1 className="font-bold text-2xl">Users</h1>

            <button onClick={handleClickOpenModal} className="flex items-center gap-2 bg-primary p-2 text-white text-sm"><i className='bx bxs-user-plus'></i> <span>Create new user</span></button>


        </section>
  )
}
export default Header
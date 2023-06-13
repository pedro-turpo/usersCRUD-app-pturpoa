import { useEffect } from "react"
import { useForm } from "react-hook-form"

const UserForm = ({ isShowModal, createUser, isUserToUpdate, updateUser, resetUserForm }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        if (!data.birthday) {
            data.birthday = null
        }

        if (isUserToUpdate) {
            updateUser(data, reset)
        } else {
            createUser(data, reset)
        }
    }

    const handleClickCloseModal = () => {
        resetUserForm(reset)

    }

    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])


    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/30 flex ${isShowModal ? 'visible opacity-100 transition duration-300 ease-in-out' : 'invisible opacity-0 transition'}`}>

            {/* Section of the form for to create a new user */}
            <form onSubmit={handleSubmit(submit)}
                className="relative w-full m-2 rounded-2xl flex flex-col justify-center bg-customGray min-[480px]:max-w-[480px] min-[480px]:m-0 min-[480px]:rounded-none min-[480px]:rounded-r-2xl min-[480px]:gap-y-4">

                {/* Title */}
                <h2 className="text-center text-[24px] font-bold pb-8 text-white">{isUserToUpdate ? "Edit user" : "New user"}</h2>

                {/* Section of the first-name*/}
                <div className="flex flex-col py-1 px-10 text-[16px] gap-2 min-[480px]:px-[80px]">
                    <label htmlFor="first_name" className="font-bold text-white">First Name</label>

                    <input id="first_name" type="text" className="px-4 py-1 text-gray-400 rounded-[3px] border bg-transparent text-[14px]" placeholder="Enter your first name"
                        {...register('first_name')} />
                </div>

                {/* Section of the last-name*/}
                <div className="flex flex-col py-1 px-10 text-[16px] gap-2 min-[480px]:px-[80px]">
                    <label htmlFor="last_name" className="font-bold text-white">Last name</label>

                    <input id="last_name" type="text" className="px-4 py-1 text-gray-400 rounded-[3px] border bg-transparent text-[14px]" placeholder="Enter your last name"
                        {...register('last_name')} />
                </div>

                {/* Section of the email*/}
                <div className="flex flex-col py-1 px-10 text-[16px] gap-2 min-[480px]:px-[80px]">
                    <label htmlFor="email" className="font-bold text-white">Email</label>

                    <input id="email" type="email" className="px-4 py-1 text-gray-400 rounded-[3px] border bg-transparent text-[14px]" placeholder="Enter your Email"
                        {...register('email')} />
                </div>

                {/* Section of the password*/}
                <div className="flex flex-col py-1 px-10 text-[16px] gap-2 min-[480px]:px-[80px]">
                    <label htmlFor="password" className="font-bold text-white">Password</label>

                    <input id="password" type="password" className="px-4 py-1 text-gray-400 rounded-[3px] border bg-transparent text-[14px]" placeholder="Enter your password"
                        {...register('password')} />
                </div>

                {/* Section of the birthday*/}
                <div className="flex flex-col py-1 px-10 text-[16px] gap-2 min-[480px]:px-[80px]">
                    <label htmlFor="birthday" className="font-bold text-white">Birthday</label>

                    <input id="birthday" type="date" className="px-4 py-1 text-gray-400 rounded-[3px] border bg-transparent text-[14px]" placeholder="Enter your birthday"
                        {...register('birthday')} />
                </div>

                {/* Button to close the modal */}
                <button onClick={handleClickCloseModal} type="button" className="text-primary text-2xl absolute top-3 right-3"><i className='bx bx-x'></i></button>

                {/* Button to input */}
                <button className="mx-auto mt-12 w-[200px] p-[6px] bg rounded-md bg-primary text-sm text-white">{isUserToUpdate ? "Save Changes" : "Add new user"}</button>

            </form>

        </section>
    )
}
export default UserForm
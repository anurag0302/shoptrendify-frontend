import { NavLink } from 'react-router-dom'
type Props = {
    error?: string
}

const Error = (props: Props) => {
    return (
        <div className='p-4 m-4 flex flex-col items-center  bg-cuWhiteSmoke w-fit'>
            <h1 className='font-bold px-5 py-2'>Sorry for Inconvenience</h1>
            <p>
                {
                    props.error ? props.error : 'Error'
                }
            </p>
            <NavLink className='text-blue-600 p-5' to={'/'}>Go to Home Page...</NavLink>

        </div>
    )
}

export default Error
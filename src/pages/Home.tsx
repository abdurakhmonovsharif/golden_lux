import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex font-semibold w-full justify-center p-4 gap-x-4'>
            <Link to={"/sign-in"}>
                <h1 className='hover:text-blue-400 transition-all'>Sign in</h1>
            </Link>
            <Link to={"/sign-up"}>
                <h1 className='hover:text-blue-400 transition-all'>Sign up</h1>
            </Link>
        </div>
    )
}

export default Home
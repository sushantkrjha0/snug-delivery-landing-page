'use client'
import { useRouter } from 'next/navigation';

const Auth = () => {
    const router = useRouter();
    const authChecker = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Hardcoded credentials for demonstration purposes (NOT THE ACTUAL FEATURE JUST A DEMO TO SHOW CLIENT)
        const user = "xyz@gmail.com";
        const pwd = "12345678";
        const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
        const password = (document.querySelector('input[type="password"]') as HTMLInputElement).value;
        if (email === user && password === pwd) {
            // alert("Login Successful");
            console.log("Login Successful: ", { email, password });
            router.push('/admin');
        } else {
            alert("Invalid Credentials");
            console.log("Invalid Credentials: ", { email, password });
        }
    }

    return (
        <div className='width-full h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Admin Login</h2>
                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type='email'
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            placeholder='Enter your email'
                        />
                        <label className='block text-sm font-medium text-gray-700 mt-4'>Password</label>
                        <input
                            type='password'
                            className='mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            placeholder='Enter your password'
                        />
                        <button
                            onClick={authChecker}
                            type='button'
                            className='mt-6 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        >
                            Admin Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth
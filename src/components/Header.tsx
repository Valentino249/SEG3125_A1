import profile from '../assets/profile_photo_5.png'

function Header() {
    return (
        <div>
            <div className="flex min-h-screen justify-center bg-orange-50 p-5 pt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
                <div>
                    <h1 className="mb-2 text-3xl font-bold text-gray-900"><span className="text-red-400">Hi,</span> I'm Valentino Vinod</h1>
                    <p className="mb-6 text-gray-900">I'm a full stack software developer based in Ottawa, Ontario with strong technical skils and a passion for creating video games on the side. Explore my projects below, or check out my professional experience by clicking on one of these useful links.</p>
                    <div className="flex justify-center space-x-5">
                    
                    <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
                        See Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div>
                    <img src={profile} alt="Profile Photo" className="md:size-96 size-72 rounded-full object-cover" />
                </div>
                </div>
            </div>
        </div>

    )
}

export default Header
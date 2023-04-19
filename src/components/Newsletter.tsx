const Newsletter: React.FC = () => {
    return (
        <div className="w-full py-16 px-4 text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className='bg-[#d144ba] text-black font-medium rounded-md w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
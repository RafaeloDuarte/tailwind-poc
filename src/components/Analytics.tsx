import Laptop from '../assets/laptop.jpg'

const Analytics: React.FC = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati porro distinctio quod, ducimus esse, cum deserunt itaque soluta deleniti eveniet earum recusandae praesentium, illo ut tempora natus modi. Quibusdam.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
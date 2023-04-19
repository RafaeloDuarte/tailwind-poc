interface Props {
    Img: string;
    pricing: number;
    plan: string;
}

const Card: React.FC<Props> = ({ Img, pricing, plan }) => (
    <div className='w-full shadow-xl flex flex-col align-middle p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Img} alt="" />
        <h2 className='text-2xl font-bold text-center py-8'>{plan}</h2>
        <p className='font-center text-4xl font-bold m-auto'>${pricing}</p>
        <div className='text-center font-medium'>
            <p className='py-2 mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 mx-8'>1 Granted User</p>
            <p className='py-2 mx-8'>Send up to 2 GB</p>
        </div>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
    </div>
)

export default Card;
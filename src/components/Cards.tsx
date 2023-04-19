import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Trible from '../assets/triple.png'
import Card from './Card'

const Cards: React.FC = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <Card Img={Single} pricing={149} plan='Single User' />
                <Card Img={Double} pricing={199} plan='Partnership' />
                <Card Img={Trible} pricing={299} plan='Group Account' />
            </div>
        </div>
    );
}

export default Cards;
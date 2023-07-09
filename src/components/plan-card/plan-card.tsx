import {RiVipCrown2Line} from 'react-icons/ri'
import {AiOutlineHourglass, AiOutlineVideoCameraAdd} from 'react-icons/ai'
import { PlanCardProps } from './plan-card.props'

const PlanCard = ({product}: PlanCardProps) => {
    return (
        <div className="max-w-[350px] cursor-pointer bg-white/40 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-emerald-400">{product.name}</h3>
        <div className="relative">
          <img 
            className="w-full rounded-xl"
            src={product.images[0]}
            alt="colors"
            />
          <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{(product.default_price.unit_amount / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          <div className="absolute rounded-xl w-full h-full top-0 right-0 bottom-0 left-0 bg-black/25"></div>
        </div>
        <div className="border-[1px] border-white/20 mt-4"/>
        <button className="mt-4 w-full rounded-md py-3 cursor-pointer font-semibold bg-emerald-500 transform hover:bg-emerald-400 transition duration-500">BUY PLAN</button>
          {product.metadata.adv.split(', ').map((item, id)=> (
            <div key={id} className="my-4 flex flex-col space-y-4">
                <div className="flex space-x-2 items-center">
                  {id == 0 && <RiVipCrown2Line className="w-5 h-5"/>}
                  {id == 1 && <AiOutlineHourglass className="w-5 h-5"/>}
                  {id == 2 && <AiOutlineVideoCameraAdd className="w-5 h-5" />}
                  <p>{item}</p>
                </div>
            </div>
          ))}
      </div>
    )
}
export default PlanCard
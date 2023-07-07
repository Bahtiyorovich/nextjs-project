import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import {RiVipCrown2Line} from 'react-icons/ri'
import {AiOutlineHourglass, AiOutlineVideoCameraAdd} from 'react-icons/ai'


const SubscriptionPlan = () => {
  const { logOut } = useAuth();

  return (
    <div className="min-h-screen">
      <div className=" bg-black  border-gray-300/20 border-b-2 h-[10vh] flex justify-between items-center px-5 md:px-10">
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          width={56}
          height={56}
          className={"cursor-pointer object-contain"}
        />
        <div
          onClick={logOut}
          className="hover:underline text-[18px] cursor-pointer"
        >
          Logout
        </div>
      </div>
      <div className="flex flex-col text-center space-y-4 pt-5">
        <h1 className="text-2xl md:text-5xl text-shadow-sm">
          Flexible pricing for teams of any size{" "}
        </h1>
        <p className="text-[16px] md:text-xl text-shadow-sm">
          Relaxing with watching your favourite movies and tv.
        </p>
      </div>
      <div className="flex items-center justify-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {/* Card Plan */}
          <div className="max-w-[350px] cursor-pointer bg-white/40 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-emerald-400">Starter</h3>
            <div className="relative">
              <img 
                className="w-full rounded-xl"
                src="https://i.pinimg.com/564x/8f/04/1b/8f041b867886d44c197bb5c5eb5b4e68.jpg"
                alt="colors"
                />
              <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$10</p>
              <div className="absolute rounded-xl w-full h-full top-0 right-0 bottom-0 left-0 bg-black/25"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4"/>
            <button className="mt-4 w-full rounded-md py-3 cursor-pointer font-semibold bg-emerald-500 transform hover:bg-emerald-400 transition duration-500">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5"/>
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5"/>
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5"/>
                <p>HD Format</p>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] cursor-pointer bg-white/40 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-emerald-400">Starter</h3>
            <div className="relative">
              <img 
                className="w-full rounded-xl"
                src="https://i.pinimg.com/564x/63/a9/ac/63a9acbe9e0cb033352b85ab69733780.jpg"
                alt="colors"
                />
              <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$10</p>
              <div className="absolute rounded-xl w-full h-full top-0 right-0 bottom-0 left-0 bg-black/25"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4"/>
            <button className="mt-4 w-full rounded-md py-3 cursor-pointer font-semibold bg-emerald-500 transform hover:bg-emerald-400 transition duration-500">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5"/>
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5"/>
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5"/>
                <p>HD Format</p>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] cursor-pointer bg-white/40 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-emerald-400">Starter</h3>
            <div className="relative">
              <img 
                className="w-full rounded-xl"
                src="https://i.pinimg.com/564x/b2/02/6f/b2026f096a4491634334acfe4e28cf4d.jpg"
                alt="colors"
                />
              <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$10</p>
              <div className="absolute rounded-xl w-full h-full top-0 right-0 bottom-0 left-0 bg-black/25"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4"/>
            <button className="mt-4 w-full rounded-md py-3 cursor-pointer font-semibold bg-emerald-500 transform hover:bg-emerald-400 transition duration-500">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5"/>
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5"/>
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5"/>
                <p>HD Format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;

import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { SubscriptionPlanProps } from "./subscription-plan.props";
import {PlanCard} from "../";



const SubscriptionPlan = ({products_list}: SubscriptionPlanProps) => {
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
          {products_list.map(product => <PlanCard key={product.id} product={product}/>).reverse()}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;

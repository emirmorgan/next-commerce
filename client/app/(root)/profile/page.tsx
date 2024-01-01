//Components
import UserInfo from "@/components/Home/Profile/UserInfo";
import UserAddress from "@/components/Home/Profile/UserAddress";
import UserOrders from "@/components/Home/Profile/UserOrders";
import UserOptions from "@/components/Home/Profile/UserOptions";

export default function ProfilePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 my-5 md:flex-row">
      <div className="flex flex-col w-full h-max rounded shadow lg:w-1/3">
        <UserInfo />
        <UserAddress />
        <UserOptions />
      </div>
      <UserOrders />
    </div>
  );
}

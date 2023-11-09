import { AiOutlineClose } from "react-icons/ai";

import CreateProductTab from "./CreateProductTab";

type TabProps = {
  type: string;
  isVisible: boolean;
  handleClose: () => void;
};

export default function ProductManageTab(props: TabProps) {
  const tabType = {
    create: {
      title: "Create Product",
      child: <CreateProductTab />,
    },
  }[props.type];

  return (
    <div
      className={
        "border flex flex-col w-full mt-3 p-3" +
        (props.isVisible ? " block" : " hidden")
      }
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{tabType?.title}</h1>
        <div
          onClick={props.handleClose}
          className="flex items-center justify-center bg-black text-white w-6 h-6 cursor-pointer"
        >
          <AiOutlineClose size={22} />
        </div>
      </div>
      <div className="flex flex-col mt-3">{tabType?.child}</div>
    </div>
  );
}

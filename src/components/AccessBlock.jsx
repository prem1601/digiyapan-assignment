import { RxCross2 } from "react-icons/rx";

const AccessBlock = () => {
  return (
    <div className="bg-blue-700 p-2 flex justify-center items-center gap-6 text-white">
      <p>
        You have 1 action for free today.{" "}
        <span className="font-medium underline cursor-pointer">Subscribe</span>{" "}
        for unlimited access.
      </p>
      <RxCross2 className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default AccessBlock;

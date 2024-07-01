import Spinner from "../assets/spinner.gif";

const LoadingComponent = () => {
  return (
    <div className="basis-4/5 md:basis-1/2 m-auto text-center">
      <h2 className="text-2xl font-bold">
        Converting data! Please wait...
      </h2>
      <img src={Spinner} alt="Spinner" className="w-36 mx-auto" />
    </div>
  );
};

export default LoadingComponent;

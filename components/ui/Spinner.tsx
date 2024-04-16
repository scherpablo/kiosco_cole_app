import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <ClipLoader color="#fbbf24" loading={true} size={80} />
        <p className="font-bold text-2xl mt-5">cargando...</p>
      </div>
    </>
  );
};

export default Spinner;

import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-4/5">
      <RotatingLines
        width="50px"
        height="50px"
        strokeColor="#1f2937"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;

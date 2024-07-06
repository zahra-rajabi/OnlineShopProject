import { RotatingLines } from "react-loader-spinner";

function Loader({ notFound }) {
  return (
    <div className="w-4/5">
      <RotatingLines
        width="60px"
        height="60px"
        strokeColor="#1f2937"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;

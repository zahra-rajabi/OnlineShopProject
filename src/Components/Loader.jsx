import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-screen w-full flexCenter">
      <RotatingLines
        width="80px"
        height="80px"
        strokeColor="#ef4444"
        strokeWidth="3"
      />
    </div>
  );
}

export default Loader;

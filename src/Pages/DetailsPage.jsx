import React from "react";
import { useSearchParams } from "react-router-dom";

function DetailsPage() {
  const [param, setSearchParams] = useSearchParams();
  console.log(param);
  return <div>DetailsPage</div>;
}

export default DetailsPage;

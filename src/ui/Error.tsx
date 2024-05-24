import { useNavigate, useRouteError } from "react-router-dom";

type RouteError = {
  status: number;
  statusText?: string;
  message?: string;
};

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.statusText || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;

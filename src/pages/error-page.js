import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-center text-3xl font-black">{error.status}</h1>
      <p className="text-center text-2xl font-normal">Not Found</p>
      <p>
        <i className="block text-md text-gray-600 text-center">Not Found</i>
      </p>
    </div>
  );
}
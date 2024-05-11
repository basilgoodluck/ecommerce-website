import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-5 justify-center items-center py-10">
      <h1 className="text-center text-3xl font-black">{error.status}</h1>
      <p className="text-center text-5xl font-black">404</p>
      <p>
        <i className="block text-md text-gray-600 text-center">Not Found</i>
      </p>
      <p className="bg-pink-600 py-3 px-5 m-auto text-white text-xl rounded-2xl font-semibold" style={{whiteSpace: 'nowrap'}}><Link to="/">Go back to home page</Link></p>
    </div>
  );
}
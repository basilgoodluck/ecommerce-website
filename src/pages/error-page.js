import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-10 justify-center items-center py-24">
      <h1 className="text-center text-[4rem] font-medium">404 Not Found</h1>
      <p>
        <i className="block text-md text-gray-600 text-center">You visited page not found. You may go to home Page.</i>
      </p>
      <p className="bg-red-600 py-3 px-5 m-auto text-white text-xl rounded-md" style={{whiteSpace: 'nowrap'}}><Link to="/">Back to Home Page</Link></p>
    </div>
  );
}
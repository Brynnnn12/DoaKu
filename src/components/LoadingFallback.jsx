import { MoonLoader } from "react-spinners";

export default function LoadingFallback() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader />
    </div>
  );
}

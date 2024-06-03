import Image from "next/image";
import { Steeper } from "./components/stepper/Steeper";

export default function Home() {
  return (
    <div className=" bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Steeper />
    </div>
  );
}

import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full  flex flex-col background relative items-center">

      <h1 className=" w-11/12 text-center mt-[40px] px-10 py-2  text-4xl bg-white rounded-lg font-bold">Random Gifs</h1>
      <div className="w-full mt-[30px] gap-y-10 flex flex-col items-center">
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}

import TechnologyList from "./Tech";

function Skills() {
  return (
    <div className="max-w-screen-lg  mx-auto flex flex-col justify-center min-h-screen">
      <div className="pb-8 text-center">
        <h2 className="text-5xl pt-1 text-zinc-100 font-bold">Skills</h2>
      </div>

      <div className="my-12">
        <TechnologyList />
      </div>
    </div>
  );
}
export default Skills;

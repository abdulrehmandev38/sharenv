import { useRef } from "react";

const VariablesForm = () => {
  const projectInptRef = useRef();
  const passwordInptRef = useRef();
  const variablesInptRef = useRef();

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4 mb-4">
      <h1 className="font-bold mb-4 text-xl underline underline-offset-8">
        Create New Envirement Variables Group
      </h1>
      <label className="font-bold" htmlFor="project">
        Project Name
      </label>
      <input
        type="text"
        className="px-2 py-1 rounded-md text-black"
        name="project"
        ref={projectInptRef}
      />
      <label className="font-bold" htmlFor="password">
        Password
      </label>
      <input
        type="text"
        className="px-2 py-1 rounded-md text-black"
        name="password"
        ref={passwordInptRef}
      />
      <label className="font-bold" htmlFor="variables">
        Envirement Variables
      </label>
      <textarea
        className="w-full text-black rounded-md h-60 px-4 py-2"
        type="text"
        placeholder="ENV=PROD"
        name="variables"
        ref={variablesInptRef}
      />
      <button
        onClick={(e) => submit()}
        className="mt-4 px-8 py-2 border rounded-md font-bold text-lg"
      >
        Save
      </button>
    </form>
  );
};
export default VariablesForm;

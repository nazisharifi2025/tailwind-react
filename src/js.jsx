export default function Js(propes) {
  const { Mess } = propes;
  return (
    <>
      <div className="h-12 w-12 bg-gray-400 text-white flex justify-center items-center text-xl font-bold">
        <h1>
          Hi my name is {Mess} my LastName is {propes.LastName} and Iam{" "}
          {propes.age} years old.
        </h1>
      </div>
    </>
  );
}

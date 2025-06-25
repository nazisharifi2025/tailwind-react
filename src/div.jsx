<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>;
import "./App.css";
function Card() {
  return (
    <>
      <div className=" w-[40%]  text-center p-4 flex  justify-right float-right items-end">
        <div className="flex space-x-8 w-full  justify-center items-center float-right">
          <h3 className=" text-xl font-bold">Gmail</h3>
          <h2 className=" text-xl font-bold">Images</h2>
          <span class="material-symbols-outlined">apps</span>
          <img
            src="../img/WhatsApp Image 2025-04-29 at 08.24.50_65cf2dc8.jpg"
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
export default Card;

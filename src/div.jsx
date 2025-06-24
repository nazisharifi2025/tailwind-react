import "./App.css";
function Card() {
  return (
    <>
      <div className="h-20 w-full text-center p-4 flex  justify-right float-right items-end">
        <div className="flex space-x-4 w-full justify-right float-right">
          <h3 className=" text-xl font-bold">Gmail</h3>
          <h2 className=" text-xl font-bold">Images</h2>
          <span className="text-xl">🚹</span>
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

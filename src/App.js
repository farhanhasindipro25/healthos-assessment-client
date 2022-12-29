import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import "typeface-montserrat";

function App() {
  return (
    <div style={{ fontFamily: "montserrat" }} className="bg-slate-50">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;

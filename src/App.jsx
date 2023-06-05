import JobList from "./component/JobList";
import { useState } from "react";
import MyContextProvider from "./data/Mycontext";
import { Outlet } from "react-router-dom";

function App() {

  // For menu
  const [showMenu, setshowMenu] = useState(false);

  return (
    <MyContextProvider >

      {/* Header */}
      <div className="flex align-middle justify-between md:justify-center fixed left-0 top-0 z-[999] w-[100%] rounded-2xl bg-yellow-50 text-zinc-500 shadow-lg px-5 py-3 text-center text-3xl font-bold">
        <button className="inline-block md:hidden" onClick={() => setshowMenu(!showMenu)}>❁</button>
        <div>Job Manager</div>
      </div>

      {/* Components */}
      <div className="md:p-10 pt-[50px] md:pt-[90px] pl-[0px] md:pl-[250px] overflow-x-hidden">
        {/* <div className="text-center text-5xl font-bold shadow-5xl z-[0] rounded-full opacity-80 w-[100%] h-[100%] bg-gradient-to-br from-yellow-300 to-green-400 fixed top-[50%] left-[50%] translate-x-[-50%] blur-lg translate-y-[-50%] rotate"></div>*/}
        <div className={showMenu ? `fixed md:left-7 left-1 top-[70px] md:top-[100px] inline-block z-[999] p-2 rounded-lg backdrop-blur-lg` : `fixed md:left-7 left-1 top-[70px] md:top-[100px] hidden md:inline-block z-[999] p-2 rounded-lg backdrop-blur-lg`}>
          <JobList setshowMenu={setshowMenu} />
        </div>

        {/* using Outlet here */}
        <div className=''>
          <Outlet />
        </div>
      </div>


    </MyContextProvider>
  );
}

export default App;

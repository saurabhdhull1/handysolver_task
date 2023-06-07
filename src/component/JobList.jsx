import { useContext } from "react";
import { Context } from "../data/Mycontext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function JobList({ setshowMenu }) {

  // useContext
  const { jobList, changeColor, setchangeColor } = useContext(Context)

  // useNavigate
  const navigate = useNavigate()

  return (
    <>
      <div className="w-[80vw] md:w-auto rounded-2xl shadow-lg border-slate p-5 backdrop-blur bg-gradient-to-br from-green-200 to-yellow-200 mb-5">
        <button
          className="rounded-2xl bg-[#ffd814] shadow px-5 py-2 cursor-pointer w-[100%]"
          onClick={() => {
            setchangeColor(null);
            navigate("/")
          }}>
          ➕ New Job
        </button>
      </div>
      <div className="rounded-2xl shadow-lg border-slate p-5 backdrop-blur bg-gradient-to-br from-green-200 to-yellow-200">
        {jobList?.length == 0 ? <div className="text-center">No jobs posted</div> : jobList?.map((item, index) => {
          return (
            // here i am using index as key but it is not a recommended
            <div
              key={index + "jobList"}
              className="rounded-2xl cursor-pointer px-5 py-2 my-2 hover:bg-[#ffd814] bg-yellow-50 shadow-sm hover:shadow-lg text-center"
              style={changeColor == index ? { background: "#ffd814" } : { background: "lightyellow" }}
              onClick={() => {
                setchangeColor(index);
                navigate("/jobs", { state: { index } });
                setshowMenu(false)
              }}
            >
              <button className="w-100" >{"Job Post " + (index + 1)}</button>
            </div>
          );
        })}
      </div >
    </>
  );
}
JobList.propTypes = {
  setshowMenu: PropTypes.func.isRequired,

};

export default JobList;

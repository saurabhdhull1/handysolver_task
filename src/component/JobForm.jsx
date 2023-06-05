import { useContext, useState } from "react";
import { Context } from "../data/Mycontext";

function JobForm() {

  // useContext
  const { initialFormData, formData, setFormData, setJobList } = useContext(Context)

  // Destructuring
  const {
    jobTitle,
    introduction,
    rolesResponsibility,
    experienceMin,
    experienceMax,
    qualification,
    salaryMin,
    salaryMax,
    company,
    jobLocation,
    employmentType,
    jobType,

    jobTitlecheck,
    introductioncheck,
    rolesResponsibilitycheck,
    experiencecheck,
    qualificationcheck,
    salarycheck,
    companycheck,
    jobLocationcheck,
    employmentTypecheck,
    jobTypecheck,
  } = formData;

  // Input change function
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  // form error state
  const [formError, setFormError] = useState(false);

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      jobTitle == "" && jobTitlecheck ||
      introduction == "" && introductioncheck ||
      rolesResponsibility == "" && rolesResponsibilitycheck ||
      experienceMin == "" & experiencecheck ||
      experienceMax == "" && experiencecheck ||
      qualification == "" && qualificationcheck ||
      salaryMin == "" && salarycheck ||
      salaryMax == "" && salarycheck ||
      company == "" && companycheck ||
      jobLocation == "" && jobLocationcheck ||
      employmentType == "" && employmentTypecheck ||
      jobType == "" && jobTypecheck
    ) {
      setFormError(true)
    } else {
      setFormError(false)
      setJobList((prevJobList) => {
        return [...prevJobList, formData]
      }
      )
      setFormData(initialFormData)
    }

  };

  return (
    <div

      className="rounded-2xl shadow border-slate p-5 backdrop-blurs"
      style={formError ? { background: "rgb(255, 215, 215)" } : { background: "hsl(50, 100%, 91%)" }}
    >
      <div className="z-99 rounded-2xl bg-white text-zinc-500 shadow-lg px-5 py-3 mb-3 text-center text-3xl font-bold cursor-pointer">
        {'Job form'}
      </div>
      <div>
        <div>
          <div className="flex align-middle justify-between gap-3">
            <div className="flex-1">
              <label className="text-zinc-600">
                <input
                  className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
                  type="checkbox"
                  name="jobTitlecheck"
                  checked={jobTitlecheck}
                  onChange={handleInputChange}
                />
                <span>Job</span>
                <input
                  className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
                  type="text"
                  name="jobTitle"
                  onChange={handleInputChange}
                  placeholder="Enter Job title"
                />
              </label>
            </div>


          </div>
        </div>
        <div>
          <label className="text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="introductioncheck"
              checked={introductioncheck}
              onChange={handleInputChange}
            />
            <span>Introduction:</span>

            <textarea
              className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3 max-h-[100px] min-h-[100px]"
              name="introduction"
              onChange={handleInputChange}
              placeholder="Tell something about yourself..."
            />
          </label>
        </div>
        <div>
          <label className="text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="rolesResponsibilitycheck"
              checked={rolesResponsibilitycheck}
              onChange={handleInputChange}
            />
            <span>Roles &amp; Responsibility:</span>

            <textarea
              className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3 max-h-[100px] min-h-[100px]"
              name="rolesResponsibility"
              onChange={handleInputChange}
              placeholder=""
            />
          </label>
        </div>
        <div className="flex align-middle justify-between gap-2 flex-col md:flex-row">
          <div className="whitespace-no-wrap md:w-[60%] pt-5 text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="experiencecheck"
              checked={experiencecheck}
              onChange={handleInputChange}
            />
            <span className="whitespace-no-wrap">Experience Range (yr):</span>

          </div>
          <div className="flex gap-2">
            <div>
              <label className="text-zinc-600">
                <input
                  className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
                  type="number"
                  name="experienceMin"
                  onChange={handleInputChange}
                  placeholder="Min:"
                />
              </label>
            </div>
            <div>
              <label className="text-zinc-600">
                <input
                  className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
                  type="number"
                  name="experienceMax"
                  onChange={handleInputChange}
                  placeholder="Max:"
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="qualificationcheck"
              checked={qualificationcheck}
              onChange={handleInputChange}
            />
            <span>Qualification:</span>

            <input
              className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
              type="text"
              name="qualification"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex align-middle justify-start gap-2 flex-col md:flex-row">
          <div className="whitespace-no-wrap w-[50%] pt-5 text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="salarycheck"
              checked={salarycheck}
              onChange={handleInputChange}
            />
            <span>Salary Range:</span>

          </div>
          <div className="flex gap-2">
            <div>
              <label className="text-zinc-600">
                <input
                  className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
                  type="number"
                  name="salaryMin"
                  onChange={handleInputChange}
                  placeholder="Min:"
                />
              </label>
            </div>
            <div>
              <label className="text-zinc-600">
                <input
                  className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
                  type="number"
                  name="salaryMax"
                  onChange={handleInputChange}
                  placeholder="Max:"
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <label className="text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="companycheck"
              checked={companycheck}
              onChange={handleInputChange}
            />
            <span> Company:</span>

            <input
              className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
              type="text"
              name="company"
              onChange={handleInputChange}
              placeholder="Enter your company name"
            />
          </label>
        </div>
        <div>
          <label className="text-zinc-600">
            <input
              className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
              type="checkbox"
              name="jobLocationcheck"
              checked={jobLocationcheck}
              onChange={handleInputChange}
            />
            <span> Job Location:</span>

            <input
              className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-5 py-3"
              type="text"
              name="jobLocation"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex align-middle justify-between flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="text-zinc-600">
              <input
                className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
                type="checkbox"
                name="employmentTypecheck"
                checked={employmentTypecheck}
                onChange={handleInputChange}
              />
              <span> Employment Type:</span>

              <select
                name="employmentType"
                onChange={handleInputChange}
                className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-2 py-3"
              >
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </label>
          </div>
          <div className="flex-1">
            <label className="text-zinc-600">
              <input
                className="mx-2 cursor-pointer rounded-full h-[15px] w-[15px]"
                type="checkbox"
                name="jobTypecheck"
                checked={jobTypecheck}
                onChange={handleInputChange}
              />
              <span>Job type:</span>

              <select
                name="jobType"
                onChange={handleInputChange}
                className="shadow-sm bg-white w-[100%] my-2 rounded-3xl px-2 py-3"
              >
                <option value="">Select</option>
                <option value="Is Remote">Is Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="5 Days working">5 Days working</option>
                <option value="6 Days workin">6 Days working</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      {formError && <div className="rounded-2xl bg-red-300 p-2 my-1">Please fill the checked field</div>}
      <button
        onClick={handleSubmit}
        className="rounded-2xl bg-[#ffd814] hover:shadow-lg shadow px-10 py-2 cursor-pointer my-3 w-[100%] md:w-auto"
      >
        Post your job
      </button>
    </div >
  );
}

export default JobForm;

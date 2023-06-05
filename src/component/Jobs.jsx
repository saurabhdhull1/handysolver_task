import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteIcon, wordbreak } from '../data/Constant';
import duplicateImg from "../assets/duplicate.png"
import { Context } from '../data/Mycontext';

function Jobs() {

    // useLocation
    const location = useLocation();

    // useNavigate
    const navigate = useNavigate()
    // console.log(location)

    // useContext
    const { jobList, setJobList, setchangeColor } = useContext(Context)

    // destructuring data
    const index = location.state.index
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
    } = location.state.item

    const handleDelete = () => {
        const updatedJobList = jobList.filter((_, i) => i !== index);
        setJobList(updatedJobList);
        setchangeColor(null)
        navigate("/")
    }
    const handleDuplicate = () => {
        const duplicatedJob = jobList[index];
        const updatedJobList = [...jobList, duplicatedJob];
        console.log(updatedJobList)
        setJobList(updatedJobList)
    };

    return (
        <div className="rounded-2xl shadow-lg border-slate p-5 backdrop-blur bg-green-50 w-[100%] lg:w-[50%]">
            <div className="flex justify-between align-middle z-99 rounded-2xl bg-white text-zinc-500 shadow-lg px-5 py-3 mb-3 text-center text-3xl font-bold cursor-pointer">
                <div className="py-[10px]">Job Post {index + 1}</div>
                <div className="text-zinc-600 flex gap-2 justify-between">
                    <div className="shadow-lg hover:shadow bg-green-400 my-2 rounded-full p-2 flex-1 text-center font-bold" onClick={handleDuplicate}>
                        <img src={duplicateImg} alt="" className="w-[30px] h-[30px]" />
                    </div>
                    <div className="shadow-lg hover:shadow bg-red-400 my-2 rounded-full p-2 flex-1 text-center font-bold whitespace-nowrap"
                        onClick={handleDelete}
                    >
                        {deleteIcon}
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <div className="flex align-middle justify-between gap-3 flex-col md:flex-row">
                        {jobTitlecheck && <div className="max-w-[50%]">
                            <div className="text-zinc-600 p-5">
                                <div className="text-2xl font-bold capitalize" style={wordbreak}>{jobTitle == "" ? 'Job Title' : jobTitle}</div>
                            </div>
                        </div>}

                        <div className="flex-1 md:max-w-[50%]">
                            <div className="text-zinc-600 flex gap-2 justify-between">
                                {employmentTypecheck && <div className="shadow-sm bg-[#ffd814] my-2 rounded-3xl p-3 flex-1 text-center font-bold">
                                    {employmentType ? employmentType : "EmployType"}
                                </div>}
                                {jobTypecheck && <div className="shadow-sm bg-[#ffd814] my-2 rounded-3xl p-3 flex-1 text-center font-bold whitespace-nowrap">
                                    {jobType ? jobType : "JobType"}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {introductioncheck && <div>
                    <div className="text-zinc-600">
                        <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                            Introduction:
                        </span>

                        <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                            {introduction == "" ? <Shimmer /> : introduction}
                        </div>
                    </div>
                </div>}

                {rolesResponsibilitycheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Roles &amp; Responsibility:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {rolesResponsibility == "" ? <Shimmer /> : rolesResponsibility}
                    </div>
                </div>}


                {experiencecheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Preferred Experience:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {experienceMin == "" || experienceMax == '' ? <ShimmerSingle /> : experienceMin + " to " + experienceMax + " yrs"}
                    </div>
                </div>}

                {qualificationcheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Qualification:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {qualification == "" ? <Shimmer /> : qualification}
                    </div>
                </div>}

                {salarycheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Salary range:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {salaryMin == "" || salaryMax == '' ? <ShimmerSingle /> : "Between " + salaryMin + " to " + salaryMax + " lpa"}
                    </div>
                </div>}

                {companycheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Company:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {company == "" ? <Shimmer /> : company}
                    </div>
                </div>}

                {jobLocationcheck && <div className="text-zinc-600">
                    <span className="shadow-sm bg-white w-[100%] mt-2 mb-1 rounded-3xl px-3 py-1">
                        Job Location:
                    </span>

                    <div className="py-2 px-2 mb-4 capitalize min-h-[50px]" style={wordbreak}>
                        {jobLocation == "" ? <Shimmer /> : jobLocation}
                    </div>
                </div>}
            </div>
        </div>
    )
}

const Shimmer = () => {
    return (
        <>
            <div className="w-[100%] h-[10px] bg-gray-300 shadow rounded my-2 animate-fade-in-out"></div>
            <div className="w-[70%] h-[10px] bg-gray-300 shadow rounded my-2 animate-fade-in-out"></div>
        </>
    );
};
const ShimmerSingle = () => {
    return (
        <div className="w-[50%] h-[10px] bg-gray-300 shadow rounded my-2 animate-fade-in-out"></div>
    );
};

export default Jobs
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext()

const MyContextProvider = ({ children }) => {
    // Form data

    const initialFormData = {
        jobTitle: "",
        introduction: "",
        rolesResponsibility: "",
        experienceMin: "",
        experienceMax: "",
        qualification: "",
        salaryMin: "",
        salaryMax: "",
        company: "",
        jobLocation: "",
        employmentType: "",
        jobType: "",
        jobTitlecheck: true,
        active: true,
        introductioncheck: true,
        rolesResponsibilitycheck: true,
        experiencecheck: true,
        qualificationcheck: true,
        salarycheck: true,
        companycheck: true,
        jobLocationcheck: true,
        employmentTypecheck: true,
        jobTypecheck: true,
    }

    const [formData, setFormData] = useState(initialFormData);
    // Job List component
    const [jobList, setJobList] = useState([]);

    // jobList Color changeColor
    const [changeColor, setchangeColor] = useState(null);
    if (!children) {
        console.log("MyContextProvider must have children prop.");
    }
    return (
        <Context.Provider value={{ initialFormData, formData, setFormData, jobList, setJobList, changeColor, setchangeColor }}>
            {children}
        </Context.Provider>
    );
};

MyContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default MyContextProvider

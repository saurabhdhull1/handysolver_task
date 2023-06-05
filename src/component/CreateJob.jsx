import JobForm from './JobForm';
import JobPreview from './JobPreview';

function CreateJob() {
    return (
        <div className="flex align-middle gap-4 bg-white flex-col md:flex-row">
            <div className="md:max-w-[50%]">
                <JobForm />
            </div>
            <div className="md:w-[50%]">
                <JobPreview />
            </div>
        </div>
    )
}

export default CreateJob
import InputFrom from "../inputForm";
import Input from "../input";
import { useContext, useState } from "react";
import { ResumeContext } from "../../context/resumeContext";
import Chip from "../chip";

const EduSection = () => {
  const { data, setData } = useContext(ResumeContext);
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const [val, setVal] = useState({
    id: generateId(),
    degree: "",
    institution: "",
    year: "",
    grade: "",
  });

  const handleEduChange = (e, key) => {
    setVal({ ...val, [key]: e.target.value });
  };

  const onEduSave = (e) => {
    e.preventDefault();
    setData({ ...data, education: [...data.education, val] });
    setVal({
      id: generateId(),
      degree: "",
      institution: "",
      year: "",
      grade: "",
    });
  };

  const removeEducation = (id) => {
    const filtered = data.education.filter((ele) => ele.id !== id);
    setData({ ...data, education: filtered });
  };

  return (
    <InputFrom title="Education" onSubmit={onEduSave}>
      <div className="flex flex-wrap">
        {data.education.length > 0 &&
          data.education.map((ele) => (
            <div key={ele.id}>
              <Chip name={ele?.degree} id={ele.id} remove={removeEducation} />
            </div>
          ))}
      </div>
      <Input
        id="edu"
        value={val.degree}
        onChange={(e) => handleEduChange(e, "degree")}
        placeholder="Name of the Degree"
        label="Degree"
      />
      <Input
        id="edu"
        value={val.institution}
        onChange={(e) => handleEduChange(e, "institution")}
        placeholder="Name of the Institution"
        label="Institution"
      />
      <Input
        id="edu"
        value={val.year}
        onChange={(e) => handleEduChange(e, "year")}
        placeholder="Year of Completion"
        label="Year of Completion"
      />
      <Input
        id="edu"
        value={val.grade}
        onChange={(e) => handleEduChange(e, "grade")}
        placeholder="Enter your grade"
        label="Grade"
      />
    </InputFrom>
  );
};

export default EduSection;

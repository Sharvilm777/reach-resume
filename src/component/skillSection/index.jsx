import { useContext, useState } from "react";
import { SearchSelect } from "search-select-react";
import Chip from "../chip";
import { ResumeContext } from "../../context/resumeContext";
import InputFrom from "../inputForm";

const skills = [
  {
    id: 1,
    name: "Java",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "Python",
  },
  {
    id: 4,
    name: "SQL",
  },
  {
    id: 5,
    name: "JavaScript",
  },
  {
    id: 6,
    name: "Git",
  },
  {
    id: 7,
    name: "Docker",
  },
  {
    id: 8,
    name: "Kubernetes",
  },
  {
    id: 9,
    name: "AWS",
  },
  {
    id: 10,
    name: "Azure",
  },
  {
    id: 11,
    name: "C++",
  },
  {
    id: 12,
    name: "C Sharp",
  },
  {
    id: 13,
    name: "Swift",
  },
  {
    id: 14,
    name: "Kotlin",
  },
  {
    id: 15,
    name: "HTML",
  },
  {
    id: 16,
    name: "CSS",
  },
  {
    id: 17,
    name: "UX Design",
  },
  {
    id: 18,
    name: "UI Design",
  },
  {
    id: 19,
    name: "Project Management",
  },
  {
    id: 20,
    name: "Communication",
  },
  {
    id: 21,
    name: "Problem Solving",
  },
  {
    id: 22,
    name: "Critical Thinking",
  },
  {
    id: 23,
    name: "Creativity",
  },
  {
    id: 24,
    name: "Teamwork",
  },
  {
    id: 25,
    name: "Leadership",
  },
];
const searchBy = ["name"];

const display = ["name"];

//font-semibold text-gray-400
const searchSelect = {
  wrapperClass: `
   
    relative
    `,
  labelClass: `
    font-semibold text-gray-400
    `,
  inputClass: `
    flex border p-2 rounded bg-slate-100 outline-blue-200
    `,
  resulContainer: `
    absolute
    shadow-lg
    rounded
    bottom-[-1]
    left-0
    min-w-[200px]
    bg-white
    overflow-hidden
    `,
  resultItemClass: `
    p-2 font-semibold cursor-pointer hover:bg-blue-100
    `,
};
const SkillSection = () => {
  const [selected, setSelected] = useState([]);
  const { data, setData } = useContext(ResumeContext);
  const [change, setChange] = useState("");
  const onSelectAction = (sel) => {
    console.log(sel);
    setSelected([...selected, sel]);
  };
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const removeSkill = (id) => {
    const filter = selected.filter((ele) => ele.id !== id);
    setSelected(filter);
  };

  const onNoResultAction = () => {
    const newSkill = {
      id: generateId(),
      name: change,
    };
    console.log(newSkill);
    setSelected([...selected, newSkill]);
  };

  const handleSkillChange = (e) => {
    setChange(e.target.value);
  };

  const onSkillSave = (e) => {
    e.preventDefault();
    setData({ ...data, skills: selected });

    setSelected([]);
    console.log(data);
  };
  return (
    <InputFrom title={"Skills"} onSubmit={onSkillSave}>
      <div className="flex gap-4 items-center">
        <SearchSelect
          wrapperClass={searchSelect.wrapperClass}
          labelClass={searchSelect.labelClass}
          inputClass={searchSelect.inputClass}
          resultContainerClass={searchSelect.resulContainer}
          resultItemClass={searchSelect.resultItemClass}
          data={skills}
          search={searchBy}
          display={display}
          select={onSelectAction}
          noResults={onNoResultAction}
          onChange={handleSkillChange}
          noResultsText={`Add ${change}`}
          placeholder="Search Skills"
          label="Select Skills"
          name={"search"}
          //helperText="Select skills"
        />
        <div className="flex items-center justify-evenly flex-wrap">
          {selected.length > 0 &&
            selected.map((ele) => (
              <div key={ele.id}>
                <Chip name={ele?.name} id={ele.id} remove={removeSkill} selected={selected} />
              </div>
            ))}
        </div>
      </div>
    </InputFrom>
  );
};

export default SkillSection;

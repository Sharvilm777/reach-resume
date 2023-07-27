import InputFrom from "../inputForm";
import Input from "../input";
import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../context/resumeContext";
import Chip from "../chip";
import { patternMatch } from "../../helpers";
import { linkRegexPattern } from "../../constants/patterns";

const ProjSection = ({ onSaveAndSubmit }) => {
  const { data, setData } = useContext(ResumeContext);
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const [val, setVal] = useState({
    id: generateId(),
    name: "",
    description: "",
    link: "",
  });

  const verifyLink = (link) => {
    if (link !== "") {
      setError(!patternMatch(linkRegexPattern, link));
    } else {
      setError(false);
    }
  };

  const handleProjChange = (e, key) => {
    if (key === "link") {
      setVal({ ...val, [key]: e.target.value });
      setVerify(!verify);
    } else {
      setVal({ ...val, [key]: e.target.value });
      setVerify(!verify);
    }
  };

  const onProjSave = (e) => {
    e.preventDefault();
    const desc = val.description.split("\n");
    let descArr = [];
    desc.forEach((ele) => {
      const obj = {
        id: generateId(),
        text: ele,
      };
      descArr.push(obj);
    });

    setData({
      ...data,
      projects: [...data.projects, { ...val, description: descArr }],
    });
    setVal({
      id: generateId(),
      name: "",
      description: "",
      link: "",
    });
  };

  const removeProj = (id) => {
    const filtered = data.projects.filter((ele) => ele.id !== id);
    setData({ ...data, projects: filtered });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      verifyLink(val.link);
    }, 1000);

    return () => clearTimeout(timer);
  }, [verify]);
  console.log(data.projects, "projects");

  return (
    <InputFrom
      title="Projects"
      onSubmit={onProjSave}
      isMore={true}
      next={onSaveAndSubmit}
    >
      <div className="flex flex-wrap">
        {data.projects.length > 0 &&
          data.projects.map((ele) => (
            <div key={ele.id}>
              <Chip name={ele?.name} id={ele.id} remove={removeProj} />
            </div>
          ))}
      </div>

      <Input
        id="project"
        value={val.name}
        onChange={(e) => handleProjChange(e, "name")}
        placeholder="Project name"
        label="Project Name"
      />
      <Input
        id="desc"
        value={val.description}
        onChange={(e) => handleProjChange(e, "description")}
        textarea
        placeholder="Project description"
        label="Description"
      />
      <Input
        id="link"
        value={val.link}
        onChange={(e) => handleProjChange(e, "link")}
        placeholder="POC link"
        error={error}
        message={"Please enter a valid link"}
        label="Link"
      />
    </InputFrom>
  );
};

export default ProjSection;

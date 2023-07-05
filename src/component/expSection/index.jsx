import InputFrom from "../inputForm";
import Input from "../input";
import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../context/resumeContext";
import Chip from "../chip";
import { patternMatch } from "../../helpers";
import { linkRegexPattern } from "../../constants/patterns";

const ExpSection = () => {
  const { data, setData } = useContext(ResumeContext);
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const [val, setVal] = useState({
    id: generateId(),
    name: "",
    role: "",
    leaving: "",
    joining: "",
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

  const handleExpChange = (e, key) => {
    if (key === "link") {
      setVal({ ...val, [key]: e.target.value });
      setVerify(!verify);
    } else {
      setVal({ ...val, [key]: e.target.value });
      setVerify(!verify);
    }
  };

  const onExpSave = (e) => {
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

    setData({ ...data, experience: [...data.experience, { ...val, description: descArr }] });
    setVal({
      id: generateId(),
      name: "",
      role: "",
      leaving: "",
      joining: "",
      description: "",
      link: "",
    });
  };

  const removeExp = (id) => {
    const filtered = data.experience.filter((ele) => ele.id !== id);
    setData({ ...data, experience: filtered });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      verifyLink(val.link);
    }, 1000);

    return () => clearTimeout(timer);
  }, [verify]);
  console.log(data.experience, "Experience");

  return (
    <InputFrom title="Experience" onSubmit={onExpSave}>
      <div className="flex flex-wrap">
        {data.experience.length > 0 &&
          data.experience.map((ele) => (
            <div key={ele.id}>
              <Chip name={ele?.name} id={ele.id} remove={removeExp} />
            </div>
          ))}
      </div>
      <Input
        id="exp-name"
        value={val.name}
        onChange={(e) => handleExpChange(e, "name")}
        placeholder="Company Name"
        label="Company Name"
      />
      <div className="flex justify-between gap-4">
        <Input
          id="rol-name"
          value={val.role}
          onChange={(e) => handleExpChange(e, "role")}
          placeholder="Enter your Role"
          label="Role"
          required
        />
        <Input
          id="year"
          value={val.joining}
          onChange={(e) => handleExpChange(e, "joining")}
          placeholder="Year of Joining"
          label="Year of Joining"
          required
        />
        <Input
          id="leaving"
          value={val.leaving}
          onChange={(e) => handleExpChange(e, "leaving")}
          placeholder="Year of Leaving"
          label="Year of Leaving"
        />
      </div>
      <Input
        id="desc"
        value={val.description}
        onChange={(e) => handleExpChange(e, "description")}
        textarea
        placeholder="Project description"
        label="Description"
      />
      <Input
        id="link"
        value={val.link}
        onChange={(e) => handleExpChange(e, "link")}
        placeholder="POC link"
        error={error}
        message={"Please enter a valid link"}
        label="Link"
      />
    </InputFrom>
  );
};

export default ExpSection;

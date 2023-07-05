import { useContext, useEffect, useState } from "react";
import InputFrom from "../inputForm";

import Input from "../input";
import { patternMatch } from "../../helpers";
import { ResumeContext } from "../../context/resumeContext";

const AboutSection = () => {
  const { data, setData } = useContext(ResumeContext);

  const [val, setVal] = useState(data.about);
  const [validation, setValidation] = useState({
    text: "",
    bool: false,
  });

  const handleAboutChange = (e, key) => {
    const obj = val[key];
    console.log(obj, "Object");
    obj.text = e.target.value;
    setVal({ ...val });
    if (obj.validate && obj.validate === true) {
      const valid = {
        text: key,
        bool: !validation.bool,
      };
      setValidation(valid);
    }
  };

  const validateName = () => {
    const obj = val[validation.text];
    if (obj.text && obj.text !== "" && obj.pattern) {
      const res = patternMatch(obj.pattern, obj.text);
      obj.error = !res;
      setVal({ ...val });
    } else {
      obj.error = false;
      setVal({ ...val });
    }
  };

  const onAboutSubmit = (e) => {
    e.preventDefault();
    const obj = data;
    obj["about"] = val;
    setData({ ...obj });
    console.log({ ...obj });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      validateName();
    }, 500);
    return () => clearTimeout(timer);
  }, [validation]);
  return (
    <InputFrom title={"About"} onSubmit={onAboutSubmit}>
      <div className="flex gap-2 justify-between w-full">
        <Input
          id={val.name.title}
          placeholder="Enter your full Name"
          label={val.name.title}
          type={val.name.type}
          value={val.name.text}
          error={val.name.error}
          onChange={(e) => handleAboutChange(e, "name")}
          message={val.name.erroMessage}
        />
        {/* <Input
          id={"profilePic"}
          placeholder="Drag and drop your dp"
          label={"profilePic"}
          type={"file"}
        /> */}
      </div>
      <Input
        id={"phone"}
        placeholder="Enter your phone number"
        label={"phone"}
        type={"tel"}
        value={val.phone.text}
        error={val.phone.error}
        onChange={(e) => handleAboutChange(e, "phone")}
        message={"Enter 10 digit valid phone number"}
      />
      <Input
        id={val.bio.title}
        placeholder="Enter your bio"
        label={val.bio.title}
        type={val.bio.type}
        value={val.bio.text}
        onChange={(e) => handleAboutChange(e, "bio")}
        message={"Name did not match"}
      />
    </InputFrom>
  );
};

export default AboutSection;

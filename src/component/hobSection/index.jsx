import InputFrom from "../inputForm";
import Input from "../input";
import { useContext, useState } from "react";
import { ResumeContext } from "../../context/resumeContext";
import Chip from "../chip";

// eslint-disable-next-line react/prop-types
const HobSection = ({ onSaveAndSubmit }) => {
  const { data, setData } = useContext(ResumeContext);

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const [val, setVal] = useState({
    id: generateId(),
    name: "",
    description: "",
  });

  const handleHobbiesChange = (e, key) => {
    setVal({ ...val, [key]: e.target.value });
  };

  const onHobbiesSave = (e) => {
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
      hobbies: [...data.hobbies, { ...val, description: descArr }],
    });
    setVal({
      id: generateId(),
      name: "",
      description: "",
    });
  };

  const removeHobbie = (id) => {
    const filtered = data.hobbies.filter((ele) => ele.id !== id);
    setData({ ...data, hobbies: filtered });
  };

  console.log(data.hobbies, "Hobbies");

  return (
    <InputFrom
      title="Hobbies"
      onSubmit={onHobbiesSave}
      isMore={true}
      next={onSaveAndSubmit}
      preview={true}
    >
      <div className="flex flex-wrap">
        {data.hobbies.length > 0 &&
          data.hobbies.map((ele) => (
            <div key={ele.id}>
              <Chip name={ele?.name} id={ele.id} remove={removeHobbie} />
            </div>
          ))}
      </div>

      <Input
        id="hobbies"
        value={val.name}
        onChange={(e) => handleHobbiesChange(e, "name")}
        placeholder="Enter the Hobby name"
        label="Hobby Name"
        required
      />
      <Input
        id="desc"
        value={val.description}
        onChange={(e) => handleHobbiesChange(e, "description")}
        textarea
        placeholder="Hobby description"
        label="Description"
      />
    </InputFrom>
  );
};

export default HobSection;

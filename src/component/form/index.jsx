import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <input
        type="text"
        placeholder="Name"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Address"
        type="text"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        placeholder="Education"
        name="education"
        type="text"
        value={formData.education}
        onChange={handleChange}
      />
      <input
        placeholder="Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default Form;

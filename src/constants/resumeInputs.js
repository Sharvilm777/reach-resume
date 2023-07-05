export const ResumeIput = {
  about: {
    name: {
      type: "text",
      title: "Name",
      text: "",
      placeholder: "Enter your full Name",
      erroMessage: "Name should only contain alphabets and spaces",
      validate: true,
      pattern: /^(?!-)[a-zA-Z\s-]*[a-zA-Z\s]$/,
      error: false,
    },
    bio: {
      type: "text",
      title: "Bio",
      text: "",
    },
    profilePic: "",
    phone: {
      text: "",
      pattern: /[6-9]\d{9}/,
      validate: true,
      error: false,
      errorMessage: "Enter valid 10 digit mobile number",
    },
  },

  socialLinks: [
    {
      id: "1",
      name: "",
      link: "",
    },
  ],
  education: [],
  projects: [],
  skills: [],
  experience: [],
  hobbies: [],
};

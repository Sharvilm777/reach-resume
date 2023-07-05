/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Svg,
  Line,
  Link,
  Font,
} from "@react-pdf/renderer";
import Mail from "../../assets/icons/mail.png";
import Github from "../../assets/icons/github.png";

import RobotoMedium from "../../fonts/Roboto-Medium.ttf";
import RobotoLight from "../../fonts/Roboto-Light.ttf";
import RobotoRegular from "../../fonts/Roboto-Regular.ttf";
import RobotoLightItalic from "../../fonts/Roboto-LightItalic.ttf";
import RobotoThinItalic from "../../fonts/Roboto-ThinItalic.ttf";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";
import RobotoRegularItalic from "../../fonts/Roboto-Italic.ttf";
import { useContext } from "react";
import { ResumeContext } from "../../context/resumeContext";

Font.register({
  family: "Roboto-Bold",
  src: RobotoBold,
});
Font.register({
  family: "Roboto-Medium",
  src: RobotoMedium,
});
Font.register({
  family: "Roboto-Light",
  src: RobotoLight,
});
Font.register({
  family: "Roboto-Regular",
  src: RobotoRegular,
});
Font.register({
  family: "Roboto-ThinItalic",
  src: RobotoThinItalic,
});
Font.register({
  family: "Roboto-LightItalic",
  src: RobotoLightItalic,
});
Font.register({
  family: "Roboto-RegularItalic",
  src: RobotoRegularItalic,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#F6F3E8",
    // fontFamily: "Roboto",
  },
  section: {
    padding: "5mm 8mm 4mm 8mm",
    flexGrow: 1,
  },

  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "41mm",
    backgroundColor: "#DBC36B",
    width: "100%",
    color: "#f6f6f6",
    padding: "5mm 8mm 4mm 8mm",
    fontFamily: "Roboto-Bold",
  },

  candidateName: {
    fontFamily: "Roboto-Bold",
    fontSize: "12mm",
  },

  candidateBio: {
    fontSize: "4mm",
    fontFamily: "Roboto-Medium",
  },

  candidateContact: {
    display: "flex",
    gap: "6mm",
    flexDirection: "row",
    fontSize: "4mm",
    fontFamily: "Roboto-Medium",
    marginTop: "9mm",
  },

  contactIcon: {
    width: "5mm",
    height: "5mm",
  },
  candidateContactText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: "1mm",
  },

  profileImage: {
    width: "30mm",
    height: "30mm",
    borderRadius: "50%",
    margin: "0",
  },
  line: {
    borderRadius: "50%",
  },
  education: {},
});

const listData = ["Item 1", "Item 2", "Item 3"];

const ListComponent = () => (
  <View>
    {/* Render each item in the list */}
    {listData.map((item, index) => (
      <View key={index} style={styles.listItem}>
        <Text style={styles.listItemText}>{item}</Text>
      </View>
    ))}
  </View>
);

function ExportPdf() {
  const skills = [
    {
      title: "Programming Languages",
      text: "JavaScript",
      link: "https://www.google.com",
    },
    {
      text: "Python",
      link: "https://www.google.com",
    },
    {
      text: "Java",
      link: "https://www.google.com",
    },
    {
      text: "SQL",
      link: "https://www.google.com",
    },
  ];
  const { data } = useContext(ResumeContext);
  console.log(data);
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.heading}>
          <View>
            <Text style={styles.candidateName}>{data.about.name.text}</Text>
            <Text style={styles.candidateBio}>{data.about.bio.text}</Text>
            {/* <View style={styles.candidateContact}>
              <View style={styles.candidateContactText}>
                <Text>Email:</Text>
                <Image style={styles.contactIcon} src={Mail} />
              </View>
              <View style={styles.candidateContactText}>
                <Text>Github:</Text>
                <Image style={styles.contactIcon} src={Github} />
              </View>
              <View style={styles.candidateContactText}>
                <Text>LinkedIn:</Text>
                <Image style={styles.contactIcon} src={Mail} />
              </View>
            </View> */}
          </View>
          <View>
            {/* <Image
              style={styles.profileImage}
              src="https://avatars.githubusercontent.com/u/56132780?v=4"
            /> */}
          </View>
        </View>
        {data.education.length > 0 && (
          <PdfSection title="Education">
            <PdfEduSection education={data.education} />
          </PdfSection>
        )}

        {data.skills.length > 0 && (
          <PdfSection title="Skills">
            <PdfSkillSection skills={data.skills} />
          </PdfSection>
        )}

        {data.experience.length > 0 && (
          <PdfSection title="Experience">
            <PdfExpSection experience={data.experience} />
          </PdfSection>
        )}

        {data.projects.length > 0 && (
          <PdfSection title="Projects">
            <PdfProjectSection projects={data.projects} />
          </PdfSection>
        )}
        {data.hobbies.length > 0 && (
          <PdfSection title="Hobbies">
            <PdfHobbySection hobbies={data.hobbies} />
          </PdfSection>
        )}

        {/* <PdfSection title="Education" points={data.education} type="bullet" />
        <PdfSection title="Experience" points={data.experience} type="bullet" />
        <PdfSection title="Project" points={data.projects} type="bullet" />
        <PdfSection title="Hobbies" points={data.hobbies} type="bullet" /> */}
      </Page>
    </Document>
  );
}

// eslint-disable-next-line react/prop-types

const PdfSection = ({ title, children }) => {
  return (
    <View style={{ padding: "4mm 8mm 0 8mm" }}>
      <Text style={{ fontSize: "5.84mm", fontFamily: "Roboto-Medium" }}>{title}</Text>
      <Svg height={4} width="100%">
        <Line
          debug
          style={styles.line}
          x1="570"
          y1="0"
          x2="0"
          y2="0"
          strokeWidth={6}
          stroke="#DBC36B"
        />
      </Svg>
      {children}
    </View>
  );
};

const PdfEduSection = ({ education }) => {
  const type = "bullet";
  return (
    <View style={{ padding: "1mm 0 0 0" }}>
      {education.map((edu) => (
        <View
          key={edu.id}
          style={{
            fontSize: "3.7mm",
            padding: "0 6mm 0 3mm",
            fontFamily: "Roboto-Regular",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text>
            {"•"} {edu.degree} {"(" + edu.year + ")"}
          </Text>

          <Text>{edu.institution}</Text>
          <Text>{edu.grade}</Text>
        </View>
      ))}
    </View>
  );
};

const PdfSkillSection = ({ skills }) => {
  return (
    <View
      style={{
        padding: "1mm 0 0 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}>
      {skills.map((skill) => (
        <View
          key={skill.id}
          style={{
            backgroundColor: "#DBC36B",
            color: "#f6f6f6",
            borderRadius: "20%",
            padding: "2mm",
          }}>
          <Text style={{ fontSize: "3.9mm", fontFamily: "Roboto-Medium" }}>{skill.name}</Text>
        </View>
      ))}
    </View>
  );
};

const PdfExpSection = ({ experience }) => {
  return (
    <View style={{ padding: "1mm 0 0 0" }}>
      {experience.map((exp) => (
        <View
          key={exp.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Text
            style={{ fontSize: "4.8mm", padding: "1.5mm 0 1mm 0", fontFamily: "Roboto-Medium" }}>
            {exp.name} {"(" + exp?.joining + `- ${exp.leaving}` + ")"} {"| " + exp.role}
          </Text>
          <PdfPoints texts={exp.description} type="bullet" />
          {exp.link !== "" && (
            <Link
              src={exp.link}
              style={{
                fontSize: "3.7mm",
                padding: "0 0 0 3mm",
                fontFamily: "Roboto-RegularItalic",
                color: "black",
              }}>
              {exp.link}
            </Link>
          )}
        </View>
      ))}
    </View>
  );
};

const PdfProjectSection = ({ projects }) => {
  return (
    <View style={{ padding: "1mm 0 0 0" }}>
      {projects.map((project) => (
        <View
          key={project.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Text
            style={{ fontSize: "4.8mm", padding: "1.5mm 0 1mm 0", fontFamily: "Roboto-Medium" }}>
            {project.name}
          </Text>
          <PdfPoints texts={project.description} type="bullet" />
          {project.link !== "" && (
            <Link
              src={project.link}
              style={{
                fontSize: "3.7mm",
                padding: "0 0 0 3mm",
                fontFamily: "Roboto-RegularItalic",
                color: "black",
              }}>
              {project.link}
            </Link>
          )}
        </View>
      ))}
    </View>
  );
};

const PdfHobbySection = ({ hobbies }) => {
  return (
    <View style={{ padding: "1mm 0 0 0" }}>
      {hobbies.map((hobby) => (
        <View
          key={hobby.id}
          style={{
            fontSize: "3.7mm",
            padding: "0 6mm 0 3mm",
            fontFamily: "Roboto-Regular",
            display: "flex",
            flexDirection: "row",
            gap: "2mm",
          }}>
          <Text>
            {"•"} {hobby.name}{" "}
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: "1mm" }}>
            {hobby.description.length > 0 &&
              hobby.description.map((desc) => <Text key={desc.id}>{desc.text} </Text>)}
          </View>
        </View>
      ))}
    </View>
  );
};

const PdfPoint = ({ text, type, ...rest }) => {
  return (
    <View>
      <Text style={{ fontSize: "3.7mm", padding: "0 0 0 3mm", fontFamily: "Roboto-Regular" }}>
        {type === "bullet" ? "•" : index + 1 + "."} {text}
      </Text>
    </View>
  );
};

const PdfPoints = ({ texts, type }) => {
  return (
    <View>
      {
        // eslint-disable-next-line react/prop-types
        texts.map(({ text, id }, index) => (
          <View key={id}>
            <Text style={{ fontSize: "3.7mm", padding: "0 0 0 3mm", fontFamily: "Roboto-Regular" }}>
              {type === "bullet" ? "•" : index + 1 + "."} {text}
            </Text>
          </View>
        ))
      }
    </View>
  );
};

export default ExportPdf;

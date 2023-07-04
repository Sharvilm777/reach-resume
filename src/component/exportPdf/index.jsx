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

Font.register({ family: "Roboto", src: "" });

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

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.heading}>
          <View>
            <Text style={styles.candidateName}>Veeresh R M</Text>
            <Text style={styles.candidateBio}>Undergrad&lsquo; Computer Science Student</Text>
            <View style={styles.candidateContact}>
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
            </View>
          </View>
          <View>
            <Image
              style={styles.profileImage}
              src="https://avatars.githubusercontent.com/u/56132780?v=4"
            />
          </View>
        </View>
        <PdfSection title="Skills" points={skills} type="bullet" />
        <PdfSection title="Skills" points={skills} type="bullet" />
      </Page>
    </Document>
  );
}

// eslint-disable-next-line react/prop-types

const PdfSection = ({ title, points, type }) => {
  return (
    <View style={{ padding: "5mm 8mm 2mm 8mm" }}>
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
      <PdfPoint texts={points} type={type} />
    </View>
  );
};

const PdfPoint = ({ texts, type }) => {
  return (
    <View>
      {
        // eslint-disable-next-line react/prop-types
        texts.map(({ text, link, title }, index) => (
          <View key={index}>
            {title && (
              <Text
                style={{
                  fontSize: "4.2mm",
                  padding: "1.5mm 0 1.5mm 5mm",
                  fontFamily: "Roboto-Regular",
                }}>
                {title}
              </Text>
            )}
            <Text
              style={{ fontSize: "3.7mm", padding: "1mm 0 0 5mm", fontFamily: "Roboto-Regular" }}>
              {type === "bullet" ? "•" : index + 1 + "."} {text}
            </Text>
            {link !== "" && (
              <Link
                src={link}
                style={{
                  fontSize: "3.7mm",
                  padding: "1mm 0 0 5mm",
                  fontFamily: "Roboto-RegularItalic",
                  color: "black",
                }}>
                {link}
              </Link>
            )}
          </View>
        ))
      }
    </View>
  );
};

export default ExportPdf;

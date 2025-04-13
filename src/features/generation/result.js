import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { marked } from "marked";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
  pageBreak: {
    marginTop: 20,
    borderTop: "1px solid #000",
    paddingTop: 10,
  },
});

const MyDocument = ({ markdown }) => {
  const htmlContent = marked(markdown);
  const elements = [];

  // Convertir le HTML en éléments React-pdf
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  doc.body.childNodes.forEach((node, index) => {
    if (node.nodeName === "H1") {
      elements.push(
        <Text key={index} style={{ fontSize: 24, marginBottom: 10 }}>
          {node.textContent}
        </Text>
      );
    } else if (node.nodeName === "H2") {
      elements.push(
        <Text key={index} style={{ fontSize: 20, marginBottom: 10 }}>
          {node.textContent}
        </Text>
      );
    } else if (node.nodeName === "P") {
      elements.push(
        <Text key={index} style={{ marginBottom: 10 }}>
          {node.textContent}
        </Text>
      );
    } else if (
      node.nodeName === "DIV" &&
      node.innerHTML.includes("pagebreak")
    ) {
      elements.push(<View key={index} style={styles.pageBreak} />);
    }
  });

  return (
    <Document>
      <Page style={styles.page}>{elements}</Page>
    </Document>
  );
};

export default MyDocument;

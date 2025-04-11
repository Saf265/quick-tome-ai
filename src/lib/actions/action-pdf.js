"use server";

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 12,
    marginVertical: 5,
    lineHeight: 1.5,
  },
  listItem: {
    fontSize: 12,
    marginLeft: 15,
    marginVertical: 3,
  },
});

// const MarkdownToPDF = ({ content }) => {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <ReactMarkdown
//           children={content}
//           components={{
//             h1: ({ children }) => <Text style={styles.title}>{children}</Text>,
//             h2: ({ children }) => (
//               <Text style={styles.heading1}>{children}</Text>
//             ),
//             h3: ({ children }) => (
//               <Text style={styles.heading2}>{children}</Text>
//             ),
//             p: ({ children }) => (
//               <Text style={styles.paragraph}>{children}</Text>
//             ),
//             li: ({ children }) => (
//               <Text style={styles.listItem}>• {children}</Text>
//             ),
//             // Ajoutez d'autres éléments Markdown au besoin
//           }}
//         />
//       </Page>
//     </Document>
//   );
// };

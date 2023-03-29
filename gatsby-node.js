// const path = require("path");

// exports.CreatePages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query AllCars {
//       allStrapiCar {
//         nodes {
//           category
//           company
//           lowestPrice
//           slug
//           highestPrice
//           description
//           title
//         }
//       }
//     }
//   `);

//   data.AllStrapiCars.nodes.forEach((node) => {
//     actions.CreatePage({
//       path: "/cars/" + node.slug,
//       component: path.resolve("./src/templates/Car-Detail.js"),
//       context: { slug: node.slug },
//     });
//   });
// };

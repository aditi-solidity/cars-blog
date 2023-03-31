const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allStrapiCar {
        edges {
          node {
            slug
            template
          }
        }
      }
    }
  `);
  data.allStrapiCar.edges.forEach((car) => {
    if (car.node.template === "template-1") {
      actions.createPage({
        path: "/cars/" + car.node.slug,
        component: path.resolve("./src/templates/Car-Detail-1.js"),
        context: { slug: car.node.slug },
      });
    } else if (car.node.template === "template-2") {
      actions.createPage({
        path: "/cars/" + car.node.slug,
        component: path.resolve("./src/templates/Car-Detail-2.js"),
        context: { slug: car.node.slug },
      });
    }
  });
};

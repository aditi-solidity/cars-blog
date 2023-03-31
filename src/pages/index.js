import React from "react";
import { graphql, Link } from "gatsby";
import { CarCard } from "../components/Car-Card";

const Home = ({ data }) => {
  return (
    <>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Car Blogs
      </h2>
      {data.allStrapiCar.edges.map((car) => (
        <Link to={"/cars/" + car.node.slug} key={car.node.id}>
          <CarCard carData={car.node} />
        </Link>
      ))}
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allStrapiCar {
      edges {
        node {
          title
          slug
          id
          template
          category
          company
          updatedAt
          tagLine
          shortDescription
          mainImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;

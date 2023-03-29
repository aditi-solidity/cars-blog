import React from "react";
import { Layout } from "../components/Layout.js";
import { graphql } from "gatsby";
import { CarCard } from "../components/Car-Card";

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Car Blogs
      </h2>
      {data.allStrapiCar.edges.map((car) => (
        <CarCard carData={car.node} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allStrapiCar {
      edges {
        node {
          category
          company
          description
          highestPrice
          lowestPrice
          slug
          title
        }
      }
    }
  }
`;

export default Home;

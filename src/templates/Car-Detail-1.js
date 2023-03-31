import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CarDetail = ({ data }) => {
  const { strapiCar } = data;

  return (
    <div class="mx-auto max-w-xl lg:max-w-4xl p-6 my-10 ">
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {strapiCar.CarBlog[0].heading}
              </h1>
            </header>

            <GatsbyImage image={getImage(strapiCar?.mainImage.localFile)} />

            <p class="font-semibold text-gray-900">
              {"Company: " + strapiCar.company}
            </p>

            <p class="font-semibold text-gray-900">
              {"Category: " + strapiCar.category}
            </p>

            <p class="font-semibold text-gray-900">
              {"Price Range: " +
                strapiCar.CarBlog[0].lowestPrice +
                " - " +
                strapiCar.CarBlog[0].highestPrice +
                " Lakh"}
            </p>

            <p class="lead mt-5 text-justify">
              {strapiCar.CarBlog[0].description}
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default CarDetail;

export const query = graphql`
  query MyQuery($slug: String) {
    strapiCar(slug: { eq: $slug }) {
      CarBlog {
        ... on STRAPI__COMPONENT_CAR_CAR_TEMPLATE_1 {
          description
          heading
          highestPrice
          lowestPrice
        }
      }
      category
      company
      mainImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

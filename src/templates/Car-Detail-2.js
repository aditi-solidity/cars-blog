import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const CarDetail = ({ data }) => {
  const { strapiCar } = data;

  return (
    <div class="mx-auto max-w-xl lg:max-w-4xl p-6 my-10 ">
      <header class="mb-4 lg:mb-6 not-format">
        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {strapiCar.title + " - " + strapiCar.tagLine}
        </h1>
      </header>
      <Img fluid={strapiCar.mainImage.localFile.childImageSharp.fluid} />
      <p class="mt-5 text-sm leading-6 text-gray-600">
        {strapiCar.shortDescription}
      </p>
      <dl class="space-y-6  border-gray-200 pt-10 text-sm">
        <div class="flex justify-between">
          <dt class="font-medium text-gray-900">Category</dt>
          <dd class="text-gray-700">{strapiCar.category}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="flex font-medium text-gray-900">Company</dt>
          <dd class="text-gray-700">{strapiCar.company}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="font-medium text-gray-900">Starting Price</dt>
          <dd class="text-gray-700">
            {strapiCar.CarBlog[0].startingPrice + " Lakh"}
          </dd>
        </div>
        <div class="flex justify-between">
          <dt class="font-medium text-gray-900">Rating</dt>
          <dd class="text-gray-900">{strapiCar.CarBlog[0].rating + "/5"}</dd>
        </div>
      </dl>
    </div>
  );
};

export default CarDetail;

export const query = graphql`
  query MyQuery($slug: String) {
    strapiCar(slug: { eq: $slug }) {
      CarBlog {
        ... on STRAPI__COMPONENT_CAR_CAR_TEMPLATE_2 {
          rating
          startingPrice
        }
      }
      title
      tagLine
      shortDescription
      category
      company
      mainImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

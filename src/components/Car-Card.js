import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const CarCard = ({ carData }) => {
  return (
    <div class="mx-auto max-w-xl lg:max-w-4xl bg-stone-100 p-6 my-10 rounded-md">
      <p class=" text-4xl leading-8 ">{carData.title}</p>
      <div class="mt-5 space-y-20 lg:mt-10 lg:space-y-20">
        <article class="relative isolate flex flex-col gap-8 lg:flex-row">
          <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            <GatsbyImage
              image={getImage(carData?.mainImage.localFile)}
              className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500">
                {new Date(carData.updatedAt).toLocaleDateString("en-US")}
              </time>
            </div>
            <div class="group relative max-w-xl">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <span class="absolute inset-0"></span>
                {carData.title + " - " + carData.tagLine}
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                {carData.shortDescription + "...."}
              </p>
            </div>
            <div class="mt-6 flex border-t border-gray-900/5 pt-6">
              <div class="relative flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <span class="absolute inset-0"></span>
                    {"Company: " + carData.company}
                  </p>
                  <p class="text-gray-600">{"Category: " + carData.category}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

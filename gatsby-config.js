// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://127.0.0.1:1337",
        accessToken: '3e22ef0f69a09ec71eb0e6eb9968dff81c88c09dc6f11d9498563fbcb832b2096ee04bc6755a818e4e857f7d2a2fb23b4389794c9b081f76bc60c70bdf74fe6d486a65013dd39626e447b1aea82608b183160cd9aadb672e1fe3cab20118329b40419a5a018e8b6811cb219daae31ee2893c58f212b3845d9ae5beeb261ad167',
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
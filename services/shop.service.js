import { url_firestore } from "../firestore/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url_firestore,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategoryId: builder.query({
      query: (category_id) =>
        `products.json?orderBy="category_id"&equalTo=${category_id}`,
    }),
    // creando un post para las orders

    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),

    findOrders: builder.query({
      query: (email) => `orders.json?email=${email}&status=pending`,
    }),

    addAmountToOrder: builder.mutation({
      query: ({ id, ammount }) => ({
        url: `orders/${id}.json`,
        method: "PATCH",
        body: {
          ammount,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryIdQuery,
  useFindOrdersQuery,
  usePostOrderMutation,
  useAddAmountToOrderMutation,
} = shopApi;

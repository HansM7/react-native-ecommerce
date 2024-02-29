import { url_firestore } from "../firestore/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url_firestore,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users.json",
    }),
  }),
});

export const { useGetUsersQuery } = authApi;

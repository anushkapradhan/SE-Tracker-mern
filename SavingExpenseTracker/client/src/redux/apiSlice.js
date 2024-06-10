import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = "http://localhost:8081";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseURI
    }),
    endpoints: builder => ({
        // get categories
        getCategories: builder.query({
            // get: "http://localhost:8081/api/categories"
            query: () => "/api/categories",
            providesTags: ['categories']
        }),

        // get labels (to get data from db use query)
        getLabels: builder.query({
            // get: "http://localhost:8081/api/labels"
            query: () => "/api/labels",
            providesTags: ['transaction']
        }),

        // add new Transaction (to create/add/insert data to db use mutation)
        addTransaction: builder.mutation({
            // post: "http://localhost:8081/api/transaction"
            query: (initialTransaction) => ({
                url: "/api/transaction",
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction: builder.mutation({
            // delete: "http://localhost:8081/api/transaction"
            query: recordId => ({
                url: "/api/transaction",
                method: "DELETE",
                body: recordId
            }),
            invalidatesTags: ['transaction']
        })
    })
});

export default apiSlice;
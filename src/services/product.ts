import { EditedComment, EditedProduct, IProduct } from './../ts/productTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'api/prodcut',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void | number>({
      query: (limit = 20) => `/products/?_embed=comments&_limit=${limit}`,
      providesTags: (result) => ['Product'],
    }),
    createProduct: build.mutation<IProduct, EditedProduct>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PATCH',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: build.mutation<IProduct, number>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    deleteComment: build.mutation<IProduct, number>({
      query: (comentId) => ({
        url: `/comments/${comentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    addComment: build.mutation<IProduct, EditedComment>({
      query: (comment) => ({
        url: '/comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useDeleteCommentMutation,
  useAddCommentMutation,
} = productApi;
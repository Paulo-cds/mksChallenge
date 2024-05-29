'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC'

const handleGetProducts = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export function GetProductsData() {
  const query = useQuery({
    queryFn: handleGetProducts,
    queryKey: ['products-data']
  })

  return query
}
import React from 'react'
import { useParams } from "react-router-dom";
import { HeaderOne } from "../components/HeaderOne";
import { FetchPics } from "../components/FetchPics";

export const SearchPage = () => {
  const { searchTerm } = useParams();
  return (
    <>
      <HeaderOne />
      <FetchPics searchTerm={searchTerm} />
    </>
  );
}

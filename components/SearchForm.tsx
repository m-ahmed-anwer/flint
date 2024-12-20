import React from "react";
import { Button } from "./ui/button";
import Form from "next/form";
import SearchInput from "./SearchInput";

const SearchForm = ({
  query,
  placeholder,
}: {
  query?: string;
  placeholder: string;
}) => {
  return (
    <Form scroll={false} action={"/"} className="search-form">
      <div className="search-container">
        <SearchInput query={query} placeholder={placeholder} />
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="search-btn text-white">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;

import Form from "next/form";
import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

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
        <input
          defaultValue={query}
          name="query"
          placeholder={placeholder}
          className="search-input"
        />
        <Search className="search-icon" />
      </div>
      <div className="flex gap-2 ">
        <Button type="submit" className="search-btn text-white">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;

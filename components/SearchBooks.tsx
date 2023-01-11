import db from "../firebase/client";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Bookpreview from "./reusable/Bookpreview";

export default function SearchBooks() {
  let [searchValue, setSearchValue] = useState<string>("");

  const booksRef = collection(db, "books");
  const q = query(
    booksRef,
    where("name", ">=", searchValue),
    where("name", "<=", searchValue)
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      console.log(searchValue);
      const queryData = await getDocs(q);
      console.log(queryData);
      queryData.forEach((doc) => {
        console.log(doc.data());
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <>
      <div className="mb-[10vh]">
        <input
          className="text-darkgray"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        ></input>
      </div>
      <p>{searchValue}</p>
      <div>
        <Bookpreview></Bookpreview>
      </div>
    </>
  );
}

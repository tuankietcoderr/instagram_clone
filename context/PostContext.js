import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../api/database";
import { Loading } from "../components";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      apiUrl
        .get(`/curated`, { params: { page, per_page: PER_PAGE } })
        .then((res) => {
          const total_pages = res.data.total_results / PER_PAGE;
          if (page <= total_pages) {
            if (posts) {
              setPosts((prev) => [...prev, ...res.data.photos]);
            } else {
              setPosts(res.data.photos);
            }
          }
        });
    }
    return () => {
      console.log("Unsubscribed for ", page);
      subscribed = false;
    };
  }, [page]);
  if (!posts) return <Loading />;
  const value = { page, setPage, posts };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

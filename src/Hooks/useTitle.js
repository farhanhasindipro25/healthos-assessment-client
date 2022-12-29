import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - String Symphony`;
  }, [title]);
};

export default useTitle;

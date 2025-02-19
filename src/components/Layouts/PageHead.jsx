import { Helmet } from "react-helmet-async";

const PageHead = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="/vite.svg" type="image/x-icon" />
    </Helmet>
  );
};

export default PageHead;

import { Helmet } from "react-helmet-async";

const PageHead = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="/Vector.png" type="image/png" />
    </Helmet>
  );
};

export default PageHead;

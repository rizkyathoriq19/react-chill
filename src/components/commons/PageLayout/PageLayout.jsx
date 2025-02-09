import PageHead from "../PageHead";
import { Fragment } from "react";

const PageLayout = ({ title, children }) => {
  return (
    <Fragment>
      <PageHead title={title} />
      <section className="">{children}</section>
    </Fragment>
  );
};

export default PageLayout;

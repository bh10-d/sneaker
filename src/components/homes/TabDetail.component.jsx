import { useState, useContext, memo } from "react";
import CardHome from "./CardHome.component";
import { AppContext } from "../../context/AppProvider";

const New = ({ data, images }) => {
  return (
    <>
      <div
        className="tab-pane p-0 fade show active"
        id="top-all-tab"
        role="tabpanel"
        aria-labelledby="top-all-link"
      >
        <div className="products just-action-icons-sm">
          <div className="row">
            {data.map((product, index) => {
              if (product.status === 1) {
                return <CardHome key={index} product={product} path={images} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TopSelling = ({ data, images }) => {
  return (
    <>
      top selling
      <div
        className="tab-pane p-0 fade show active"
        id="top-all-tab"
        role="tabpanel"
        aria-labelledby="top-all-link"
      >
        <div className="products just-action-icons-sm">
          <div className="row">
            {data.map((product, index) => (
              <CardHome key={index} product={product} path={images} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Sale = ({ data, images }) => {
  return (
    <>
      sale
      <div
        className="tab-pane p-0 fade show active"
        id="top-all-tab"
        role="tabpanel"
        aria-labelledby="top-all-link"
      >
        <div className="products just-action-icons-sm">
          <div className="row">
            {data.map((product, index) => {
              if (product.status === 2) {
                return <CardHome key={index} product={product} path={images} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TabDetail = ({ tab }) => {
  const { products, images_color } = useContext(AppContext);
  if (tab === "New") {
    return <New data={products} images={images_color} />;
  }
  if (tab === "Top selling") {
    return <TopSelling data={products} images={images_color} />;
  }
  if (tab === "Sale") {
    return <Sale data={products} images={images_color} />;
  }
};

export default memo(TabDetail);

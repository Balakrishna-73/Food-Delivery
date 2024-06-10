import React from "react";

export default function Price(price, locale, currency) {
  const formatprice = () => {
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(price);

    return <span>{formatprice()}</span>;
  };

  Price.defaultProps = {
    locale: "en-US",
    currency: "USD",
  };
}

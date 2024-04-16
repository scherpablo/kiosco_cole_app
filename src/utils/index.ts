const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const getImagePath = (imagePath: string) => {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";
  const publicBaseUrl = `/products/${imagePath}.jpg`;

  if (imagePath.startsWith(cloudinaryBaseUrl)) {
    return imagePath;
  } else {
    return publicBaseUrl;
  }
};

export { formatCurrency, getImagePath };

import faker from "faker";

export const getFaker = (req, res) => {
  const respuesta = [];
  let qty = req.query.cant;

  if (qty == NaN) {
    qty = 10;
  }

  for (let i = 0; i < qty; i++) {
    respuesta.push({
      productid: i,
      productname: faker.commerce.productName(),
      productdescription: faker.commerce.productDescription(),
      price: faker.commerce.price(),
    });
  }

  res.json({
    data: respuesta,
  });
};

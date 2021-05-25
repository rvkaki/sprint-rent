export function getPrice(car, { startDate }) {
  let curPrice;
  let date = new Date();
  if (car.seasonalPrice?.length > 0) {
    if (startDate) date = startDate;
    curPrice = car.seasonalPrice.find(
      item => new Date(item.start) < date && new Date(item.finish) > date
    )?.price;
  }

  return curPrice || car.price;
}

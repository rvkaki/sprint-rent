export function getPrice(car) {
  let curPrice;
  if (car.seasonalPrice?.length > 0) {
    const today = new Date();
    curPrice = car.seasonalPrice.find(
      item => new Date(item.start) < today && new Date(item.finish) > today
    )?.price;
  }

  return curPrice || car.price;
}

export type CoffeeStoreType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
};
export type MapboxType = {
  properties: {
    mapbox_id: string;
    full_address: string;
    name: string;
  };
  name: string;
};
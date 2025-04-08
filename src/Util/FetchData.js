import data from "../assets/the-adventures-of-sherlock-holmes-sample.json";

export function getData(what) {
  return data[`${what}`];
}

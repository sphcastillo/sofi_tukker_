export const storeItemsQuery = `*[_type == "storeItem"] | order(sortOrder asc) {
  "id": sortOrder,
  title,
  image,
  price
}`;

export const tourDatesQuery = `*[_type == "tourDate"] | order(sortOrder asc) {
  date,
  venue,
  city,
  link,
  "VIP": vip,
  tickets
}`;

export const breadGoodsQuery = `*[_type == "breadGood"] | order(sortOrder asc) {
  "id": sortOrder,
  title,
  image,
  price,
  link
}`;

export const merchProductsQuery = `*[_type == "merchProduct"] | order(sortOrder asc) {
  "id": sortOrder,
  title,
  price,
  image,
  link
}`;

export const musicReleasesQuery = `*[_type == "musicRelease"] | order(sortOrder asc) {
  "id": sortOrder,
  title,
  url
}`;

export const musicVideosQuery = `*[_type == "musicVideo"] | order(sortOrder asc) {
  "id": sortOrder,
  title,
  thumbnail,
  url
}`;

export const socialLinksQuery = `*[_type == "socialLink"] | order(sortOrder asc) {
  "id": sortOrder,
  name,
  platform,
  link
}`;

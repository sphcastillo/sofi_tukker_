import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Tour Dates")
        .child(S.documentTypeList("tourDate").title("Tour Dates")),
      S.listItem()
        .title("Store Items")
        .child(S.documentTypeList("storeItem").title("Store Items")),
      S.listItem()
        .title("Bread Goods")
        .child(S.documentTypeList("breadGood").title("Bread Goods")),
      S.listItem()
        .title("Merch Products")
        .child(S.documentTypeList("merchProduct").title("Merch Products")),
      S.listItem()
        .title("Music Releases")
        .child(S.documentTypeList("musicRelease").title("Music Releases")),
      S.listItem()
        .title("Music Videos")
        .child(S.documentTypeList("musicVideo").title("Music Videos")),
      S.listItem()
        .title("Social Links")
        .child(S.documentTypeList("socialLink").title("Social Links")),
    ]);

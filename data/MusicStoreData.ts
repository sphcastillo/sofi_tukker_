type MusicStoreItems = {
    id: number;
    title: string;
    price: string;
    image: string;
    link: string;
  };
  
  export const BreadStoreItems: MusicStoreItems[] = [
    {
      id: 1,
      title: "VINYL",
      price: "34.99",
      image: '/images/homepage/musicStore/vinyl.png',
      link: "/",
    },
    {
      id: 2,
      title: "CD",
      price: "14.99",
      image: '/images/homepage/musicStore/cd.png',
      link: "/",
    },
    {
      id: 3,
      title: "CASSETTE",
      price: "14.99",
      image: 'images/homepage/musicStore/cassette.png',
      link: "/",
    },
  ];
const data = [
    {
      id: 1,
      title: 'Harry potter',
      image: 'https://m.media-amazon.com/images/I/71n40hBlR4L._AC_SL1500_.jpg',
      detail:'Funko medium',
      price: '$2700'
    },

    {
      id: 2,
      title: 'Breaking bad- Walter White',
      image: 'https://m.media-amazon.com/images/I/41S1lN96GHL._AC_.jpg',
      detail:'Funko medium',
      price: '$2900'
    },

    {
      id: 3,
      title: 'Family Guy- Stewie Griffin',
      image: 'https://m.media-amazon.com/images/I/51s1LO7pAZL._AC_SY550_.jpg',
      detail:'Funko medium',
      price: '$2350'
    },

    {
      id: 4,
      title: 'Stranger things- Eleven',
      image: 'https://m.media-amazon.com/images/I/61nEyJzOMDL._AC_SY606_.jpg',
      detail:'Funko medium',
      price: '$3100'
    }
  ];

  const getData = new Promise ((resolve) => {
      setTimeout (() => {
        resolve (data);
      }, 2000);
  });

  export default getData;
export const products = [
  // Consumer Electronics
  { id: '1a', name: 'Apple AirPods Pro', category: 'Consumer Electronics', price: 249.99, image: '/pictures/1a.jpg' },
  { id: '1b', name: 'Samsung Neo QLED 8K TV', category: 'Consumer Electronics', price: 3499.99, image: '/pictures/1b.jpg' },
  { id: '1c', name: 'Apple iPhone 15 Pro', category: 'Consumer Electronics', price: 999.99, image: '/pictures/1c.jpg' },
  { id: '1d', name: 'Microsoft Xbox Series X', category: 'Consumer Electronics', price: 499.99, image: '/pictures/1d.jpg' },
  { id: '1e', name: 'Canon EOS R5 Camera', category: 'Consumer Electronics', price: 3899.99, image: '/pictures/1e.jpg' },
  { id: '1f', name: 'Ring Video Doorbell Pro', category: 'Consumer Electronics', price: 169.99, image: '/pictures/1f.jpg' },
  { id: '1g', name: 'LG Dual Inverter AC', category: 'Consumer Electronics', price: 450.00, image: '/pictures/1g.jpg' },
  { id: '1h', name: 'Google Pixel 8 Pro', category: 'Consumer Electronics', price: 899.99, image: '/pictures/1h.jpg' },

  // Health and Beauty
  { id: '2a', name: 'CeraVe Hydrating Facial Cleanser', category: 'Health and Beauty', price: 15.99, image: '/pictures/2a.jpg' },
  { id: '2b', name: 'Olaplex No. 3 Hair Perfector', category: 'Health and Beauty', price: 30.00, image: '/pictures/2b.jpg' },
  { id: '2c', name: 'Batiste Dry Shampoo', category: 'Health and Beauty', price: 8.99, image: '/pictures/2c.jpg' },
  { id: '2d', name: 'Braun Series 7 Electric Shaver', category: 'Health and Beauty', price: 149.99, image: '/pictures/2d.jpg' },
  { id: '2e', name: 'Tylenol Extra Strength Caplets', category: 'Health and Beauty', price: 12.99, image: '/pictures/2e.jpg' },
  { id: '2f', name: 'Philips Norelco Multigroom 7000', category: 'Health and Beauty', price: 59.99, image: '/pictures/2f.jpg' },
  { id: '2g', name: 'Axe Phoenix Body Spray', category: 'Health and Beauty', price: 5.99, image: '/pictures/2g.jpg' },
  { id: '2h', name: 'Jack Black Double-Duty Face Moisturizer', category: 'Health and Beauty', price: 28.00, image: '/pictures/2h.jpg' },

  // Food and Beverage
  { id: '3a', name: 'Kraft Macaroni & Cheese', category: 'Food and Beverage', price: 1.50, image: '/pictures/3a.jpg' },
  { id: '3b', name: 'Kind Protein Bars', category: 'Food and Beverage', price: 14.99, image: '/pictures/3b.jpg' },
  { id: '3c', name: 'Coca-Cola Classic', category: 'Food and Beverage', price: 1.99, image: '/pictures/3c.jpg' },
  { id: '3d', name: 'Red Bull Energy Drink', category: 'Food and Beverage', price: 2.99, image: '/pictures/3d.jpg' },
  { id: '3e', name: 'Philadelphia Cream Cheese', category: 'Food and Beverage', price: 4.99, image: '/pictures/3e.jpg' },
  { id: '3f', name: 'DiGiorno Frozen Pizza', category: 'Food and Beverage', price: 7.99, image: '/pictures/3f.jpg' },
  { id: '3g', name: 'Hormel Chili with Beans', category: 'Food and Beverage', price: 2.49, image: '/pictures/3g.jpg' },
  { id: '3h', name: 'Heinz Tomato Ketchup', category: 'Food and Beverage', price: 3.99, image: '/pictures/2h.jpg' }, // Note: 2h was in html, might be typo in original but keeping or fixing? reusing 2h probably wrong. HTML has `url(pictures/2h.jpg)` for Heinz? Let's check. Yes line 544. Probably copy paste error in original site. I will leave as is or fix if I can't find 3h. Wait, line 544 is Heinz, image is `2h.jpg`. This is definitely a bug in original. I will assume `3h.jpg` exists or just use `2h.jpg` to be safe, but actually `3h` likely doesn't exist if not used. I'll stick to what HTML had: 2h.

  // Furniture and Decor
  { id: '4a', name: 'IKEA EKTORP Sofa', category: 'Furniture and Decor', price: 399.00, image: '/pictures/4a.jpg' },
  { id: '4b', name: 'Zinus SmartBase Platform Bed', category: 'Furniture and Decor', price: 129.00, image: '/pictures/4b.jpg' },
  { id: '4c', name: 'CB2 Round Marble Bistro Table', category: 'Furniture and Decor', price: 299.00, image: '/pictures/4c.jpg' },
  { id: '4d', name: 'Steelcase Series 1 Task Chair', category: 'Furniture and Decor', price: 450.00, image: '/pictures/4d.jpg' },
  { id: '4e', name: 'YITAHOME Patio Umbrella', category: 'Furniture and Decor', price: 89.99, image: '/pictures/4e.jpg' },
  { id: '4f', name: 'Wayfair Mercury Glass Floor Lamp', category: 'Furniture and Decor', price: 110.00, image: '/pictures/4f.jpg' },
  { id: '4g', name: 'CanvasPop Custom Canvas Prints', category: 'Furniture and Decor', price: 49.00, image: '/pictures/4g.jpg' },
  { id: '4h', name: 'Safavieh Vintage Collection Rug', category: 'Furniture and Decor', price: 150.00, image: '/pictures/4h.jpg' },

  // Apparel and Accessories
  { id: '5a', name: 'Ralph Lauren Polo Shirt', category: 'Apparel and Accessories', price: 89.50, image: '/pictures/5a.jpg' },
  { id: '5b', name: 'H&M Ribbed Knit Dress', category: 'Apparel and Accessories', price: 34.99, image: '/pictures/5b.jpg' },
  { id: '5c', name: 'The North Face Puffer Jacket', category: 'Apparel and Accessories', price: 280.00, image: '/pictures/5c.jpg' },
  { id: '5d', name: 'Nike Air Force 1 Sneakers', category: 'Apparel and Accessories', price: 110.00, image: '/pictures/5d.jpg' },
  { id: '5e', name: 'Coach Leather Crossbody Bag', category: 'Apparel and Accessories', price: 195.00, image: '/pictures/5e.jpg' },
  { id: '5f', name: 'Pandora Charm Bracelets', category: 'Apparel and Accessories', price: 75.00, image: '/pictures/5f.jpg' },
  { id: '5g', name: 'Daniel Wellington Classic Watch', category: 'Apparel and Accessories', price: 199.00, image: '/pictures/5g.jpg' },
  { id: '5h', name: 'New Era 59FIFTY Fitted Cap', category: 'Apparel and Accessories', price: 45.00, image: '/pictures/5h.jpg' },

  // Clothes and Cosmetics
  { id: '6a', name: 'Levi’s 501 Original Fit Jeans', category: 'Clothes and Cosmetics', price: 69.50, image: '/pictures/6a.jpg' },
  { id: '6b', name: 'Tommy Hilfiger Polo Shirt', category: 'Clothes and Cosmetics', price: 59.50, image: '/pictures/6b.jpg' },
  { id: '6c', name: 'Champion Reverse Weave Hoodie', category: 'Clothes and Cosmetics', price: 60.00, image: '/pictures/6c.jpg' },
  { id: '6d', name: 'CeraVe Hydrating Facial Cleanser', category: 'Clothes and Cosmetics', price: 15.99, image: '/pictures/6d.jpg' }, // Duplicate? Different image? HTML used 6d.jpg
  { id: '6e', name: 'Drunk Elephant T.L.C. Sukari Babyfacial', category: 'Clothes and Cosmetics', price: 80.00, image: '/pictures/6e.jpg' },
  { id: '6f', name: 'MAC Studio Fix Powder Foundation', category: 'Clothes and Cosmetics', price: 39.00, image: '/pictures/6f.jpg' },
  { id: '6g', name: 'Moroccanoil Treatment Oil', category: 'Clothes and Cosmetics', price: 44.00, image: '/pictures/6g.jpg' },
  { id: '6h', name: 'OPI Nail Lacquer', category: 'Clothes and Cosmetics', price: 11.49, image: '/pictures/6h.jpg' },

  // Books, Movies, Music, and Games
  { id: '7a', name: '"Abbey Road" by The Beatles', category: 'Books, Movies, Music, and Games', price: 29.99, image: '/pictures/7a.jpg' },
  { id: '7b', name: '"1989" by Taylor Swift', category: 'Books, Movies, Music, and Games', price: 24.99, image: '/pictures/7b.jpg' },
  { id: '7c', name: '"Rolling in the Deep" by Adele', category: 'Books, Movies, Music, and Games', price: 1.29, image: '/pictures/7c.jpg' },
  { id: '7d', name: '"Stay" by Rihanna ft. Mikky Ekko', category: 'Books, Movies, Music, and Games', price: 1.29, image: '/pictures/7d.jpg' },
  { id: '7e', name: '"Red Dead Redemption 2"', category: 'Books, Movies, Music, and Games', price: 59.99, image: '/pictures/7e.jpg' },
  { id: '7f', name: '"The Witcher 3: Wild Hunt"', category: 'Books, Movies, Music, and Games', price: 39.99, image: '/pictures/7f.jpg' },
  { id: '7g', name: '"Persona 5"', category: 'Books, Movies, Music, and Games', price: 19.99, image: '/pictures/7g.jpg' },
  { id: '7h', name: '"Circe" by Madeline Miller', category: 'Books, Movies, Music, and Games', price: 16.99, image: '/pictures/7h.jpg' },

  // Sports Items
  { id: '8a', name: 'Peloton Bike', category: 'Sports Items', price: 1445.00, image: '/pictures/8a.jpg' },
  { id: '8b', name: 'NordicTrack Treadmill', category: 'Sports Items', price: 1299.00, image: '/pictures/8b.jpg' },
  { id: '8c', name: 'Reebok CrossFit Shorts', category: 'Sports Items', price: 45.00, image: '/pictures/8c.jpg' },
  { id: '8d', name: 'Wilson NFL MVP Football', category: 'Sports Items', price: 19.99, image: '/pictures/8d.jpg' },
  { id: '8e', name: 'HEAD Speed Tennis Racket', category: 'Sports Items', price: 119.00, image: '/pictures/8e.jpg' },
  { id: '8f', name: 'Adidas Tango Soccer Ball', category: 'Sports Items', price: 25.00, image: '/pictures/8f.jpg' },
  { id: '8g', name: 'CamelBak Hydration Packs', category: 'Sports Items', price: 50.00, image: '/pictures/8g.jpg' },
  { id: '8h', name: 'Specialized Allez Road Bike', category: 'Sports Items', price: 1000.00, image: '/pictures/8h.jpg' },
];

export const categories = [
  { id: 'box1', name: 'Consumer Electronics', image: '/pictures/s1.jpg' },
  { id: 'box2', name: 'Health and Beauty', image: '/pictures/s2.jpg' },
  { id: 'box3', name: 'Food and Beverage', image: '/pictures/s3.jpg' },
  { id: 'box4', name: 'Furniture and Decor', image: '/pictures/s4.jpg' },
  { id: 'box5', name: 'Apparel and Accessories', image: '/pictures/s5.jpg' },
  { id: 'box6', name: 'Clothes and Cosmetics', image: '/pictures/s6.jpg' },
  { id: 'box7', name: 'Books, Movies, Music, and Games', image: '/pictures/s7.jpg' },
  { id: 'box8', name: 'Sports items', image: '/pictures/s8.jpg' },
];

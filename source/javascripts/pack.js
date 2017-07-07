var feed = new Instafeed({
  get: 'user',
  userId: '11202074',
  accessToken: '11202074.fabe8a3.2db116a80e684b94acc0b4abb3cdf484',
  template: '<li class="insta-cell"><img src="{{image}}" /></li>',
  limit: 6,
  resolution: 'thumbnail'
});
feed.run();

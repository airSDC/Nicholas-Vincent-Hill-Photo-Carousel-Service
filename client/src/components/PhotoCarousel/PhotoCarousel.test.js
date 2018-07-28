import { shallow } from 'enzyme';
import React from 'react';

import PhotoCarousel from './PhotoCarousel';

import PhotoCarouselListItem from './PhotoCarouselList/PhotoCarouselListItem';

describe('<PhotoCarousel />', () => {
  let carousel;
  const photos = [
    {
      _id: '5b5754595fbd52bbdde8987e',
      room_id: 3,
      photo_url: '/assests/room2.jpg',
      verified: true,
      description:
        'Consequatur perferendis iure laboriosam cumque aut ex a voluptatem.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde8987d',
      room_id: 3,
      photo_url: '/assests/room1.jpg',
      verified: false,
      description: 'Reiciendis consequuntur molestias accusantium quam.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde89881',
      room_id: 3,
      photo_url: '/assests/room5.jpg',
      verified: true,
      description: 'Quia aut consequatur aliquid et ut necessitatibus.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde89880',
      room_id: 3,
      photo_url: '/assests/room4.jpg',
      verified: false,
      description: 'Et est placeat.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde8987f',
      room_id: 3,
      photo_url: '/assests/room3.jpg',
      verified: true,
      description: 'Odit id enim.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde89883',
      room_id: 3,
      photo_url: '/assests/room7.jpg',
      verified: false,
      description: 'Sed architecto adipisci iusto pariatur.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde89882',
      room_id: 3,
      photo_url: '/assests/room6.jpg',
      verified: true,
      description:
        'Quisquam tempora blanditiis aliquam similique asperiores est tempora similique qui.',
      __v: 0
    },
    {
      _id: '5b5754595fbd52bbdde89886',
      room_id: 3,
      photo_url: '/assests/room10.jpg',
      verified: false,
      description:
        'Voluptatibus fuga omnis aliquam delectus esse eveniet officiis.',
      __v: 0
    }
  ];

  const photoCarousel = () => {
    carousel = shallow(
      <PhotoCarousel photos={photos} isHidden={false} hideCarousel={() => {}} />
    );

    return carousel;
  };

  test('should render three <PhotoCarouselListItems /> components', () => {
    expect(
      shallow(
        <PhotoCarousel
          photos={photos}
          isHidden={false}
          hideCarousel={() => {}}
        />
      ).find('.carousel-list-item')
    ).toBe(photos.length);
  });
});

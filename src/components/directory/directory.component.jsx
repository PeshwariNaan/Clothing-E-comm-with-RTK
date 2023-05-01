import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.jsx';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl:
      'https://res.cloudinary.com/soyousay/image/upload/v1682934698/Clothing/hats_dykx2g.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl:
      'https://res.cloudinary.com/soyousay/image/upload/v1682934698/Clothing/jackets_nscowx.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl:
      'https://res.cloudinary.com/soyousay/image/upload/v1682934698/Clothing/sneakers_e1gchs.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl:
      'https://res.cloudinary.com/soyousay/image/upload/v1682934698/Clothing/womans-fashion_y4w5ql.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl:
      'https://res.cloudinary.com/soyousay/image/upload/v1682934698/Clothing/mens-fashion-2_k8rfch.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

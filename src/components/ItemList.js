import { Link } from 'react-router-dom';
import { Item } from '../components/Item';

const ItemList = ({ products }) => {
  return (
    <>
      {products.map(product => {
        return (
          <Link to={`/item/${product.id}`} key={product.id}>
            <Item product={product} />
          </Link>
        );
      })}
    </>
  );
};

export { ItemList };

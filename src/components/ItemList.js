import { Item } from '../components/Item';

const ItemList = ({ products }) => {
  return (
    <>
      {products.map(product => {
        return <Item key={product.id} product={product} />;
      })}
    </>
  );
};

export { ItemList };

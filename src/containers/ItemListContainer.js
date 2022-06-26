import { useState, useEffect } from 'react';
import { ItemList } from '../components/ItemList';
import { useParams } from 'react-router-dom';

//FIREBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Spinner } from '../components/Spinner';

const ItemListContainer = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = category
        ? query(collection(db, 'products'), where('category', '==', category))
        : query(collection(db, 'products'));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductsData(docs);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='hero min-h-screen'>
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md flex flex-col items-center'>
              <ItemList products={productsData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ItemListContainer };

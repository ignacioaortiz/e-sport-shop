import { useEffect, useState } from 'react';
import { ItemDetail } from '../components/ItemDetail';
import { useParams } from 'react-router';

//FIREBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Spinner } from '../components/Spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'products'),
        where(documentId(), '==', id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
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
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col items-center'>
          {productsData?.map((data) => {
            return <ItemDetail items={data} key={data.id} />;
          })}
        </div>
      )}
    </>
  );
};

export { ItemDetailContainer };

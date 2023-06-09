import Head from 'next/head';
import styles from '../../page.module.css'
import { Metadata, ResolvingMetadata } from 'next';

export default async function Product({ params: {id}}) {
    const data = await getData(id);
    return (
        <div>
            <main className={styles.main}>
                <h1>{data.title}</h1>
                <p>Product ID: {data.title}</p>
            </main>
        </div>
    )
}

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id;
   
    // fetch data
    const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];
   
    return {
      title: product.title,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    };
  }
async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log("res",res)
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

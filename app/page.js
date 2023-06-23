import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import BOTW from '@/components/Contents/BOTW'
import ContentThumbnail from '@/components/Contents/ContentThumbnail'
import Products from '@/components/Products/Products'
import Benefit from '@/components/Benefit/Benefit'
import Testimonials from '@/components/Testimonials/Testimonials'
import FAQs from '@/components/FAQ/FAQs'
import Youtube from '@/components/Youtube/Youtube'
import moment from "moment";
import { getEvent } from '@/services/events'
import { revalidateTag } from 'next/cache'


export default async function Home() {
  const param = {
    "page": 1,
    "limit": 999,
    "search": ''
  };

  const data = await getEvent(param);
  revalidateTag(data)
  const new_data = data.data.filter((item) => {
    const event_date = moment(item?.Tanggal_waktu_event)?.format(
      "YYYY-MM-DD"
    );
    return (
      event_date >= moment().format("YYYY-MM-DD")
    );
  })?.sort(
    (a, b) =>
      new Date(a?.Tanggal_waktu_event) - new Date(b?.Tanggal_waktu_event)
  );
  return (
    <div>
     <Hero event={new_data}></Hero>
     <div className='w-full'>
        <ContentThumbnail></ContentThumbnail>
        <BOTW></BOTW>
        <Products></Products>
        <Benefit></Benefit>
        <Testimonials></Testimonials>
        <FAQs></FAQs>
        <Youtube></Youtube>
     </div>
    </div>
  )
}

async function getData() {
  const res = await fetch(`https://dev.cms.dimulai.apps360.id/items/Event?page=1&limit=999&search=`);
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

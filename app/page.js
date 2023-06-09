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

export default function Home() {
  return (
    <div>
     <Hero></Hero>
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

import './globals.css'
import Header from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer"
import CTA from '@/components/CTA/CTA';

export default function Template({ children }) {
    return (
        <div className='w-full overflow-hidden'>
            <div className='items-center'>
                 <Header></Header>
            </div>
            {children}
        <CTA></CTA>
        <Footer></Footer>
        </div>
    )
  }
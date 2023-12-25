import ActivityStats from '@/components/ActivityStats';
import FirstPart from '@/components/FirstPart'
import Footer from '@/components/Footer';
import FourthPart from '@/components/FourthPart';
import Navbar from '@/components/Navbar'
import SecondPart from '@/components/SecondPart';
import ThirdPart from '@/components/ThirdPart';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='lg:px-52'>
        <FirstPart />
        <ActivityStats/>
        <SecondPart/>
        <ThirdPart/>
        <FourthPart/>
        <Footer/>
      </div>
    </div>
  );
}

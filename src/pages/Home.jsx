import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedArtwork from '../components/FeaturedArtwork'
import Trending from '../components/Trending'
import Artists from '../components/Artists'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedArtwork />
      <Trending />
      <Artists />
      <CTA />
      <Footer />
    </div>
  )
}

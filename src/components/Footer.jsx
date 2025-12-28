export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden text-white">
      
      <div className="absolute right-0 top-0 w-125 h-125 bg-purple-700/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <h2 className="text-xl font-bold">NFTme</h2>

          <nav className="flex gap-8 text-sm text-gray-300">
            <span className="cursor-pointer hover:text-white">Explore</span>
            <span className="cursor-pointer hover:text-white">Marketplace</span>
            <span className="cursor-pointer hover:text-white">Artists</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
          </nav>

          <div className="flex gap-4">
            <Social icon="F" />
            <Social icon="I" />
            <Social icon="T" />
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400 gap-4">
          <p>Privacy policy</p>
          <p>Copyright © Kartik Bansal 2022. All Rights Reserved.</p>
          <p>Terms of service</p>
        </div>
      </div>
    </footer>
  )
}

function Social({ icon }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
      <span className="text-sm">{icon}</span>
    </div>
  )
}

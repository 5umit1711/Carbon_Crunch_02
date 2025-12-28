export default function Navbar() {
  return (
    <nav className="flex items-center px-6 py-5 text-white">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-300 ml-auto mr-24">
        <span className="cursor-pointer hover:text-white">About us</span>
        <span className="cursor-pointer hover:text-white">Store</span>
        <span className="cursor-pointer hover:text-white">Games</span>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
        Connect Wallet
      </button>
    </nav>
  )
}

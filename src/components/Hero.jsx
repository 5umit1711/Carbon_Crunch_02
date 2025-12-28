export default function Hero() {
  return (
    <section className="relative px-6 pt-20 grid md:grid-cols-2 gap-12 text-white overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Rare <br /> Collections Of <br /> Art & NFTs
        </h1>

        <p className="mt-6 text-gray-300 max-w-md">
          Create, Explore & Collect Digital Art NFTs
        </p>

        <button className="mt-8 bg-purple-600 px-8 py-3 rounded-full font-semibold">
          Explore
        </button>

        <div className="flex gap-12 mt-12">
          <Stat label="Artwork" value="32k+" />
          <Stat label="Artists" value="20k+" />
          <Stat label="Auctions" value="10k+" />
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="absolute w-125 h-125 bg-purple-700/40 rounded-full blur-3xl -z-10" />

        <div className="absolute -left-8 top-10 -rotate-12 scale-95">
          <Card image="/bids.png" />
        </div>

        <div className="relative rotate-6">
          <Card image="/bids.png" />
        </div>
      </div>
    </section>
  )
}

function Card({ image }) {
  return (
    <div className="bg-linear-to-br from-purple-500 to-pink-500 p-0.75 rounded-3xl">
      <div className="bg-black rounded-3xl overflow-hidden w-72">
        <img
          src={image}
          alt="NFT artwork"
          className="w-full aspect-3/4 object-cover"
        />

        <div className="p-4 bg-linear-to-r from-purple-600/60 to-pink-500/60 backdrop-blur">
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold">Laura</p>
              <p className="text-gray-200">0.21 Weth</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-200">Remaining Time</p>
              <p className="font-semibold">18h : 57m : 14s</p>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="font-semibold">2.8 ETH</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}

export default function FeaturedArtwork() {
  return (
    <section className="relative px-6 mt-32 grid md:grid-cols-2 gap-16 items-center text-white overflow-hidden">
      
      <div className="relative flex justify-center">
        <div className="absolute w-96 h-96 bg-purple-700/50 rounded-full blur-3xl -z-10" />

        <img
          src="/bitcoin.png"
          alt="Bitcoin Artwork"
          className="rounded-3xl w-full max-w-md object-cover"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold leading-tight">
          Bitcoin <br /> Art Work
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          Created by <span className="text-purple-400">Jonathan Borba</span>
        </p>

        <div className="mt-10 flex items-center gap-10">
          <div>
            <p className="text-sm text-gray-400">Current Bid</p>
            <p className="text-2xl font-bold mt-1">1.09 ETH</p>
            <p className="text-sm text-gray-500">$1,835</p>
          </div>

          <div className="h-12 w-px bg-gray-700" />

          <div>
            <p className="text-sm text-gray-400">Auction Ends In</p>
            <div className="flex gap-4 mt-1 text-center">
              <Time value="18" label="Hours" />
              <Time value="57" label="Minutes" />
              <Time value="14" label="Seconds" />
            </div>
          </div>
        </div>

        <button className="mt-10 bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
          View Art Work
          <span className="text-lg">↗</span>
        </button>
      </div>
    </section>
  )
}

function Time({ value, label }) {
  return (
    <div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  )
}

export default function CTA() {
  return (
    <section className="relative px-6 mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative">
          <div className="absolute -inset-6 bg-purple-700/40 rounded-3xl blur-3xl -z-10" />
          <img
            src="/cta.png"
            alt="NFT waves"
            className="rounded-3xl w-full max-w-md mx-auto"
          />
        </div>

        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Join The Community <br />
            And Get The Best NFT <br />
            Collection
          </h2>

          <button className="mt-10 bg-linear-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-xl font-semibold">
            JOIN COMMUNITY
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Artists() {
  return (
    <section className="relative px-6 mt-32 text-white overflow-hidden">
      
      <div className="absolute left-0 top-1/2 w-100 h-100 bg-purple-700/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Artists</h2>

          <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            View all Artists
            <span>↗</span>
          </button>
        </div>

        <div className="flex justify-center gap-16">
          {[
            "Ferhat Deniz",
            "Sebastian",
            "Javier Miranda",
            "Erick Butler",
          ].map((name, i) => (
            <div key={i} className="text-center">
              <img
                src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <p className="mt-4 text-sm font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

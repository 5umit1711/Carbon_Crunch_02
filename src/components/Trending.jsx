const items = [
  {
    img: "/trending1.png",
    name: "Sebastian",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
  {
    img: "/trending2.png",
    name: "Ferhat Deniz",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
  {
    img: "/trending3.png",
    name: "Javier Miranda",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
  {
    img: "/trending4.png",
    name: "Polina Kondrashova",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
  {
    img: "/trending5.png",
    name: "Milad Fakurian",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
  {
    img: "/trending6.png",
    name: "Erick Butler",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
  },
]

export default function Trending() {
  return (
    <section className="relative px-6 mt-28 text-white overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 w-125 h-125 bg-purple-700/40 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-125 h-125 bg-purple-800/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold">Trending This Week</h2>
        <p className="mt-3 text-gray-400 max-w-md text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div className="flex flex-col gap-20">
          <Card item={items[0]} />
          <Card item={items[2]} border="border-yellow-400" />
          <Card item={items[4]} />
        </div>

        <div className="flex flex-col gap-20 -mt-24">
          <Card item={items[1]} border="border-green-500" />
          <Card item={items[3]} />
          <Card item={items[5]} />
        </div>
      </div>

      <div className="mt-20 flex justify-end">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
          Explore More
          <span className="text-lg">↗</span>
        </button>
      </div>
    </section>
  )
}

function Card({ item, border }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3 text-sm">
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs text-gray-400">{item.subtitle}</p>
        </div>
        <p className="text-purple-400">{item.price}</p>
      </div>

      <div
        className={`rounded-xl overflow-hidden border-2 ${
          border || "border-transparent"
        }`}
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full object-cover"
        />
      </div>
    </div>
  )
}

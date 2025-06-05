// components/menu/MenuItem.jsx
export default function MenuItem({ item }) {
  const price = item.pricing?.table ?? 0;

  return (
    <div className="bg-slate-800 rounded-xl p-3 text-white shadow hover:shadow-lg transition">
      {/* <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded mb-3"
      /> */}
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-sm opacity-70">{item.description}</p>
      <div className="mt-2 text-primary font-bold">£{price.toFixed(2)}</div>
    </div>
  );
}

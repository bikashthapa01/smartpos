// pages/menu/CategoryDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchItemsByCategory, fetchCategoryById } from "../../data/api";

import Loading from "../../components/Loading";
import MenuItem from "./MenuItem";

const CategoryDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const cat = await fetchCategoryById(id);
      const relatedItems = await fetchItemsByCategory(id);
      setCategory(cat);
      setItems(relatedItems);
      setLoading(false);
    };

    fetchDetails();
  }, [id]);

  if (loading) return <Loading text="Loading items..." />;

  if (!category)
    return (
      <div className="text-center text-red-500 py-12">
        <h2 className="text-xl font-semibold">Category not found</h2>
      </div>
    );

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>

      {items.length === 0 ? (
        <p className="text-slate-400">No items in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;

// pages/menu/CategoryDetails.jsx
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Loading from "../../components/Loading";
import MenuItem from "./MenuItem";
import { loadMenu } from "../../store/slices/menuSlice";

const CategoryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { categories, items, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    // Load menu only if not already loaded
    if (categories.length === 0) {
      dispatch(loadMenu());
    }
  }, [dispatch, categories.length]);

  const category = categories.find((cat) => cat.id === id);
  const categoryItems = items.filter((item) => item.categoryId === id);

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

      {categoryItems.length === 0 ? (
        <p className="text-slate-400">No items in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;

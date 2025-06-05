import { useEffect, useState } from "react";
import Categories from "../../components/menu/Categories";
import { fetchCategories } from "../../data/api";
import Loading from "../../components/Loading";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
      setLoading(false);
    };

    fetchAllCategories();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Loading text="Loading categories..." />
      ) : categories.length === 0 ? (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          <p className="text-lg font-semibold">No categories found</p>
          <p className="text-sm">
            Please add some menu categories to get started.
          </p>
        </div>
      ) : (
        <div className="categories">
          <Categories categories={categories} />
        </div>
      )}
    </div>
  );
};

export default Menu;

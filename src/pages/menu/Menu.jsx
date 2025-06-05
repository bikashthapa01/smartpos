import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../../components/menu/Categories";
import Loading from "../../components/Loading";
import { loadMenu } from "../../store/slices/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(loadMenu());
  }, [dispatch]);

  if (loading) return <Loading text="Loading categories..." />;

  return (
    <div className="p-4">
      {categories.length === 0 ? (
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

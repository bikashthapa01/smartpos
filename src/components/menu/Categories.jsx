import Category from "./CategoryItem";

const Categories = ({ categories }) => {
  return (
    <div className="text-slate-800 dark:text-white font-inter grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;

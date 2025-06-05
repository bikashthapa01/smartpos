import Categories from "../../components/menu/Categories";
import menuCategories from "../../data/menucategories";

const Menu = () => {
  return (
    <>
      <div className="categories">
        <Categories categories={menuCategories} />
      </div>
    </>
  );
};

export default Menu;

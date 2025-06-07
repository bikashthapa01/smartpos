import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../../store/slices/menuSlice";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MenuCategoryNav = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId } = useSelector((state) => state.menu);

  const scrollRef = useRef();
  const itemRefs = useRef({});

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -180 : 180;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedCategoryId && itemRefs.current[selectedCategoryId]) {
      itemRefs.current[selectedCategoryId].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedCategoryId]);

  if (!categories.length) {
    return <p className="text-slate-400">No categories available.</p>;
  }

  return (
    <div className="relative w-full flex items-center">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="shrink-0 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 mx-2"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth grow px-2"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            ref={(el) => (itemRefs.current[cat.id] = el)}
            onClick={() => dispatch(setSelectedCategory(cat.id))}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition shadow-sm ${
              selectedCategoryId === cat.id
                ? "bg-blue-600 text-white"
                : "bg-secondary-gray text-white hover:bg-white/10"
            }`}
          >
            {cat.name}
            <span className="ml-2 text-sm text-slate-300">
              ({cat.itemCount})
            </span>
          </button>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="shrink-0 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 mx-2"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default MenuCategoryNav;

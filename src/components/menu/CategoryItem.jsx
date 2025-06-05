import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  const Icon = Icons[category.icon] || Icons.Folder;

  return (
    <Link to={`/menu/${category.id}`}>
      <div className="relative bg-secondary-gray rounded-xl p-4 shadow-sm hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between">
        {/* Icon at top-left */}
        <div className="absolute top-4 left-4 opacity-80">
          <Icon size={28} />
        </div>

        {/* Text section at bottom-left */}
        <div className="mt-16 pl-1">
          <h3 className="text-lg font-semibold mb-1 text-white opacity-95">
            {category.name}
          </h3>
          <p className="text-xs opacity-70"> 6 items</p>
        </div>
      </div>
    </Link>
  );
}

"use client";
type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <h2 className="font-bold text-lg mb-2 border-b border-sky-500">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

const GridLayout = ({ children, columns = 3 }) => {
  // Map the columns prop to the appropriate Tailwind class
  const lgColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[columns] || "lg:grid-cols-3";

  return (
    <div
      className={`
        grid
        grid-cols-1
        sm:grid-cols-2
        ${lgColsClass}
        gap-6
        p-4
        mx-auto
        max-w-7xl
        mt-14
      `}
    >
      {children}
    </div>
  );
};

export default GridLayout;

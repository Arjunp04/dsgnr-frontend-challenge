const LogoCell = ({ name, src }) => {
  return (
    <li className="flex aspect-3/2 items-center justify-center bg-white transition-colors hover:bg-peach md:aspect-2/1 lg:aspect-4/3">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-7 w-auto max-w-[70%] object-contain md:max-h-9 xl:max-h-12"
      />
    </li>
  );
};

export default LogoCell;

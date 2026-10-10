const FooterLinkColumn = ({ title, links }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="mt-6 flex flex-col gap-3 lg:gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-yellow"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;

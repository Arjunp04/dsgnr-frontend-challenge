const FooterLinkColumn = ({ title, links }) => {
  return (
    <div>
      <h2 className="text-body font-bold">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2 xl:mt-6 xl:gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-body font-medium transition-colors hover:text-yellow"
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
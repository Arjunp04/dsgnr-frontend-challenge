import { bottomBar } from "../data/content";

const BottomBar = () => {
  return (
    <div className="page-container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between xl:py-10">
      <nav aria-label="Legal">
        <ul className="flex gap-6 whitespace-nowrap xs:gap-12">
          {bottomBar.links.map((link) => (
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
      </nav>

      <ul className="flex gap-2 xl:gap-4">
        {bottomBar.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              className="block p-2 transition-colors hover:text-yellow"
            >
              <img
                src={social.icon}
                alt=""
                className={
                  social.label.toLowerCase() === "googleplus"
                    ? "h-6.5 w-6.5"
                    : "h-5 w-5"
                }
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;

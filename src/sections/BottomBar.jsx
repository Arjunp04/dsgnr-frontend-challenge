import { bottomBar } from "../data/content";

const BottomBar = () => {
  return (
    <div className="border-t border-white/10">
      <div className="page-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Legal">
          <ul className="flex gap-12 whitespace-nowrap">
            {bottomBar.links.map((link) => (
              <li key={link.label} className="shrink-0">
                <a
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center justify-center gap-4">
          {bottomBar.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="block p-2 transition-opacity hover:opacity-80"
              >
                <img src={social.icon} alt="" className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;

import FooterLinkColumn from "../components/FooterLinkColumn";
import BottomBar from "./BottomBar";
import { footer } from "../data/content";
import logo from "../assets/logo.svg";
import mailIcon from "../assets/mail.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="page-container">
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:justify-between lg:py-16">
          <div>
            <img src={logo} alt="dsgnr." />
            <p className="mt-10 max-w-xl font-medium text-lg">{footer.description}</p>

            <a
              href={`mailto:${footer.email}`}
              className="mt-10 flex w-full max-w-sm items-center border-2 border-yellow px-6 py-3.5 transition-colors hover:bg-white/5"
            >
              <img src={mailIcon} alt="" className="h-6 w-6" />
              <span className="flex-1 text-center text-lg font-bold">
                {footer.email}
              </span>
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-8 md:grid-cols-2 lg:mr-8 lg:gap-12 xl:mr-40 xl:gap-20"
          >
            {footer.columns.map((column) => (
              <FooterLinkColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </nav>
        </div>
      </div>

      <BottomBar />
    </footer>
  );
};

export default Footer;

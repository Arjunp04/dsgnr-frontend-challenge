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
            <img src={logo} alt="dsgnr." className="w-20 xl:w-auto" />
            <p className="text-body mt-6 max-w-md font-medium xl:mt-10 xl:max-w-xl">
              {footer.description}
            </p>

            <a
              href={`mailto:${footer.email}`}
              className="mt-8 flex w-full max-w-md items-center border-2 border-yellow px-6 py-3.5 transition-colors hover:bg-white/5 xl:mt-10 xl:px-8"
            >
              <img src={mailIcon} alt="" className="h-5 w-5 xl:h-6 xl:w-6" />
              <span className="text-body flex-1 text-center font-bold">
                {footer.email}
              </span>
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-8 xs:grid-cols-2 lg:mr-20 lg:gap-16 xl:mr-40 xl:gap-20"
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
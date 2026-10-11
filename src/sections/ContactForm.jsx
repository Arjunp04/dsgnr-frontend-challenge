import Button from "../components/Button";
import FormField from "../components/FormField";
import { contactForm } from "../data/content";
import contactImg from "../assets/contactImg.png";

const ContactForm = () => {
  return (
    <section
      id="contact-form"
      className="page-container pt-10 pb-16 md:pt-12 md:pb-20 xl:pt-14 xl:pb-28"
    >
      <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-12 xl:gap-32">
        <div className="relative h-80 bg-peach xs:h-120 md:h-112 lg:h-auto">
          <img
            src={contactImg}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        <div>
          <h2 className="max-w-[10em] text-2xl text-subheading font-bold xs:text-4xl sm:max-w-none lg:ml-auto lg:max-w-[10em] lg:text-right lg:leading-11">
            {contactForm.heading}
          </h2>

          <form
            className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5 xl:mt-12 xl:gap-7"
            noValidate
          >
            {contactForm.fields.map((field) => (
              <FormField key={field.name} {...field} />
            ))}

            <Button
              type="submit"
              className="mt-2 w-full py-5 text-xl lg:text-large"
            >
              {contactForm.submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import { useState } from "react";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { contactForm } from "../data/content";
import { validateAll } from "../utils/validators";
import { sendProposal } from "../services/sendProposal";
import contactImg from "../assets/contactImg.png";

const emptyValues = { name: "", email: "", website: "", details: "" };
const noneTouched = {
  name: false,
  email: false,
  website: false,
  details: false,
};

const ContactForm = () => {
  const [values, setValues] = useState(emptyValues);
  const [touched, setTouched] = useState(noneTouched);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // errors are not kept in state, they are worked out from values on every render
  const errors = validateAll(values);
  const isSending = status === "sending";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    // remove the old success or error message when the user types again
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    // mark all fields as touched on submit, so every error is shown
    setTouched({ name: true, email: true, website: true, details: true });

    const firstErrorField = contactForm.fields.find(
      (field) => errors[field.name],
    );

    // move focus to the first invalid field and stop
    if (firstErrorField) {
      event.currentTarget.elements[firstErrorField.name].focus();
      return;
    }

    setStatus("sending");
    const isSent = await sendProposal(values);

    if (isSent) {
      setValues(emptyValues);
      setTouched(noneTouched);
      setStatus("success");
    } else {
      // values are not changed, so the user keeps what they typed
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-form"
      className="page-container pt-6 pb-16 md:pt-12 md:pb-20 xl:pt-14 xl:pb-28"
    >
      <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-12 xl:gap-32">
        <div className="relative h-80 bg-peach xs:h-96 md:h-100 lg:h-auto">
          <img
            src={contactImg}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        <div>
          <h2 className="max-w-[10em] text-2xl text-subheading font-bold xs:text-4xl sm:max-w-none lg:ml-auto lg:max-w-[10em] lg:text-right lg:leading-13">
            {contactForm.heading}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5 xl:mt-12 xl:gap-7"
            noValidate
          >
            {contactForm.fields.map((field) => (
              <FormField
                key={field.name}
                {...field}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[field.name] ? errors[field.name] : ""}
              />
            ))}

            <Button
              type="submit"
              disabled={isSending}
              className="mt-2 w-full py-5 text-xl font-medium lg:text-large"
            >
              {isSending ? contactForm.sendingLabel : contactForm.submitLabel}
            </Button>

            {status === "success" && (
              <p role="status" className="text-lg font-medium">
                {contactForm.successMessage}
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-lg font-medium text-error">
                {contactForm.failureMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

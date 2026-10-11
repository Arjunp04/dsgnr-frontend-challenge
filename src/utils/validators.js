import { contactForm } from "../data/content";

const errors = contactForm.errors;

const minDetailsLength = 20;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidUrl = (text) => {
  try {
    const url = new URL(text);
    const isWebLink = url.protocol === "http:" || url.protocol === "https:";
    // new URL("abc:def") also counts as valid, so the dot check is needed
    return isWebLink && url.hostname.includes(".");
  } catch {
    return false;
  }
};

export const validateField = (name, value) => {
  const text = value.trim();

  switch (name) {
    case "name":
      return text ? "" : errors.nameRequired;

    case "email":
      if (!text) return errors.emailRequired;
      return emailPattern.test(text) ? "" : errors.emailInvalid;

    case "website":
      if (!text) return errors.websiteRequired;
      return isValidUrl(text) ? "" : errors.websiteInvalid;

    case "details":
      if (!text) return errors.detailsRequired;
      return text.length >= minDetailsLength ? "" : errors.detailsShort;

    default:
      return "";
  }
};

export const validateAll = (values) => {
  const allErrors = {};

  Object.keys(values).forEach((name) => {
    allErrors[name] = validateField(name, values[name]);
  });

  return allErrors;
};

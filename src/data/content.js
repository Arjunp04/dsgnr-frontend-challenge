import spotify from "../assets/brands/spotify.svg";
import dropbox from "../assets/brands/dropbox.svg";
import tesla from "../assets/brands/tesla.svg";
import reddit from "../assets/brands/reddit.svg";
import google from "../assets/brands/google.svg";
import stripe from "../assets/brands/stripe.svg";
import dhl from "../assets/brands/dhl.svg";
import airbnb from "../assets/brands/airbnb.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import googlePlus from "../assets/google.svg";

export const navLinks = [
  { label: "Intro", href: "#" },
  { label: "Home", href: "#" },
  { label: "Work", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact Us", href: "#contact-form" },
];

export const hero = {
  heading: "We would love to hear from you.",
};

export const contactForm = {
  heading: "We'd love to hear from you",
  fields: [
    { name: "name", label: "Name", placeholder: "Name*", type: "text" },
    { name: "email", label: "Email", placeholder: "Email*", type: "email" },
    {
      name: "website",
      label: "Website URL",
      placeholder: "Website URL*",
      type: "url",
    },
    {
      name: "details",
      label: "Project Details",
      placeholder: "Project Details*",
      type: "textarea",
    },
  ],
  submitLabel: "Send Proposal",
  sendingLabel: "Sending...",
  successMessage: "Thanks! Your proposal has been sent.",
  failureMessage: "Something went wrong. Please try again.",
};

export const office = {
  heading: "Come stop by our office sometime",
  city: "New York, USA",
  address: "Street address, City, State ZIP",
  email: "info@dsgnr.com",
  phone: "+1 000 000 0000",
  directionsLabel: "Get Directions",
};

export const stats = [
  { value: "350+", label: "Clients Worldwide" },
  { value: "20+", label: "Team Members" },
  { value: "100+", label: "Projects Completed" },
  { value: "85M+", label: "Revenue Generated" },
];

export const brandLogos = {
  heading:
    "We worked with the world's biggest brands and the most innovative startups",
  logos: [
    { name: "Spotify", src: spotify },
    { name: "Dropbox", src: dropbox },
    { name: "Tesla", src: tesla },
    { name: "Reddit", src: reddit },
    { name: "Google", src: google },
    { name: "Stripe", src: stripe },
    { name: "DHL", src: dhl },
    { name: "Airbnb", src: airbnb },
  ],
};

export const cta = {
  heading: "Grow Your Business. Build Great Products.",
  buttonLabel: "Book a free call",
  buttonHref: "#",
};

export const footer = {
  description:
    "Dsgnr. is an award winning creative and design agency based in New York, USA.",
  email: "info@dsgnr.com",
  columns: [
    { title: "What We Do", links: navLinks },
    {
      title: "Who We Are",
      links: [
        { label: "About", href: "#" },
        { label: "News", href: "#" },
        { label: "Testimonials", href: "#" },
      ],
    },
  ],
};

export const bottomBar = {
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  socials: [
    { label: "Twitter", href: "#", icon: twitter },
    { label: "Facebook", href: "#", icon: facebook },
    { label: "GooglePlus", href: "#", icon: googlePlus },
  ],
};

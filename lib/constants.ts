import { Home, Layers, Settings, Info, Mail, User } from "lucide-react";

export const SITE_NAME = "Next Stack";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Features",
    href: "/features",
    icon: Layers,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export const MOBILE_NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Features",
    href: "/features",
    icon: Layers,
  },
  {
    label: "Account",
    href: "/account",
    icon: User,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Community", href: "/community" },
    ],
  },
];

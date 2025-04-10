export const siteConfig = {
  name: "Fable Design System",
  description:
    "Visual documentation of Fable's design language, components, and patterns that power our AI-driven life stories platform.",
  url: "https://cambercreative.github.io/fable-design-system",
  ogImage: "https://cambercreative.github.io/fable-design-system/og.jpg",
  links: {
    github: "https://github.com/cambercreative/fable-design-system",
    docs: "https://github.com/cambercreative/fable/tree/main/docs/dsd",
  },
  creator: "Camber Creative",
  keywords: [
    "design system",
    "fable",
    "components",
    "accessibility",
    "design tokens",
    "ui components",
    "design patterns",
    "design guidelines",
    "react",
    "next.js",
    "tailwind css",
  ],
  version: "1.0.0",
};

export type SiteConfig = typeof siteConfig;

export const mainNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Getting Started",
    href: "/getting-started",
  },
  {
    title: "Design Foundations",
    href: "/design-foundations",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Patterns",
    href: "/patterns",
  },
  {
    title: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "Platform Guidelines",
    href: "/platform-guidelines",
  },
  {
    title: "Resources",
    href: "/resources",
  },
];

export const componentCategories = [
  {
    title: "Inputs",
    items: [
      {
        title: "Button",
        href: "/components/button",
      },
      {
        title: "Checkbox",
        href: "/components/checkbox",
      },
      {
        title: "Input",
        href: "/components/input",
      },
      {
        title: "Radio",
        href: "/components/radio",
      },
      {
        title: "Select",
        href: "/components/select",
      },
      {
        title: "Switch",
        href: "/components/toggle",
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        title: "Breadcrumb",
        href: "/components/navigation/breadcrumb",
      },
      {
        title: "Menu",
        href: "/components/navigation/menu",
      },
      {
        title: "Tab",
        href: "/components/navigation/tab",
      },
    ],
  },
  {
    title: "Display",
    items: [
      {
        title: "Accordion",
        href: "/components/accordion",
      },
      {
        title: "Card",
        href: "/components/cards",
      },
      {
        title: "Table",
        href: "/components/tables",
      },
      {
        title: "Toast",
        href: "/components/notifications/toast",
      },
      {
        title: "Tooltip",
        href: "/components/tooltips",
      },
    ],
  },
  {
    title: "Feedback",
    items: [
      {
        title: "Alert",
        href: "/components/notifications/alert",
      },
      {
        title: "Dialog",
        href: "/components/dialogs",
      },
      {
        title: "Progress",
        href: "/components/progress",
      },
      {
        title: "Skeleton",
        href: "/components/skeleton",
      },
    ],
  },
  {
    title: "Layout",
    items: [
      {
        title: "Divider",
        href: "/components/divider",
      },
      {
        title: "Grid",
        href: "/components/grid",
      },
    ],
  },
];

export const designTokenCategories = [
  {
    title: "Color",
    href: "/design-foundations/color",
  },
  {
    title: "Typography",
    href: "/design-foundations/typography",
  },
  {
    title: "Spacing",
    href: "/design-foundations/spacing",
  },
  {
    title: "Elevation",
    href: "/design-foundations/elevation",
  },
  {
    title: "Animation",
    href: "/design-foundations/animation",
  },
  {
    title: "Iconography",
    href: "/design-foundations/iconography",
  },
];

export const responsiveBreakpoints = {
  mobileS: 320,
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const wcagLevels = {
  a: "A",
  aa: "AA",
  aaa: "AAA",
};
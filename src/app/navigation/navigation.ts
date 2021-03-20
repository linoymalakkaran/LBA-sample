import { AtlpNavigation } from "@atlp/types";

export const navigation: AtlpNavigation[] = [
  {
    id: "components",
    title: "Appointments",
    type: "group",
    icon: "pages",
    children: [
      {
        id: "appointments",
        title: "Appointments",
        translate: "Appointments",
        type: "item",
        icon: "apps",
        url: "/appointments",
      },
      {
        id: "payment",
        title: "Payment",
        translate: "Payment",
        type: "item",
        icon: "apps",
        url: "/payment",
      },
    ],
  },
];

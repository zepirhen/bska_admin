import {
    LayoutDashboard,
    Shapes,
    ShoppingBag,
    Tag,
    UsersRound,
  } from "lucide-react";
  
  export const navLinks = [
    {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Хянах самбар",
    },
    {
      url: "/collections",
      icon: <Shapes />,
      label: "Ангилал",
    },
    {
      url: "/products",
      icon: <Tag />,
      label: "Бүтээгдэхүүн",
    },
    {
      url: "/orders",
      icon: <ShoppingBag />,
      label: "Захиалга",
    },
    {
      url: "/customers",
      icon: <UsersRound />,
      label: "Үйлчлүүлэгч",
    },
  ];
  
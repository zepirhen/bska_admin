"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Нэр",
  },
  {
    accessorKey: "email",
    header: "Мэйл хаяг",
  },
];
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "./i18n/locales";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES });

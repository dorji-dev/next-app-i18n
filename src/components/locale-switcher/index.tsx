"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter } from "@/navigation";
import { LOCALES } from "@/i18n/locales";

const LocaleSwitcher = ({ locale }: { locale: string }) => {
  const pathName = usePathname();
  const router = useRouter();
  const localeMappings: Record<(typeof LOCALES)[number], string> = {
    en: "English",
    fr: "Français",
    es: "Español",
    de: "German",
  };

  return (
    <div>
      <Select
        onValueChange={(locale) =>
          router.push(pathName, {
            locale: locale as (typeof LOCALES)[number],
          })
        }
        value={locale}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={localeMappings[locale as (typeof LOCALES)[number]]}
          />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(localeMappings).map(([code, name]) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocaleSwitcher;

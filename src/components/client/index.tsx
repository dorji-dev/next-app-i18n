"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const ClientComponent = () => {
  const t = useTranslations("client");

  return (
    <Card className="w-fit mx-auto">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("sub_title")}</CardDescription>
      </CardHeader>
      <CardContent>{t("body")}</CardContent>
    </Card>
  );
};

export default ClientComponent;

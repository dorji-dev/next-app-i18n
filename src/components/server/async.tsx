import { getTranslations } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AsyncServerComponent = async () => {
  const t = await getTranslations("server.children.async");

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("sub_title")}</CardDescription>
      </CardHeader>
      <CardContent>{t("body")}</CardContent>
    </Card>
  );
};

export default AsyncServerComponent;

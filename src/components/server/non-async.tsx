import {useTranslations} from 'next-intl';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const NonAsyncServerComponent = () => {
  const t = useTranslations('server.children.non_async');

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

export default NonAsyncServerComponent;

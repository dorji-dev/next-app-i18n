import ClientComponent from "@/components/client";
import LocaleSwitcher from "@/components/locale-switcher";
import AsyncServerComponent from "@/components/server/async";
import NonAsyncServerComponent from "@/components/server/non-async";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations();
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-between pt-[40px] px-[20px] space-y-[20px]">
      <div className="text-center">
        <h1 className="sm:text-[20px] max-w-[700px]">
          {t.rich("site.title", {
            link: (chunk) => (
              <a
                className="font-bold text-primary underline"
                href="https://next-intl-docs.vercel.app/"
              >
                {chunk}
              </a>
            ),
          })}
        </h1>
        <div className="mt-[20px] flex flex-col justify-center items-center">
          <LocaleSwitcher locale={locale} />
          <p className="mt-[10px] text-xs text-foreground/40">
           {t('disclaimer')}
          </p>
        </div>
      </div>
      <div className="flex-1 space-y-[40px]">
        <div className="space-y-[36px] border border-dotted p-[20px] rounded-[10px]">
          <h3 className="text-center">{t("server.title")}</h3>
          <div className="flex flex-col sm:flex-row gap-[20px]">
            <AsyncServerComponent />
            <NonAsyncServerComponent />
          </div>
        </div>
        <ClientComponent />
      </div>

      <footer className="py-[30px] text-sm text-center">
        <a
          href="https://github.com/dorji-dev/next-app-i18n"
          className="text-primary mt-[50px] block mb-[10px] hover:underline"
        >
          GITHUB
        </a>
        <p>
          By{" "}
          <a
            href="https://github.com/dorji-dev"
            className="text-foreground/50 hover:underline"
          >
            dorji_dev
          </a>
        </p>
      </footer>
    </main>
  );
}

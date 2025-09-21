import { Headset, LogIn } from "lucide-react";
import Card from "../ui/Card";
import { useTranslation } from "react-i18next";

function GeneralSupportServices() {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-4">
          {t("main.GeneralSupport.GenSupportService")}
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Card
            title={t("main.GeneralSupport.SalesSupp")}
            description={t("main.SubmitSalesReq")}
            icon={Headset}
            buttonText={t("Buttons.ConnectSalesSupp")}
          />

          <Card
            title={t("main.GeneralSupport.LogAccessSup")}
            description={t("main.SubmitSalesReq")}
            icon={LogIn}
            buttonText={t("Buttons.ConnectSalesSupp")}
          />
        </div>
      </section>
    </div>
  );
}

export default GeneralSupportServices;

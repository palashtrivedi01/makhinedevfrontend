import Card from "../ui/Card";
import { Wrench, CreditCard, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

function SubscriberSupportServices() {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-4">
          {t("main.SubscribeSupp.TechSupp")} / {t("main.SubscribeSupp.BillSupp")} / {t("main.SubscribeSupp.OperationSupp")}
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Card
            title={t("main.SubscribeSupp.TechSupp")}
            description={t("main.SubmitSalesReq")}
            icon={Wrench}
            buttonText={t("Buttons.ConnectSalesSupp")}
          />

          <Card
            title={t("main.SubscribeSupp.BillSupp")}
            description={t("main.SubmitSalesReq")}
            icon={CreditCard}
            buttonText={t("Buttons.ConnectSalesSupp")}
          />

          <Card
            title={t("main.SubscribeSupp.OperationSupp")}
            description={t("main.SubmitSalesReq")}
            icon={Settings}
            buttonText={t("Buttons.ConnectSalesSupp")}
          />
        </div>
      </section>
    </div>
  );
}

export default SubscriberSupportServices;

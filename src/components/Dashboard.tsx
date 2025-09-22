import Card from "../ui/Card";
import { Building2, ClipboardList, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-4">
          {t("main.DashBoard.YourDash")}
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Card
            title={t("main.DashBoard.CreateBusinessUnit")}
            description={t("main.SubmitSalesReq")}
            icon={Building2}
            classes="bg-gray-300"
          />

          <Card
            title={t("main.DashBoard.InProcessBussUnit")}
            description={t("main.SubmitSalesReq")}
            icon={ClipboardList}
            count={4}
            classes="bg-gray-300"
          />

          <Card
            title={t("main.DashBoard.RegisterBusinessUnit")}
            description={t("main.SubmitSalesReq")}
            icon={CheckCircle}
            count={3}
            classes="bg-gray-300"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

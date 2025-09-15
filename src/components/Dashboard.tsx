import Card from "../ui/Card";
import {
  Building2,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-4">Your Dashboard</h2>
        <div className="flex gap-4 flex-wrap">
          <Card
            title="Create Business Unit"
            description="Create a business Unit"
            icon={Building2}
            classes="bg-gray-300"
          />
          <Card
            title="In-Process Business Unit"
            description="Submit a sales request or connect with a sales associates."
            icon={ClipboardList}
            count={4}
            classes="bg-gray-300"
          />
          <Card
            title="Registered Business Unit"
            description="Submit a sales request or connect with a sales associates."
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


import Card from '../ui/Card';
import { Wrench, CreditCard, Settings } from 'lucide-react';

function SubscriberSupportServices() {
  return (
    <>
     <div className="p-6 space-y-8">
        <section>
        <h2 className="text-lg font-semibold mb-4">
          Subscriber Support Services
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Card
            title="Technical Support"
            description="Submit a sales request or connect with a sales associates."
            icon={Wrench}
            buttonText="Connect with sales support"
          />
          <Card
            title="Billing Support"
            description="Submit a sales request or connect with a sales associates."
            icon={CreditCard}
            buttonText="Connect with sales support"
          />
          <Card
            title="Operation Support"
            description="Submit a sales request or connect with a sales associates."
            icon={Settings}
            buttonText="Connect with sales support"
          />
        </div>
      </section>
     </div>
    </>
  )
}

export default SubscriberSupportServices
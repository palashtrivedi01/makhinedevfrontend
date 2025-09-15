
import { Headset, LogIn } from 'lucide-react';
import Card from '../ui/Card';

function GeneralSupportServices() {
  return (
    <>
        <div className="p-6 space-y-8">
            <section>
        <h2 className="text-lg font-semibold mb-4">
          General Support Services
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Card
            title="Sales Support"
            description="Submit a sales request or connect with a sales associates."
            icon={Headset}
            buttonText="Connect with sales support"
          />
          <Card
            title="Login/Access Support"
            description="Submit a sales request or connect with a sales associates."
            icon={LogIn}
            buttonText="Connect with sales support"
          />
        </div>
      </section>
        </div>
    </>
  )
}

export default GeneralSupportServices
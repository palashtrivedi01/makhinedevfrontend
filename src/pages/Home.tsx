import Dashboard from '../components/Dashboard'
import GeneralSupportServices from '../components/GeneralSupportServices'
import RegisterbusinessOrganization from '../components/RegisterbusinessOrganization'
import SubscriberSupportServices from '../components/SubscriberSupportServices'

function Home() {
  return (
    <div className='w-full h-fit flex flex-col p-4 px-16'>
      <RegisterbusinessOrganization />
      <Dashboard />
      <GeneralSupportServices />
      <SubscriberSupportServices />
    </div>
  )
}

export default Home
import Dashboard from '../components/Dashboard'
import GeneralSupportServices from '../components/GeneralSupportServices'
import RegisterbusinessOrganization from '../components/RegisterbusinessOrganization'
import SubscriberSupportServices from '../components/SubscriberSupportServices'

function Home() {
  return (
    <div className='w-full h-fit flex flex-col p-4 px-4 md:px-16 gap-2 items-start md:gap-2 justify-center'>
      <RegisterbusinessOrganization />
      <Dashboard />
      <GeneralSupportServices />
      <SubscriberSupportServices />
    </div>
  )
}

export default Home
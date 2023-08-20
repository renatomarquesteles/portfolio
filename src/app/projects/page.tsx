import { ProfessionalWorks } from './professional-works'
import { SideProjects } from './side-projects'
import { Web3 } from './web3'

export default function Projects() {
  return (
    <main className="w-full max-w-lg mx-auto my-0 px-4 sm:px-0">
      <ProfessionalWorks />
      <SideProjects />
      <Web3 />
    </main>
  )
}

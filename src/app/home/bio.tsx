import { SectionTitle } from '@/components/section-title'

export function Bio() {
  return (
    <section className="mb-6">
      <SectionTitle>Bio</SectionTitle>

      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">1995</span>
        <span className="text-slate text-opacity-90">
          Born in Franca (SP), Brazil.
        </span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">2018-2019</span>
        <span className="text-slate text-opacity-90">
          Worked at SMN Tecnologia da Informação.
        </span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">2020</span>
        <span className="text-slate text-opacity-90">
          Completed the GoStack bootcamp program by Rocketseat.
        </span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">2020-2021</span>
        <span className="text-slate text-opacity-90">Worked at VExpenses.</span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">2021</span>
        <span className="text-slate text-opacity-90">
          Completed a Bachelor&apos;s degree in Software Engineering at
          Franca&apos;s Municipal University Center (Uni-FACEF).
        </span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90">2023</span>
        <span className="text-slate text-opacity-90">
          Completed the Ignite React bootcamp program by Rocketseat.
        </span>
      </p>
      <p className="flex gap-4">
        <span className="font-bold text-slate text-opacity-90 whitespace-nowrap">
          2023 to present
        </span>
        <span className="text-slate text-opacity-90">
          Working as a freelancer
        </span>
      </p>
    </section>
  )
}

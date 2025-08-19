import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import { Separator } from '../ui/separator'
import { Dock, DockIcon } from './dock'
import { DockLink } from './dock-link'
import { NavRoutes } from './nav-routes'

export function NavDock() {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-10">
      <Dock
        direction="middle"
        className="bg-gray-300/75 border-border dark:bg-gray-900/70"
      >
        <NavRoutes />

        <Separator orientation="vertical" className="mx-2" />

        <DockIcon>
          <DockLink
            title="GitHub"
            href="https://github.com/renatomarquesteles"
            icon={<FaGithub size={20} />}
          />
        </DockIcon>
        <DockIcon>
          <DockLink
            title="LinkedIn"
            href="https://www.linkedin.com/in/renato-marques-teles/"
            icon={<FaLinkedinIn size={20} />}
          />
        </DockIcon>
      </Dock>
    </div>
  )
}

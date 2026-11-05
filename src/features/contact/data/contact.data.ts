import type { ContactChannel } from '../types'

export const contactChannels: ContactChannel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Directo',
    value: '+54 11 3011-1503',
    href: 'https://wa.me/541130111503?text=Hola%20Lautaro,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto%20web',
    actionLabel: 'Iniciar conversación',
    isExternal: true,
    highlight: true,
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    value: 'lautarodesouches@outlook.com',
    href: 'mailto:lautarodesouches@outlook.com',
    actionLabel: 'Enviar email',
    isExternal: false,
    highlight: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profesional',
    value: 'linkedin.com/in/lautarodesouches',
    href: 'https://linkedin.com/in/lautarodesouches',
    actionLabel: 'Ver perfil',
    isExternal: true,
    highlight: false,
  },
  {
    id: 'github',
    label: 'GitHub Repositorios',
    value: 'github.com/lautarodesouches',
    href: 'https://github.com/lautarodesouches',
    actionLabel: 'Explorar código',
    isExternal: true,
    highlight: false,
  },
]


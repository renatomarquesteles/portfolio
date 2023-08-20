import { BsEnvelopeFill } from 'react-icons/bs'
import { PiWhatsappLogoFill } from 'react-icons/pi'

export function Contact() {
  return (
    <section className="mb-6">
      <h2 className="my-4 font-bold text-xl underline underline-offset-[6px] decoration-4 decoration-gray-400 text-slate text-opacity-90 font-m-plus-rounded-1c">
        Contact
      </h2>
      <p className="text-slate text-opacity-90">
        Feel free to get in touch with me.
      </p>

      <div className="w-fit mx-auto">
        <a
          href="mailto:renatomarquesteles@gmail.com"
          className="w-full my-4 mx-auto py-[10px] px-5 rounded-md bg-teal-700 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-teal-800"
        >
          <BsEnvelopeFill size={16} />
          Send an email
        </a>
        <a
          href="https://wa.me/5516992921771"
          target="_blank"
          className="w-fit my-4 mx-auto py-[10px] px-5 rounded-md bg-teal-700 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-teal-800"
        >
          <PiWhatsappLogoFill size={16} />
          Chat via WhatsApp
        </a>
      </div>
    </section>
  )
}

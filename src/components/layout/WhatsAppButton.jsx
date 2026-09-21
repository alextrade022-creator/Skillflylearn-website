import { CONTACT } from '../../data/site';

/** Floating WhatsApp contact button, fixed to the bottom-right of every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5.5 right-5.5 z-90 flex h-15 w-15 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-transform [animation:sf-pulse_2.6s_ease-out_infinite] hover:scale-110"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.08-1.77-.2-.75-.28-2.6-1.02-4.2-2.9-1.25-1.47-1.6-2.64-1.68-2.92-.08-.28-.02-.9.35-1.4.36-.5.62-.6.83-.7.2-.1.44-.08.63-.06.2.02.42-.03.66.5.24.53.82 2 .89 2.14.07.15.11.32.02.5-.1.18-.35.5-.5.66-.15.17-.28.28-.13.55.15.28.6 1.05 1.28 1.68.87.8 1.53 1.03 1.8 1.15.28.12.44.1.6-.06.17-.16.7-.75.88-1.01.19-.26.38-.2.63-.1.24.1 1.55.78 1.81.92.27.14.45.21.51.32.06.11.06.66-.18 1.34z" />
      </svg>
    </a>
  );
}

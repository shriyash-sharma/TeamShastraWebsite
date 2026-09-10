import {
  supportEmail,
  supportPhoneDisplay,
  supportPhoneTel,
  supportPhoneWhatsApp
} from "@/lib/site";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-channel-icon">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-channel-icon">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.9Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-channel-icon">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.89.49 3.72 1.43 5.34L2 22l4.89-1.52a9.86 9.86 0 0 0 5.15 1.42h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.77 14.11c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.37-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.65-.14.26.1 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z"
      />
    </svg>
  );
}

type Props = {
  compact?: boolean;
};

export function SupportChannels({ compact = false }: Props) {
  return (
    <div className={`support-channels${compact ? " is-compact" : ""}`}>
      <a className="support-channel" href={`mailto:${supportEmail}`}>
        <span className="support-channel-glyph" aria-hidden="true">
          <MailIcon />
        </span>
        <span>
          <span className="support-channel-label">Email</span>
          <span className="support-channel-value">{supportEmail}</span>
        </span>
      </a>
      <a className="support-channel" href={supportPhoneTel}>
        <span className="support-channel-glyph" aria-hidden="true">
          <PhoneIcon />
        </span>
        <span>
          <span className="support-channel-label">Call</span>
          <span className="support-channel-value">{supportPhoneDisplay}</span>
        </span>
      </a>
      <a
        className="support-channel support-channel-whatsapp"
        href={supportPhoneWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="support-channel-glyph" aria-hidden="true">
          <WhatsAppIcon />
        </span>
        <span>
          <span className="support-channel-label">WhatsApp</span>
          <span className="support-channel-value">{supportPhoneDisplay}</span>
        </span>
      </a>
    </div>
  );
}

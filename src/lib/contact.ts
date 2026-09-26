/** Reasons offered on the contact form. Shared by the form and /api/contact. */
export const CONTACT_REASONS = [
  { value: 'general', label: 'General question or feedback' },
  { value: 'correction', label: 'Report an error in an article' },
  { value: 'partnership', label: 'Partnership, advertising or sponsorship' },
  { value: 'privacy', label: 'Privacy or data request' },
  { value: 'copyright', label: 'Copyright or content removal' },
] as const;

export type ContactReason = (typeof CONTACT_REASONS)[number]['value'];

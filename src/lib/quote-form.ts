// Where the quote request form is sent: Trislab's shared form Worker
// (docs/forms.md, D-32), which checks Turnstile and the fields, e-mails the
// request to the company's mailbox and stores nothing. It then sends the
// visitor to the thank-you page or the error page (src/lib/navigation.ts).
//
// The Worker is not built yet. Until it is, `action` stays undefined: the form
// is shown, its button is switched off and a note says that sending is not
// on yet. When the Worker exists, set `action` to its address and
// `turnstileSiteKey` to the widget's public site key, add the form page's
// Content-Security-Policy rule to public/_headers (docs/forms.md, section 3),
// and review the claims on the legal pages for the form page.
export const quoteForm: {
  /** The form Worker's address (https://…), from tl-cloud-infrastructure. */
  action?: string;
  /** The Turnstile widget's public site key. Public, not a secret. */
  turnstileSiteKey?: string;
} = {};

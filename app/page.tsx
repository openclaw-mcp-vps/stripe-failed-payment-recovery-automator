export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders · $10k+ MRR
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-retry failed payments<br />
          <span className="text-[#58a6ff]">with smart timing</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect Stripe once. Our ML-optimized retry engine detects failed payments and automatically recovers revenue with perfectly timed retries and custom email sequences.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { value: '34%', label: 'Avg recovery rate' },
          { value: '< 5 min', label: 'Setup time' },
          { value: '$0 risk', label: 'Pay only on savings' },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-[#8b949e] text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited Stripe accounts',
              'ML-optimized retry scheduling',
              'Custom email recovery sequences',
              'Real-time recovery dashboard',
              'Webhook event logs',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the ML-optimized timing work?',
              a: 'Our model analyzes historical payment failure patterns across card types, banks, and time-of-day signals to schedule retries at the moment most likely to succeed — typically recovering 30–40% of failed charges.',
            },
            {
              q: 'Do I need to change anything in my Stripe setup?',
              a: 'No. You register a webhook endpoint in your Stripe dashboard (takes 2 minutes) and we handle everything else. No SDK changes, no code deploys.',
            },
            {
              q: 'What happens if a payment still fails after retries?',
              a: 'We trigger a customizable dunning email sequence to your customer, giving them a direct link to update their payment method — so you capture revenue even when automatic retries are exhausted.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Payment Recovery Automator. All rights reserved.
      </footer>
    </main>
  )
}

'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // TODO: Implement actual newsletter subscription via Server Action
      // For now, just show success message
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessage({
        type: 'success',
        text: 'Thank you for subscribing! Check your email for seasonal updates.',
      });
      setEmail('');
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-margin-desktop text-center">
        <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">
          Join the Archive
        </p>
        <h2 className="font-headline-lg text-headline-lg mb-8">
          Receive seasonal botanical wisdom and early access to rare harvests.
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email Address"
            className="flex-grow bg-transparent border-b-2 border-outline-variant/30 text-on-background py-4 px-2 focus:border-primary focus:ring-0 font-body-md transition-all outline-none"
          />
          <Button variant="primary" size="lg" type="submit" disabled={isLoading} className="uppercase tracking-widest">
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        {message && (
          <div
            className={`mt-6 p-4 rounded text-label-sm uppercase tracking-widest ${
              message.type === 'success'
                ? 'bg-tertiary/10 text-tertiary border border-tertiary/30'
                : 'bg-error/10 text-error border border-error/30'
            }`}
          >
            {message.text}
          </div>
        )}

        <p className="font-label-sm text-label-sm text-on-surface-variant mt-8 opacity-50">
          By joining, you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}

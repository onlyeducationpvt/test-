import { CheckCircle } from 'lucide-react';

interface ThankYouMessageProps {
  name: string;
  variant?: 'standard' | 'popup';
}

export function ThankYouMessage({ name, variant = 'standard' }: ThankYouMessageProps) {
  return (
    <div className={`text-center py-6 ${variant === 'popup' ? 'text-white' : ''}`}>
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="mt-3 text-lg font-medium">Thank you, {name}!</h2>
      <p className="mt-2">
        We've received your message and will get back to you shortly.
      </p>
    </div>
  );
}

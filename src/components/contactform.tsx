import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import { Phone } from 'lucide-react';
import clsx from 'clsx';

// Updated validation schema (phone must be only digits, min 10)
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: 'Phone number must contain only numbers.' })
    .min(10, { message: 'Phone number must be at least 10 digits.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: '🎉 Success!',
          description: 'We’ve received your info. Welcome aboard!',
        });
        form.reset();
        setFormSubmitted(true);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit form',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={clsx(
        'sticky top-10 p-6 bg-white rounded-lg border border-gray-200 transition-all duration-500',
        {
          'shadow-lg': !formSubmitted,
          'shadow-none': formSubmitted,
        }
      )}
    >
      <h2 className="text-xl font-bold text-center mb-6">Get The Best Quote</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    {...field}
                    className="focus:ring-2 focus:ring-blue-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                      <Phone className="h-4 w-4 text-gray-500 mr-2" />
                      <span>+91</span>
                    </div>
                    <Input
                      type="tel"
                      className="rounded-l-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Phone number"
                      {...field}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/\D/g, '');
                        field.onChange(onlyDigits);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get It Now'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

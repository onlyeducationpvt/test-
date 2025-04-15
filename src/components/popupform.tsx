"use client";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import { 
  X, 
  Home, 
  BadgeCheck, 
  Phone, 
  AtSign, 
  User, 
  MessageSquare,
  Shield, 
  GraduationCap,
  Clock
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: 'Phone number must contain only numbers.' })
    .min(10, { message: 'Phone number must be at least 10 digits.' }),
});

type FormValues = z.infer<typeof formSchema>;

interface PopupContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopupContactForm({ isOpen, onClose }: PopupContactFormProps) {
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

  // Reset form when popup is opened
  useEffect(() => {
    if (isOpen) {
      form.reset();
      setFormSubmitted(false);
    }
  }, [isOpen, form]);

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
          description: 'Thank you for your interest. We will contact you soon!',
        });
        form.reset();
        setFormSubmitted(true);
        // Close popup after successful submission with a small delay
        setTimeout(() => {
          onClose();
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn overflow-hidden">
        {/* Close button with improved styling */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all duration-200"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col">
          {/* Header with gradient background */}
          <div className="bg-blue-200 pt-8 pb-6 px-6 rounded-t-2xl">
            <div className="bg-white rounded-full p-3 flex items-center justify-center h-16 w-16 mx-auto shadow-lg mb-4">
              <img 
                src="https://iili.io/3lODhX9.png" 
                alt="Company Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            
            <h2 className="text-xl font-bold text-center text-blue-700 mb-1">Register for Exclusive Offers</h2>
            {/* <p className="text-blue-400 text-center text-sm">Complete this form to unlock premium deals</p> */}
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-6 py-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          className="pl-10 py-6 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AtSign size={18} className="text-gray-400" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          className="pl-10 py-6 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <div className="bg-gray-200 rounded px-1 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-700">+91</span>
                          </div>
                        </div> */}
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <Input
                          type="tel"
                          className="pl-10 py-6 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="10-digit mobile number"
                          {...field}
                          onChange={(e) => {
                            const onlyDigits = e.target.value.replace(/\D/g, '');
                            field.onChange(onlyDigits);
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs font-medium" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-base font-medium shadow-lg shadow-blue-200 transition-all duration-200 mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span>Get Premium Access</span>
                )}
              </Button>
            </form>
          </Form>
          
          {/* Benefits section with Apple-style icons */}
          <div className="grid grid-cols-3 gap-1 py-5 px-3 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 rounded-full bg-blue-50 mb-2 shadow-sm">
                <Home className="h-5 w-5 text-blue-600" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-gray-700">Free Site Visit</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-2 rounded-full bg-green-50 mb-2 shadow-sm">
                <GraduationCap className="h-5 w-5 text-green-600" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-gray-700">Expert Advice</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-2 rounded-full bg-orange-50 mb-2 shadow-sm">
                <Clock className="h-5 w-5 text-orange-600" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-gray-700">24/7 Support</span>
            </div>
          </div>
          
          {/* Trust badge at bottom */}
          <div className="bg-blue-50 px-4 py-3 rounded-b-2xl flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Trusted by 10,000+ Home Buyers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
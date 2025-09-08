import { z } from 'zod';

// User authentication schemas
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Address schema
export const addressSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  addressLine1: z.string().min(1, 'Address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().optional(),
});

// Checkout schemas
export const shippingSchema = addressSchema;

export const paymentSchema = z.object({
  cardNumber: z.string().min(16, 'Card number must be 16 digits').max(19, 'Card number is too long'),
  expiryMonth: z.string().min(2, 'Month is required').max(2, 'Invalid month'),
  expiryYear: z.string().min(2, 'Year is required').max(4, 'Invalid year'),
  cvv: z.string().min(3, 'CVV must be 3-4 digits').max(4, 'CVV is too long'),
  cardholderName: z.string().min(1, 'Cardholder name is required'),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating is required').max(5, 'Rating must be between 1-5'),
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  content: z.string().min(10, 'Review must be at least 10 characters').max(1000, 'Review is too long'),
});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type ShippingFormData = z.infer<typeof shippingSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;
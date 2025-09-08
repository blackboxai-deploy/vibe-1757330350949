import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold text-lg">
                M
              </div>
              <span className="font-bold text-xl">ModernShop</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your premium e-commerce destination for electronics, fashion, home & living, and sports equipment. 
              Quality products with exceptional service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                📘
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                🐦
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                📷
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                💼
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=electronics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/products?category=sports" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sports & Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/help/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/help/sizing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/help/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive deals and new product announcements.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm"
              />
              <Button type="submit" className="w-full max-w-sm">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2024 ModernShop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                V
              </div>
              <div className="w-8 h-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">
                M
              </div>
              <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-pink-600 rounded text-white text-xs flex items-center justify-center font-bold">
                A
              </div>
              <div className="w-8 h-5 bg-gradient-to-r from-blue-800 to-indigo-900 rounded text-white text-xs flex items-center justify-center font-bold">
                P
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
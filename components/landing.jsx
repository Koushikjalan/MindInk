'use client';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { SignInButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import { Cherry, BookOpen, Cloud, PenBox, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Landing() {
  const featuresRef = useRef(null);
  const { isSignedIn } = useAuth();

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const AuthButton = ({ children, className, isPrimary = false, variant }) => {
    if (isSignedIn) {
      return (
        <Link href="/dashboard">
          <Button variant={variant} className={className}>
            {children}
          </Button>
        </Link>
      );
    }
    return (
      <SignInButton>
        <Button variant={variant} className={className}>
          {children}
        </Button>
      </SignInButton>
    );
  };

  return (
    <div className="min-h-screen bg-[#181818] text-[#fffbe6] flex flex-col">
      {/* Hero Section - Minimal and elegant */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#ffd600]">
            Mind<span className="text-[#fffbe6]">Ink</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#fffbe6]/80 max-w-2xl mx-auto leading-relaxed">
            The professional's choice for AI-powered journaling and self-reflection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <AuthButton 
              className="bg-[#ffd600] hover:bg-[#ffe066] text-[#181818] px-8 py-5 text-base rounded-lg font-semibold border border-[#ffd600] transition-all hover:scale-[1.02]"
              isPrimary
            >
              <PenBox size={18} className="mr-2" />
              {isSignedIn ? 'Continue Journaling' : 'Get Started'}
            </AuthButton>
            <Button
              onClick={scrollToFeatures}
              variant="outline"
              className="border-[#ffd600] text-[#ffd600] bg-[#232323] hover:text-[#ffd600]/50 hover:bg-[#ffd600]/10 px-8 py-5 text-base rounded-lg font-semibold transition-all hover:scale-[1.02]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ffd60033] to-transparent"></div>

      {/* Features Section - Clean and professional */}
      <section ref={featuresRef} className="w-full py-24 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#ffd600] mb-4">
              Professional Journaling Tools
            </h2>
            <p className="text-lg text-[#fffbe6]/70 max-w-3xl mx-auto">
              Designed for those who take self-reflection seriously
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-[#ffd600]" />,
                title: 'Advanced Mood Analytics',
                description: 'AI-powered emotional pattern recognition with professional-grade insights and reporting.',
              },
              {
                icon: <Sparkles className="h-8 w-8 text-[#ffd600]" />,
                title: 'Intelligent Summaries',
                description: 'Concise executive summaries of your journal entries with key takeaways.',
              },
              {
                icon: <Cloud className="h-8 w-8 text-[#ffd600]" />,
                title: 'Secure Cloud Sync',
                description: 'Enterprise-grade encryption with seamless cross-device synchronization.',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#ffd600]" />,
                title: 'Privacy First',
                description: 'Zero-knowledge architecture ensures your thoughts remain completely private.',
              },
              {
                icon: <Cherry className="h-8 w-8 text-[#ffd600]" />,
                title: 'Minimalist Design',
                description: 'Distraction-free interface optimized for focused writing sessions.',
              },
            ].map((feature, idx) => (
              <Card 
                key={idx} 
                className="bg-[#232323] border border-[#2a2a2a] rounded-lg hover:border-[#ffd60066] transition-all h-full group"
              >
                <CardHeader className="flex flex-row items-start gap-4 pb-0">
                  <div className="p-2 rounded-md bg-[#1e1e1e] border border-[#ffd60033] group-hover:bg-[#ffd600]/10">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-medium text-[#ffd600]">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-[#fffbe6]/70 text-sm mt-1">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-20 bg-[#181818]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="space-y-4">
            <p className="text-xl italic text-[#fffbe6]/80">
              "MindInk has transformed my daily reflection practice. The analytics provide insights I never would have noticed on my own."
            </p>
            <footer className="text-[#ffd600] font-medium">
              — Dr. Sarah Chen, Clinical Psychologist
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Final CTA - Elevated design */}
      <section className="w-full py-24 bg-gradient-to-br from-[#1a1a1a] to-[#121212]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="p-8 bg-[#232323] rounded-xl border border-[#2a2a2a] shadow-lg">
            <h2 className="text-2xl font-semibold text-[#ffd600] mb-4">
              Ready to elevate your journaling practice?
            </h2>
            <p className="text-[#fffbe6]/70 mb-6">
              Join professionals who use MindInk for meaningful self-discovery.
            </p>
            <AuthButton 
              className="bg-[#ffd600] hover:bg-[#ffe066] text-[#181818] px-8 py-4 text-base rounded-lg font-medium border border-[#ffd600] transition-all hover:scale-[1.02] w-full sm:w-auto"
              isPrimary
            >
              {isSignedIn ? 'Open Dashboard' : 'Start Your 30-Day Trial'}
            </AuthButton>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      
    </div>
  );
}
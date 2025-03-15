'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  content: React.ReactNode;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
  toastMessage: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function FeatureCard({
  title,
  description,
  content,
  buttonText,
  buttonVariant = 'default',
  toastMessage,
  imageUrl,
  imageAlt,
}: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {imageUrl && imageAlt && (
          <div className="flex items-center gap-2">
            <Image src={imageUrl} alt={imageAlt} width={80} height={20} />
            <span>Next.js 14</span>
          </div>
        )}
        {content}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => toast(toastMessage)}
          variant={buttonVariant}
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
} 
import { FeatureCard } from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Next.js TypeScript Template
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A modern starter template with Next.js, TypeScript, Tailwind CSS, Shadcn UI, Prettier, and ESLint
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Frontend Technologies"
            description="Core technologies used in this template"
            content={
              <>
                <p>• React 19</p>
                <p>• TypeScript</p>
                <p>• Tailwind CSS</p>
              </>
            }
            buttonText="Learn More"
            buttonVariant="outline"
            toastMessage="Next.js is awesome!"
            imageUrl="/next.svg"
            imageAlt="Next.js"
          />

          <FeatureCard 
            title="UI Components"
            description="Beautiful, accessible UI components"
            content={
              <>
                <p>• Shadcn UI</p>
                <p>• Customizable components</p>
                <p>• Dark mode support</p>
                <p>• Responsive design</p>
              </>
            }
            buttonText="Explore Components"
            toastMessage="Try out these beautiful components!"
          />

          <FeatureCard 
            title="Developer Experience"
            description="Tools for a better development workflow"
            content={
              <>
                <p>• ESLint for code quality</p>
                <p>• Prettier for code formatting</p>
                <p>• TypeScript for type safety</p>
                <p>• Fast Refresh for quick feedback</p>
              </>
            }
            buttonText="Start Coding"
            buttonVariant="outline"
            toastMessage="Happy coding!"
          />

          <FeatureCard 
            title="Getting Started"
            description="Quick steps to begin your project"
            content={
              <>
                <p>1. Modify <code className="bg-muted px-1 py-0.5 rounded">src/app/page.tsx</code></p>
                <p>2. Add your own components</p>
                <p>3. Customize styles in <code className="bg-muted px-1 py-0.5 rounded">globals.css</code></p>
                <p>4. Build something amazing!</p>
              </>
            }
            buttonText="Let's Go!"
            toastMessage="Ready to build your next project!"
          />
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Shadcn UI</p>
        </footer>
      </div>
    </div>
  );
}

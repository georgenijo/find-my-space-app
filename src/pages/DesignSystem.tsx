import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { tokens } from "@/styles/tokens";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-wide flex h-16 items-center justify-between">
          <h1 className="text-2xl font-semibold">Urban Sophisticated Design System</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container-wide py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-gradient-primary">
            Find My Space Design System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive design system built on Urban Sophisticated principles, featuring muted
            elegance, superior readability, and seamless dark mode support.
          </p>
        </section>

        {/* Colors Section */}
        <section className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Color Palette</h3>
            <p className="text-muted-foreground">
              Our carefully curated color system inspired by urban architecture and nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Primary - Charcoal</CardTitle>
                <CardDescription>Deep, sophisticated gray for main UI elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-4">
                    <div
                      className={`w-16 h-10 rounded-md bg-primary-${shade}`}
                      style={{
                        backgroundColor: `hsl(${tokens.colors.primary[shade as keyof typeof tokens.colors.primary]})`
                      }}
                    />
                    <span className="text-sm font-mono">{shade}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Secondary Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Secondary - Forest Green</CardTitle>
                <CardDescription>Natural, trustworthy accent color</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-4">
                    <div
                      className={`w-16 h-10 rounded-md bg-secondary-${shade}`}
                      style={{
                        backgroundColor: `hsl(${tokens.colors.secondary[shade as keyof typeof tokens.colors.secondary]})`
                      }}
                    />
                    <span className="text-sm font-mono">{shade}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Accent Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Accent - Warm Gold</CardTitle>
                <CardDescription>Premium, inviting highlight color</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-4">
                    <div
                      className={`w-16 h-10 rounded-md bg-accent-${shade}`}
                      style={{
                        backgroundColor: `hsl(${tokens.colors.accent[shade as keyof typeof tokens.colors.accent]})`
                      }}
                    />
                    <span className="text-sm font-mono">{shade}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Typography</h3>
            <p className="text-muted-foreground">
              Clean, readable typography with Inter font family.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Display 2XL</p>
                  <h1 className="text-7xl font-bold">Urban Sophistication</h1>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Display XL</p>
                  <h2 className="text-6xl font-bold">Find Your Perfect Space</h2>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Heading 1</p>
                  <h3 className="text-4xl font-semibold">Premium Parking Solutions</h3>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Heading 2</p>
                  <h4 className="text-3xl font-semibold">Discover Available Spots</h4>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Body Large</p>
                  <p className="text-lg leading-relaxed">
                    Experience the future of urban parking with our sophisticated platform that
                    connects space owners with those seeking convenient parking solutions.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Body Base</p>
                  <p className="text-base">
                    Our platform offers a seamless experience for both parking space owners and
                    seekers, with real-time availability and instant booking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Components Section */}
        <section className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Components</h3>
            <p className="text-muted-foreground">
              Core UI components styled with Urban Sophisticated principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Various button styles and states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Large Button</Button>
                  <Button size="default">Default Button</Button>
                  <Button size="sm">Small Button</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Card Component</CardTitle>
                <CardDescription>Content container with subtle elevation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="bg-surface">
                    <CardContent className="pt-6">
                      <p className="text-sm">Nested card with surface background</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 shadow-lg">
                    <CardContent className="pt-6">
                      <p className="text-sm">Card with custom border and shadow</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Spacing System</h3>
            <p className="text-muted-foreground">
              Consistent spacing based on a 4px unit system.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((space) => (
                  <div key={space} className="flex items-center gap-4">
                    <span className="text-sm font-mono w-16">{space}</span>
                    <div
                      className="bg-primary h-8 rounded"
                      style={{ width: `${space * 0.25}rem` }}
                    />
                    <span className="text-sm text-muted-foreground">{space * 4}px</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Effects Section */}
        <section className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Visual Effects</h3>
            <p className="text-muted-foreground">
              Subtle shadows, gradients, and animations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shadows */}
            <Card>
              <CardHeader>
                <CardTitle>Shadows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-card rounded-lg shadow-xs">XS Shadow</div>
                <div className="p-4 bg-card rounded-lg shadow-sm">Small Shadow</div>
                <div className="p-4 bg-card rounded-lg shadow">Default Shadow</div>
                <div className="p-4 bg-card rounded-lg shadow-md">MD Shadow</div>
                <div className="p-4 bg-card rounded-lg shadow-lg">Large Shadow</div>
              </CardContent>
            </Card>

            {/* Gradients */}
            <Card>
              <CardHeader>
                <CardTitle>Gradients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-primary text-white">
                  Primary Gradient
                </div>
                <div className="p-4 rounded-lg bg-gradient-secondary text-white">
                  Secondary Gradient
                </div>
                <div className="p-4 rounded-lg bg-gradient-accent text-primary">
                  Accent Gradient
                </div>
                <div className="p-4 rounded-lg bg-gradient-hero text-white">Hero Gradient</div>
              </CardContent>
            </Card>

            {/* Animations */}
            <Card>
              <CardHeader>
                <CardTitle>Animations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="hover-lift">Hover Lift Effect</Button>
                <Button className="animate-pulse">Pulse Animation</Button>
                <div className="p-4 bg-surface rounded-lg transition-smooth hover:shadow-lg cursor-pointer">
                  Smooth Transition
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
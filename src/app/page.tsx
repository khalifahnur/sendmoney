import Link from "next/link"
import { ArrowRight, Shield, Clock, CreditCard, Phone, BarChart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b sticky top-0 z-10 px-10">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Cash</span>Flow
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Pricing
            </Link>
            <Link href="/help" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
              Support
            </Link>
            <Link href="/signin" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-14 lg:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                  Fast, Secure Money Transfers
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Send Money Instantly via Mobile
                  </h1>
                  <p className="text-muted-foreground md:text-xl max-w-[600px]">
                    Transfer funds quickly and securely to anyone with just a phone number. Our STK push technology delivers money where it needs to go in seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-medium">
                    <Link href="/send-money">
                      Send Money Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/how-it-works">See How It Works</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center">
                    <Shield className="mr-1 h-3 w-3" />
                    <span>Secure</span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-border" />
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>Instant</span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-border" />
                  <div className="flex items-center">
                    <CreditCard className="mr-1 h-3 w-3" />
                    <span>Low Fees</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto relative lg:h-[500px] flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-primary/10 rounded-full filter blur-xl opacity-70"></div>
                <div className="relative bg-card shadow-xl rounded-xl border p-4 md:p-6 backdrop-blur-sm">
                  <div className="space-y-2 mb-4">
                    <h3 className="font-medium text-lg">Send money instantly</h3>
                    <p className="text-sm text-muted-foreground">Enter phone number to transfer funds</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Recipient</div>
                      <div className="flex h-10 items-center rounded-md border bg-background px-3 text-sm">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">+254 712 345678</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Amount</div>
                      <div className="flex h-10 items-center rounded-md border bg-background px-3 text-sm">
                        <span className="text-muted-foreground">Ksh.</span>
                        <span className="ml-2 font-medium">250.00</span>
                      </div>
                    </div>
                    <Button className="w-full">Send STK Push</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                  Why Choose CashFlow
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple. Secure. Instant.
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our mobile money transfer platform is designed for speed, security, and simplicity.
                </p>
              </div>
              
              <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-12 pt-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mobile-First</h3>
                  <p className="text-center text-muted-foreground">
                    Send money to any mobile phone number. Recipients get an instant STK push notification.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Bank-Level Security</h3>
                  <p className="text-center text-muted-foreground">
                    End-to-end encryption and advanced fraud detection to keep your money safe.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Real-Time Transfers</h3>
                  <p className="text-center text-muted-foreground">
                    Funds arrive in seconds, not days. Track your transfer status in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground w-fit">
                  Simple Process
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Sending money has never been easier. Three simple steps to transfer funds.
                  </p>
                </div>
                
                <div className="space-y-8 pt-4">
                  <div className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4 shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg">Enter phone number</h3>
                      <p className="text-muted-foreground">Input your recipient&apos;s mobile number - no account needed on their end.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4 shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg">Specify amount</h3>
                      <p className="text-muted-foreground">Choose how much to send. See our low, transparent fees upfront.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4 shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg">Confirm and send</h3>
                      <p className="text-muted-foreground">Click send and we&apos;ll deliver an STK push notification to the recipient&apos;s phone instantly.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-fit mt-4">
                  <Link href="/send-money">
                    Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border border-border/40 shadow-sm">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                      <BarChart className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Business Transfers</CardTitle>
                    <CardDescription>For companies and merchants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Accept payments from customers directly to your business account with our secure API integration.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/business">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border border-border/40 shadow-sm">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Global Access</CardTitle>
                    <CardDescription>Send money worldwide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Send money internationally with competitive exchange rates and fast delivery times.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/international">View Rates</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to start sending money?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                  Join thousands of users who trust CashFlow for their daily money transfers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/signup">
                    Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-muted/50 px-10">
        <div className="container flex flex-col gap-8 py-10 md:flex-row md:gap-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Cash</span>Flow
            </div>
            <p className="text-sm text-muted-foreground max-w-[300px]">
              The fast, secure way to send and receive money via mobile STK push technology.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Product</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Integrations</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">API</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Company</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">About</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Press</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Resources</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">Support</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Documentation</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Security</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Help Center</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Cookies</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Licenses</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 CashFlow. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
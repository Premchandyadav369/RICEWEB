import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Truck, Users } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">RICE</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/solutions" className="hover:underline">Solutions</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=700&width=1200')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Farmers to You</h1>
            <p className="text-xl md:text-2xl mb-8">Fresh, Direct, Transparent.</p>
            <div className="space-x-4">
              <Button variant="default">Shop Fresh Produce</Button>
              <Button variant="outline">Join as a Farmer</Button>
              <Button variant="secondary">Discover Our Solutions</Button>
            </div>
          </div>
        </section>

        {/* Introduction to RICE */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to RICE</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're on a mission to revolutionize the farm-to-table model, benefiting both farmers and consumers through transparency and technology.
            </p>
            <Button variant="link">Learn More About Our Vision</Button>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>For Farmers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Easy listing process</li>
                    <li>Real-time market prices</li>
                    <li>Farm management tools</li>
                  </ul>
                  <Button variant="default">Get Started as a Farmer</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>For Consumers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Fresh, quality produce delivered</li>
                    <li>Transparency in sourcing</li>
                    <li>Subscription options for regular deliveries</li>
                  </ul>
                  <Button variant="default">Explore Our Products</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Other Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Precision Agriculture Tools</li>
                    <li>Farm Management Software</li>
                    <li>Vertical Farming Kits</li>
                  </ul>
                  <Button variant="default">Explore Our Solutions</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why RICE? */}
        <section className="py-16 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why RICE?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Leaf className="w-12 h-12 text-green-600 mb-2" />
                  <CardTitle>Fair Prices for Farmers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>We ensure farmers get the best value for their produce through our transparent pricing model.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="w-12 h-12 text-green-600 mb-2" />
                  <CardTitle>Fresh Produce</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>From farm to table in record time, ensuring the freshest produce for our consumers.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 text-green-600 mb-2" />
                  <CardTitle>Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>We promote and support sustainable farming practices to protect our environment.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-600 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <CardTitle>Technology-Driven Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Leveraging cutting-edge technology to optimize farming and distribution processes.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials & Success Stories */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"RICE has transformed the way I sell my produce. I'm getting better prices and have more control over my business."</p>
                  <p className="font-semibold">- John Doe, Farmer</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"The quality of produce I get through RICE is unmatched. I love knowing exactly where my food comes from."</p>
                  <p className="font-semibold">- Jane Smith, Consumer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">RICE</h3>
            <p>Connecting Farmers to You</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </nav>
        </div>
        <div className="container mx-auto mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} RICE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

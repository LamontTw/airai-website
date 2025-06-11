import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: "About Us - AIRAI Technology",
  description: "Learn about AIRAI Technology, Taiwan's leading enterprise AI implementation expert. Our mission, vision, and professional team dedicated to helping SMEs achieve digital transformation.",
  keywords: [
    "About AIRAI",
    "AI Company Taiwan",
    "Enterprise AI Expert",
    "Digital Transformation",
    "AI Implementation Team"
  ],
  openGraph: {
    title: "About Us - AIRAI Technology",
    description: "Learn about AIRAI Technology, Taiwan's leading enterprise AI implementation expert.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/about`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/about`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/about`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/about`,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="container-max text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">AIRAI Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are Taiwan&apos;s leading enterprise AI implementation expert, dedicated to helping small and medium enterprises integrate AI into their daily operations and achieve digital transformation.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To make AI accessible and practical for every Taiwanese SME, helping them solve real business challenges through intelligent automation and data-driven decision making.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the most trusted AI implementation partner for SMEs in Taiwan, creating a future where every business can leverage AI to enhance productivity and competitiveness.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Practical Innovation</h4>
                      <p className="text-gray-600">Focus on real-world applications that deliver measurable results</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Client Success</h4>
                      <p className="text-gray-600">Your success is our success - we&apos;re committed to your growth</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparency</h4>
                      <p className="text-gray-600">Clear communication and honest guidance throughout the process</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                      <p className="text-gray-600">Staying ahead of AI trends to provide cutting-edge solutions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Information</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Established to bridge the gap between advanced AI technology and practical business applications for Taiwan&apos;s SME sector.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Company Name</h3>
                <p className="text-gray-600">AIRAI Technology Co., Ltd.</p>
                <p className="text-gray-500 text-sm mt-1">智流科技有限公司</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-600">New Taipei City, Taiwan</p>
                <p className="text-gray-500 text-sm mt-1">No. 26, Canghou St., Banqiao Dist.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialization</h3>
                <p className="text-gray-600">AI Implementation</p>
                <p className="text-gray-500 text-sm mt-1">Software Development</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI can help your business grow. Schedule a free consultation with our experts today.
            </p>
            <a
              href="/en/contact"
              className="btn-primary inline-flex items-center"
            >
              Schedule Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
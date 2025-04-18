import { Send, Mail, BellRing } from "lucide-react";
import WordGlower from "../ui/word-glower";

export default function NewsletterSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg absolute inset-0"></div>
      </div>

      {/* Animated blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cyber-blur rounded-2xl p-10 border border-white/10 backdrop-blur-sm glow-border relative overflow-hidden">
          {/* Inner grid background */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="grid-bg absolute inset-0 opacity-20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-block cyber-blur rounded-full p-3 border border-white/10 glow-border mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white glow-text">
                Join Our <WordGlower>Network</WordGlower>!
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto font-body">
                Subscribe to receive updates on our latest AI models, feature
                enhancements, and exclusive early access.
              </p>
            </div>

            <form className="max-w-2xl mx-auto relative">
              <div className="relative">
                <div className="absolute inset-0 cyber-blur rounded-lg border border-primary/30 opacity-50 blur-sm"></div>

                <div className="relative flex flex-col sm:flex-row gap-4 p-1.5">
                  <div className="sm:flex-grow">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your neural connection address"
                        className={`w-full pl-12 pr-4 py-4 rounded-lg text-white bg-transparent border border-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all`}
                      />
                    </div>
                    {/* {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )} */}
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer px-8 py-4 rounded-lg gradient-animation text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:outline-none glow-border disabled:opacity-70"
                  >
                    <span className="flex items-center">
                      <span>Connect</span>
                      <Send className="ml-2 w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-4 text-gray-300 font-body flex items-start">
                <div className="mt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mr-2 h-5 w-5 rounded border-white/20 bg-transparent text-primary focus:ring-primary/50 focus:ring-offset-0"
                    // {...register("consent")}
                  />
                </div>
                <label htmlFor="consent" className="text-sm text-gray-300">
                  I agree to receive neural communications about AI advancement,
                  new features, and updates. We respect your privacy and will
                  never share your data.
                </label>
              </div>
              {/* {errors.consent && (
                <p className="mt-1 text-sm text-red-400 pl-7">
                  {errors.consent.message}
                </p>
              )} */}

              <div className="mt-6 p-4 cyber-blur border border-white/10 rounded-lg">
                <div className="flex items-center text-sm text-gray-300">
                  <BellRing className="flex-shrink-0 h-5 w-5 text-primary mr-3" />
                  <span>
                    Network subscribers receive prioritized access to new AI
                    model releases and experimental features.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

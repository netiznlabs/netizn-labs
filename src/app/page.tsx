"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Smartphone,
  Sparkles,
  Activity,
  ShoppingBag,
  Users,
  CheckCircle2,
  Globe,
  Mail,
  Shield,
  Code,
  Play,
  User,
  ExternalLink,
  ChevronRight,
  Cpu
} from "lucide-react";

// Types for the Interactive Chat Simulator
interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  text: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"social" | "commerce" | "health">("social");

  // App Simulator - Social Sub-Tab
  const [socialSubTab, setSocialSubTab] = useState<"feed" | "flicks" | "circles">("feed");

  // App Simulator - Health AI Chat state
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your Netizn AI Wellness Coach. How can I help you optimize your health goals today?",
    },
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // App Simulator - Step counter state (interactive count up animation)
  const [steps, setSteps] = useState(7432);
  const targetSteps = 10000;
  const stepPercentage = Math.min((steps / targetSteps) * 100, 100);

  // Contact Form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittingForm, setSubmittingForm] = useState(false);

  // Animate steps slightly for ambient feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => {
        if (prev >= 9800) return 7432;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle AI Coach message submit
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: chatInput,
    };

    setChatMessages((prev) => [...prev, userMsg]);
    const query = chatInput.toLowerCase();
    setChatInput("");
    setIsAiTyping(true);

    // Simulated response algorithm
    setTimeout(() => {
      let aiText = "That's a great wellness goal! On Netizn, tracking your daily steps and aligning your routine helps build lasting habits. Let me know if you need specific exercise or nutrition recommendations.";

      if (query.includes("step") || query.includes("walk") || query.includes("cardio") || query.includes("run")) {
        aiText = `Awesome job tracking steps! You are currently at ${steps} steps today (${Math.round(stepPercentage)}% of your daily goal). Increasing your daily walk by 2,000 steps can lower your resting heart rate and burn an extra 100 calories. Keep pushing!`;
      } else if (query.includes("diet") || query.includes("eat") || query.includes("food") || query.includes("nutrition") || query.includes("calorie")) {
        aiText = "Optimal performance starts with clean fuel. Try prioritizing lean protein (like grilled chicken, tofu, or fish), leafy greens, and complex carbohydrates. Staying hydrated with at least 3 liters of water supports muscle recovery.";
      } else if (query.includes("sleep") || query.includes("rest") || query.includes("tired") || query.includes("fatigue")) {
        aiText = "Recovery is where the magic happens. Aim for 7-8 hours of sleep. Try setting a 'digital sunset' by turning off screens 45 minutes before bed, allowing your body to naturally produce melatonin for deep sleep.";
      } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        aiText = "Hello there! I'm ready to design a custom health tip or analyze your progress. How is your energy level today?";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: aiText,
        },
      ]);
      setIsAiTyping(false);
    }, 1200);
  };

  // Handle Contact Form Submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setSubmittingForm(true);

    setTimeout(() => {
      setSubmittingForm(false);
      setFormSubmitted(true);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 selection:bg-indigo-500 selection:text-white overflow-hidden">

      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full ambient-glow-indigo filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] rounded-full ambient-glow-violet filter blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full ambient-glow-emerald filter blur-[120px] pointer-events-none z-0" />

      {/* Floating stars or light particles simulation */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-25 animate-ping duration-1000" />
      <div className="absolute top-10 right-1/4 w-1 h-1 bg-violet-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-20 animate-pulse" />

      {/* Navigation Header */}
      <header className="sticky top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/netizn-label-dark.png" alt="Netizn Labs Logo" className="h-9 w-auto object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#netizn-app" className="hover:text-white transition-colors duration-200 flex items-center gap-1">
              Netizn App <span className="px-1.5 py-0.5 text-[9px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded font-semibold">Flagship</span>
            </a>
            <a href="#labs-focus" className="hover:text-white transition-colors duration-200">Research Focus</a>
            <a href="#founder" className="hover:text-white transition-colors duration-200">Leadership</a>
            <a href="#corporate" className="hover:text-white transition-colors duration-200">Corporate</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </nav>

          {/* Call To Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://netizn.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-medium transition-colors"
            >
              netizn.app <ExternalLink size={12} />
            </a>
            <a
              href="#netizn-app"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-md shadow-white/5"
            >
              Get Netizn App
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <section id="about" className="pt-24 pb-20 md:pt-32 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Status badges */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span className="font-medium">Netizn App is live on iOS, Android & Web</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient">
              We design AI-powered software that connects communities, drives business, and elevates wellness.
            </h1>

            {/* Subtitle description */}
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Netizn Labs is an elite technology organization focusing on software development, artificial intelligence, and digital wellness platforms. We build ecosystems that power human connection, peer-to-peer commerce, and health data.
            </p>

            {/* CEO Credit Note */}
            <div className="flex items-center gap-3 py-1 text-sm text-zinc-500">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-indigo-400 text-xs">
                MA
              </div>
              <p>
                Led by Founder & CEO <strong className="text-zinc-300">Moses Aerons Osezua</strong>, Computer Science & AI expert.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://apps.apple.com/app/netizn/id6764276648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold shadow-lg active:scale-95 transition-all text-sm group"
              >
                <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
                </svg>
                <span>Download Netizn on iOS</span>
              </a>
              <a
                href="#netizn-app"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 rounded-full font-semibold active:scale-95 transition-all text-sm"
              >
                Explore Netizn App
              </a>
            </div>

            {/* Trust and status badges */}
            <div className="pt-8 border-t border-zinc-900/80 grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold font-mono tracking-wider">DUNS Registry</p>
                <p className="text-sm font-bold text-zinc-300 mt-1">Verified Active</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold font-mono tracking-wider">Security Protocol</p>
                <p className="text-sm font-bold text-zinc-300 mt-1 flex items-center gap-1.5">
                  SSL Secure
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] p-8 glass-panel animate-float shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Internal glow overlay */}
              <div className="absolute top-[-30%] right-[-30%] w-64 h-64 rounded-full bg-indigo-500/10 filter blur-3xl pointer-events-none" />

              {/* Header card info */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Corporate Headquarters</span>
                  <h3 className="font-bold text-xl text-white">Netizn Labs Inc.</h3>
                  <p className="text-xs text-zinc-400">Software & AI Ecosystems</p>
                </div>
                <span className="px-2.5 py-1 text-[9px] font-mono bg-zinc-800 text-zinc-400 rounded-lg border border-zinc-700">DUNS Registered</span>
              </div>

              {/* Central Geometric Icon/Graphic */}
              <div className="my-8 flex justify-center items-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Rotating orbital rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-double border-violet-500/20 animate-[spin_25s_linear_infinite_reverse]" />

                  {/* Inner glowing core */}
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-500 p-[1px] shadow-lg shadow-indigo-500/25">
                    <div className="w-full h-full bg-[#07070a] rounded-3xl flex items-center justify-center text-white font-extrabold text-3xl">
                      N
                    </div>
                  </div>

                  {/* Little satellite widgets */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#030303] shadow-md shadow-emerald-500/20" />
                  <div className="absolute bottom-6 left-1 w-3 h-3 bg-indigo-400 rounded-full border-2 border-[#030303]" />
                </div>
              </div>

              {/* Bottom card metrics */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
                  <span>First Flagship Product</span>
                  <span className="text-white font-semibold">Netizn (Live)</span>
                </div>

                <div className="flex gap-2.5 justify-between">
                  <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-zinc-500 uppercase font-mono">Reach</p>
                    <p className="text-sm font-bold text-white mt-0.5">Global</p>
                  </div>
                  <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-zinc-500 uppercase font-mono">Infrastructure</p>
                    <p className="text-sm font-bold text-white mt-0.5">Edge Nodes</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        {/* FLAGSHIP PRODUCT SECTION (NETIZN) */}
        <section id="netizn-app" className="py-20 text-center relative">

          {/* Accent light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] rounded-full bg-indigo-900/5 filter blur-[130px] pointer-events-none z-0" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold font-mono uppercase tracking-wider">
              Flagship Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Discover the Netizn Platform
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg">
              Netizn combines advanced social connection, user-led commerce with dedicated digital storefronts, and integrated AI-driven health and wellness tracking.
            </p>
          </div>

          {/* Core Interactive Showcase Grid */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-stretch text-left">

            {/* Column 1: Feature Tabs & Details */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-2.5 p-1 bg-zinc-900/70 border border-zinc-800/80 rounded-2xl">
                <button
                  onClick={() => setActiveTab("social")}
                  className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl transition-all duration-300 font-medium ${activeTab === "social"
                    ? "bg-zinc-800 text-white shadow-md shadow-black/35 border border-white/5"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20"
                    }`}
                >
                  <Users size={20} className={activeTab === "social" ? "text-indigo-400" : "text-zinc-500"} />
                  <span className="text-xs sm:text-sm">Social Feed</span>
                </button>

                <button
                  onClick={() => setActiveTab("commerce")}
                  className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl transition-all duration-300 font-medium ${activeTab === "commerce"
                    ? "bg-zinc-800 text-white shadow-md shadow-black/35 border border-white/5"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20"
                    }`}
                >
                  <ShoppingBag size={20} className={activeTab === "commerce" ? "text-pink-400" : "text-zinc-500"} />
                  <span className="text-xs sm:text-sm">Commerce</span>
                </button>

                <button
                  onClick={() => setActiveTab("health")}
                  className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl transition-all duration-300 font-medium ${activeTab === "health"
                    ? "bg-zinc-800 text-white shadow-md shadow-black/35 border border-white/5"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20"
                    }`}
                >
                  <Activity size={20} className={activeTab === "health" ? "text-emerald-400" : "text-zinc-500"} />
                  <span className="text-xs sm:text-sm">AI Health</span>
                </button>
              </div>

              {/* Detailed Tab Information */}
              <div className="flex-1 min-h-[280px] bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">

                {/* Social Tab Details */}
                {activeTab === "social" && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                        <Users size={18} />
                      </span>
                      <h4 className="text-xl font-bold text-white">Social Network Connection</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Experience digital connection reimagined. Express your thoughts with short form text updates, explore vertical videos on the Flicks feed, and collaborate within dedicated Interest Circles.
                    </p>
                    <ul className="space-y-2.5 text-xs text-zinc-300">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                        <span>Interactive text & image posts (similar to X/Twitter platform)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                        <span>Flicks Videos feed for creators (similar to Reels format)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                        <span>Interest Circles to host private and public communities</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Commerce Tab Details */}
                {activeTab === "commerce" && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-pink-500/10 border border-pink-500/20 rounded-lg text-pink-400">
                        <ShoppingBag size={18} />
                      </span>
                      <h4 className="text-xl font-bold text-white">Social Commerce & Storefronts</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Bridging the gap between content and transactions. Netizn allows any user to create multiple, fully customized digital storefronts inside the platform, enabling immediate peer-to-peer buying and selling.
                    </p>
                    <ul className="space-y-2.5 text-xs text-zinc-300">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-pink-400 shrink-0" />
                        <span>Instant multiple storefront creation under a single profile</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-pink-400 shrink-0" />
                        <span>Interactive product catalogs with direct checkout</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-pink-400 shrink-0" />
                        <span>Integrated payments and seller analytics panel</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Health & Wellness Tab Details */}
                {activeTab === "health" && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                        <Activity size={18} />
                      </span>
                      <h4 className="text-xl font-bold text-white">Biometrics & AI Health Advice</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Your wellness, integrated. Monitor your physical activity directly within your social sphere, and receive personalized contextual recommendations from our custom trained AI health and wellness coach.
                    </p>
                    <ul className="space-y-2.5 text-xs text-zinc-300">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span>Live step tracking, daily goals, and active calories display</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span>Gamified progress rings that motivate active habits</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span>Personalized wellness guidance from the Netizn AI Coach</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* App Download Info Footer */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                  <span>Available Platforms:</span>
                  <div className="flex gap-3 text-zinc-300 font-semibold">
                    <a href="https://apps.apple.com/app/netizn/id6764276648" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">App Store</a>
                    <span>•</span>
                    <a href="https://netizn.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Play Store</a>
                    <span>•</span>
                    <a href="https://netizn.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Web App</a>
                  </div>
                </div>

              </div>

              {/* App Platforms Badges */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://apps.apple.com/app/netizn/id6764276648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
                  </svg>
                  Download on App Store
                </a>
                <a
                  href="https://netizn.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl text-xs font-semibold text-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.523 15.3l-2.038-2.038 2.038-2.038a1.44 1.44 0 0 0-2.038-2.038L13.447 11.22 11.41 9.186a1.44 1.44 0 0 0-2.038 2.038l2.038 2.038-2.038 2.038a1.44 1.44 0 0 0 2.038 2.038l2.038-2.038 2.038 2.038a1.44 1.44 0 0 0 2.038-2.038zM5.19 3a2.19 2.19 0 0 0-2.19 2.19v13.62A2.19 2.19 0 0 0 5.19 21h13.62a2.19 2.19 0 0 0 2.19-2.19V5.19A2.19 2.19 0 0 0 18.81 3H5.19z" />
                  </svg>
                  Download for Android
                </a>
                <a
                  href="https://netizn.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-semibold text-white transition-all shadow-md shadow-indigo-600/10"
                >
                  <Globe size={14} /> Open Web App
                </a>
              </div>

            </div>

            {/* Column 2: CSS Smartphone App Simulator */}
            <div className="lg:col-span-6 flex justify-center">

              {/* Phone Frame */}
              <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-[#0c0c0e] rounded-[3rem] p-3 border-[6px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden">

                {/* Phone Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-40 flex items-center justify-center">
                  <div className="w-12 h-1 bg-zinc-800 rounded-full mb-1" />
                  <div className="w-2.5 h-2.5 bg-zinc-900 border border-zinc-800 rounded-full absolute right-5 top-1/2 -translate-y-1/2" />
                </div>

                {/* Phone Screen Top Status Bar */}
                <div className="flex justify-between items-center px-4 pt-1.5 pb-2 text-[10px] text-zinc-500 font-mono z-30 font-bold">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-5 h-2.5 border border-zinc-700 rounded-sm p-[1px] flex items-center">
                      <div className="w-3.5 h-full bg-emerald-500 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Simulator Content Area */}
                <div className="flex-1 bg-[#070708] rounded-[2.2rem] flex flex-col justify-between overflow-hidden relative border border-zinc-900">

                  {/* APP SIMULATION LAYER: SOCIAL */}
                  {activeTab === "social" && (
                    <div className="flex flex-col flex-1 text-xs justify-between">
                      {/* App Navbar */}
                      <div className="p-3 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur flex justify-between items-center">
                        <span className="font-bold text-white tracking-tight text-sm">Netizn</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSocialSubTab("feed")}
                            className={`px-2 py-0.5 rounded ${socialSubTab === "feed" ? "bg-indigo-600 text-white font-semibold" : "text-zinc-500"}`}
                          >
                            Feed
                          </button>
                          <button
                            onClick={() => setSocialSubTab("flicks")}
                            className={`px-2 py-0.5 rounded ${socialSubTab === "flicks" ? "bg-indigo-600 text-white font-semibold" : "text-zinc-500"}`}
                          >
                            Flicks
                          </button>
                          <button
                            onClick={() => setSocialSubTab("circles")}
                            className={`px-2 py-0.5 rounded ${socialSubTab === "circles" ? "bg-indigo-600 text-white font-semibold" : "text-zinc-500"}`}
                          >
                            Circles
                          </button>
                        </div>
                      </div>

                      {/* App Inner Content Scroll Area */}
                      <div className="flex-1 p-3 overflow-y-auto space-y-3">
                        {socialSubTab === "feed" && (
                          <>
                            {/* Tweet/Post mockup 1 */}
                            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">M</div>
                                  <div>
                                    <p className="font-bold text-white text-[11px]">moses_aerons</p>
                                    <p className="text-[9px] text-zinc-500">CEO, Netizn Labs</p>
                                  </div>
                                </div>
                                <span className="text-[9px] text-zinc-500">2m</span>
                              </div>
                              <p className="text-zinc-300 text-[11px] leading-relaxed">
                                We just pushed some key performance upgrades to our AI advisor backend on the Netizn app. Check out how fast the wellness recommendations load! 🚀
                              </p>
                              <div className="flex gap-4 pt-1.5 text-zinc-500 text-[9px] border-t border-zinc-800/50">
                                <span>❤️ 1.4k</span>
                                <span>💬 240</span>
                                <span>🔄 58</span>
                              </div>
                            </div>

                            {/* Tweet/Post mockup 2 */}
                            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold border border-emerald-500/30">W</div>
                                  <div>
                                    <p className="font-bold text-white text-[11px]">wellness_hub</p>
                                    <p className="text-[9px] text-zinc-500">Circles Host</p>
                                  </div>
                                </div>
                                <span className="text-[9px] text-zinc-500">1h</span>
                              </div>
                              <p className="text-zinc-300 text-[11px] leading-relaxed">
                                Just finished my daily 10k step challenge! Feeling amazing. Connecting with others on the fitness leaderboard is such a cheat code for consistency. Who is hitting their goals today? 🏃‍♀️💦
                              </p>
                              <div className="flex gap-4 pt-1.5 text-zinc-500 text-[9px] border-t border-zinc-800/50">
                                <span>❤️ 480</span>
                                <span>💬 92</span>
                                <span>🔄 12</span>
                              </div>
                            </div>
                          </>
                        )}

                        {socialSubTab === "flicks" && (
                          <div className="w-full aspect-[9/12] rounded-2xl relative flick-video-placeholder overflow-hidden flex flex-col justify-end p-4 border border-zinc-800">

                            {/* Video overlay overlay info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                            {/* Play overlay button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all">
                              <Play size={18} fill="white" className="ml-0.5" />
                            </div>

                            {/* Creator details */}
                            <div className="relative z-20 space-y-2 text-white">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center font-bold text-[10px]">A</div>
                                <span className="font-semibold text-[11px] shadow-sm">alexa_fitness</span>
                              </div>
                              <p className="text-[10px] text-zinc-200">How I prep meals for the week under 20 mins. Storefront link in bio! #nutrition #wellness</p>
                              <div className="flex items-center gap-3 text-[9px] text-zinc-400">
                                <span className="flex items-center gap-1">🎵 Original audio</span>
                                <span>• 2.3k Flicks Likes</span>
                              </div>
                            </div>

                            {/* Vertical interactions on side */}
                            <div className="absolute right-3 bottom-12 flex flex-col gap-4 text-white z-20 text-[10px] items-center text-center">
                              <div className="space-y-0.5">
                                <span className="p-2 bg-black/50 border border-white/10 rounded-full block">❤️</span>
                                <span>2.3k</span>
                              </div>
                              <div className="space-y-0.5">
                                <span className="p-2 bg-black/50 border border-white/10 rounded-full block">💬</span>
                                <span>450</span>
                              </div>
                              <div className="space-y-0.5">
                                <span className="p-2 bg-black/50 border border-white/10 rounded-full block">🛒</span>
                                <span>Shop</span>
                              </div>
                            </div>

                          </div>
                        )}

                        {socialSubTab === "circles" && (
                          <div className="space-y-3">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Popular Circles Near You</span>

                            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 flex justify-between items-center">
                              <div className="space-y-1">
                                <p className="font-bold text-white text-[11px]">🏃‍♂️ 10k Steps Daily</p>
                                <p className="text-[9px] text-zinc-500">4,839 Active Members</p>
                              </div>
                              <button className="px-2.5 py-1 text-[9px] font-semibold bg-indigo-600 text-white rounded-lg">Join</button>
                            </div>

                            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 flex justify-between items-center">
                              <div className="space-y-1">
                                <p className="font-bold text-white text-[11px]">🥗 Biohack Nutrition</p>
                                <p className="text-[9px] text-zinc-500">2,410 Active Members</p>
                              </div>
                              <button className="px-2.5 py-1 text-[9px] font-semibold bg-indigo-600 text-white rounded-lg">Join</button>
                            </div>

                            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3 flex justify-between items-center">
                              <div className="space-y-1">
                                <p className="font-bold text-white text-[11px]">💻 Tech Founders Circle</p>
                                <p className="text-[9px] text-zinc-500">1,250 Active Members</p>
                              </div>
                              <button className="px-2.5 py-1 text-[9px] font-semibold bg-indigo-600 text-white rounded-lg">Join</button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* APP SIMULATION LAYER: COMMERCE */}
                  {activeTab === "commerce" && (
                    <div className="flex flex-col flex-1 text-xs justify-between">
                      {/* App Navbar */}
                      <div className="p-3 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur flex justify-between items-center">
                        <span className="font-bold text-white tracking-tight text-sm">Netizn Storefronts</span>
                        <span className="text-[9px] bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-0.5 rounded font-mono font-semibold">Active Shops</span>
                      </div>

                      {/* Storefronts and Marketplace lists */}
                      <div className="flex-1 p-3 overflow-y-auto space-y-3">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search shops & catalogs..."
                            disabled
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-1.5 px-3 text-[10px] text-zinc-400 placeholder-zinc-500"
                          />
                        </div>

                        {/* Storefront Mock 1 */}
                        <div className="border border-zinc-800/60 bg-zinc-900/30 rounded-xl p-3 space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center font-bold text-[9px] text-white">AT</div>
                              <div>
                                <p className="font-bold text-white text-[11px]">Aeron&apos;s Tech Shop</p>
                                <p className="text-[8px] text-zinc-500">Moses Aerons Osezua • Verified Store</p>
                              </div>
                            </div>
                            <span className="text-[8px] text-emerald-400 font-mono">12 products</span>
                          </div>

                          {/* Products mini display */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 text-left space-y-1">
                              <div className="w-full h-12 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-600 font-mono text-[9px]">Wearable</div>
                              <p className="font-medium text-white text-[10px] truncate">Netizn Bio Band</p>
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-pink-400 font-mono">$129.99</span>
                                <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded">View</span>
                              </div>
                            </div>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 text-left space-y-1">
                              <div className="w-full h-12 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-600 font-mono text-[9px]">AI Module</div>
                              <p className="font-medium text-white text-[10px] truncate">AI Health Dongle</p>
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-pink-400 font-mono">$49.99</span>
                                <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded">View</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Storefront Mock 2 */}
                        <div className="border border-zinc-800/60 bg-zinc-900/30 rounded-xl p-3 space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-[9px]">OH</div>
                              <div>
                                <p className="font-bold text-white text-[11px]">Organic Hydration</p>
                                <p className="text-[8px] text-zinc-500">Aria Wellness Inc.</p>
                              </div>
                            </div>
                            <span className="text-[8px] text-emerald-400 font-mono">4 products</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 text-left space-y-1">
                              <div className="w-full h-12 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-600 font-mono text-[9px]">Supps</div>
                              <p className="font-medium text-white text-[10px] truncate">Bio Hydrolite (30pk)</p>
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-pink-400 font-mono">$24.00</span>
                                <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded">View</span>
                              </div>
                            </div>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 text-left space-y-1">
                              <div className="w-full h-12 bg-zinc-800/50 rounded flex items-center justify-center text-zinc-600 font-mono text-[9px]">Apparel</div>
                              <p className="font-medium text-white text-[10px] truncate">Breathable Tee</p>
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-pink-400 font-mono">$35.00</span>
                                <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5 rounded">View</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* APP SIMULATION LAYER: HEALTH & AI ADVISOR */}
                  {activeTab === "health" && (
                    <div className="flex flex-col flex-1 text-xs justify-between overflow-hidden">

                      {/* Sub-tab view: Biometrics ring + Active Advisor Simulator */}
                      <div className="flex-1 overflow-y-auto p-3 space-y-3 flex flex-col justify-between">

                        {/* Upper: Biometrics display card */}
                        <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-wider">Step Goal Progress</span>
                            <p className="text-base font-bold text-white">{steps.toLocaleString()} / 10,000</p>
                            <p className="text-[9px] text-zinc-400">🔥 340 kcal  •  ⏱️ 45 min active</p>
                          </div>

                          {/* Circular progress SVG */}
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <svg className="w-full h-full activity-ring">
                              <circle
                                cx="28"
                                cy="28"
                                r="22"
                                stroke="#1f1f23"
                                strokeWidth="4"
                                fill="transparent"
                              />
                              <circle
                                cx="28"
                                cy="28"
                                r="22"
                                stroke="#10b981"
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 22}
                                strokeDashoffset={2 * Math.PI * 22 * (1 - stepPercentage / 100)}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                              />
                            </svg>
                            <div className="absolute text-[9px] font-bold text-emerald-400 font-mono">
                              {Math.round(stepPercentage)}%
                            </div>
                          </div>
                        </div>

                        {/* Lower: Simulated AI health advisor chat widget */}
                        <div className="flex-1 border border-zinc-800/60 bg-zinc-950/60 rounded-xl flex flex-col justify-between overflow-hidden min-h-[190px]">

                          {/* Header banner */}
                          <div className="bg-zinc-900/60 border-b border-zinc-800/80 px-3 py-2 flex items-center gap-1.5 shrink-0">
                            <Sparkles size={11} className="text-emerald-400" />
                            <span className="font-bold text-[10px] text-zinc-200">Netizn AI Health Coach</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-auto" />
                          </div>

                          {/* Message transcripts */}
                          <div className="flex-1 p-2.5 overflow-y-auto space-y-2 text-[10px] flex flex-col justify-end">
                            {chatMessages.map((msg) => (
                              <div
                                key={msg.id}
                                className={`max-w-[85%] rounded-lg p-2 leading-relaxed ${msg.sender === "ai"
                                  ? "bg-zinc-900/90 text-zinc-300 mr-auto border border-zinc-800/50"
                                  : "bg-indigo-600 text-white ml-auto"
                                  }`}
                              >
                                {msg.text}
                              </div>
                            ))}
                            {isAiTyping && (
                              <div className="bg-zinc-900 text-zinc-500 mr-auto rounded-lg p-2 italic flex items-center gap-1">
                                <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce" />
                                <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce delay-100" />
                                <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce delay-200" />
                              </div>
                            )}
                          </div>

                          {/* Chat input form */}
                          <form onSubmit={handleChatSubmit} className="p-2 border-t border-zinc-800/80 bg-zinc-900/40 flex gap-1.5 shrink-0">
                            <input
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              placeholder="Ask: 'How to hit 10k steps?'"
                              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-md py-1 px-2 text-[9px] text-white focus:outline-none focus:border-emerald-500"
                            />
                            <button
                              type="submit"
                              className="bg-emerald-500 text-black px-2.5 rounded-md text-[9px] font-bold hover:bg-emerald-400 active:scale-95 transition-all"
                            >
                              Send
                            </button>
                          </form>

                        </div>

                      </div>
                    </div>
                  )}

                  {/* Phone Bottom Navigation Bar */}
                  <div className="p-3 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur flex justify-around items-center text-zinc-500 z-30 shrink-0">
                    <button
                      onClick={() => setActiveTab("social")}
                      className={`flex flex-col items-center gap-0.5 ${activeTab === "social" ? "text-indigo-400" : ""}`}
                    >
                      <Users size={14} />
                      <span className="text-[8px]">Social</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("commerce")}
                      className={`flex flex-col items-center gap-0.5 ${activeTab === "commerce" ? "text-pink-400" : ""}`}
                    >
                      <ShoppingBag size={14} />
                      <span className="text-[8px]">Shops</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("health")}
                      className={`flex flex-col items-center gap-0.5 ${activeTab === "health" ? "text-emerald-400" : ""}`}
                    >
                      <Activity size={14} />
                      <span className="text-[8px]">Wellness</span>
                    </button>
                  </div>

                  {/* iOS Indicator Bar */}
                  <div className="w-24 h-1 bg-zinc-800 rounded-full mx-auto mb-1.5 shrink-0" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        {/* LABS FOCUS SECTION */}
        <section id="labs-focus" className="py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Title / Info Column */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold font-mono uppercase tracking-wider">
                Research & Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
                Pioneering Software & Intelligence
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Netizn Labs builds, audits, and implements core internet protocols, artificial intelligence frameworks, and biometric integration layers. We solve technical debt at the architecture level to construct seamless, multi-million user products.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold uppercase tracking-wider font-mono transition-colors"
                >
                  Inquire about partnerships <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Grid Pillars Column */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6 text-left">

              {/* Pillar 1 */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl inline-block text-indigo-400">
                    <Code size={24} />
                  </span>
                  <h3 className="text-xl font-bold text-white">Software & Internet Tech</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Building robust, responsive architectures using modern web systems, native applications, and high-performance backend engines (React, Next.js, React Native, Swift, Python, C++, Rust, Postgres, and RESTful APIs & More).
                  </p>
                </div>
                <div className="text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-900 leading-relaxed">
                  React Native • Swift • Python • C++ • Rust • Postgres • REST APIs & More
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl inline-block text-violet-400">
                    <Cpu size={24} />
                  </span>
                  <h3 className="text-xl font-bold text-white">Artificial Intelligence</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Deploying context-aware LLMs and generative agents for real-time recommendations, custom advisor logic, and smart data aggregation.
                  </p>
                </div>
                <div className="text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-900">
                  Agentic SDKs • vectorDB • LLMs & More.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl inline-block text-emerald-400">
                    <Activity size={24} />
                  </span>
                  <h3 className="text-xl font-bold text-white">Health & Wellness</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Designing biometric integrations for motion tracking, activity analytics, sleep logs, and gamifying daily physical recovery routines.
                  </p>
                </div>
                <div className="text-xs text-zinc-500 font-mono pt-4 border-t border-zinc-900">
                  Step APIs • CoreMotion • HealthKit & More
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        {/* LEADERSHIP SECTION */}
        <section id="founder" className="py-20 text-left">
          <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-500/10 filter blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">

              {/* Profile Image/Avatar Column */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-emerald-400 shadow-xl shadow-indigo-500/10">
                  <div className="w-full h-full rounded-full bg-[#07070a] flex items-center justify-center border border-black overflow-hidden relative">
                    <img
                      src="/IMG_6004.JPG"
                      alt="Moses Aerons Osezua"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Details Bio Column */}
              <div className="md:col-span-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">Founder & CEO</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">Moses Aerons Osezua</h2>
                  <p className="text-sm font-semibold text-zinc-400">Computer Science Major • Software Developer & AI Engineer</p>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Moses founded Netizn Labs with a mandate to develop human-centric software. Combining formal computer science methodologies with expertise in artificial intelligence architectures, he oversees all product development, from platform scaling to bio-tracking calculations and generative AI advisors.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-900 text-left">
                  <div>
                    <h4 className="text-xs font-mono uppercase font-semibold text-zinc-500">Core Expertise</h4>
                    <p className="text-sm text-zinc-300 font-bold mt-1">Fullstack Dev & AI</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase font-semibold text-zinc-500">Academic Background</h4>
                    <p className="text-sm text-zinc-300 font-bold mt-1">Computer Science Major</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase font-semibold text-zinc-500">Operational Philosophy</h4>
                    <p className="text-sm text-zinc-300 font-bold mt-1">Scale with Clarity</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        {/* CORPORATE / COMPLIANCE SECTION */}
        <section id="corporate" className="py-20 grid lg:grid-cols-12 gap-12 text-left">

          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
              Entity Information
            </span>
            <h2 className="text-3xl font-bold text-white">Compliance & Governance</h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Netizn Labs operates under strict regulatory alignment. The corporation is officially registered and recognized globally under the Data Universal Numbering System (DUNS), cementing our status as a trusted, validated global tech entity.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><CheckCircle2 size={12} /></span>
                <span className="text-sm text-zinc-300">Registered DUNS organization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><CheckCircle2 size={12} /></span>
                <span className="text-sm text-zinc-300">Secure SSL/TLS encrypted communication</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex items-center justify-start">

            {/* Cert Card 1 */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between max-w-md w-full">
              <div className="space-y-2">
                <span className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl inline-block text-zinc-400">
                  <Shield size={18} />
                </span>
                <h3 className="font-bold text-lg text-white">DUNS Certified</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Netizn Labs is registered in the Dun & Bradstreet database, assuring global business partners and regulators of our audited organizational credibility.
                </p>
              </div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">DUNS Directory Verified</span>
            </div>

          </div>

        </section>

        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-10" />

        {/* CONTACT / SUPPORT SECTION */}
        <section id="contact" className="py-20 text-left grid lg:grid-cols-12 gap-12">

          {/* Column 1: Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold font-mono uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s connect</h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Have questions about the Netizn platform, our wellness AI advisor integrations, or corporate partnerships? Get in touch with our operations team or email us directly.
            </p>

            <div className="space-y-4 pt-4 text-sm">
              <a
                href="mailto:support@netizn.app"
                className="flex items-center gap-3 text-zinc-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <span className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl inline-block">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-mono font-semibold">Corporate Support Email</p>
                  <p className="font-semibold text-zinc-200">support@netizn.app</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <span className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl inline-block">
                  <Globe size={16} />
                </span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-mono font-semibold">Main Web Gateways</p>
                  <p className="font-semibold text-zinc-200">netiznlabs.com & netizn.app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8 md:p-10">

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Netizn Labs. A support representative will respond to your query at your email address shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white">Contact the Operations Desk</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="text-xs font-mono uppercase text-zinc-500">Name</label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Moses Aerons"
                        className="w-full bg-[#050507] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 placeholder-zinc-700"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="text-xs font-mono uppercase text-zinc-500">Email Address</label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="support@netizn.app"
                        className="w-full bg-[#050507] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 placeholder-zinc-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="text-xs font-mono uppercase text-zinc-500">Your Inquiry</label>
                    <textarea
                      id="message-input"
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell us about your organization or inquiry..."
                      className="w-full bg-[#050507] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 placeholder-zinc-700 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingForm}
                    className="w-full py-3.5 bg-white text-black hover:bg-zinc-200 active:scale-98 rounded-xl text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {submittingForm ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center">
                    Prefer direct channels? Email us directly at <a href="mailto:support@netizn.app" className="text-zinc-400 hover:text-white font-semibold">support@netizn.app</a>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-left">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/netizn-label-dark.png" alt="Netizn Labs Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Developing premium web, social commerce, and artificial intelligence wellness technologies. Registered globally under DUNS.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-400">Products</h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <a href="#netizn-app" className="hover:text-white transition-colors">Netizn Social App</a>
              <a href="#netizn-app" className="hover:text-white transition-colors">Multiple Storefronts</a>
              <a href="#netizn-app" className="hover:text-white transition-colors">AI Health Coach</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-400">Research Focus</h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <a href="#labs-focus" className="hover:text-white transition-colors">AI Recommendation Models</a>
              <a href="#labs-focus" className="hover:text-white transition-colors">Social Graph Protocols</a>
              <a href="#labs-focus" className="hover:text-white transition-colors">Biometric Tracker APIs</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-400">Contact Support</h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <a href="mailto:support@netizn.app" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail size={12} /> support@netizn.app
              </a>
              <a href="https://netizn.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Globe size={12} /> netizn.app portal
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} Netizn Labs Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            <span>•</span>
            <span className="text-zinc-700">DUNS Registered</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

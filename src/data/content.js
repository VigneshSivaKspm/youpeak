export const APP_INFO = {
  name: "YouPeak",
  company: "Legendary One",
  tagline: "Watch. Create. Earn. Repeat.",
  heroTitle: "Turn Your Screen Time Into Real Income",
  heroSubtitle:
    "India's premier Next-Gen Video Streaming & Rewards Platform. Stream trending videos & shorts, complete daily tasks, earn coins and withdraw directly to UPI — or supercharge your creator career with up to 90% ad revenue split.",
  conversionRate: "100 Coins = ₹1 INR",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.youpeak.app",
  appStoreUrl: "https://apps.apple.com/app/youpeak/id6400000000",
  apkDownloadUrl: "#download",
  supportEmail: "support@youpeak.in",
  grievanceEmail: "grievance@youpeak.in",
  phone: "+91 (080) 4567-8900",
  address: "Legendary One Media Tech Pvt Ltd, Bengaluru, Karnataka, India",
};

export const PLATFORM_STATS = [
  {
    label: "Active Daily Users",
    value: "250K+",
    subtext: "Across 28 Indian states",
  },
  {
    label: "Total Rewards Paid",
    value: "₹2.4 Cr+",
    subtext: "Directly to UPI & bank accounts",
  },
  {
    label: "Creator Ad Revenue Split",
    value: "Up to 90%",
    subtext: "Industry highest creator share",
  },
  {
    label: "Payout Turnaround",
    value: "Instant",
    subtext: "Backed by bank-grade Razorpay",
  },
];

export const TASKER_TIERS = [
  {
    id: "free",
    name: "Free Tasker",
    price: 0,
    priceLabel: "₹0",
    period: "Forever Free",
    popular: false,
    badge: "Basic",
    dailyCapCoins: 500,
    dailyCapINR: 5,
    monthlyEarning: "₹150",
    adLimit: "20 Ads / day",
    likeLimit: "5 Likes / day",
    commentLimit: "2 Comments / day",
    adCredits: "₹0",
    features: [
      "Access to full video & shorts library",
      "Earn up to ₹5/day with zero investment",
      "7-Day Daily Check-In streak rewards",
      "Standard UPI withdrawal access",
      "Community support",
    ],
  },
  {
    id: "bronze",
    name: "Bronze Starter",
    price: 999,
    priceLabel: "₹999",
    period: "One-Time Pass",
    popular: false,
    badge: "Starter",
    dailyCapCoins: 2000,
    dailyCapINR: 20,
    monthlyEarning: "₹600",
    adLimit: "20 Ads / day",
    likeLimit: "10 Likes / day",
    commentLimit: "5 Comments / day",
    adCredits: "₹1,000 Ad Credits Granted",
    features: [
      "4x higher daily earning cap (₹20/day)",
      "₹1,000 Ad Credits for promoting content",
      "Faster withdrawal queue priority",
      "2-Stage referral bonus enabled",
      "Dedicated WhatsApp tasker support",
    ],
  },
  {
    id: "silver",
    name: "Silver Intermediate",
    price: 2499,
    priceLabel: "₹2,499",
    period: "One-Time Pass",
    popular: true,
    badge: "Most Popular",
    dailyCapCoins: 4000,
    dailyCapINR: 40,
    monthlyEarning: "₹1,200",
    adLimit: "20 Ads / day",
    likeLimit: "20 Likes / day",
    commentLimit: "10 Comments / day",
    adCredits: "₹2,500 Ad Credits Granted",
    features: [
      "8x higher daily earning cap (₹40/day)",
      "₹2,500 100% matched Ad Credits",
      "Priority instant UPI settlement",
      "Exclusive silver creator badges",
      "Quarterly bonus coin drops",
    ],
  },
  {
    id: "gold",
    name: "Gold Advanced",
    price: 4999,
    priceLabel: "₹4,999",
    period: "One-Time Pass",
    popular: false,
    badge: "High Yield",
    dailyCapCoins: 12000,
    dailyCapINR: 120,
    monthlyEarning: "₹3,600",
    adLimit: "20 Ads / day",
    likeLimit: "40 Likes / day",
    commentLimit: "20 Comments / day",
    adCredits: "₹5,000 Ad Credits Granted",
    features: [
      "24x higher daily cap (₹120/day)",
      "₹5,000 100% matched Ad Credits",
      "VIP Payout lane with zero wait times",
      "Early beta access to new monetized shorts",
      "Direct Relationship Manager",
    ],
  },
  {
    id: "platinum",
    name: "Platinum Pro",
    price: 9999,
    priceLabel: "₹9,999",
    period: "One-Time Pass",
    popular: false,
    badge: "Maximum Yield",
    dailyCapCoins: 16667,
    dailyCapINR: 166.67,
    monthlyEarning: "₹5,000+",
    adLimit: "20 Ads / day",
    likeLimit: "60 Likes / day",
    commentLimit: "30 Comments / day",
    adCredits: "₹10,000 Ad Credits Granted",
    features: [
      "Highest daily cap (₹166.67/day)",
      "Full ₹10,000 Ad Credits Wallet",
      "Instant 1-click cashouts 24/7",
      "10% referral override on network upgrades",
      "Exclusive Platinum Leaderboard perks",
    ],
  },
];

export const CREATOR_TIERS = [
  {
    tier: "Classic Pass",
    price: "Free",
    subs: "0+ Subs",
    split: "50% Creator / 50% Platform",
    maxVideo: "₹1,000 / video",
    highlight: "Standard monetization automatically enabled on launch.",
  },
  {
    tier: "Starter VIP Pass",
    price: "₹2,999",
    subs: "< 1,000 Subs",
    split: "60% Creator / 40% Platform",
    maxVideo: "₹2,000 / video",
    highlight: "Accelerate your channel from day one with boosted revenue.",
  },
  {
    tier: "Silver VIP Pass",
    price: "₹1,999",
    subs: "1K – 10K Subs",
    split: "70% Creator / 30% Platform",
    maxVideo: "₹5,000 / video",
    highlight:
      "Preferred rate card as your community reaches 1,000+ followers.",
  },
  {
    tier: "Gold VIP Pass",
    price: "₹1,499",
    subs: "10K – 100K Subs",
    split: "80% Creator / 20% Platform",
    maxVideo: "₹15,000 / video",
    highlight: "Premium partner status with prioritized recommendations.",
  },
  {
    tier: "Platinum VIP Pass",
    price: "Invite / 100K+",
    subs: "100,000+ Subs",
    split: "90% Creator / 10% Platform",
    maxVideo: "Unlimited",
    highlight: "Unmatched 90% revenue share + dedicated brand sponsorships.",
  },
];

export const APP_FEATURES = [
  {
    icon: "PlaySquare",
    title: "HD Video & Shorts Player",
    description:
      "Powered by Cloudflare Stream HLS with adaptive bitrate streaming. Enjoy ultra-crisp 1080p playback with zero lag on 4G, 5G, and Wi-Fi networks.",
    tag: "High Performance",
  },
  {
    icon: "Coins",
    title: "Watch & Earn Rewards Engine",
    description:
      "Every second counts! Earn verified YouPeak coins by watching videos, daily check-ins, liking, commenting, and hitting 2-hour watch milestones.",
    tag: "Monetization",
  },
  {
    icon: "Users2",
    title: "2-Stage Peak Partner Referrals",
    description:
      "Earn ₹100 immediately when your friend signs up (Stage 1), another ₹100 when they complete 100 watch-minutes (Stage 2), plus 10% on paid upgrades.",
    tag: "Viral Growth",
  },
  {
    icon: "CreditCard",
    title: "Instant UPI & Bank Cashout",
    description:
      "Convert 100 coins to ₹1 INR anytime! Withdraw straight to PhonePe, Google Pay, Paytm, or bank accounts with Razorpay-backed security.",
    tag: "Fast Cashouts",
  },
  {
    icon: "Lock",
    title: "Pay-Per-View & Private Channels",
    description:
      "Creators can lock exclusive masterclasses, behind-the-scenes, and premium reels behind coin unlocks with an 80/10/10 instant creator revenue split.",
    tag: "Creator Economy",
  },
  {
    icon: "ShieldCheck",
    title: "IT Rules 2021 & Grievance Safety",
    description:
      "100% compliant with Indian digital media guidelines. Statutory Grievance Redressal Officer with a strict 36-hour SLA turnaround for total user safety.",
    tag: "Safe & Compliant",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Download & Create Account",
    desc: "Install the YouPeak app on Android or iOS. Complete your quick 30-second mobile OTP login and claim your welcome coins.",
    badge: "Quick Onboarding",
  },
  {
    step: "02",
    title: "Watch, Like & Complete Daily Tasks",
    desc: "Browse trending shorts, music, comedy, and tech videos. Claim daily check-in streaks, like videos, and leave thoughtful comments.",
    badge: "Daily Engagement",
  },
  {
    step: "03",
    title: "Collect Coins in Real-Time",
    desc: "Watch your in-app coin wallet increase with every interaction. Transparent ledger records every reward coin earned with zero hidden deductions.",
    badge: "Live Ledger",
  },
  {
    step: "04",
    title: "Withdraw Directly to Your UPI",
    desc: "Exchange your coins at 100 Coins = ₹1 INR. Tap 'Withdraw' and receive money in your Google Pay, PhonePe, Paytm, or Bank in seconds.",
    badge: "Instant Payout",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aman Sharma",
    role: "College Student & Tasker",
    location: "Jaipur, Rajasthan",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
    text: "I used to spend 2 hours a day scrolling through reels with nothing to show for it. With YouPeak, I upgraded to the Silver pass and easily withdraw ₹1,200 every month directly to my PhonePe. It pays for my broadband and chai!",
    rating: 5,
    verifiedPayout: "₹3,450 Withdrawn",
  },
  {
    name: "Pooja Verma",
    role: "Tech & Lifestyle Creator",
    location: "Indore, Madhya Pradesh",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    text: "Other platforms take 45% or more of your ad revenue and pay you months later. YouPeak's Gold VIP pass gives me an 80% split and the video streaming quality with Cloudflare Stream is ultra smooth. My audience loves it!",
    rating: 5,
    verifiedPayout: "₹42,800 Earned",
  },
  {
    name: "Rohit Deshmukh",
    role: "Peak Referral Partner",
    location: "Pune, Maharashtra",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80",
    text: "The 2-stage referral system is unbeatable. I invited around 60 friends from my university campus. Between the ₹100 sign-up bonus and the 10% tier commission, I made over ₹14,000 in my first 45 days!",
    rating: 5,
    verifiedPayout: "₹14,200 Withdrawn",
  },
];

export const FAQS = [
  {
    q: "Is YouPeak 100% free to use?",
    a: "Yes! Anyone can download YouPeak for free, watch unlimited HD videos and shorts, complete daily tasks, and earn up to ₹5 every single day without paying a single rupee. Optional Starter Passes exist for users who want to unlock higher daily earning caps and get 100% matched Ad Credits.",
  },
  {
    q: "How does the Coin-to-INR conversion work?",
    a: "The conversion rate is transparent and fixed at 100 Coins = ₹1 INR. For example, 50,000 coins equal ₹500 INR. Once you reach the minimum threshold, you can request an instant withdrawal straight to your UPI ID or bank account.",
  },
  {
    q: "How does the 2-Stage Referral program work?",
    a: "When your friend joins using your referral link, you receive Stage 1 reward of ₹100 in your pending balance (held for 24 hours for fraud prevention). When your referred friend completes 100 watch-minutes within 7 days, you receive Stage 2 reward of another ₹100! Plus, if they purchase any membership tier, you earn an instant 10% commission.",
  },
  {
    q: "How do Creator VIP Passes work?",
    a: "All creators start with a 50/50 ad-revenue split on the Classic Free pass. By upgrading to a Creator VIP Pass (Starter, Silver, Gold, or Platinum), you unlock higher revenue splits up to 90% and higher maximum earning caps per video. It pays for itself rapidly as your viewership increases.",
  },
  {
    q: "What payment methods are supported for withdrawals?",
    a: "We support direct UPI transfers (PhonePe, Google Pay, Paytm, BHIM) as well as NEFT/IMPS direct bank transfers processed securely through Razorpay.",
  },
  {
    q: "Is YouPeak legal and compliant in India?",
    a: "Absolutely. YouPeak operates under Indian law and complies strictly with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. We have an official Grievance Redressal Officer with an enforceable 36-hour response SLA.",
  },
];

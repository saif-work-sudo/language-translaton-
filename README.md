# Language 2.0 — Futuristic AI Translation Platform

Language 2.0 is a premium, AI-powered translation platform designed for real-world multilingual communication. Built with Next.js 15, Supabase, and Framer Motion, it features a state-of-the-art dark glassmorphism interface with real-time translation capabilities.

![Language 2.0 Hero](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000)

## 🚀 Key Features

- **Real-time AI Translation**: Instant translation powered by LibreTranslate and neural engines.
- **ChatGPT-Style UX**: Familiar, interactive chat interface with auto-scroll and message animations.
- **Supabase Authentication**: Secure Login/Signup with support for OAuth (GitHub & Google).
- **Persistent Sessions**: Grouped translation history with real-time database synchronization.
- **Premium Aesthetics**: Dark glassmorphism, neon cyan/purple gradients, and smooth motion effects.
- **AI Session Insights**: Draggable floating panels providing contextual and tone analysis.
- **Fully Responsive**: Optimized for seamless use across desktop, tablet, and mobile devices.

## 🛠 Tech Stack

- **Frontend**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: [Supabase](https://supabase.com/) (Auth, PostgreSQL, Realtime)
- **API**: [LibreTranslate](https://libretranslate.com/)

## 📋 Installation Guide

### 1. Clone the repository
```bash
git clone https://github.com/your-username/language-2-0.git
cd language-2-0
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Supabase
1. Create a new project at [Supabase](https://supabase.com/).
2. Navigate to the **SQL Editor** and run the contents of `supabase_schema.sql` (found in the root).
3. Go to **Project Settings > API** to get your URL and Anon Key.

### 4. Configure Environment Variables
Create a `.env.local` file in the root and copy the values from `.env.example`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_LIBRE_TRANSLATE_URL=https://libretranslate.de
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment Steps

### Vercel Deployment
1. Push your code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Add the environment variables from `.env.local` in the Vercel project settings.
4. Deploy!

## 🤝 GitHub Workflow

1. **Fork** the project.
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the Branch (`git push origin feature/AmazingFeature`).
5. **Open** a Pull Request.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by the Language 2.0 Team.

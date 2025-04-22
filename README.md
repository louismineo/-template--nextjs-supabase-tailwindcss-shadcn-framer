# [template] nextjs-supabase-tailwindcss-shadcn-framer
 creating a fast deploy template for future projects, while exploring a new stack


npx create-next-app@latest template-app --typescript

cd template-app

# Tailwind CSS & related
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
npm install -D @tailwindcss/postcss

# shadcn/ui
npm install @shadcn/ui clsx tailwind-merge
# shadcn starter pack install
npx shadcn@latest add button input card dialog dropdown-menu sonner tooltip avatar switch form sheet

# Framer Motion
npm install framer-motion

# Dark mode theming
npm install next-themes


# SET UP SUPABASE
1. Go to https://supabase.com/ and create a new project.
2. Get your project URL and anon public key.
3. Create a .env.local file in your root directory:
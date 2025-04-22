# NextJS-Supabase-TailwindCSS-Shadcn-Motion_TEMPLATE
The motivation behind this repository is to create a hastily deployed template for future projects/hackathons. 

# STEP 1
Clone this repo to your local machine.

# STEP 2
SET UP SUPABASE
1. Go to https://supabase.com/ and create a new project.
2. Get your project URL and anon public key.
3. Create a .env.local file in your root directory:

![image](https://github.com/user-attachments/assets/18bf7448-7d9f-43a4-a87b-b587452f1cee)


# STEP 3
cd into 'template-app' and run 'npm i' to install packages

# STEP 4
1. run 'npm run dev'
2. Open https://localhost:3000 on your web browser and should appear with the default NextJs page

![image](https://github.com/user-attachments/assets/54d141b9-b764-43ec-ba96-2fcc90211a95)

4. now open Open https://localhost:3000/template to see an animated page with a button.

![image](https://github.com/user-attachments/assets/e7413a79-f07e-4ef4-95b8-8108f0f199fb)


Reaching this step means your set-up of this template project has been successful. Congratulations.




# Resources for using this techstack
## NextJS
https://youtu.be/wPTyluxgPQU?si=EqId6E-ezj6wNmYS
https://youtu.be/gSSsZReIFRk?si=CbGOaycJQF7Mi2ak
## TailwindCSS
https://youtu.be/mr15Xzb1Ook?si=P5wCIoFTw9gBMtVU
## Supabase
https://www.youtube.com/watch?v=Gz9bvYybaws&ab_channel=NetNinja
## Shadcn
https://youtu.be/3tIpgRwKWEs?si=8kCxuzz6IDXxlZ9A&t=210
## Framer 
https://youtu.be/31y7-k3ZG0g?si=T4wKIszPjPbrwIcQ&t=170







# Appendices

### NextJs setup
npx create-next-app@latest template-app --typescript
cd template-app

### Tailwind CSS & related
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
npm install -D @tailwindcss/postcss

### Supabase (auth helpers for Next.js)
npm install @supabase/supabase-js @supabase/ssr

### shadcn/ui
npm install @shadcn/ui clsx tailwind-merge

### shadcn starter pack install
npx shadcn@latest add button input card dialog dropdown-menu sonner tooltip avatar switch form sheet

### Framer Motion
npm install framer-motion

### Dark mode theming
npm install next-themes

#🧢 POD T-Shirt Customizer
A modern 3D T-Shirt customization web app using React, Three.js, @react-three/fiber, and TailwindCSS. 
Users can change t-shirt colors and apply full or logo textures in real-time on a 3D model.

------

##🚀 Features
* 🎨 Live t-shirt color customization
* 🖼️ Apply full or logo-based texture decals
* 🧠 Reactive global state using Valtio
* 🎞️ Smooth transitions with Framer Motion
* 🌐 Fast dev server powered by Vite
* 📦 Clean project structure with modular components

----------

##📦 Tech Stack
* React 19
* Three.js (via @react-three/fiber and @react-three/drei)
* TailwindCSS 4
* Vite
* Valtio (state management)
* Maath (physics-based easing for transitions)
* Framer Motion (animations)

----------

##🧪 Scripts
* npm run dev	=> Start development server
* npm run build	=> Build for production

-------

##⚙️ Config Notes
* Ensure that your public/shirt_baked.glb model exists and loads correctly.
* Decal textures should be passed as URLs and must be accessible.
* If loading .hdr environments, you need proper static hosting for those files.

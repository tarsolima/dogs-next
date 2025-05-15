
# Dogs Next 🐶

> 🇧🇷 Read this in [Português](./README.pt.md)

## Project Description  
Dogs Next is a web application developed as part of the Origamid web development course. Built with **Next.js 14** and later updated to **Next.js 15**, it consumes the Origamid Dogs API (a WordPress REST API) to manage users, photos, and comments.

The application includes photo upload/delete, commenting, and personal statistics. It achieves exceptional performance, with a **Google PageSpeed Insights Real User Experience score of 99**.

## 🔗 Live Preview  
👉 [Click here to access the live version](https://dogs-next-rho.vercel.app/) 

## 🚀 Tech Stack
- **Next.js 14 → 15**
- **React**
- **TypeScript**
- **CSS Modules**
- **Vercel**
- **Node.js**

## 🔌 API Used
Origamid Dogs API (provided by Origamid course)

## ⚙️ Installation & Usage
```bash
git clone https://github.com/your-username/dogs-next.git
cd dogs-next
npm install
npm run dev
```

Open in browser: `http://localhost:3000`

For production:
```bash
npm run build
npm run start
```

> Requires Node.js 16+

## 🛠 Improvements Made
- `cookies()` now supports `await`
- Route `params` updated with `<Promise>` + `await`
- Bug fix: image deletion now updates UI instantly via `use client`

## 📄 License
MIT

## 👨‍💻 Author
**Abner Tarso dos Santos Lima**  
📧 abnertarolima@gmail.com  
🔗 [GitHub](https://github.com/tarsolima)
🔗 [Linkedin](https://www.linkedin.com/in/abner-ts/)

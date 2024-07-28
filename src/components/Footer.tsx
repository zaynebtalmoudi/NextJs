import Link from "next/link"

export default function Footer () {
  return (
     <footer className="dark:bg-slate-700 bg-slate-100 text-center py-2">
    
      <ul className="flex-center flex justify-around items-center gap-5 py-4 text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li><Link href="projects">Projects</Link></li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
        Copyright &copy; 2024
    </footer>

  )
}

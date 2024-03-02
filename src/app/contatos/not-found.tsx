import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Pagina não encontrada</p>
      <Link href="/">Ir para Home</Link>
    </div>
  );
}

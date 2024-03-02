import Link from "next/link";

export default function NotFound() {
  return (
    <div className="ms-20">
      <h2>404</h2>
      <p>Ops, Não encontrei a pagina</p>
      <Link href="/">ir a Home</Link>
    </div>
  );
}

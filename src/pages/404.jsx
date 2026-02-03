import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="section-page-404">
      <h1>Erreur 404</h1>

      <Link to="/">Retourner en lieu sûr</Link>
    </section>
  );
};

export default Page404;

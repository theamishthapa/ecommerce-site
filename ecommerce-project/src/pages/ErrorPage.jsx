import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <p className="error-text">Error 404: Page not found</p>
    </>
  );
}

import { Link } from "react-router-dom";
import { LayoutProps } from "../type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-700 p-2 flex justify-center">
        <h1 className="text-6xl text-green-200">Ilek</h1>
      </div>
      <div className="flex flex-grow overflow-y-auto mb-10">{children}</div>
      <div className="bg-green-700 h-10 flex justify-between items-center p-2 fixed bottom-0 w-full">
        <Link to={"/"} className="text-xs text-green-200">
          Accueil
        </Link>
        <h1 className="text-xs text-green-200">
          Fournisseur d'énergie Verte - Recommandé par Greenpeace.
        </h1>
      </div>
    </div>
  );
};

export default Layout;

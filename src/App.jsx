import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Travel from "./pages/Travel";
import Wine from "./pages/Wine";
import About from "./pages/About";

const pages = {
  "": { component: Home },
  projects: { component: Projects, title: "Work" },
  travel: { component: Travel, title: "Travel" },
  wine: { component: Wine, title: "Wine" },
  about: { component: About, title: "About" },
};

// Hash routes (#/projects/schemalens) keep every page linkable on GitHub Pages without server rewrites.
function readRoute() {
  const [section = "", param] = window.location.hash.replace(/^#\/?/, "").split("/");
  return section in pages ? { section, param } : { section: "" };
}

function App() {
  const [route, setRoute] = React.useState(readRoute);

  React.useEffect(() => {
    const onHashChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const { section, param } = route;
  const page = pages[section];

  React.useEffect(() => {
    if (param) return; // detail pages set their own title
    document.title = page.title ? `${page.title} · Adam Birgenheier` : "Adam Birgenheier";
  }, [page, param]);

  const Page = page.component;
  return (
    <>
      <Nav route={section} />
      <main key={`${section}/${param || ""}`} className="page">
        {section === "projects" && param ? <ProjectDetail slug={param} /> : <Page />}
      </main>
      <Footer />
    </>
  );
}

export default App;

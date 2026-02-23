import "./ArticlesBlock.css";
import artigoPDF from "./assets/AprendaKetArtigo - CTIC.pdf";
import artigoCover from "./assets/aprenda-ket-cover.jpg.png";

const articles = [
  {
    title: "Aprenda Ket: Uma Plataforma Educacional para Democratização do Estudo de Computação Quântica",
    description:
      "Educational platform focused on democratizing access to quantum computing and teaching its fundamentals.",
    file: artigoPDF,
    cover: artigoCover,
  },
];

export default function ArticlesBlock() {
  return (
    <div className="articles-block">
      <h2 className="articles-title">Articles</h2>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-item" key={index}>
            <div className="article-card">
              <div className="article-cover">
                <img src={article.cover} alt={article.title} />
              </div>

              <a
                href={article.file}
                className="article-button"
                download
              >
                Download
              </a>
            </div>

            <div className="article-text">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
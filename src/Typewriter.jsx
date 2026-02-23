import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 80, pause = 1200 }) {
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // terminou de digitar -> pausa -> começa a apagar
    if (!deleting && subIndex === text.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // terminou de apagar -> começa a digitar de novo
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => setDeleting(false), 400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, text, speed, pause]);

  return <span className="type-cursor">{text.substring(0, subIndex)}</span>;
}
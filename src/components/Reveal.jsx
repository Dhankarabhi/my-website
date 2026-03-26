import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 18,
  duration = 600,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // initial state
    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    el.style.transitionDelay = `${delay}ms`;
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0px)";
          io.unobserve(el); // animate once
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, duration]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // fade-in trigger

  useEffect(() => {
    axios
      .get(`http://localhost:3001/blogs/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        setFadeIn(true); // trigger fade-in after content loads
      })
      .catch(() => {
        setError("Failed to load blog");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={styles.center}>Loading story...</p>;
  if (error) return <p style={{ ...styles.center, color: "red" }}>{error}</p>;
  if (!post) return <p style={styles.center}>Blog not found</p>;

  const wordCount = post.content ? post.content.split(" ").length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const paragraphs = post.content.split("\n\n");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div
      style={{
        ...styles.page,
        background: darkMode ? "#111" : "#fdf0ff",
        color: darkMode ? "#eee" : "#333",
      }}
    >
      <div
        style={{
          ...styles.card,
          background: darkMode ? "#1c1c1c" : "#fff",
          color: darkMode ? "#eee" : "#333",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={styles.toggle(darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        

        <span style={styles.badge}>Story</span>

        <h1 style={styles.title(darkMode)}>{post.title}</h1>

       <p style={{ ...styles.meta, fontFamily: "Times-new-Roman" }}>
  📅 {post.date} • ⏱ {readingTime} min read
</p>


        <hr style={styles.divider} />

        {/* Blog Content */}
        <div style={styles.contentWrapper}>
          {paragraphs.map((para, index) => (
            <p
              key={index}
              style={{
                ...styles.paragraph,
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s ease ${0.2 + index * 0.1}s, transform 0.8s ease ${
                  0.2 + index * 0.1
                }s`,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Author */}
        <div style={styles.author}>✨ Written by <b style={{color:"#d63384"}}>Lavanya</b></div>

        {/* Share Buttons */}
        <div style={styles.share}>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Check out this blog: ${window.location.href}`
            )}`}
            target="_blank"
            rel="noreferrer"
            style={styles.shareLink}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe57")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
          >
            📲 WhatsApp
          </a>
          <button
            onClick={handleCopyLink}
            style={styles.shareButton(darkMode)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d63384";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = darkMode ? "#eee" : "#333";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            🔗 Copy Link
          </button>
        </div>

        <Link to="/blogs" style={{ ...styles.back, fontFamily: "Times New Roman" }}>
  ← Back to Blogs
</Link>

      </div>
    </div>
  );
}

export default BlogDetails;

// Styles
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "120px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  card: {
    maxWidth: "900px",
    width: "100%",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    position: "relative",marginTop:"5px",marginBottom:"50px"
  },
  toggle: (darkMode) => ({
    position: "absolute",
    top: "20px",
    right: "20px",
    border: "none",
    background: darkMode ? "#ff69b4" : "#d63384",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer",
  }),

  badge: {
    background: "#f3c4fb",
    color: "#6a0572",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    display: "inline-block",
    marginBottom: "10px",fontFamily:"Times-new-Roman",
  },
  title: (darkMode) => ({
    fontSize: "32px",fontFamily:"Times-new-Roman",
    color: darkMode ? "#ffb6c1" : "#6a0572",
    marginBottom: "10px",
  }),
  meta: {
    color: "#888",
    fontSize: "14px",
    marginBottom: "20px",
  },
  divider: {
    border: "none",
    height: "2px",
    background: "linear-gradient(to right, #d63384, transparent)",
    marginBottom: "25px",
  },
  contentWrapper: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  paragraph: {fontFamily:"Times-new-Roman",
    color: "#715353ff",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "16px",
  },
  author: {fontFamily:"Times-new-Roman",
    marginTop: "30px",
    fontStyle: "italic",
  },
  share: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  shareButton: (darkMode) => ({
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: "transparent",fontFamily:"Times-new-Roman",
    color: darkMode ? "#eee" : "#333",
    transition: "all 0.3s ease",
  }),
  shareLink: {
    textDecoration: "none",fontFamily:"Times-new-Roman",
    color: "#fff",
    background: "#25D366", // WhatsApp green
    padding: "8px 14px",
    borderRadius: "12px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  back: {
    display: "inline-block",
    marginTop: "30px",
    color: "#d63384",
    fontWeight: "bold",
    textDecoration: "none",
  },
  center: {
    textAlign: "center",
    marginTop: "80px",
  },
};

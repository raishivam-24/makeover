import { useEffect } from "react";
import "../css/social-feed.css";

function loadScriptOnce(src) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
}

export default function SocialFeed() {
  useEffect(() => {
    loadScriptOnce("https://widgets.sociablekit.com/instagram-feed/widget.js");
    loadScriptOnce("https://widgets.sociablekit.com/youtube-channel-videos/widget.js");
  }, []);

  return (
    <section className="social-feed">
      <div className="container">
        <h2 className="social-feed-heading">Instagram</h2>
        <div className="social-feed-widget-wrap">
          <div className="sk-instagram-feed" data-embed-id="25696652"></div>
        </div>

        <h2 className="social-feed-heading social-feed-heading-second">YouTube</h2>
        <div className="social-feed-widget-wrap">
          <div className="sk-ww-youtube-channel-videos" data-embed-id="25696654"></div>
        </div>
      </div>
    </section>
  );
}
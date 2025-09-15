import { Linkedin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="">
      <h2 className="text-sm font-semibold mb-3">Social Links</h2>

      <div className="flex gap-3 mb-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-blue-700 hover:opacity-80" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-pink-500 hover:opacity-80" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-black hover:opacity-80" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="w-6 h-6 text-red-600 hover:opacity-80" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-blue-600 hover:opacity-80" />
        </a>
      </div>

      <div className="flex gap-3">
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-8"
          />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-8"
          />
        </a>
      </div>
    </div>
  );
}

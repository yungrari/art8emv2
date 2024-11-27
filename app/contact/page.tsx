export default function Contact() {
  return (
    <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center uppercase text-[5vw]">
      <li>
        <a href="mailto:artcreatorartem@gmail.com">artcreatorartem@gmail.com</a>
      </li>
      <li>
        <a href="tel:+48519503988">(+48) 519 503 988</a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/art8m.prod"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {" — "}
        <a
          href="https://www.tiktok.com/@artem.art.creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        {" — "}
        <a
          href="https://t.me/art8m_prod"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </li>
    </ul>
  );
}

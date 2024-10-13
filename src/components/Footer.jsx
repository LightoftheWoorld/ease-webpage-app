import Ease from "../assets/Ease.png";

const data = [
  { header: "LEGAL", items: [
    { name: "Privacy Policy", link: "https://ease-policies.vercel.app/privacy.html" },
    { name: "License Agreement", link: "https://ease-policies.vercel.app/eula.html" },
    { name: "Terms of Service", link: "https://ease-policies.vercel.app" }
  ] },
  { header: "SOCIAL", items: [
      { name: "Twitter", link: "https://x.com/easecommerceinc" },
      { name: "LinkedIn", link: "https://www.linkedin.com/company/ease-inc/" },
    ]
  },
  { header: "CONTACT", items: [
    { name: "team@easecommerce.xyz", link: "mailto:team@easecommerce.xyz" }
  ] }
];

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-4 flex gap-2">
            <span><img src={Ease} alt="Ease logo" className="w-6" /></span>Ease
          </h3>
          <p className="text-sm text-gray-600">
          Using technology to enhance commerce across all distribution channels.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{item.header}</h3>
              <ul className="text-sm text-gray-600 space-y-4">
                {item.items.map((listItem, index) => (
                  <li key={index} className="my-3 cursor-pointer">
                    {item.header === "CONTACT" ? (
                      <a
                        href={listItem.link}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {listItem.name}
                      </a>
                    ) : (
                      <a
                        href={listItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {listItem.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Ease from "../assets/Ease.png"

const Footer = () => {
  
  return (
    <footer className="  py-10 border-t border-gray-200">
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold mb-4 flex gap-2"><span><img src={Ease} alt="" className="w-6" /></span>Ease</h3>
        <p className="text-sm text-gray-600">Introducing Gallery and Articles, publish engaging content to keep your supporters <br /> and subscribers entertained.</p>
      </div>
      <div className="grid grid-cols-4">
      {['Company', 'Legal', 'Features', 'Resources'].map((column, index) => (
        <div key={index}>
          <h3 className="font-bold mb-4">{column}</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li id="contact">Contact</li>
          </ul>
        </div>
      ))}
      </div>
    </div>
  </footer>
  );
};

export default Footer;

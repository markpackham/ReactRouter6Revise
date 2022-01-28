import { Route, Routes, useNavigate } from "react-router-dom";

// nested routes
import Offers from "./Offers";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <button onClick={() => navigate("/products")}>See our products</button>

      <Routes>
        {/* will take us here from http://localhost:3000/about/offers */}
        {/* no longer need to write /about for path="/about/offers" */}
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  );
}

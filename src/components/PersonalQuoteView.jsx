import React from "react";
import { useSelector } from "react-redux";

export default function PersonalQuoteView() {
  const quote = useSelector((state) => state.quote);
  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <div>{quote}</div>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form>
        <input />
        <button type={`submit`}>Submit</button>
      </form>
    </section>
  );
}

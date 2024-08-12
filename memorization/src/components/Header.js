import React from "react";

function Header({
  number,
  increment,
  // data
}) {
  console.log("Header Component Re-rendered!");
  return (
    <div>
      Header - {number}
      <br /> <br />
      <button onClick={increment}>Click</button>
      {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  );
}

export default React.memo(Header);

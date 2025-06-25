function Product2({ p }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      {p.map((y, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "200px",
            transition: "all 0.2s ease-in-out",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            cursor: "pointer"
          }}
          // Hover effect
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={y.pic}
              alt={y.pname}
              style={{ height: "80px", width: "80px", objectFit: "cover" ,borderRadius:'20px'}}
            />
          </div>
          <h3 style={{ margin: "4px 0" }}>{y.pname}</h3>
          <h3 style={{ margin: "4px 0" }}>{y.price}</h3>
          <button
            style={{
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product2;

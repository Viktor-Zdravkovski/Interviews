import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_MODELS_BY_BRANDS } from "../graphql/queries";

const BrandModels = ({ brandId, onSelectGuitar }) => {
    const { loading, error, data } = useQuery(GET_MODELS_BY_BRANDS, {
        variables: {
            id: brandId,
            sortBy: { field: "price", order: "ASC" },
        },
        skip: !brandId, // Skip query if brandId is falsy
    });

    const [typeFilter, setTypeFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    if (loading) return <p>Loading models...</p>;
    if (error) return <p>Error: {error.message}</p>;


    const filtered = data.findBrandModels
        .filter((model) => (typeFilter ? model.type.toLowerCase() === typeFilter.toLowerCase() : true))
        .filter((model) => (searchQuery ? model.name.toLowerCase().includes(searchQuery.toLowerCase()) : true));

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentModels = filtered.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
            <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
                Check out the <span style={{ color: "#ff6600" }}>Selection</span>
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginBottom: "2rem",
                }}
            >
                <select
                    value={typeFilter}
                    onChange={(e) => {
                        setTypeFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        cursor: "pointer",
                        transition: "0.3s",
                    }}
                >
                    <option value="">Filter by type</option>
                    <option value="ELECTRIC">Electric</option>
                    <option value="ACOUSTIC">Acoustic</option>
                    <option value="BASS">Bass</option>
                </select>

                <input
                    type="text"
                    placeholder="Search guitars..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                    }}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        width: "250px",
                    }}
                />
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2rem",
                }}
            >
                {currentModels.map((model) => (
                    <div
                        key={model.id}
                        onClick={() => onSelectGuitar(model)}
                        style={{
                            padding: "1rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            backgroundColor: "#fff",
                            cursor: "pointer",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            transition: "transform 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <img
                            src={model.image}
                            alt={model.name}
                            style={{
                                width: "300px",
                                height: "auto",
                                objectFit: "contain",
                                marginBottom: "1rem",
                            }}
                        />
                        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{model.name}</h2>
                        <p style={{ fontWeight: "bold", color: "#ff6600" }}>${model.price}</p>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "2rem",
                }}
            >
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            border: i + 1 === currentPage ? "2px solid #ff6600" : "1px solid #ccc",
                            backgroundColor: i + 1 === currentPage ? "#fff7f0" : "#fff",
                            cursor: "pointer",
                            color: "#ff6600",
                        }}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default BrandModels;

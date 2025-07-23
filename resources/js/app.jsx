import "../css/app.css";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import Navigasi from "./components/Navigasi";
import Content from "./components/Content";

function App() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        // Latar belakang diubah menjadi abu-abu sangat terang
        <div className="p-4 bg-slate-50 min-h-screen">
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                // Warna tombol diubah agar sesuai palet baru
                className="md:hidden mb-4 p-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
            >
                ☰ Menu
            </button>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {(showSidebar || window.innerWidth >= 768) && (
                    <div className="md:col-span-1">
                        <Navigasi
                            onSelect={(item) => {
                                setSelectedItem(item);
                                setShowSidebar(false);
                            }}
                        />
                    </div>
                )}

                <div className="md:col-span-3">
                    <Content selectedItem={selectedItem} />
                </div>
            </div>
        </div>
    );
}

const container = document.getElementById("react-app");

if (container && !container.hasAttribute("data-react-root")) {
    container.setAttribute("data-react-root", "true");
    const root = createRoot(container);
    root.render(<App />);
}

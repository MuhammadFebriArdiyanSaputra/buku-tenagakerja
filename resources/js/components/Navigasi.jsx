import { useEffect, useState } from "react";

export default function Navigasi({ onSelect }) {
    const [menu, setMenu] = useState([]);
    const [openSections, setOpenSections] = useState({});
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        fetch("/data/navigation.json")
            .then((res) => res.json())
            .then((data) => setMenu(data));
    }, []);

    const toggleSection = (title) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    // Kirim seluruh objek 'item' atau 'child' ke fungsi onSelect
    const renderItem = (item, key, parentTitle = null) => {
        const isMultiLine = item.title.includes("\n");
        const titleRowClass = isMultiLine ? "flex" : "flex items-center";
        const bulletClass = isMultiLine
            ? "mr-2 pt-[0.4rem] self-start leading-none"
            : "mr-2";

        return (
            <li key={key}>
                <div className={titleRowClass}>
                    <span className={bulletClass}>•</span>
                    <div className="flex-1">
                        {!item.children ? (
                            <button
                                onClick={() => {
                                    setActiveItem(item.file);
                                    onSelect({ ...item, parentTitle });
                                }}
                                className={`hover:text-blue-500 whitespace-pre-line text-left ${
                                    activeItem === item.file
                                        ? "font-bold text-blue-600"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        ) : (
                            <span className="font-medium whitespace-pre-line">
                                {item.title}
                            </span>
                        )}
                    </div>
                </div>

                {item.children && (
                    <ul className="ml-4 mt-1 list-square text-gray-600 space-y-1">
                        {item.children.map(
                            (child, j) => renderItem(child, j, item.title) // ⬅️ Kirim parent di sini
                        )}
                    </ul>
                )}
                {/* {item.children && (
                    <ul className="ml-4 mt-1 list-square text-gray-600 space-y-1">
                        {item.children.map((child, j) => (
                            <li key={j}>
                                <button
                                    onClick={() => onSelect(child)} // PERUBAHAN DI SINI
                                    className="hover:text-blue-500 whitespace-pre-line text-left"
                                >
                                    {child.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                )} */}
            </li>
        );
    };

    return (
        <div className="bg-white p-4 rounded shadow h-full overflow-auto max-h-screen">
            <h1 className="text-xl font-bold mb-4 text-blue-700">
                📘 Buku Tenaga Kerja
            </h1>
            <ul className="space-y-2">
                {menu.map((section, idx) => {
                    const subItems = section.children || section.items || [];
                    return (
                        <li key={idx}>
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="font-semibold w-full text-left text-gray-800 hover:text-blue-600"
                            >
                                {section.title}
                            </button>
                            {openSections[section.title] && (
                                <ul className="ml-4 mt-1 text-sm text-gray-700 space-y-1">
                                    {subItems.map((item, i) =>
                                        renderItem(item, i, section.title)
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

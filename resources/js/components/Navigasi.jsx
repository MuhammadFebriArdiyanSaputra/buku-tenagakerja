import { useEffect, useState } from "react";
// Impor ikon yang akan digunakan
import {
    FaBookOpen,
    FaUsers,
    FaChartLine,
    FaChartBar,
    FaChartPie,
    FaBuilding,
    FaBalanceScale,
    FaIndustry,
    FaDoorClosed,
    FaBriefcase,
} from "react-icons/fa";

// Objek untuk memetakan judul ke komponen ikon
const iconMap = {
    PENDAHULUAN: <FaBookOpen className="mr-3 text-teal-600" />,
    "DATA PEGAWAI DINAS": <FaUsers className="mr-3 text-teal-600" />,
    "KONDISI KETENAGAKERJAAN": <FaChartBar className="mr-3 text-teal-600" />,
    "PENDUDUK BEKERJA": <FaBriefcase className="mr-3 text-teal-600" />,
    PENGANGGURAN: <FaChartLine className="mr-3 text-teal-600" />,
    "PELATIHAN DAN PEMAGANGAN": <FaIndustry className="mr-3 text-teal-600" />,
    "PENEMPATAN & PENCARIAN KERJA": (
        <FaBuilding className="mr-3 text-teal-600" />
    ),
    "TENAGA KERJA ASING (TKA)": <FaUsers className="mr-3 text-teal-600" />,
    "DATA PERUSAHAAN": <FaBuilding className="mr-3 text-teal-600" />,
    "NORMA DAN REGULASI KERJA": (
        <FaBalanceScale className="mr-3 text-teal-600" />
    ),
    "HUBUNGAN INDUSTRIAL & UMP": <FaChartPie className="mr-3 text-teal-600" />,
    PENUTUP: <FaDoorClosed className="mr-3 text-teal-600" />,
};

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

    const renderItem = (item, key, parentTitle = null) => {
        const isMultiLine = item.title.includes("\n");
        const titleRowClass = isMultiLine ? "flex" : "flex items-center";
        const bulletClass = isMultiLine
            ? "mr-2 pt-[0.4rem] self-start leading-none text-slate-500" // Warna bullet diubah
            : "mr-2 text-slate-500";

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
                                // Warna teks dan hover diubah
                                className={`hover:text-teal-600 whitespace-pre-line text-left text-slate-700 ${
                                    activeItem === item.file
                                        ? "font-bold text-teal-700"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        ) : (
                            <span className="font-medium whitespace-pre-line text-slate-800">
                                {item.title}
                            </span>
                        )}
                    </div>
                </div>

                {item.children && (
                    <ul className="ml-4 mt-1 space-y-1">
                        {item.children.map((child, j) =>
                            renderItem(child, j, item.title)
                        )}
                    </ul>
                )}
            </li>
        );
    };

    return (
        // Class 'shadow-md' ditambahkan untuk efek angkat
        <div className="bg-white p-4 rounded-lg shadow-md h-full overflow-auto max-h-screen">
            <h1 className="text-xl font-bold mb-4 text-teal-800 flex items-center">
                <FaBookOpen className="mr-2" />
                Buku Tenaga Kerja
            </h1>
            <ul className="space-y-2">
                {menu.map((section, idx) => {
                    const subItems = section.children || section.items || [];
                    return (
                        <li key={idx}>
                            <button
                                onClick={() => toggleSection(section.title)}
                                // Warna teks dan hover diubah, ikon ditambahkan
                                className="font-semibold w-full text-left text-slate-800 hover:bg-teal-50 flex items-center p-2 rounded-md"
                            >
                                {iconMap[section.title] || (
                                    <FaBookOpen className="mr-3 text-teal-600" />
                                )}{" "}
                                {/* Fallback icon */}
                                <span className="flex-1">{section.title}</span>
                            </button>
                            {openSections[section.title] && (
                                <ul className="ml-6 mt-1 text-sm space-y-1 border-l-2 border-slate-200 pl-4">
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

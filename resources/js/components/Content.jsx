import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";

export default function Content({ selectedItem }) {
    const [tabel, setTabel] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!selectedItem || !selectedItem.file) {
            setTabel(null);
            return;
        }

        const filename = selectedItem.file;

        setLoading(true);
        fetch(`/data/${filename}`)
            .then((res) => {
                if (!res.ok) throw new Error("File not found");
                return res.json();
            })
            .then((data) => setTabel(data))
            .catch(() => setTabel(null))
            .finally(() => setLoading(false));
    }, [selectedItem]);

    const exportToPDF = () => {
        const element = document.getElementById("content-to-export");
        if (!element) {
            alert("Konten tidak ditemukan untuk export!");
            return;
        }

        const opt = {
            margin: 0.5,
            filename: `${selectedItem.title}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };

        html2pdf().set(opt).from(element).save();
    };

    if (!selectedItem) {
        return (
            <div className="bg-white p-6 rounded shadow">
                <p className="text-gray-600">
                    Silakan pilih item dari menu di samping.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded shadow">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-sm text-gray-500">Memuat data...</p>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-xl font-bold whitespace-pre-line">
                                {selectedItem.title}
                            </h2>
                        </div>

                        <button
                            onClick={exportToPDF}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                        >
                            📄 Export PDF
                        </button>
                    </div>

                    <div id="content-to-export">
                        {selectedItem.parentTitle && (
                            <p className="text-sm text-gray-500 mb-2 italic">
                                📂 {selectedItem.parentTitle} /{" "}
                                <span className="text-gray-800 not-italic">
                                    {selectedItem.title}
                                </span>
                            </p>
                        )}

                        {tabel?.isi && (
                            <div
                                className="prose max-w-none text-sm text-gray-700"
                                dangerouslySetInnerHTML={{ __html: tabel.isi }}
                            />
                        )}

                        {tabel?.kolom && tabel?.data && (
                            <div className="overflow-x-auto mt-4">
                                <table className="w-full border border-gray-300 text-sm">
                                    <thead className="bg-gray-100 text-left">
                                        <tr>
                                            {tabel.kolom.map((kol, idx) => (
                                                <th
                                                    key={idx}
                                                    className="px-4 py-2 border"
                                                >
                                                    {kol}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabel.data.map((row, rIdx) => (
                                            <tr
                                                key={rIdx}
                                                className="hover:bg-gray-50"
                                            >
                                                {row.map((cell, cIdx) => (
                                                    <td
                                                        key={cIdx}
                                                        className="px-4 py-2 border"
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {!tabel && (
                            <p className="text-sm text-gray-500 mt-4">
                                Data untuk "{selectedItem.title}" belum tersedia
                                atau gagal dimuat.
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

import "../css/app.css";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import Navigasi from "./components/Navigasi";
import Content from "./components/Content";
import html2pdf from "html2pdf.js";
import * as XLSX from "xlsx";

function App() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isExporting, setIsExporting] = useState(false); // State untuk loading

    // Export ke PDF semua bab
    const exportAllBabToPDF = async () => {
        setIsExporting(true); // Mulai loading
        try {
            const navigation = await fetch("/data/navigation.json").then(
                (res) => res.json()
            );

            const allFiles = [];
            navigation.forEach((section) => {
                const items = section.children || section.items || [];
                items.forEach((item) => {
                    if (item.file) {
                        allFiles.push({
                            title: item.title,
                            file: item.file,
                            parent: section.title,
                        });
                    } else if (item.children) {
                        item.children.forEach((child) => {
                            allFiles.push({
                                title: child.title,
                                file: child.file,
                                parent: item.title,
                            });
                        });
                    }
                });
            });

            const contents = await Promise.all(
                allFiles.map(async (item) => {
                    const res = await fetch(`/data/${item.file}`);
                    const data = await res.json();
                    return {
                        title: item.title,
                        parent: item.parent,
                        content: data,
                    };
                })
            );

            const wrapper = document.createElement("div");
            // PERBAIKAN 1: Jadikan wrapper "off-screen" agar tidak mengganggu UI
            wrapper.style.position = "absolute";
            wrapper.style.left = "-9999px";
            wrapper.style.width = "2000px"; // Beri lebar yang cukup untuk tabel landscape
            wrapper.style.padding = "20px";
            wrapper.style.fontSize = "12px";

            contents.forEach((item) => {
                const section = document.createElement("div");
                section.style.marginBottom = "30px";
                section.style.pageBreakInside = "avoid"; // Mencegah tabel terpotong antar halaman

                let html = `<h2 style="font-size:16px; font-weight:bold; margin-bottom:10px;">
                    📂 ${item.parent} / ${item.title.replace(/\n/g, " ")}
                </h2>`;

                if (item.content.isi) {
                    html += `<div style="font-size:12px; line-height:1.5; margin-bottom:10px;">
                        ${item.content.isi}
                    </div>`;
                }

                if (item.content.kolom) {
                    html += `
                        <table border="1" cellspacing="0" cellpadding="4" style="
                            width:100%; 
                            border-collapse:collapse; 
                            font-size:10px;
                            table-layout:auto;
                            word-wrap:break-word;
                        ">
                            <thead style="background:#eee;">
                                <tr>
                                    ${item.content.kolom
                                        .map(
                                            (k) =>
                                                `<th style="padding:4px;">${k}</th>`
                                        )
                                        .join("")}
                                </tr>
                            </thead>
                            <tbody>
                                ${item.content.data
                                    .map(
                                        (row) =>
                                            `<tr>${row
                                                .map(
                                                    (cell) =>
                                                        `<td style="padding:4px;">${cell}</td>`
                                                )
                                                .join("")}</tr>`
                                    )
                                    .join("")}
                            </tbody>
                        </table>`;
                }
                section.innerHTML = html;
                wrapper.appendChild(section);
            });

            document.body.appendChild(wrapper);

            const opt = {
                margin: 0.5,
                filename: "Buku-Tenaga-Kerja-Lengkap.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    width: wrapper.scrollWidth,
                },
                jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
            };

            await html2pdf().set(opt).from(wrapper).save();

            document.body.removeChild(wrapper); // Selalu hapus wrapper setelah selesai
        } catch (error) {
            console.error("Gagal mengekspor PDF:", error);
            alert(
                "Terjadi kesalahan saat mengekspor ke PDF. Silakan cek console log."
            );
        } finally {
            setIsExporting(false); // Selesai loading
        }
    };

    // Export ke Excel semua bab
    const exportAllBabToExcel = async () => {
        setIsExporting(true);
        // PERBAIKAN 2: Gunakan try...catch untuk menangani error
        try {
            const navigation = await fetch("/data/navigation.json").then(
                (res) => res.json()
            );

            const allFiles = [];
            navigation.forEach((section) => {
                const items = section.children || section.items || [];
                items.forEach((item) => {
                    if (item.file) {
                        allFiles.push({
                            title: item.title,
                            file: item.file,
                            parent: section.title,
                        });
                    } else if (item.children) {
                        item.children.forEach((child) => {
                            allFiles.push({
                                title: child.title,
                                file: child.file,
                                parent: item.title,
                            });
                        });
                    }
                });
            });

            const wb = XLSX.utils.book_new();
            const sheetNames = new Set(); // Untuk melacak nama sheet yang sudah dipakai

            for (const [index, item] of allFiles.entries()) {
                const res = await fetch(`/data/${item.file}`);
                const data = await res.json();

                let sheetData = [];
                let hasContent = false;

                // PERBAIKAN 4: Logika penambahan data yang lebih baik
                if (data.isi || (data.kolom && data.data)) {
                    hasContent = true;
                    sheetData.push([
                        `📂 ${item.parent} / ${item.title.replace(/\n/g, " ")}`,
                    ]);
                    sheetData.push([]); // Baris kosong sebagai spasi
                }

                if (data.isi) {
                    sheetData.push([data.isi.replace(/<[^>]+>/g, "")]); // Hapus tag HTML
                    sheetData.push([]);
                }

                if (data.kolom && data.data) {
                    sheetData.push(data.kolom);
                    data.data.forEach((row) => sheetData.push(row));
                }

                if (hasContent) {
                    const ws = XLSX.utils.aoa_to_sheet(sheetData);

                    // PERBAIKAN 3: Membuat nama sheet yang unik
                    let baseName = item.title
                        .replace(/[\\/*?:"<>|]/g, "")
                        .substring(0, 25); // Hapus karakter ilegal & potong
                    let sheetName = baseName;
                    let counter = 1;
                    while (sheetNames.has(sheetName)) {
                        sheetName = `${baseName.substring(
                            0,
                            28 - String(counter).length
                        )}_${counter}`;
                        counter++;
                    }
                    sheetNames.add(sheetName);

                    XLSX.utils.book_append_sheet(wb, ws, sheetName);
                }
            }

            if (wb.SheetNames.length > 0) {
                XLSX.writeFile(wb, "Buku-Tenaga-Kerja-Lengkap.xlsx");
            } else {
                alert("Tidak ada data untuk diekspor.");
            }
        } catch (error) {
            console.error("Gagal mengekspor Excel:", error);
            alert(
                "Terjadi kesalahan saat mengekspor ke Excel. Silakan cek console log."
            );
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="p-4">
            <div className="flex gap-2 mb-4 flex-wrap">
                <button
                    onClick={exportAllBabToPDF}
                    disabled={isExporting}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm disabled:bg-gray-400"
                >
                    {isExporting
                        ? "Mengekspor..."
                        : "📄 Export Semua Bab ke PDF"}
                </button>

                <button
                    onClick={exportAllBabToExcel}
                    disabled={isExporting}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm disabled:bg-gray-400"
                >
                    {isExporting
                        ? "Mengekspor..."
                        : "📊 Export Semua Bab ke Excel"}
                </button>
            </div>

            {/* ... sisa komponen Anda tidak berubah ... */}

            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
            >
                ☰ Menu
            </button>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {(showSidebar || window.innerWidth >= 768) && (
                    <div className="md:col-span-1 bg-white p-4 rounded shadow max-h-screen overflow-auto">
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

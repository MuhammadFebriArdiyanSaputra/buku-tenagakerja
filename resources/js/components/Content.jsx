import { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// Impor ikon
import {
    FaQuoteLeft,
    FaBullseye,
    FaTasks,
    FaBook,
    FaListOl,
    FaUsers,
    FaVenusMars,
    FaMosque,
    FaUserTie,
} from "react-icons/fa";
// Impor komponen dan library untuk grafik
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    LineElement,
    PointElement,
    RadialLinearScale,
} from "chart.js";
import { Doughnut, Bar, Pie, Line, Radar } from "react-chartjs-2";
// Impor komponen untuk PETA
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

// Registrasi komponen Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    LineElement,
    PointElement,
    RadialLinearScale
);

// =====================================================================
// KOMPONEN-KOMPONEN HALAMAN (CUSTOM & DEFAULT)
// =====================================================================

function KataPengantarPage() {
    return (
        <div className="bg-teal-50/50 p-8 rounded-lg relative">
            <FaQuoteLeft className="absolute top-4 left-4 text-5xl text-teal-200" />
            <div className="relative z-10 space-y-4 text-slate-700">
                <p className="text-justify">
                    Buku Data Ketenagakerjaan Provinsi Lampung ini memuat
                    informasi dan data tentang kondisi ketenagakerjaan di
                    Provinsi Lampung pada tahun 2024, hasil capaian pelaksanaan
                    program kegiatan ketenagakerjaan tahun 2024 di Provinsi
                    Lampung yang berasal dari berbagai sumber yang selanjutnya
                    dikompilasi oleh Dinas Tenaga Kerja Provinsi Lampung. Buku
                    Data ini diharapkan dapat dipergunakan oleh para{" "}
                    <em>stakeholder</em> sebagai bahan dalam perumusan kebijakan
                    guna meningkatkan pembangunan Ketenagakerjaan di Provinsi
                    Lampung.
                </p>
                <div className="pt-6">
                    <p className="text-right">Bandar Lampung, Februari 2025</p>
                    <p className="text-right font-bold">Plh. KEPALA DINAS</p>
                    <p className="text-right uppercase">
                        Tenaga Kerja Provinsi Lampung
                    </p>
                    <br />
                    <p className="text-right font-bold underline">
                        YURI AGUSTINA PRIMASARI, S.E., M.M
                    </p>
                    <p className="text-right">Pembina Tk. I</p>
                    <p className="text-right">NIP. 19690825 199603 2 003</p>
                </div>
            </div>
        </div>
    );
}

function VisiMisiPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <div className="flex items-center text-2xl font-bold text-slate-800 mb-4">
                    <FaBullseye className="text-teal-500 mr-3" />
                    VISI
                </div>
                <div className="text-center space-y-2">
                    <p className="text-slate-600 uppercase">
                        VISI PROVINSI LAMPUNG ADALAH
                    </p>
                    <p className="font-bold text-xl text-teal-700 tracking-wide">
                        “ RAKYAT LAMPUNG BERJAYA”
                    </p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <div className="flex items-center text-2xl font-bold text-slate-800 mb-4">
                    <FaTasks className="text-amber-500 mr-3" />
                    MISI
                </div>
                <div className="text-center space-y-2">
                    <p className="text-slate-600">
                        Sejalan dengan RPJMD Provinsi Lampung 2019–2024, Dinas
                        Tenaga Kerja Provinsi Lampung dalam melaksanakan Program
                        dan Kegiatan mengacu pada misi 3 yaitu :
                    </p>
                    <p className="mt-2 font-bold text-base text-amber-700 uppercase tracking-wide">
                        “MENINGKATKAN KUALITAS SDM, MENGUPAYAKAN PERLINDUNGAN
                        PEMBERDAYAAN PEREMPUAN DAN PENYANDANG DISABILITAS”
                    </p>
                </div>
            </div>
        </div>
    );
}

function TujuanSasaranPage() {
    return (
        <div className="space-y-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center text-2xl font-bold text-slate-800 mb-4">
                    <FaBook className="text-teal-500 mr-3" />
                    TUJUAN
                </div>
                <p className="mt-2 font-medium text-slate-700">
                    “Meningkatnya Penyerapan Tenaga Kerja dengan Indikator
                    <br />
                    Tingkat Pengangguran Terbuka (TPT)”
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center text-2xl font-bold text-slate-800 mb-4">
                    <FaListOl className="text-amber-500 mr-3" />
                    SASARAN STRATEGIS
                </div>
                <ol className="list-decimal list-inside space-y-3 font-medium text-slate-700 md:px-8">
                    <li>
                        Meningkatnya Penempatan Tenaga Kerja dengan Indikator
                        Persentase Penempatan Tenaga Kerja.
                    </li>
                    <li>
                        Meningkatnya Tenaga Kerja Yang Mendapat Perlindungan
                        Ketenagakerjaan — Persentase Tenaga Kerja Di Perusahaan
                        Yang Mendapat Perlindungan Ketenagakerjaan.
                    </li>
                </ol>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value, colorClass }) {
    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-md flex items-center border-l-4 ${colorClass}`}
        >
            <div className="text-3xl mr-4">{icon}</div>
            <div>
                <div className="text-slate-500 text-sm">{title}</div>
                <div className="text-2xl font-bold text-slate-800">{value}</div>
            </div>
        </div>
    );
}

function JenisKelaminPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
            {
                label: "Jumlah PNS",
                data: [103, 63],
                backgroundColor: [
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(236, 72, 153, 0.7)",
                ],
                borderColor: ["rgba(59, 130, 246, 1)", "rgba(236, 72, 153, 1)"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard
                    icon={<FaUsers />}
                    title="Total PNS"
                    value="166"
                    colorClass="border-teal-500"
                />
                <StatCard
                    icon={<FaVenusMars style={{ color: "#3b82f6" }} />}
                    title="Laki-laki"
                    value="103"
                    colorClass="border-blue-500"
                />
                <StatCard
                    icon={<FaVenusMars style={{ color: "#ec4899" }} />}
                    title="Perempuan"
                    value="63"
                    colorClass="border-pink-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-center mb-2 text-slate-700">
                        Proporsi Berdasarkan Jenis Kelamin
                    </h3>
                    <Doughnut data={chartData} />
                </div>
                <div className="md:col-span-3">
                    <DefaultContentView
                        data={dataFromHtml}
                        selectedItem={selectedItem}
                    />
                </div>
            </div>
        </div>
    );
}

function AgamaPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["Islam", "Protestan", "Katolik", "Hindu"],
        datasets: [
            {
                label: "Jumlah PNS",
                data: [158, 3, 2, 3],
                backgroundColor: [
                    "rgba(22, 163, 74, 0.7)",
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(234, 179, 8, 0.7)",
                    "rgba(239, 68, 68, 0.7)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    icon={<FaMosque />}
                    title="Islam"
                    value="158"
                    colorClass="border-green-600"
                />
                <StatCard
                    icon={<FaUsers />}
                    title="Protestan"
                    value="3"
                    colorClass="border-blue-500"
                />
                <StatCard
                    icon={<FaUsers />}
                    title="Katolik"
                    value="2"
                    colorClass="border-yellow-500"
                />
                <StatCard
                    icon={<FaUsers />}
                    title="Hindu"
                    value="3"
                    colorClass="border-red-500"
                />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <h3 className="font-bold text-center mb-2 text-slate-700">
                    Proporsi Berdasarkan Agama
                </h3>
                <div className="max-w-md mx-auto">
                    <Doughnut
                        data={chartData}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PangkatGolonganPage({ dataFromHtml, selectedItem }) {
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Jumlah PNS per Golongan" },
        },
    };
    const chartData = {
        labels: ["Golongan IV", "Golongan III", "Golongan II", "Golongan I"],
        datasets: [
            {
                label: "Jumlah",
                data: [41, 111, 14, 0],
                backgroundColor: "rgba(34, 197, 94, 0.7)",
            },
        ],
    };
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <Bar options={chartOptions} data={chartData} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PendidikanPage({ dataFromHtml, selectedItem }) {
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "Jumlah PNS per Tingkat Pendidikan" },
        },
    };
    const chartData = {
        labels: ["S3", "S2", "S1", "SM/D3", "SLTA", "SLTP", "SD"],
        datasets: [
            {
                label: "Jumlah",
                data: [1, 44, 97, 3, 22, 0, 0],
                backgroundColor: "rgba(21, 128, 61, 0.8)",
                borderColor: "rgba(22, 101, 52, 1)",
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <Bar options={chartOptions} data={chartData} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function JabatanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["Fungsional", "Pelaksana", "Eselon"],
        datasets: [
            {
                label: "Jumlah PNS",
                data: [76, 53, 37],
                backgroundColor: [
                    "rgba(34, 197, 94, 0.7)",
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(234, 179, 8, 0.7)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard
                    icon={<FaUserTie />}
                    title="Fungsional"
                    value="76"
                    colorClass="border-green-500"
                />
                <StatCard
                    icon={<FaUsers />}
                    title="Pelaksana"
                    value="53"
                    colorClass="border-blue-500"
                />
                <StatCard
                    icon={<FaUsers />}
                    title="Struktural (Eselon)"
                    value="37"
                    colorClass="border-yellow-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-center mb-2 text-slate-700">
                        Proporsi Berdasarkan Jabatan
                    </h3>
                    <Doughnut data={chartData} />
                </div>
                <div className="md:col-span-3">
                    <DefaultContentView
                        data={dataFromHtml}
                        selectedItem={selectedItem}
                    />
                </div>
            </div>
        </div>
    );
}

function PthlPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
            {
                label: "Jumlah PTHL",
                data: [9, 4],
                backgroundColor: [
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(236, 72, 153, 0.7)",
                ],
                borderColor: ["rgba(59, 130, 246, 1)", "rgba(236, 72, 153, 1)"],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard
                    icon={<FaUsers />}
                    title="Total PTHL"
                    value="13"
                    colorClass="border-teal-500"
                />
                <StatCard
                    icon={<FaVenusMars style={{ color: "#3b82f6" }} />}
                    title="Laki-laki"
                    value="9"
                    colorClass="border-blue-500"
                />
                <StatCard
                    icon={<FaVenusMars style={{ color: "#ec4899" }} />}
                    title="Perempuan"
                    value="4"
                    colorClass="border-pink-500"
                />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <h3 className="font-bold text-center mb-2 text-slate-700">
                    Proporsi PTHL Berdasarkan Jenis Kelamin
                </h3>
                <div className="max-w-xs mx-auto">
                    <Doughnut data={chartData} />
                </div>
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function FungsionalPage({ dataFromHtml, selectedItem }) {
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Pegawai per Jabatan Fungsional",
            },
        },
    };
    const chartData = {
        labels: [
            "Pengawas Ketenagakerjaan",
            "Instruktur BLK",
            "Pengantar Kerja",
            "Instruktur BPPD",
            "Mediator",
            "Perencana",
            "Penguji K3",
            "Analis Kepegawaian",
            "Analisis Keuangan",
        ],
        datasets: [
            {
                label: "Jumlah",
                data: [33, 28, 4, 3, 2, 2, 2, 1, 1],
                backgroundColor: "rgba(14, 116, 144, 0.8)",
                borderColor: "rgba(21, 94, 117, 1)",
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <StatCard
                icon={<FaUserTie />}
                title="Total Pegawai Fungsional"
                value="76"
                colorClass="border-cyan-700 mb-8"
            />
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <Bar options={chartOptions} data={chartData} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function InstrukturKejuruanPage({ dataFromHtml, selectedItem }) {
    const pieData = {
        labels: [
            "BLK Bandar Lampung",
            "BLK Metro",
            "BLK Kalianda",
            "BPPD",
            "BLK Way Abung",
        ],
        datasets: [
            {
                data: [17, 6, 4, 3, 1],
                backgroundColor: [
                    "#065f46",
                    "#047857",
                    "#059669",
                    "#10b981",
                    "#34d399",
                ],
            },
        ],
    };
    const barData = {
        labels: [
            "TIK",
            "Teknik Las",
            "Otomotif",
            "Bisnis Manajemen",
            "Pariwisata",
            "Refrigeration",
            "Teknik Listrik",
            "Garmen",
            "Pengolahan Hasil Pertanian",
            "Produktivitas",
        ],
        datasets: [
            {
                label: "Jumlah Instruktur",
                data: [5, 5, 4, 3, 3, 2, 2, 2, 1, 3],
                backgroundColor: "rgba(13, 148, 136, 0.8)",
            },
        ],
    };
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-center mb-2 text-slate-700">
                        Distribusi Instruktur per Unit Kerja
                    </h3>
                    <div className="max-w-sm mx-auto">
                        <Pie data={pieData} />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-center mb-2 text-slate-700">
                        Jumlah Instruktur per Kejuruan
                    </h3>
                    <Bar
                        data={barData}
                        options={{ indexAxis: "y", responsive: true }}
                    />
                </div>
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU UNTUK PETA INTERAKTIF ---
function PetaInteraktifPage({ dataFromHtml, selectedItem }) {
    const [geoData, setGeoData] = useState(null);
    const [hoveredInfo, setHoveredInfo] = useState({
        name: "Arahkan kursor ke kabupaten/kota",
        value: "",
    });

    const dataPenduduk2024 = {
        "Bandar Lampung": 930994,
        "Lampung Barat": 233113,
        "Lampung Selatan": 831078,
        "Lampung Tengah": 1170847,
        "Lampung Timur": 882844,
        "Lampung Utara": 489315,
        Mesuji: 178340,
        Metro: 133547,
        Pesawaran: 372913,
        "Pesisir Barat": 124054,
        Pringsewu: 320868,
        Tanggamus: 503291,
        "Tulang Bawang": 334592,
        "Tulang Bawang Barat": 223980,
        "Way Kanan": 366443,
    };

    useEffect(() => {
        fetch("/data/Kabupaten-Kota (Provinsi Lampung).geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    }, []);

    const getColor = (jumlah) => {
        return jumlah > 1000000
            ? "#800026"
            : jumlah > 800000
            ? "#BD0026"
            : jumlah > 500000
            ? "#E31A1C"
            : jumlah > 400000
            ? "#FC4E2A"
            : jumlah > 300000
            ? "#FD8D3C"
            : jumlah > 200000
            ? "#FEB24C"
            : jumlah > 100000
            ? "#FED976"
            : "#FFEDA0";
    };

    const style = (feature) => {
        const namaKab = feature.properties.kabkot;
        const jumlah = dataPenduduk2024[namaKab] || 0;
        return {
            fillColor: getColor(jumlah),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
        };
    };

    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: (e) => {
                const targetLayer = e.target;
                targetLayer.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.9,
                });
                const namaKab = feature.properties.kabkot;
                const jumlah =
                    dataPenduduk2024[namaKab] || "Data tidak tersedia";
                setHoveredInfo({
                    name: feature.properties.kabkot,
                    value: `Jumlah: ${
                        typeof jumlah === "number"
                            ? jumlah.toLocaleString("id-ID")
                            : jumlah
                    }`,
                });
            },
            mouseout: (e) => {
                layer.setStyle(style(feature));
                setHoveredInfo({
                    name: "Arahkan kursor ke kabupaten/kota",
                    value: "",
                });
            },
        });
    };

    const InfoBox = () => (
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 shadow-lg rounded-md z-[1000]">
            <h4 className="font-bold text-slate-800">{hoveredInfo.name}</h4>
            <span className="text-sm text-slate-600">{hoveredInfo.value}</span>
        </div>
    );

    const LegendBox = () => {
        const grades = [
            0, 100000, 200000, 300000, 400000, 500000, 800000, 1000000,
        ];
        return (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-80 shadow-lg rounded-md z-[1000]">
                <h4 className="font-bold mb-1 text-sm">Penduduk Usia Kerja</h4>
                {grades.map((grade, i) => (
                    <div key={i} className="flex items-center">
                        <i
                            style={{
                                background: getColor(grade + 1),
                                width: "18px",
                                height: "18px",
                                marginRight: "5px",
                            }}
                        ></i>
                        <span className="text-xs">
                            {grade.toLocaleString("id-ID")}
                            {grades[i + 1]
                                ? ` - ${grades[i + 1].toLocaleString("id-ID")}`
                                : "+"}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (!geoData) {
        return <div>Memuat data peta...</div>;
    }

    return (
        <div>
            <div className="h-[500px] w-full rounded-lg shadow-md relative">
                <MapContainer
                    center={[-4.8, 105.0]}
                    zoom={8.5}
                    scrollWheelZoom={false}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                    }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                    <InfoBox />
                    <LegendBox />
                </MapContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                    Tabel Detail
                </h3>
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

// --- KOMPONEN BARU 1: Menurut Kelompok Umur ---
function KelompokUmurPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            "60+",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Usia Kerja Tahun 2024",
                data: [
                    725818, 726751, 746088, 742770, 731718, 689271, 646759,
                    568956, 474865, 1043223,
                ],
                backgroundColor: "rgba(20, 83, 45, 0.7)",
                borderColor: "rgba(20, 83, 45, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Populasi Usia Kerja per Kelompok Umur (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Menurut Tingkat Pendidikan ---
function TingkatPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "Diploma I/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk",
                data: [2495516, 1898790, 1461001, 691099, 105450, 444363],
                backgroundColor: [
                    "#dcfce7",
                    "#bbf7d0",
                    "#86efac",
                    "#4ade80",
                    "#22c55e",
                    "#16a34a",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: {
                display: true,
                text: [
                    "Proporsi Penduduk Usia Kerja",
                    "per Tingkat Pendidikan (2024)",
                ],
                font: { size: 16 },
            },
        },
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <Doughnut data={chartData} options={chartOptions} />
            </div>
            <div className="lg:col-span-3">
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

function PetaAngkatanKerjaPage({ dataFromHtml, selectedItem }) {
    const [geoData, setGeoData] = useState(null);
    const [hoveredInfo, setHoveredInfo] = useState({
        name: "Arahkan kursor ke kabupaten/kota",
        value: "",
    });

    // Data Angkatan Kerja 2024 (diekstrak dari JSON Anda)
    const dataAngkatanKerja2024 = {
        "Lampung Barat": 193092,
        Tanggamus: 356078,
        "Lampung Selatan": 559609,
        "Lampung Timur": 608326,
        "Lampung Tengah": 860731,
        "Lampung Utara": 325624,
        "Way Kanan": 270104,
        "Tulang Bawang": 239345,
        Pesawaran: 263625,
        Pringsewu: 235992,
        Mesuji: 125192,
        "Tulang Bawang Barat": 158807,
        "Pesisir Barat": 89826,
        "Bandar Lampung": 616815,
        Metro: 93584,
    };

    useEffect(() => {
        fetch("/data/Kabupaten-Kota (Provinsi Lampung).geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    }, []);

    const getColor = (jumlah) => {
        return jumlah > 800000
            ? "#800026"
            : jumlah > 600000
            ? "#BD0026"
            : jumlah > 400000
            ? "#E31A1C"
            : jumlah > 300000
            ? "#FC4E2A"
            : jumlah > 200000
            ? "#FD8D3C"
            : jumlah > 100000
            ? "#FEB24C"
            : "#FED976";
    };

    const style = (feature) => {
        const namaKab = feature.properties.kabkot;
        const jumlah = dataAngkatanKerja2024[namaKab] || 0;
        return {
            fillColor: getColor(jumlah),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
        };
    };

    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: (e) => {
                e.target.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.9,
                });
                const namaKab = feature.properties.kabkot;
                const jumlah =
                    dataAngkatanKerja2024[namaKab] || "Data tidak tersedia";
                setHoveredInfo({
                    name: namaKab,
                    value: `Jumlah: ${jumlah.toLocaleString("id-ID")}`,
                });
            },
            mouseout: (e) => {
                layer.setStyle(style(feature));
                setHoveredInfo({
                    name: "Arahkan kursor ke kabupaten/kota",
                    value: "",
                });
            },
        });
    };

    const InfoBox = () => (
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 shadow-lg rounded-md z-[1000]">
            <h4 className="font-bold text-slate-800">{hoveredInfo.name}</h4>
            <span className="text-sm text-slate-600">{hoveredInfo.value}</span>
        </div>
    );

    const LegendBox = () => {
        const grades = [0, 100000, 200000, 300000, 400000, 600000, 800000];
        return (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-80 shadow-lg rounded-md z-[1000]">
                <h4 className="font-bold mb-1 text-sm">Angkatan Kerja 2024</h4>
                {grades.map((grade, i) => (
                    <div key={i} className="flex items-center">
                        <i
                            style={{
                                background: getColor(grade + 1),
                                width: "18px",
                                height: "18px",
                                marginRight: "5px",
                            }}
                        ></i>
                        <span className="text-xs">
                            {grade.toLocaleString("id-ID")}
                            {grades[i + 1]
                                ? ` - ${grades[i + 1].toLocaleString("id-ID")}`
                                : "+"}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (!geoData) {
        return <div>Memuat data peta...</div>;
    }

    return (
        <div>
            <div className="h-[500px] w-full rounded-lg shadow-md relative">
                <MapContainer
                    center={[-4.8, 105.0]}
                    zoom={8.5}
                    scrollWheelZoom={false}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                    }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                    <InfoBox />
                    <LegendBox />
                </MapContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                    Tabel Detail
                </h3>
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

// --- KOMPONEN BARU 1: Angkatan Kerja per Umur ---
function AKKelompokUmurPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            "60+",
        ],
        datasets: [
            {
                label: "Jumlah Angkatan Kerja Tahun 2024",
                data: [
                    227330, 521143, 540114, 570325, 574774, 570260, 541640,
                    465543, 374237, 611384,
                ],
                backgroundColor: "rgba(5, 150, 105, 0.7)",
                borderColor: "rgba(4, 120, 87, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Angkatan Kerja per Kelompok Umur (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Angkatan Kerja per Pendidikan ---
function AKTingkatPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "Diploma I/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Jumlah Angkatan Kerja",
                data: [1737470, 1175301, 1072042, 545065, 84678, 382194],
                backgroundColor: [
                    "#fecaca",
                    "#fca5a5",
                    "#f87171",
                    "#ef4444",
                    "#dc2626",
                    "#b91c1c",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: {
                display: true,
                text: [
                    "Proporsi Angkatan Kerja",
                    "per Tingkat Pendidikan (2024)",
                ],
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <Doughnut data={chartData} options={chartOptions} />
            </div>
            <div className="lg:col-span-3">
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

function TPAKUmurPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            "65+",
        ],
        datasets: [
            {
                label: "Laki-laki",
                data: [
                    38.37, 83.15, 91.45, 95.2, 96.19, 97.81, 98.24, 97.2, 94.05,
                    78.63,
                ],
                borderColor: "rgb(59, 130, 246)",
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                tension: 0.1,
            },
            {
                label: "Perempuan",
                data: [
                    23.82, 59.57, 52.51, 57.61, 60.35, 67.07, 68.78, 66.02,
                    62.8, 42.73,
                ],
                borderColor: "rgb(236, 72, 153)",
                backgroundColor: "rgba(236, 72, 153, 0.5)",
                tension: 0.1,
            },
            {
                label: "Total",
                data: [
                    31.32, 71.71, 72.39, 76.78, 78.55, 82.73, 83.75, 81.82,
                    78.81, 60.97,
                ],
                borderColor: "rgb(22, 163, 74)",
                backgroundColor: "rgba(22, 163, 74, 0.5)",
                tension: 0.1,
                borderWidth: 3,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "TPAK per Kelompok Umur (2024)",
                font: { size: 16 },
            },
        },
        scales: { y: { ticks: { callback: (value) => value + "%" } } },
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Line data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: TPAK per Pendidikan (Grafik Batang) ---
function TPAKPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "DI/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Tingkat Partisipasi Angkatan Kerja (%) Tahun 2024",
                data: [69.62, 61.9, 73.38, 78.87, 80.3, 86.01],
                backgroundColor: "rgba(132, 100, 219, 0.7)",
                borderColor: "rgba(107, 33, 168, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y", // Membuat bar chart menjadi horizontal
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "TPAK per Tingkat Pendidikan (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { ticks: { callback: (value) => value + "%" } } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PetaPendudukBekerjaPage({ dataFromHtml, selectedItem }) {
    const [geoData, setGeoData] = useState(null);
    const [hoveredInfo, setHoveredInfo] = useState({
        name: "Arahkan kursor",
        value: "",
    });

    // Data Penduduk Bekerja 2024
    const dataBekerja2024 = {
        "Lampung Barat": 189049,
        Tanggamus: 344720,
        "Lampung Selatan": 532508,
        "Lampung Timur": 589967,
        "Lampung Tengah": 832045,
        "Lampung Utara": 306589,
        "Way Kanan": 261277,
        "Tulang Bawang": 231619,
        Pesawaran: 252132,
        Pringsewu: 225631,
        Mesuji: 121624,
        "Tulang Bawang Barat": 152267,
        "Pesisir Barat": 87093,
        "Bandar Lampung": 570952,
        Metro: 90116,
    };

    useEffect(() => {
        fetch("/data/Kabupaten-Kota (Provinsi Lampung).geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    }, []);

    const getColor = (d) =>
        d > 800000
            ? "#4a1486"
            : d > 550000
            ? "#6a00a8"
            : d > 400000
            ? "#8e24aa"
            : d > 300000
            ? "#ab47bc"
            : d > 200000
            ? "#ce93d8"
            : d > 100000
            ? "#e1bee7"
            : "#f3e5f5";
    const style = (f) => ({
        fillColor: getColor(dataBekerja2024[f.properties.kabkot] || 0),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.8,
    });
    const onEachFeature = (f, l) =>
        l.on({
            mouseover: (e) => {
                e.target.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.9,
                });
                setHoveredInfo({
                    name: f.properties.kabkot,
                    value: `Jumlah: ${(
                        dataBekerja2024[f.properties.kabkot] || 0
                    ).toLocaleString("id-ID")}`,
                });
            },
            mouseout: (e) => {
                l.setStyle(style(f));
                setHoveredInfo({ name: "Arahkan kursor", value: "" });
            },
        });

    const InfoBox = () => (
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
            <h4 className="font-bold">{hoveredInfo.name}</h4>
            <span>{hoveredInfo.value}</span>
        </div>
    );
    const LegendBox = () => {
        const g = [0, 100000, 200000, 300000, 400000, 550000, 800000];
        return (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
                <h4 className="font-bold mb-1 text-sm">
                    Penduduk Bekerja 2024
                </h4>
                {g.map((gr, i) => (
                    <div key={i} className="flex items-center">
                        <i
                            style={{
                                background: getColor(gr + 1),
                                width: "18px",
                                height: "18px",
                                marginRight: "5px",
                            }}
                        ></i>
                        <span className="text-xs">
                            {gr.toLocaleString("id-ID")}
                            {g[i + 1]
                                ? ` - ${g[i + 1].toLocaleString("id-ID")}`
                                : "+"}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (!geoData) return <div>Memuat peta...</div>;
    return (
        <div>
            <div className="h-[500px] w-full rounded-lg shadow-md relative">
                <MapContainer
                    center={[-4.8, 105.0]}
                    zoom={8.5}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                    }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                    <InfoBox />
                    <LegendBox />
                </MapContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                    Tabel Detail
                </h3>
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

// --- KOMPONEN BARU 2: Penduduk Bekerja per Umur ---
function BekerjaUmurPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            "60+",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Bekerja (2024)",
                data: [
                    183271, 440935, 508080, 558099, 566807, 560926, 533907,
                    462707, 370301, 602556,
                ],
                backgroundColor: "rgba(107, 33, 168, 0.7)",
                borderColor: "rgba(107, 33, 168, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Penduduk Bekerja per Kelompok Umur (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function BekerjaPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "DI/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Bekerja",
                data: [1700900, 1137074, 1005949, 497092, 81310, 365264],
                backgroundColor: [
                    "#e0e7ff",
                    "#c7d2fe",
                    "#a5b4fc",
                    "#818cf8",
                    "#6366f1",
                    "#4f46e5",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: {
                display: true,
                text: [
                    "Proporsi Penduduk Bekerja",
                    "per Tingkat Pendidikan (2024)",
                ],
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <Doughnut data={chartData} options={chartOptions} />
            </div>
            <div className="lg:col-span-3">
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

function BekerjaJenisPekerjaanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Profesional/Teknisi",
            "Kepemimpinan",
            "Tata Usaha",
            "Usaha Penjualan",
            "Usaha Jasa",
            "Tani/Kebun/Ternak",
            "Produksi/Operator",
            "Lainnya (TNI/POLRI)",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Bekerja (2024)",
                data: [
                    293122, 39739, 200935, 970019, 241198, 1892047, 1109168,
                    41361,
                ],
                backgroundColor: "rgba(2, 132, 199, 0.7)",
                borderColor: "rgba(3, 105, 161, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Penduduk Bekerja per Jenis Pekerjaan (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Penduduk Bekerja per Status Pekerjaan ---
function BekerjaStatusPekerjaanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Berusaha sendiri",
            "Dibantu pekerja tidak tetap",
            "Dibantu pekerja tetap",
            "Buruh/Karyawan",
            "Pekerja bebas pertanian",
            "Pekerja bebas non-pertanian",
            "Pekerja keluarga",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Bekerja",
                data: [
                    1012029, 890711, 143048, 1334427, 287725, 279306, 840343,
                ],
                backgroundColor: [
                    "#fde68a",
                    "#fcd34d",
                    "#fbbf24",
                    "#f59e0b",
                    "#d97706",
                    "#b45309",
                    "#92400e",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: {
                display: true,
                text: [
                    "Proporsi Penduduk Bekerja",
                    "per Status Pekerjaan (2024)",
                ],
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <Pie data={chartData} options={chartOptions} />
            </div>
            <div className="lg:col-span-3">
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

// --- KOMPONEN BARU 3: Penduduk Bekerja per Sektor Usaha ---
function BekerjaSektorUsahaPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Pertanian",
            "Pertambangan",
            "Industri",
            "Listrik/Gas/Air",
            "Pengadaan Air/Sampah",
            "Konstruksi",
            "Perdagangan",
            "Transportasi",
            "Akomodasi",
            "Informasi & Komunikasi",
            "Jasa Keuangan",
            "Real Estat",
            "Jasa Perusahaan",
            "Pemerintahan",
            "Jasa Pendidikan",
            "Jasa Kesehatan",
            "Jasa Lainnya",
        ],
        datasets: [
            {
                label: "Jumlah Penduduk Bekerja (2024)",
                data: [
                    1942346, 42379, 415003, 9866, 17098, 251326, 939789, 195598,
                    254298, 26012, 39209, 5457, 44703, 149616, 206299, 57603,
                    190987,
                ],
                backgroundColor: "rgba(13, 148, 136, 0.7)",
                borderColor: "rgba(15, 118, 110, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Penduduk Bekerja per Sektor Lapangan Usaha (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PetaTPTPage({ dataFromHtml, selectedItem }) {
    const [geoData, setGeoData] = useState(null);
    const [hoveredInfo, setHoveredInfo] = useState({
        name: "Arahkan kursor",
        value: "",
    });

    // Data TPT (%) 2024
    const dataTPT2024 = {
        "Lampung Barat": 2.09,
        Tanggamus: 3.19,
        "Lampung Selatan": 4.84,
        "Lampung Timur": 3.02,
        "Lampung Tengah": 3.33,
        "Lampung Utara": 5.85,
        "Way Kanan": 3.27,
        "Tulang Bawang": 3.23,
        Pesawaran: 4.36,
        Pringsewu: 4.39,
        Mesuji: 2.85,
        "Tulang Bawang Barat": 4.12,
        "Pesisir Barat": 3.04,
        "Bandar Lampung": 7.44,
        Metro: 3.71,
    };

    useEffect(() => {
        fetch("/data/Kabupaten-Kota (Provinsi Lampung).geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    }, []);

    // Skala warna disesuaikan untuk persentase yang lebih rendah
    const getColor = (d) =>
        d > 7
            ? "#a50f15"
            : d > 6
            ? "#de2d26"
            : d > 5
            ? "#fb6a4a"
            : d > 4
            ? "#fcae91"
            : d > 3
            ? "#fee5d9"
            : "#fff5f0";
    const style = (f) => ({
        fillColor: getColor(dataTPT2024[f.properties.kabkot] || 0),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.8,
    });
    const onEachFeature = (f, l) =>
        l.on({
            mouseover: (e) => {
                e.target.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.9,
                });
                setHoveredInfo({
                    name: f.properties.kabkot,
                    value: `TPT: ${(
                        dataTPT2024[f.properties.kabkot] || 0
                    ).toFixed(2)}%`,
                });
            },
            mouseout: (e) => {
                l.setStyle(style(f));
                setHoveredInfo({ name: "Arahkan kursor", value: "" });
            },
        });

    const InfoBox = () => (
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
            <h4 className="font-bold">{hoveredInfo.name}</h4>
            <span>{hoveredInfo.value}</span>
        </div>
    );
    const LegendBox = () => {
        const g = [0, 3, 4, 5, 6, 7];
        return (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
                <h4 className="font-bold mb-1 text-sm">TPT (%) 2024</h4>
                {g.map((gr, i) => (
                    <div key={i} className="flex items-center">
                        <i
                            style={{
                                background: getColor(gr + 0.1),
                                width: "18px",
                                height: "18px",
                                marginRight: "5px",
                            }}
                        ></i>
                        <span className="text-xs">
                            {gr}
                            {g[i + 1] ? ` - ${g[i + 1]}` : "+"}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (!geoData) return <div>Memuat peta...</div>;
    return (
        <div>
            <div className="h-[500px] w-full rounded-lg shadow-md relative">
                <MapContainer
                    center={[-4.8, 105.0]}
                    zoom={8.5}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                    }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                    <InfoBox />
                    <LegendBox />
                </MapContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                    Tabel Detail
                </h3>
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

function TPTPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "DI/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Tingkat Pengangguran Terbuka (%) Tahun 2024",
                data: [2.1, 3.25, 6.17, 8.8, 3.98, 4.43],
                backgroundColor: "rgba(190, 18, 60, 0.7)",
                borderColor: "rgba(159, 18, 57, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "TPT per Tingkat Pendidikan (2024)",
                font: { size: 16 },
            },
        },
        scales: { y: { ticks: { callback: (value) => value + "%" } } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PetaJPTPage({ dataFromHtml, selectedItem }) {
    const [geoData, setGeoData] = useState(null);
    const [hoveredInfo, setHoveredInfo] = useState({
        name: "Arahkan kursor",
        value: "",
    });

    // Data JPT 2024
    const dataJPT2024 = {
        "Lampung Barat": 4043,
        Tanggamus: 11358,
        "Lampung Selatan": 27101,
        "Lampung Timur": 18359,
        "Lampung Tengah": 28686,
        "Lampung Utara": 19035,
        "Way Kanan": 8827,
        "Tulang Bawang": 7726,
        Pesawaran: 11493,
        Pringsewu: 10361,
        Mesuji: 3568,
        "Tulang Bawang Barat": 6540,
        "Pesisir Barat": 2733,
        "Bandar Lampung": 45863,
        Metro: 3468,
    };

    useEffect(() => {
        fetch("/data/Kabupaten-Kota (Provinsi Lampung).geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    }, []);

    const getColor = (d) =>
        d > 40000
            ? "#7f0000"
            : d > 25000
            ? "#b30000"
            : d > 15000
            ? "#d7301f"
            : d > 10000
            ? "#ef6548"
            : d > 5000
            ? "#fc8d59"
            : d > 3000
            ? "#fdd49e"
            : "#fef0d9";
    const style = (f) => ({
        fillColor: getColor(dataJPT2024[f.properties.kabkot] || 0),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.8,
    });
    const onEachFeature = (f, l) =>
        l.on({
            mouseover: (e) => {
                e.target.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.9,
                });
                setHoveredInfo({
                    name: f.properties.kabkot,
                    value: `Jumlah: ${(
                        dataJPT2024[f.properties.kabkot] || 0
                    ).toLocaleString("id-ID")}`,
                });
            },
            mouseout: (e) => {
                l.setStyle(style(f));
                setHoveredInfo({ name: "Arahkan kursor", value: "" });
            },
        });

    const InfoBox = () => (
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
            <h4 className="font-bold">{hoveredInfo.name}</h4>
            <span>{hoveredInfo.value}</span>
        </div>
    );
    const LegendBox = () => {
        const g = [0, 3000, 5000, 10000, 15000, 25000, 40000];
        return (
            <div className="absolute bottom-2 left-2 p-2 bg-white bg-opacity-80 shadow rounded z-[1000]">
                <h4 className="font-bold mb-1 text-sm">
                    Jumlah Penganggur 2024
                </h4>
                {g.map((gr, i) => (
                    <div key={i} className="flex items-center">
                        <i
                            style={{
                                background: getColor(gr + 1),
                                width: "18px",
                                height: "18px",
                                marginRight: "5px",
                            }}
                        ></i>
                        <span className="text-xs">
                            {gr.toLocaleString("id-ID")}
                            {g[i + 1]
                                ? ` - ${g[i + 1].toLocaleString("id-ID")}`
                                : "+"}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (!geoData) return <div>Memuat peta...</div>;
    return (
        <div>
            <div className="h-[500px] w-full rounded-lg shadow-md relative">
                <MapContainer
                    center={[-4.8, 105.0]}
                    zoom={8.5}
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "inherit",
                    }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                    <InfoBox />
                    <LegendBox />
                </MapContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-700 mb-4">
                    Tabel Detail
                </h3>
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />
            </div>
        </div>
    );
}

// --- KOMPONEN BARU 2: JPT per Pendidikan ---
function JPTPendidikanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "≤ SD",
            "SLTP",
            "SLTA Umum",
            "SLTA Kejuruan",
            "DI/II/III",
            "Universitas",
        ],
        datasets: [
            {
                label: "Jumlah Pengangguran Terbuka (2024)",
                data: [36570, 38227, 66093, 47973, 3368, 16930],
                backgroundColor: "rgba(224, 6, 22, 0.7)",
                borderColor: "rgba(185, 28, 28, 1)",
                borderWidth: 1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Jumlah Pengangguran Terbuka per Tingkat Pendidikan (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function LulusanPelatihanPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["2022", "2023", "2024"],
        datasets: [
            {
                label: "BLK B. Lampung",
                data: [448, 336, 396],
                borderColor: "rgb(59, 130, 246)",
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                tension: 0.1,
            },
            {
                label: "BLK Kalianda",
                data: [356, 352, 272],
                borderColor: "rgb(236, 72, 153)",
                backgroundColor: "rgba(236, 72, 153, 0.5)",
                tension: 0.1,
            },
            {
                label: "BLK Metro",
                data: [368, 304, 272],
                borderColor: "rgb(22, 163, 74)",
                backgroundColor: "rgba(22, 163, 74, 0.5)",
                tension: 0.1,
            },
            {
                label: "BLK Way Abung",
                data: [276, 336, 288],
                borderColor: "rgb(245, 158, 11)",
                backgroundColor: "rgba(245, 158, 11, 0.5)",
                tension: 0.1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Realisasi Jumlah Lulusan Pelatihan per BLK (2022-2024)",
                font: { size: 16 },
            },
        },
        scales: { y: { beginAtZero: true } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Line data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Jumlah LPK (Grafik Batang Bertumpuk) ---
function JumlahLPKPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B.Lampung",
            "Lamsel",
            "Tanggamus",
            "Metro",
            "Lamteng",
            "Lamtim",
            "Lampura",
            "Lambar",
            "Tuba",
            "Way Kanan",
            "Pringsewu",
            "Pesawaran",
            "Tuba Barat",
            "Mesuji",
            "Pesibar",
        ],
        datasets: [
            {
                label: "Lulusan LPK Pemerintah",
                data: [396, 272, 0, 272, 0, 0, 288, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(34, 197, 94, 0.7)",
            },
            {
                label: "Lulusan LPK Swasta",
                data: [
                    2664, 2405, 1008, 2100, 3671, 1635, 734, 630, 172, 927,
                    1520, 148, 36, 85,
                ],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Lulusan LPK per Kabupaten/Kota (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function Pemagangan2022Page({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "PT. HARI KARYA",
            "CV. EXPERTA UTAMA",
            "RS. GRAHA HUSADA",
            "PT. RAMAYANA L.S.",
            "PT. FAJAR AGUNG",
            "PT. GRAHA KEDATON",
            "PT. TRANSMART",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah Peserta",
                data: [35, 38, 30, 30, 20, 20, 20, 163],
                backgroundColor: "rgba(37, 99, 235, 0.7)",
            },
            {
                label: "Yang Terserap",
                data: [19, 26, 30, 21, 18, 9, 11, 146],
                backgroundColor: "rgba(22, 163, 74, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Peserta Pemagangan dan Penyerapan (2022)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: false }, y: { stacked: false } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Peserta Pemagangan 2023 ---
function Pemagangan2023Page({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "PT. SEAPI",
            "PTPN 7",
            "PT. Fermentech",
            "PT. Lautan Teduh",
            "PT. Hari Karya",
            "PT. Dukonst",
            "CV. Experta",
            "Hotel Nusantara",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah Peserta",
                data: [13, 10, 10, 15, 10, 10, 10, 12, 98],
                backgroundColor: "rgba(37, 99, 235, 0.7)",
            },
            {
                label: "Yang Terserap",
                data: [6, 2, 2, 10, 9, 8, 7, 11, 47],
                backgroundColor: "rgba(22, 163, 74, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Peserta Pemagangan dan Penyerapan (2023)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: false }, y: { stacked: false } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 3: Peserta Pemagangan 2024 ---
function Pemagangan2024Page({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "PT. Fermentech",
            "PT. Fajar Agung",
            "PT. Lautan Teduh",
            "PT. Hari Karya",
            "RS. Graha Husada",
            "RS. Urip S.",
            "Hotel Radisson",
            "Hotel Nusantara",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah Peserta",
                data: [14, 15, 10, 10, 20, 10, 20, 16, 76],
                backgroundColor: "rgba(37, 99, 235, 0.7)",
            },
            {
                label: "Yang Terserap",
                data: [3, 12, 9, 10, 19, 5, 16, 7, 54],
                backgroundColor: "rgba(22, 163, 74, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Peserta Pemagangan dan Penyerapan (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: false }, y: { stacked: false } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function PencariKerjaPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B. Lampung",
            "Lamsel",
            "Lamtim",
            "Lamteng",
            "Lampura",
            "Metro",
            "Tanggamus",
        ],
        datasets: [
            {
                label: "Pencari Kerja",
                data: [3094, 1687, 6017, 3164, 2352, 3077, 4616],
                backgroundColor: "rgba(239, 68, 68, 0.7)",
            },
            {
                label: "Lowongan",
                data: [490, 1102, 252, 417, 150, 3089, 3333],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
            {
                label: "Penempatan",
                data: [188, 69, 213, 370, 136, 2964, 3327],
                backgroundColor: "rgba(22, 163, 74, 0.7)",
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Pencari Kerja vs Lowongan vs Penempatan (2024)",
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- NEW COMPONENT 2: PMI Placements by City ---
function PenempatanPMIKabupatenPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Lamtim",
            "Lamteng",
            "Lamsel",
            "Tanggamus",
            "Pesawaran",
            "Pringsewu",
            "Lampura",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Laki-laki",
                data: [2726, 982, 620, 409, 339, 385, 225, 734],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
            {
                label: "Perempuan",
                data: [6926, 2722, 1753, 1066, 1069, 796, 819, 2704],
                backgroundColor: "rgba(236, 72, 153, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Penempatan PMI per Kabupaten/Kota (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- NEW COMPONENT 3: PMI Placements by Country ---
function PenempatanPMINegaraPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Taiwan",
            "Hongkong",
            "Malaysia",
            "Singapura",
            "Jepang",
            "Korea Selatan",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Formal",
                data: [6993, 46, 1143, 1, 477, 4, 382],
                backgroundColor: "rgba(14, 165, 233, 0.7)",
            },
            {
                label: "Informal",
                data: [6002, 6259, 1175, 1317, 0, 414, 5],
                backgroundColor: "rgba(244, 114, 182, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Penempatan PMI per Negara Tujuan (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- NEW COMPONENT 4: AKAD Placements by City ---
function PenempatanAKADPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Lamsel",
            "Lamteng",
            "Lampura",
            "Tuba",
            "Pesawaran",
            "B. Lampung",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Laki-laki",
                data: [17, 9, 14, 15, 30, 15, 625],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
            {
                label: "Perempuan",
                data: [164, 121, 122, 130, 95, 88, 501],
                backgroundColor: "rgba(236, 72, 153, 0.7)",
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Penempatan Tenaga Kerja AKAD per Kabupaten/Kota (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

function TkaPage({
    dataFromHtml,
    selectedItem,
    year,
    barChartData,
    lineChartData,
}) {
    const barOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: `Top 10 Perusahaan Pengguna TKA (${year})`,
                font: { size: 16 },
            },
        },
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Total TKA per Tahun",
                font: { size: 16 },
            },
        },
        scales: { y: { beginAtZero: true } },
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
                    <Line data={lineChartData} options={lineOptions} />
                </div>
                <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
                    <Bar data={barChartData} options={barOptions} />
                </div>
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- Komponen Spesifik untuk Setiap Tahun ---
function Tka2022Page(props) {
    const lineChartData = {
        labels: ["2022", "2023", "2024"],
        datasets: [
            {
                label: "Total TKA",
                data: [135, 128, 91],
                borderColor: "rgb(190, 18, 60)",
                backgroundColor: "rgba(190, 18, 60, 0.5)",
            },
        ],
    };
    const barChartData = {
        labels: [
            "PT. SAN XIONG STEEL",
            "PT FERBE PARTNER",
            "PT. GGP",
            "PT AUTUM BAJA",
            "PT AGUNG JAYARAYA",
            "PT. LAMPUNG INTERPERTIWI",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah TKA",
                data: [38, 14, 6, 6, 5, 5, 51],
                backgroundColor: "rgba(190, 18, 60, 0.7)",
            },
        ],
    };
    return (
        <TkaPage
            {...props}
            year={2022}
            lineChartData={lineChartData}
            barChartData={barChartData}
        />
    );
}

function Tka2023Page(props) {
    const lineChartData = {
        labels: ["2022", "2023", "2024"],
        datasets: [
            {
                label: "Total TKA",
                data: [135, 128, 91],
                borderColor: "rgb(190, 18, 60)",
                backgroundColor: "rgba(190, 18, 60, 0.5)",
            },
        ],
    };
    const barChartData = {
        labels: [
            "PT. SAN XIONG STEEL",
            "PT. INDONESIA EVERGREEN",
            "PT. FERMENTECH",
            "PT. NEW HOPE",
            "PT AUTUM BAJA",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah TKA",
                data: [30, 17, 8, 7, 6, 60],
                backgroundColor: "rgba(190, 18, 60, 0.7)",
            },
        ],
    };
    return (
        <TkaPage
            {...props}
            year={2023}
            lineChartData={lineChartData}
            barChartData={barChartData}
        />
    );
}

function Tka2024Page(props) {
    const lineChartData = {
        labels: ["2022", "2023", "2024"],
        datasets: [
            {
                label: "Total TKA",
                data: [135, 128, 91],
                borderColor: "rgb(190, 18, 60)",
                backgroundColor: "rgba(190, 18, 60, 0.5)",
            },
        ],
    };
    const barChartData = {
        labels: [
            "PT. SAN XIONG STEEL",
            "PT. FERMENTECH",
            "PT. NEW HOPE",
            "SEKOLAH PELITA BANGSA",
            "PT. CREST INT.",
            "PT. HAIDA BIOTECH.",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Jumlah TKA",
                data: [30, 11, 7, 6, 6, 6, 25],
                backgroundColor: "rgba(190, 18, 60, 0.7)",
            },
        ],
    };
    return (
        <TkaPage
            {...props}
            year={2024}
            lineChartData={lineChartData}
            barChartData={barChartData}
        />
    );
}

// --- KOMPONEN BARU UNTUK DATA PERUSAHAAN ---
function PerusahaanSensusPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "Lambar",
            "Tanggamus",
            "Lamsel",
            "Lamtim",
            "Lamteng",
            "Lampura",
            "Way Kanan",
            "Tuba",
            "Pesawaran",
            "Pringsewu",
            "Mesuji",
            "Tuba Barat",
            "Pesisir Barat",
            "B. Lampung",
            "Metro",
        ],
        datasets: [
            {
                label: "Mikro",
                data: [
                    22397, 47458, 76272, 102432, 104546, 51341, 34369, 30173,
                    38437, 36483, 14843, 19249, 9869, 104418, 20796,
                ],
                backgroundColor: "rgba(219, 234, 254, 1)",
            },
            {
                label: "Kecil",
                data: [
                    1933, 3116, 6451, 8101, 9535, 3447, 2108, 3453, 2814, 3671,
                    1645, 1833, 904, 10938, 2575,
                ],
                backgroundColor: "rgba(147, 197, 253, 1)",
            },
            {
                label: "Menengah",
                data: [
                    152, 175, 619, 490, 744, 335, 109, 364, 133, 343, 84, 120,
                    67, 2946, 459,
                ],
                backgroundColor: "rgba(59, 130, 246, 1)",
            },
            {
                label: "Besar",
                data: [3, 11, 82, 21, 52, 28, 12, 22, 4, 18, 6, 9, 1, 244, 26],
                backgroundColor: "rgba(29, 78, 216, 1)",
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Perusahaan per Skala Usaha (Sensus Ekonomi 2016)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- KOMPONEN BARU 2: Tenaga Kerja Menurut Sensus Ekonomi ---
function TenagaKerjaSensusPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["Besar", "Menengah", "Kecil", "Mikro"],
        datasets: [
            {
                label: "Jumlah Tenaga Kerja",
                data: [1115325, 315059, 116298, 109134],
                backgroundColor: ["#e0e7ff", "#a5b4fc", "#6366f1", "#4338ca"],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            title: {
                display: true,
                text: "Proporsi Tenaga Kerja per Skala Usaha (Sensus Ekonomi 2016)",
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {" "}
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                {" "}
                <Doughnut data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <div className="lg:col-span-3">
                {" "}
                <DefaultContentView
                    data={dataFromHtml}
                    selectedItem={selectedItem}
                />{" "}
            </div>{" "}
        </div>
    );
}

// --- KOMPONEN BARU 3: Jaminan Sosial ---
function JaminanSosialPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B. Lampung",
            "Metro",
            "Tanggamus",
            "Lamteng",
            "Lamsel",
            "Lampura",
            "Tuba",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Jumlah Tenaga Kerja",
                data: [
                    424525, 68880, 150258, 495551, 375143, 207102, 161123,
                    1035544,
                ],
                backgroundColor: "rgba(156, 163, 175, 0.7)",
            },
            {
                label: "Total Peserta BPJS",
                data: [
                    170881, 25858, 54670, 159971, 117206, 64556, 49780, 246200,
                ],
                backgroundColor: "rgba(34, 197, 94, 0.7)",
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Tenaga Kerja vs. Peserta BPJS Ketenagakerjaan (2024)",
                font: { size: 16 },
            },
        },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- KOMPONEN BARU 4: Tenaga Kerja Disabilitas ---
function DisabilitasPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "CV. SHIHA ALI BERKAH",
            "PT. SUMBER ALFARIA TRIJAYA",
            "PT. GREAT GIANT PINEAPPLE",
            "BATIK CIPRAT SILABI",
            "RS. MARDI WALUYO",
            "LAINNYA",
        ],
        datasets: [
            {
                label: "Laki-laki",
                data: [10, 24, 8, 4, 4, 24],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
            {
                label: "Perempuan",
                data: [13, 3, 4, 6, 2, 7],
                backgroundColor: "rgba(236, 72, 153, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Tenaga Kerja Disabilitas per Perusahaan (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

function NormaKerjaPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B. Lampung",
            "Lamsel",
            "Tanggamus",
            "Metro",
            "Lamteng",
            "Lamtim",
            "Lampura",
            "Lambar",
            "Tuba",
            "Way Kanan",
            "Pringsewu",
            "Pesawaran",
            "Tuba Barat",
            "Mesuji",
            "Pesisir Barat",
        ],
        datasets: [
            {
                label: "Kebebasan Berserikat",
                data: [87, 85, 1, 14, 72, 35, 15, 0, 11, 7, 7, 5, 8, 4, 0],
                backgroundColor: "rgba(59, 130, 246, 0.7)",
            },
            {
                label: "Kerja & Istirahat",
                data: [
                    2149, 403, 82, 267, 258, 142, 155, 3, 90, 105, 151, 72, 35,
                    52, 28,
                ],
                backgroundColor: "rgba(236, 72, 153, 0.7)",
            },
            {
                label: "Pengupahan",
                data: [
                    2763, 527, 106, 343, 332, 182, 200, 4, 116, 135, 194, 92,
                    46, 67, 36,
                ],
                backgroundColor: "rgba(22, 163, 74, 0.7)",
            },
            {
                label: "Kerja Perempuan",
                data: [
                    2456, 468, 94, 305, 295, 162, 177, 4, 103, 120, 173, 72, 41,
                    60, 32,
                ],
                backgroundColor: "rgba(245, 158, 11, 0.7)",
            },
        ],
    };
    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: "Profil Penerapan Norma Kerja di Kota Besar (2024)",
                font: { size: 16 },
            },
        },
        scales: { r: { beginAtZero: true } },
    };
    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
                <Radar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

// --- KOMPONEN BARU 2: Perusahaan dengan PP/PKB (Grafik Batang) ---
function PerusahaanPpPkbPage({ dataFromHtml, selectedItem }) {
    // 1. Gabungkan semua data awal menjadi satu array objek untuk mempermudah sorting
    const allData = [
        { label: "B. Lampung", pp: 838, pkb: 254, lks: 143 },
        { label: "Lamsel", pp: 183, pkb: 73, lks: 56 },
        { label: "Tanggamus", pp: 28, pkb: 11, lks: 4 },
        { label: "Metro", pp: 108, pkb: 32, lks: 18 },
        { label: "Lamteng", pp: 131, pkb: 47, lks: 26 },
        { label: "Lamtim", pp: 58, pkb: 16, lks: 7 },
        { label: "Lampura", pp: 70, pkb: 27, lks: 19 },
        { label: "Lambar", pp: 19, pkb: 8, lks: 2 },
        { label: "Tuba", pp: 57, pkb: 16, lks: 15 },
        { label: "Way Kanan", pp: 23, pkb: 8, lks: 6 },
        { label: "Pringsewu", pp: 67, pkb: 22, lks: 10 },
        { label: "Pesawaran", pp: 27, pkb: 13, lks: 9 },
        { label: "Tuba Barat", pp: 19, pkb: 7, lks: 4 },
        { label: "Mesuji", pp: 12, pkb: 18, lks: 11 },
        { label: "Pesisir Barat", pp: 10, pkb: 4, lks: 2 },
    ];

    // 2. Urutkan data dari yang terbesar ke terkecil berdasarkan data PP (Peraturan Perusahaan)
    const sortedData = allData.sort((a, b) => b.pp - a.pp);

    // 3. Ambil 5 data teratas
    const top5Data = sortedData.slice(0, 5);

    // 4. Siapkan chartData baru dari 5 data teratas
    const chartData = {
        labels: top5Data.map((data) => data.label),
        datasets: [
            {
                label: "Dgn. Peraturan Perusahaan (PP)",
                data: top5Data.map((data) => data.pp),
                backgroundColor: "rgba(75, 192, 192, 0.7)", // Teal
            },
            {
                label: "Dgn. Perjanjian Kerja Bersama (PKB)",
                data: top5Data.map((data) => data.pkb),
                backgroundColor: "rgba(255, 159, 64, 0.7)", // Orange
            },
            {
                label: "Dgn. LKS Bipartit",
                data: top5Data.map((data) => data.lks),
                backgroundColor: "rgba(153, 102, 255, 0.7)", // Purple
            },
        ],
    };

    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Top 5 Perusahaan Berdasarkan Regulasi Internal (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
            },
        },
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />
        </div>
    );
}

function KasusUmpPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B. Lampung",
            "Lamsel",
            "Lamteng",
            "Way Kanan",
            "Lampura",
            "Metro",
            "Tanggamus",
            "Lamtim",
            "Lambar",
            "Tuba",
            "Pringsewu",
            "Pesawaran",
            "Tuba Barat",
            "Mesuji",
            "Pesisir Barat",
        ],
        datasets: [
            {
                type: "bar",
                label: "Jumlah Kasus",
                data: [31, 17, 16, 13, 3, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0],
                backgroundColor: "rgba(239, 68, 68, 0.7)",
                yAxisID: "y",
            },
            {
                type: "line",
                label: "UMP/UMK (Rp)",
                data: [
                    3103631, 2889193, 2716497, 2885122, 2716497, 2726104,
                    2716497, 2716497, 2716497, 2716497, 2716497, 2716497,
                    2716497, 2903310, 2716497,
                ],
                borderColor: "rgb(59, 130, 246)",
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                yAxisID: "y1",
                tension: 0.1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jumlah Kasus Hubungan Industrial vs UMP/UMK (2024)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                title: { display: true, text: "Jumlah Kasus" },
            },
            y1: {
                type: "linear",
                display: true,
                position: "right",
                grid: { drawOnChartArea: false },
                title: { display: true, text: "Rupiah (Rp)" },
                ticks: {
                    callback: (value) =>
                        new Intl.NumberFormat("id-ID").format(value),
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- KOMPONEN BARU 2: Jumlah Perselisihan Hubungan Industrial ---
function PerselisihanHubunganIndustrialPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: [
            "B. Lampung",
            "Lamsel",
            "Lamteng",
            "Way Kanan",
            "Lampura",
            "Metro",
            "Tuba Barat",
            "Tuba",
            "Mesuji",
            "Pringsewu",
            "Pesawaran",
        ],
        datasets: [
            {
                label: "Perselisihan Hak",
                data: [0, 3, 16, 12, 3, 0, 1, 1, 3, 1, 0],
                backgroundColor: "rgba(234, 179, 8, 0.7)",
            },
            {
                label: "Mogok Kerja",
                data: [0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                backgroundColor: "rgba(239, 68, 68, 0.7)",
            },
            {
                label: "Lainnya (Perusahaan Berselisih)",
                data: [31, 12, 1, 1, 0, 0, 1, 0, 0, 0, 2],
                backgroundColor: "rgba(107, 114, 128, 0.7)",
            },
        ],
    };
    const chartOptions = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Jenis Perselisihan Hubungan Industrial (2024)",
                font: { size: 16 },
            },
        },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Bar data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// --- KOMPONEN BARU 3: Perkembangan UMP ---
function PerkembanganUmpPage({ dataFromHtml, selectedItem }) {
    const chartData = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
            {
                label: "UMP Lampung",
                data: [
                    2241269, 2432001, 2432001, 2440486, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgb(220, 38, 38)",
                backgroundColor: "rgba(220, 38, 38, 0.5)",
                borderWidth: 4,
                order: 0,
            },
            {
                label: "UMK B. Lampung",
                data: [
                    2445141, 2653222, 2739983, 2770794, 2991349, 3103631,
                    3305367,
                ],
                borderColor: "rgb(37, 99, 235)",
                backgroundColor: "rgba(37, 99, 235, 0.5)",
                borderWidth: 2,
                order: 1,
            },
            {
                label: "UMK Way Kanan",
                data: [
                    2380000, 2617538, 2645837, 2461850, 2847450, 2885122,
                    3072655,
                ],
                borderColor: "rgb(22, 163, 74)",
                backgroundColor: "rgba(22, 163, 74, 0.5)",
                borderWidth: 2,
                order: 2,
            },
            {
                label: "UMK Mesuji",
                data: [
                    2385874, 2588911, 2673569, 2536682, 2873227, 2903310,
                    3092260,
                ],
                borderColor: "rgb(245, 158, 11)",
                backgroundColor: "rgba(245, 158, 11, 0.5)",
                borderWidth: 2,
                order: 3,
            },
            // Data UMK lain dengan garis lebih tipis agar tidak terlalu ramai
            {
                label: "UMK Lamsel",
                data: [
                    2365835, 2567168, 2651885, 2459317, 2861097, 2889193,
                    3076990,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Lamteng",
                data: [
                    2250956, 2442513, 2442513, 2444079, 2637161, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Lampura",
                data: [
                    2268750, 2461850, 2461850, 2440486, 2656089, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Lamtim",
                data: [
                    2241406, 2432150, 2432150, 2443960, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Lambar",
                data: [
                    2328399, 2526545, 2526545, 2645837, 2726426, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Metro",
                data: [
                    2242540, 2433381, 2433381, 2472144, 2642290, 2726104,
                    2903301,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Tuba",
                data: [
                    2251694, 2443313, 2443313, 2659506, 2635078, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Tuba Barat",
                data: [
                    2278263, 2472144, 2472144, 2673569, 2667690, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Tanggamus",
                data: [
                    2241269, 2432001, 2432001, 2440486, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Pesawaran",
                data: [
                    2241269, 2432001, 2432001, 2440486, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Pringsewu",
                data: [
                    2241269, 2432001, 2432001, 2440486, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
            {
                label: "UMK Pesisir Barat",
                data: [
                    2241269, 2432001, 2432001, 2440486, 2633284, 2716497,
                    2893070,
                ],
                borderColor: "rgba(107, 114, 128, 0.5)",
                borderWidth: 1,
                borderDash: [5, 5],
                hidden: true,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Perkembangan UMP dan UMK (2019-2025)",
                font: { size: 16 },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) =>
                        `Rp ${new Intl.NumberFormat("id-ID").format(value)}`,
                },
            },
        },
    };
    return (
        <div className="space-y-8">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {" "}
                <Line data={chartData} options={chartOptions} />{" "}
            </div>{" "}
            <DefaultContentView
                data={dataFromHtml}
                selectedItem={selectedItem}
            />{" "}
        </div>
    );
}

// Komponen tampilan default yang sudah ada
function DefaultContentView({ data, selectedItem }) {
    if (!selectedItem) return null;
    if (!data) {
        return (
            <p className="text-sm text-red-500 mt-4">
                Data untuk "{selectedItem.title}" belum tersedia atau gagal
                dimuat.
            </p>
        );
    }
    return (
        <div>
            {data.isi && (
                <div
                    className="prose max-w-none text-slate-700"
                    dangerouslySetInnerHTML={{ __html: data.isi }}
                />
            )}
            {data.kolom && data.data && (
                <div className="overflow-x-auto mt-4">
                    <table className="w-full border border-slate-200 text-sm">
                        <thead className="bg-slate-100 text-left text-slate-700">
                            <tr>
                                {data.kolom.map((kol, idx) => (
                                    <th
                                        key={idx}
                                        className="px-4 py-2 border-b-2 border-slate-200"
                                    >
                                        {kol}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            {data.data.map((row, rIdx) => (
                                <tr
                                    key={rIdx}
                                    className="hover:bg-slate-50 border-b border-slate-200"
                                >
                                    {row.map((cell, cIdx) => (
                                        <td
                                            key={cIdx}
                                            className="px-4 py-2 border-r border-slate-200"
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
        </div>
    );
}

// =====================================================================
// KOMPONEN UTAMA 'CONTENT'
// =====================================================================
export default function Content({ selectedItem }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [exporting, setExporting] = useState(false);
    const contentToPrintRef = useRef(null);

    useEffect(() => {
        if (!selectedItem || !selectedItem.file) {
            setData(null);
            return;
        }
        const filename = selectedItem.file;
        setLoading(true);
        fetch(`/data/${filename}`)
            .then((res) => {
                if (!res.ok) throw new Error("File not found");
                return res.json();
            })
            .then((jsonData) => setData(jsonData))
            .catch(() => setData(null))
            .finally(() => setLoading(false));
    }, [selectedItem]);

    const handleExportPdf = async () => {
        if (!contentToPrintRef.current || !selectedItem) {
            console.error("Content element not found or no item selected.");
            return;
        }

        setExporting(true);

        const elementToCapture = contentToPrintRef.current;
        const pdfFileName = `${selectedItem.title
            .replace(/[\s/]/g, "_")
            .toLowerCase()}.pdf`;

        ChartJS.defaults.animation = false;

        await new Promise((resolve) => setTimeout(resolve, 500));

        html2canvas(elementToCapture, {
            scale: 2,
            useCORS: true,
            logging: true,
            backgroundColor: "#ffffff",
        })
            .then((canvas) => {
                try {
                    // Konversi canvas menjadi data URL gambar format PNG
                    const imgData = canvas.toDataURL("image/png");

                    // Inisialisasi jsPDF, format A4, orientasi potrait, satuan milimeter
                    const pdf = new jsPDF({
                        orientation: "portrait",
                        unit: "mm",
                        format: "a4",
                    });

                    // Kalkulasi dimensi gambar agar pas di halaman PDF dengan margin
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const margin = 10; // Margin 10mm atas-bawah dan kiri-kanan

                    const imgWidth = pageWidth - margin * 2;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;

                    let heightLeft = imgHeight;
                    let position = margin; // Posisi awal gambar dengan margin atas

                    // Tambahkan gambar ke halaman pertama
                    pdf.addImage(
                        imgData,
                        "PNG",
                        margin,
                        position,
                        imgWidth,
                        imgHeight
                    );
                    heightLeft -= pageHeight - margin * 2;

                    // Logika untuk membuat halaman baru jika konten lebih panjang dari satu halaman
                    while (heightLeft > 0) {
                        pdf.addPage(); // Tambah halaman baru
                        position = -heightLeft + margin; // Hitung posisi 'y' baru untuk sisa gambar
                        // Tambahkan gambar yang sama, tapi dengan posisi 'y' yang digeser ke atas
                        pdf.addImage(
                            imgData,
                            "PNG",
                            margin,
                            position,
                            imgWidth,
                            imgHeight
                        );
                        heightLeft -= pageHeight - margin * 2;
                    }

                    // Simpan file PDF
                    pdf.save(pdfFileName);
                } catch (error) {
                    console.error("Terjadi kesalahan saat membuat PDF:", error);
                } finally {
                    ChartJS.defaults.animation = true;
                    setExporting(false); // Sembunyikan status loading
                }
            })
            .catch((err) => {
                console.error("Gagal saat menggunakan html2canvas:", err);
                ChartJS.defaults.animation = true;
                setExporting(false); // Sembunyikan status loading jika gagal
            });
    };

    const renderContent = () => {
        if (!selectedItem) {
            return (
                <div className="text-center p-8">
                    <p className="text-slate-600">
                        Selamat Datang! Silakan pilih item dari menu di samping
                        untuk melihat data.
                    </p>
                </div>
            );
        }

        switch (selectedItem.file) {
            // Halaman Teks
            case "pendahuluan/kata-pengantar.json":
                return <KataPengantarPage />;
            case "pendahuluan/visi-misi.json":
                return <VisiMisiPage />;
            case "pendahuluan/tujuan-sasaran.json":
                return <TujuanSasaranPage />;

            // Halaman Demografi
            case "data_pegawai_dinas/berdasarkan-jeniskelamin.json":
                return (
                    <JenisKelaminPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/berdasarkan-agama.json":
                return (
                    <AgamaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/berdasarkan-pangkat-golongan.json":
                return (
                    <PangkatGolonganPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/berdasarkan-pendidikan.json":
                return (
                    <PendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/berdasarkan-jabatan.json":
                return (
                    <JabatanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/jumlah-pthl.json":
                return (
                    <PthlPage dataFromHtml={data} selectedItem={selectedItem} />
                );
            case "data_pegawai_dinas/data-pegawai-fungsional.json":
                return (
                    <FungsionalPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_pegawai_dinas/data-instruktur-berdasarkan-kejuruan.json":
                return (
                    <InstrukturKejuruanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/menurut-kabupaten-kota.json":
                return (
                    <PetaInteraktifPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/menurut-kelompok-umur.json":
                return (
                    <KelompokUmurPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "kondisi_ketenagakerjaan/menurut-tingkat-pendidikan.json":
                return (
                    <TingkatPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/AK-menurut-kabupaten-kota.json":
                return (
                    <PetaAngkatanKerjaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/AK-menurut-kelompok-umur.json":
                return (
                    <AKKelompokUmurPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "kondisi_ketenagakerjaan/AK-menurut-tingkat-pendidikan.json":
                return (
                    <AKTingkatPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/TP-menurut-kelompok-umur.json":
                return (
                    <TPAKUmurPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "kondisi_ketenagakerjaan/TP-menurut-tingkat-pendidikan.json":
                return (
                    <TPAKPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "penduduk_bekerja/menurut-kabupaten-kota.json":
                return (
                    <PetaPendudukBekerjaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penduduk_bekerja/menurut-umur.json":
                return (
                    <BekerjaUmurPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "penduduk_bekerja/menurut-tingkat-pendidikan.json":
                return (
                    <BekerjaPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "penduduk_bekerja/menurut-jenis-pekerjaan.json":
                return (
                    <BekerjaJenisPekerjaanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penduduk_bekerja/menurut-status-pekerjaan.json":
                return (
                    <BekerjaStatusPekerjaanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penduduk_bekerja/menurut-sektor-lapangan-usaha.json":
                return (
                    <BekerjaSektorUsahaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "pengangguran/TPT-menurut-kabupaten-kota.json":
                return (
                    <PetaTPTPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "pengangguran/TPT-menurut-pendidikan.json":
                return (
                    <TPTPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "pengangguran/JPT-menurut-kabupaten-kota.json":
                return (
                    <PetaJPTPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "pengangguran/JPT-menurut-pendidikan.json":
                return (
                    <JPTPendidikanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "pelatihan_dan_pemagangan/lulusan-pelatihan.json":
                return (
                    <LulusanPelatihanPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "pelatihan_dan_pemagangan/jumlah-pelatihan-kerja-pemerintah-swasta.json":
                return (
                    <JumlahLPKPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "pelatihan_dan_pemagangan/peserta-pemagangan-2022.json":
                return (
                    <Pemagangan2022Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "pelatihan_dan_pemagangan/peserta-pemagangan-2023.json":
                return (
                    <Pemagangan2023Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "pelatihan_dan_pemagangan/peserta-pemagangan-2024.json":
                return (
                    <Pemagangan2024Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "penempatan_dan_pencarian_kerja/pencari-kerja-lowongan-penempatan.json":
                return (
                    <PencariKerjaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penempatan_dan_pencarian_kerja/penempatan-pmi-kabupaten-kota-jenis-kelamin.json":
                return (
                    <PenempatanPMIKabupatenPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penempatan_dan_pencarian_kerja/penempatan-pmi-negara-tujuan.json":
                return (
                    <PenempatanPMINegaraPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "penempatan_dan_pencarian_kerja/penempatan-tenaga-kerja-akad.json":
                return (
                    <PenempatanAKADPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "tenaga_kerja_asing/TKA-tahun-2022.json":
                return (
                    <Tka2022Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "tenaga_kerja_asing/TKA-tahun-2023.json":
                return (
                    <Tka2023Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "tenaga_kerja_asing/TKA-tahun-2024.json":
                return (
                    <Tka2024Page
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            // --- TAMBAHKAN CASE BARU UNTUK DATA PERUSAHAAN ---
            case "data_perusahaan/perusahaan-menurut-sensus-ekonomi.json":
                return (
                    <PerusahaanSensusPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_perusahaan/tenaga-kerja-menurut-sensus-ekonomi.json":
                return (
                    <TenagaKerjaSensusPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_perusahaan/program-jaminan-sosial-ketenagakerjaan.json":
                return (
                    <JaminanSosialPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "data_perusahaan/tenaga-kerja-disabilitas.json":
                return (
                    <DisabilitasPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "norma_dan_regulasi_kerja/norma-k3-dan-norma-kerja.json":
                return (
                    <NormaKerjaPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "norma_dan_regulasi_kerja/perusahaan-dgn-pp-pkb.json":
                return (
                    <PerusahaanPpPkbPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            case "hubungan_industrial_ump/jumlah-kasus-ump-umk.json":
                return (
                    <KasusUmpPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "hubungan_industrial_ump/jumlah-perselisihan-hubungan-industrial.json":
                return (
                    <PerselisihanHubunganIndustrialPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );
            case "hubungan_industrial_ump/perkembangan-ump.json":
                return (
                    <PerkembanganUmpPage
                        dataFromHtml={data}
                        selectedItem={selectedItem}
                    />
                );

            // Halaman lain akan menggunakan tampilan default
            default:
                return (
                    <DefaultContentView
                        data={data}
                        selectedItem={selectedItem}
                    />
                );
        }
    };

    return (
        <div className="p-6 rounded-lg shadow-md bg-white">
            {/* Header dengan Judul dan Tombol Ekspor */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    {selectedItem && (
                        <>
                            <h2 className="text-2xl font-bold whitespace-pre-line text-slate-800">
                                {data?.judul || selectedItem.title}
                            </h2>
                            {selectedItem.parentTitle && (
                                <p className="text-sm text-slate-500 mt-1">
                                    {selectedItem.parentTitle}
                                </p>
                            )}
                        </>
                    )}
                </div>
                {selectedItem && (
                    <button
                        onClick={handleExportPdf}
                        disabled={exporting || loading}
                        className="bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 disabled:bg-slate-400 flex items-center transition-colors duration-200"
                    >
                        {exporting ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Mengekspor...
                            </>
                        ) : (
                            "Ekspor ke PDF"
                        )}
                    </button>
                )}
            </div>

            {/* Kontainer untuk Konten yang Akan Diekspor */}
            <div
                ref={contentToPrintRef}
                id="konten-pdf"
                className="border-t border-slate-200 pt-6"
            >
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                        <p className="text-sm text-slate-500">Memuat data...</p>
                    </div>
                ) : (
                    renderContent()
                )}
            </div>
        </div>
    );
}

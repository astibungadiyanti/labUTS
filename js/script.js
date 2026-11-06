document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. DASHBOARD GREETING ---
    const greetingEl = document.getElementById("greetingText");
    if (greetingEl) {
        const hour = new Date().getHours();
        let greeting = "Selamat Malam";
        if (hour >= 4 && hour < 11) greeting = "Selamat Pagi";
        else if (hour >= 11 && hour < 15) greeting = "Selamat Siang";
        else if (hour >= 15 && hour < 18) greeting = "Selamat Sore";
        
        const currentUser = JSON.parse(sessionStorage.getItem("userLoggedIn")) || { nama: "Pengunjung" };
        greetingEl.textContent = `${greeting}, ${currentUser.nama}!`;
    }

    // --- 2. KATALOG & STOK (stok.html) ---
    const tableBody = document.getElementById("katalogTableBody");
    if (tableBody && typeof dataKatalogBuku !== "undefined") {
        function renderTable() {
            tableBody.innerHTML = "";
            dataKatalogBuku.forEach((buku) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${buku.cover}" alt="${buku.namaBarang}" width="50" height="70" style="object-fit: cover; border-radius: 4px;" onerror="this.onerror=null; this.src='https://via.placeholder.com/50x70?text=No+Img';"></td>
                    <td>${buku.kodeBarang}</td>
                    <td>${buku.namaBarang}</td>
                    <td>${buku.jenisBarang}</td>
                    <td>${buku.edisi}</td>
                    <td>${buku.stok}</td>
                    <td>${buku.harga}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        renderTable();

        const formStok = document.getElementById("formTambahStok");
        if (formStok) {
            formStok.addEventListener("submit", function (e) {
                e.preventDefault();
                const baru = {
                    kodeBarang: document.getElementById("kode").value,
                    namaBarang: document.getElementById("nama").value,
                    jenisBarang: document.getElementById("jenis").value,
                    edisi: document.getElementById("edisi").value,
                    stok: parseInt(document.getElementById("stok").value),
                    harga: "Rp " + parseInt(document.getElementById("harga").value).toLocaleString("id-ID"),
                    cover: document.getElementById("cover").value ? "img/" + document.getElementById("cover").value : "img/default.jpg"
                };
                dataKatalogBuku.push(baru);
                renderTable();
                formStok.reset();
                alert("Stok baru berhasil ditambahkan!");
            });
        }
    }

    // --- 3. TRACKING PENGIRIMAN (tracking.html) ---
    const btnCari = document.getElementById("btnCariDO");
    if (btnCari) {
        btnCari.addEventListener("click", function () {
            const inputDO = document.getElementById("inputDO").value.trim();
            const resultDiv = document.getElementById("trackingResult");
            
            if (dataTracking && dataTracking[inputDO]) {
                const item = dataTracking[inputDO];
                let progressWidth = "50%";
                if (item.status === "Selesai") progressWidth = "100%";
                
                let riwayatHTML = "";
                item.perjalanan.forEach(p => {
                    riwayatHTML += `<li><strong>${p.waktu}:</strong> ${p.keterangan}</li>`;
                });

                resultDiv.innerHTML = `
                    <h3>Detail Pengiriman</h3>
                    <p><strong>Nama Pemesan:</strong> ${item.nama}</p>
                    <p><strong>Ekspedisi:</strong> ${item.ekspedisi} (${item.paket})</p>
                    <p><strong>Tanggal Kirim:</strong> ${item.tanggalKirim}</p>
                    <p><strong>Total Pembayaran:</strong> ${item.total}</p>
                    <p><strong>Status:</strong> ${item.status}</p>
                    
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressWidth};"></div>
                    </div>
                    
                    <h4>Riwayat Perjalanan:</h4>
                    <ul>${riwayatHTML}</ul>
                `;
            } else {
                alert("Nomor DO tidak ditemukan!");
                resultDiv.innerHTML = "";
            }
        });
    }

    // --- 4. CHECKOUT FORM (checkout.html) ---
    const formCheckout = document.getElementById("formCheckout");
    if (formCheckout) {
        formCheckout.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Pemesanan berhasil diproses!");
            formCheckout.reset();
        });
    }
});

// --- 5. AUTH & MODAL FUNCTIONS ---
function prosesLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const user = dataPengguna.find(u => u.email === email && u.password === pass);

    if (user) {
        sessionStorage.setItem("userLoggedIn", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("email/password yang anda masukkan salah");
    }
}

function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
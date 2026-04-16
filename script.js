// script.js - Dengan fitur stop audio (klik kembali untuk menghentikan)

document.addEventListener('DOMContentLoaded', function() {
    // Data Aplikasi
    let currentUser = JSON.parse(localStorage.getItem('paiCurrentUser')) || null;
    let userPoints = currentUser ? currentUser.points : 0;
    
    // Data untuk Kuis (4 kuis berbeda)
    const kuisData = {
        kuis1: {
            judul: "Kuis 1: Kejujuran",
            icon: "fas fa-check-circle",
            soal: [
                {
                    question: "Apa arti dari kata 'Sidiq'?",
                    options: ["Bohong", "Jujur", "Amanah", "Tablig"],
                    correct: 1
                },
                {
                    question: "Siapa sahabat Nabi yang terkenal dengan kejujurannya dan mendapat julukan Dzun Nurain?",
                    options: ["Abu Bakar Ash-Shiddiq", "Umar bin Khattab", "Utsman bin Affan", "Ali bin Abi Thalib"],
                    correct: 2
                },
                {
                    question: "Sumur yang dibeli Utsman bin Affan untuk masyarakat Madinah bernama...",
                    options: ["Sumur Zamzam", "Sumur Raumah", "Sumur Madinah", "Sumur Utsman"],
                    correct: 1
                },
                {
                    question: "Apa arti dari hadits 'Innas sidqa yahdi ilal birri'?",
                    options: ["Kejujuran membawa kepada kebaikan", "Kebohongan membawa ke neraka", "Kejujuran membawa kekayaan", "Kebaikan membawa ke surga"],
                    correct: 0
                },
                {
                    question: "Dalil tentang kejujuran terdapat dalam Al-Qur'an surat...",
                    options: ["Al-Baqarah ayat 119", "At-Taubah ayat 119", "Al-Hujurat ayat 119", "Al-Imran ayat 119"],
                    correct: 1
                },
                {
                    question: "Orang yang jujur disebut dalam istilah Islam dengan sebutan...",
                    options: ["Kadzib", "Shiddiq", "Amanah", "Fathonah"],
                    correct: 1
                },
                {
                    question: "Berikut ini yang BUKAN merupakan contoh perilaku jujur adalah...",
                    options: ["Mengembalikan barang temuan", "Mengakui kesalahan", "Menyontek saat ulangan", "Berkata apa adanya"],
                    correct: 2
                },
                {
                    question: "Hikmah dari perilaku jujur adalah...",
                    options: ["Dibenci teman", "Hati menjadi gelisah", "Mendapat kepercayaan", "Sering dimarahi guru"],
                    correct: 2
                },
                {
                    question: "Utsman bin Affan adalah khalifah yang ke...",
                    options: ["1", "2", "3", "4"],
                    correct: 2
                },
                {
                    question: "Arti dari 'Dzun Nurain' adalah...",
                    options: ["Pemilik dua pedang", "Pemilik dua cahaya", "Pemilik dua istana", "Pemilik dua sumur"],
                    correct: 1
                }
            ]
        },
        kuis2: {
            judul: "Kuis 2: Tanggung Jawab",
            icon: "fas fa-hand-holding-heart",
            soal: [
                {
                    question: "Nabi Muhammad SAW sejak kecil sudah dikenal sebagai penggembala yang...",
                    options: ["Malas", "Amanah", "Pemarah", "Pendiam"],
                    correct: 1
                },
                {
                    question: "Siapa paman Nabi Muhammad yang mempercayakan domba-domba untuk digembalakan?",
                    options: ["Abu Lahab", "Abu Thalib", "Hamzah", "Abbas"],
                    correct: 1
                },
                {
                    question: "Apa yang dikatakan Nabi Muhammad ketika diajak bermain oleh saudagar Ubaid?",
                    options: ["Aku sedang bermain", "Aku sedang malas", "Domba ini amanah dari pamanku", "Aku sedang sakit"],
                    correct: 2
                },
                {
                    question: "Gelar yang diberikan Allah kepada manusia sebagai pemimpin di bumi adalah...",
                    options: ["Nabi", "Rasul", "Khalifah", "Ulama"],
                    correct: 2
                },
                {
                    question: "Tanggung jawab adalah kesediaan untuk...",
                    options: ["Meninggalkan tugas", "Menjalankan tugas dengan baik", "Menunda-nunda pekerjaan", "Mengabaikan kewajiban"],
                    correct: 1
                },
                {
                    question: "Berikut ini yang merupakan ciri orang bertanggung jawab adalah...",
                    options: ["Malas belajar", "Suka mencontek", "Berani mengakui kesalahan", "Suka menyalahkan orang lain"],
                    correct: 2
                },
                {
                    question: "Contoh tanggung jawab kepada diri sendiri adalah...",
                    options: ["Membantu ibu", "Belajar dengan giat", "Menjaga adik", "Membersihkan rumah"],
                    correct: 1
                },
                {
                    question: "Tugas utama manusia sebagai khalifah di bumi adalah...",
                    options: ["Merusak bumi", "Memakmurkan bumi", "Mengabaikan bumi", "Meninggalkan bumi"],
                    correct: 1
                },
                {
                    question: "Siapa yang selalu melihat perbuatan kita meskipun tidak ada orang lain?",
                    options: ["Malaikat", "Nabi", "Allah", "Jin"],
                    correct: 2
                },
                {
                    question: "Contoh tanggung jawab kepada lingkungan adalah...",
                    options: ["Membuang sampah sembarangan", "Mematikan lampu jika tidak digunakan", "Menebang pohon sembarangan", "Membiarkan air keran mengalir"],
                    correct: 1
                }
            ]
        },
        kuis3: {
            judul: "Kuis 3: Saling Menghargai & Saling Menghormati",
            icon: "fas fa-handshake",
            soal: [
                {
                    question: "Rasulullah SAW pernah berdiri untuk menghormati jenazah seorang...",
                    options: ["Muslim", "Yahudi", "Nasrani", "Majusi"],
                    correct: 1
                },
                {
                    question: "Apa jawaban Rasulullah ketika diberitahu bahwa jenazah itu adalah orang Yahudi?",
                    options: ["Duduklah kembali", "Bukankah ia juga manusia", "Biarkan saja", "Ia bukan muslim"],
                    correct: 1
                },
                {
                    question: "Persaudaraan antara sesama umat Islam disebut...",
                    options: ["Ukhuwah Wathaniyah", "Ukhuwah Islamiyah", "Ukhuwah Insaniyah", "Ukhuwah Basyariyah"],
                    correct: 1
                },
                {
                    question: "Persaudaraan sebagai sesama warga negara disebut...",
                    options: ["Ukhuwah Wathaniyah", "Ukhuwah Islamiyah", "Ukhuwah Insaniyah", "Ukhuwah Basyariyah"],
                    correct: 0
                },
                {
                    question: "Persaudaraan antara seluruh manusia tanpa memandang perbedaan disebut...",
                    options: ["Ukhuwah Wathaniyah", "Ukhuwah Islamiyah", "Ukhuwah Insaniyah", "Ukhuwah Basyariyah"],
                    correct: 2
                },
                {
                    question: "QS. Al-Hujurat ayat 13 mengajarkan tentang...",
                    options: ["Larangan mencuri", "Perintah shalat", "Saling mengenal", "Perintah puasa"],
                    correct: 2
                },
                {
                    question: "Larangan mengolok-olok orang lain terdapat dalam QS. Al-Hujurat ayat...",
                    options: ["10", "11", "12", "13"],
                    correct: 1
                },
                {
                    question: "Contoh sikap saling menghormati di sekolah adalah...",
                    options: ["Bercanda saat guru menjelaskan", "Mendengarkan penjelasan guru", "Tidur di kelas", "Membaca komik saat pelajaran"],
                    correct: 1
                },
                {
                    question: "Contoh ukhuwah insaniyah adalah...",
                    options: ["Saling membantu sesama muslim", "Gotong royong di desa", "Membantu tetangga yang berbeda agama", "Shalat berjamaah"],
                    correct: 2
                },
                {
                    question: "Sikap yang diajarkan Rasulullah dalam kisah jenazah Yahudi adalah...",
                    options: ["Membeda-bedakan", "Menghormati semua manusia", "Mengabaikan orang lain", "Bersikap kasar"],
                    correct: 1
                }
            ]
        },
        kuis4: {
            judul: "Kuis 4: Gabungan Semua Materi",
            icon: "fas fa-star",
            soal: [
                {
                    question: "Siapa sahabat Nabi yang membeli Sumur Raumah untuk masyarakat?",
                    options: ["Abu Bakar", "Umar", "Utsman", "Ali"],
                    correct: 2
                },
                {
                    question: "Apa arti dari kata 'Amanah'?",
                    options: ["Bohong", "Jujur", "Dapat dipercaya", "Pintar"],
                    correct: 2
                },
                {
                    question: "Nabi Muhammad SAW sejak kecil bekerja sebagai...",
                    options: ["Pedagang", "Penggembala", "Petani", "Nelayan"],
                    correct: 1
                },
                {
                    question: "Ukhuwah Wathaniyah artinya persaudaraan karena...",
                    options: ["Satu agama", "Satu bangsa", "Satu suku", "Satu manusia"],
                    correct: 1
                },
                {
                    question: "QS. Al-Hujurat ayat 10 menjelaskan tentang...",
                    options: ["Orang mukmin itu bersaudara", "Larangan mengolok-olok", "Saling mengenal", "Perintah jujur"],
                    correct: 0
                },
                {
                    question: "Berikut ini adalah hikmah dari perilaku jujur, KECUALI...",
                    options: ["Hati tenang", "Dibenci teman", "Mendapat pahala", "Dipercaya orang"],
                    correct: 1
                },
                {
                    question: "Contoh tanggung jawab kepada keluarga adalah...",
                    options: ["Belajar giat", "Menjaga adik", "Menjaga kesehatan", "Membuang sampah"],
                    correct: 1
                },
                {
                    question: "Rasulullah SAW mengajarkan untuk menghormati jenazah meskipun...",
                    options: ["Kaya", "Miskin", "Berbeda agama", "Anak-anak"],
                    correct: 2
                },
                {
                    question: "Orang yang selalu berkata benar disebut...",
                    options: ["Kadzib", "Shiddiq", "Amanah", "Fathonah"],
                    correct: 1
                },
                {
                    question: "Tugas manusia sebagai khalifah di bumi adalah...",
                    options: ["Merusak", "Memakmurkan", "Mengabaikan", "Meninggalkan"],
                    correct: 1
                }
            ]
        }
    };

    // Data Materi
    const materiData = [
        {
            id: 1,
            judul: "Kejujuran",
            icon: "fas fa-check-circle",
            deskripsi: "Mempelajari tentang kejujuran melalui keteladanan Utsman bin Affan r.a., dalil-dalil tentang kejujuran, contoh perilaku jujur, dan hikmahnya dalam kehidupan sehari-hari."
        },
        {
            id: 2,
            judul: "Tanggung Jawab",
            icon: "fas fa-hand-holding-heart",
            deskripsi: "Memahami makna tanggung jawab melalui kisah Nabi Muhammad SAW sebagai penggembala yang amanah, dalil Al-Qur'an dan hadits tentang tanggung jawab, serta contoh dalam kehidupan."
        },
        {
            id: 3,
            judul: "Saling Menghargai & Saling Menghormati",
            icon: "fas fa-handshake",
            deskripsi: "Belajar tentang sikap saling menghargai dan menghormati melalui ilustrasi kisah Rasulullah SAW, konsep persaudaraan dalam Islam (Ukhuwah), dan dalil-dalil Al-Qur'an."
        }
    ];

    // Data Tim Pengembang dengan data baru (tanpa No. HP)
    const timData = {
        ketua: {
            nama: "Dr. Ani Nur Aeni, M.Pd.",
            nip: "197608222005022002",
            email: "aninuraeni@upi.edu",
            gambar: "dosen.jpeg"
        },
        anggota: [
            {
                nama: "Evelyn Sawalia Rahma",
                nim: "2401822",
                email: "sawalia@upi.edu",
                gambar: "evelyn.jpeg"
            },
            {
                nama: "Fachrul Isha Mahendra Suherman",
                nim: "2409715",
                email: "fachrulisha@upi.edu",
                gambar: "fachrul.jpeg"
            },
            {
                nama: "Rahma Nur Afifah",
                nim: "2406535",
                email: "rhmaaa09@upi.edu",
                gambar: "rahma.jpeg"
            },
            {
                nama: "Shelly Nuraprillianty",
                nim: "2401514",
                email: "shellynuraprillyanti11@upi.edu",
                gambar: "shelly.jpeg"
            }
        ]
    };

    // State Kuis
    let currentKuis = null;
    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    // State Audio
    let currentAudio = null;
    let currentAudioButton = null; // Untuk melacak tombol yang sedang memutar audio

    // Elemen DOM
    const mainContent = document.getElementById('main-content');
    const loginModal = document.getElementById('loginModal');
    const hapusModal = document.getElementById('hapusModal');
    const panduanModal = document.getElementById('panduanModal');
    const studentNameInput = document.getElementById('studentName');
    const studentClassInput = document.getElementById('studentClass');
    const loginBtn = document.getElementById('loginBtn');
    const userPointDisplay = document.getElementById('userPointDisplay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Cek Login
    if (!currentUser) {
        loginModal.classList.add('show');
    } else {
        updateUserPointsUI();
        loadPage('home');
    }

    // Event Listener Login
    loginBtn.addEventListener('click', function() {
        const name = studentNameInput.value.trim();
        const kelas = studentClassInput.value.trim();
        
        if (name && kelas) {
            currentUser = {
                name: name,
                class: kelas,
                points: userPoints,
                quizHistory: []
            };
            localStorage.setItem('paiCurrentUser', JSON.stringify(currentUser));
            loginModal.classList.remove('show');
            updateUserPointsUI();
            loadPage('home');
        } else {
            alert('Nama dan Kelas harus diisi!');
        }
    });

    // Event Listener untuk Tombol Tutup Panduan
    document.addEventListener('click', function(e) {
        if (e.target.id === 'tutupPanduan' || e.target.classList.contains('tutup-panduan')) {
            panduanModal.classList.remove('show');
        }
        
        // Tombol batal hapus
        if (e.target.id === 'batalHapus') {
            hapusModal.classList.remove('show');
        }
        
        // Tombol konfirmasi hapus
        if (e.target.id === 'konfirmasiHapus') {
            // Hapus semua data localStorage
            localStorage.removeItem('paiCurrentUser');
            // Reset user
            currentUser = null;
            userPoints = 0;
            updateUserPointsUI();
            // Tutup modal
            hapusModal.classList.remove('show');
            // Kembali ke halaman login
            loginModal.classList.add('show');
            // Kosongkan konten utama
            mainContent.innerHTML = '';
        }
    });

    // Navigasi Multi-Page
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (!currentUser) {
                alert('Silakan login terlebih dahulu!');
                loginModal.classList.add('show');
                return;
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const page = this.dataset.page;
            loadPage(page);
        });
    });

    // Fungsi Memuat Halaman
    function loadPage(page) {
        switch(page) {
            case 'home':
                renderHomePage();
                break;
            case 'materi':
                renderMateriPage();
                break;
            case 'quiz':
                renderQuizMenuPage();
                break;
            case 'game':
                renderGameMenuPage();
                break;
            case 'profil':
                renderProfilPage();
                break;
            case 'tim':
                renderTimPage();
                break;
        }
    }

    // Fungsi untuk memutar/menghentikan audio
    function toggleAudio(audioSrc, button) {
        // Jika tidak ada audio yang diputar
        if (!currentAudio) {
            // Buat audio baru dan putar
            currentAudio = new Audio(audioSrc);
            currentAudio.play().catch(error => {
                console.log('Gagal memutar audio:', error);
                alert('Maaf, file audio tidak dapat diputar. Pastikan file ' + audioSrc + ' tersedia.');
                currentAudio = null;
                currentAudioButton = null;
                return;
            });
            
            // Simpan tombol yang sedang memutar audio
            currentAudioButton = button;
            
            // Ubah ikon play menjadi pause
            const icon = button.querySelector('.fa-play, .fa-pause');
            if (icon) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            }
            
            // Tambahkan class active pada tombol
            button.classList.add('audio-playing');
            
            // Handle saat audio selesai
            currentAudio.onended = function() {
                // Kembalikan ikon ke play
                const icon = button.querySelector('.fa-pause');
                if (icon) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                }
                button.classList.remove('audio-playing');
                currentAudio = null;
                currentAudioButton = null;
            };
        } 
        // Jika audio sedang diputar dan tombol yang sama diklik (stop)
        else if (currentAudioButton === button) {
            // Hentikan audio
            currentAudio.pause();
            currentAudio.currentTime = 0;
            
            // Kembalikan ikon ke play
            const icon = button.querySelector('.fa-pause');
            if (icon) {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
            button.classList.remove('audio-playing');
            
            // Reset state audio
            currentAudio = null;
            currentAudioButton = null;
        } 
        // Jika audio sedang diputar dari tombol lain
        else {
            // Hentikan audio sebelumnya
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                
                // Kembalikan ikon tombol sebelumnya ke play
                if (currentAudioButton) {
                    const prevIcon = currentAudioButton.querySelector('.fa-pause');
                    if (prevIcon) {
                        prevIcon.classList.remove('fa-pause');
                        prevIcon.classList.add('fa-play');
                    }
                    currentAudioButton.classList.remove('audio-playing');
                }
            }
            
            // Putar audio baru
            currentAudio = new Audio(audioSrc);
            currentAudio.play().catch(error => {
                console.log('Gagal memutar audio:', error);
                alert('Maaf, file audio tidak dapat diputar. Pastikan file ' + audioSrc + ' tersedia.');
                currentAudio = null;
                currentAudioButton = null;
                return;
            });
            
            // Simpan tombol yang sedang memutar audio
            currentAudioButton = button;
            
            // Ubah ikon play menjadi pause
            const icon = button.querySelector('.fa-play, .fa-pause');
            if (icon) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            }
            
            // Tambahkan class active pada tombol
            button.classList.add('audio-playing');
            
            // Handle saat audio selesai
            currentAudio.onended = function() {
                // Kembalikan ikon ke play
                const icon = button.querySelector('.fa-pause');
                if (icon) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                }
                button.classList.remove('audio-playing');
                currentAudio = null;
                currentAudioButton = null;
            };
        }
    }

    // Halaman Home dengan Bismillah dan Tombol Panduan
    function renderHomePage() {
        mainContent.innerHTML = `
            <div class="page home-page">
                <div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
                <div class="hero">
                    <h1><i class="fas fa-hand-holding-heart"></i> Selamat Datang, ${currentUser.name}!</h1>
                    <p>Mari belajar Akhlak Mulia bersama Harmoni <i class="fas fa-mosque"></i></p>
                    <button class="btn-gold" id="btnPanduan" style="margin-top: 10px;">
                        <i class="fas fa-book"></i> Panduan Penggunaan
                    </button>
                </div>
                <div class="cards">
                    <div class="card">
                        <i class="fas fa-check-circle"></i>
                        <h3>Kejujuran</h3>
                        <p>Belajar tentang kejujuran dari keteladanan Utsman bin Affan r.a.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-hand-holding-heart"></i>
                        <h3>Tanggung Jawab</h3>
                        <p>Memahami tanggung jawab dari kisah Nabi Muhammad SAW dan dalil Al-Qur'an.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-handshake"></i>
                        <h3>Saling Menghargai</h3>
                        <p>Saling menghargai dan menghormati dalam kehidupan sehari-hari.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-star"></i>
                        <h3>4 Kuis Menarik</h3>
                        <p>Uji pemahamanmu dengan 4 kuis berbeda!</p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('btnPanduan')?.addEventListener('click', function() {
            panduanModal.classList.add('show');
        });
    }

    // Halaman Materi dengan ALHAMDULILLAH di akhir halaman materi DAN SUMBER RUJUKAN
    function renderMateriPage() {
        mainContent.innerHTML = `
            <div class="page materi-page">
                ${materiData.map(materi => `
                    <div class="materi-card">
                        <div class="materi-card-header">
                            <i class="${materi.icon}"></i>
                            <h3>${materi.judul}</h3>
                        </div>
                        <div class="materi-card-body">
                            <p>${materi.deskripsi}</p>
                            <button class="btn-materi" data-materi-id="${materi.id}">
                                <i class="fas fa-book-reader"></i> Baca Materi
                            </button>
                        </div>
                    </div>
                `).join('')}
                
                <!-- Sumber Rujukan -->
                <div style="grid-column: 1 / -1; text-align: left; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 15px; border: 2px solid #D4AF37;">
                    <p style="color: #1B4D3E; font-style: italic; margin: 0;">
                        <i class="fas fa-book" style="color: #D4AF37; margin-right: 8px;"></i>
                        <strong>Sumber rujukan:</strong> Baedowi, S., & Anwar, H. M. (2021). Pendidikan agama Islam dan budi pekerti untuk SD kelas V. Pusat Perbukuan, Badan Standar, Kurikulum, dan Asesmen Pendidikan, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.
                    </p>
                </div>
                
                <!-- Alhamdulillah di akhir halaman materi -->
                <div style="grid-column: 1 / -1; text-align: center; margin-top: 20px;">
                    <div class="alhamdulillah">اَلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</div>
                </div>
            </div>
        `;

        document.querySelectorAll('.btn-materi').forEach(btn => {
            btn.addEventListener('click', function() {
                const materiId = parseInt(this.dataset.materiId);
                renderMateriDetailPage(materiId);
            });
        });
    }

    // Halaman Detail Materi dengan gambar, tombol audio cerita, dan tombol audio dalil
    function renderMateriDetailPage(materiId) {
        let content = '';
        
        if (materiId === 1) {
            content = `
                <h1>KEJUJURAN</h1>
                
                <h2>1. Pengertian Kejujuran</h2>
                <p>Kejujuran adalah sikap berkata dan berbuat sesuai dengan kenyataan yang sebenarnya serta tidak menipu orang lain. Orang yang jujur akan menyampaikan sesuatu apa adanya tanpa menambah atau mengurangi kebenaran. Dalam ajaran Islam, kejujuran disebut dengan istilah <strong>sīdq</strong>, yaitu berkata benar dan melakukan perbuatan yang benar. Orang yang memiliki sifat jujur akan dipercaya oleh orang lain dan dicintai oleh Allah Swt. Kejujuran merupakan salah satu akhlak terpuji yang harus dimiliki oleh setiap muslim. Dengan bersikap jujur, hubungan dengan orang lain akan menjadi baik dan penuh kepercayaan.</p>
                
                <h2>2. Dalil tentang Kejujuran</h2>
                
                <!-- Tombol Audio untuk Dalil Kejujuran -->
                <div style="text-align: center; margin: 20px 0;">
                    <button class="btn-gold audio-btn" data-audio="dlkejujuran.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                        <i class="fas fa-headphones"></i>
                        <span>Dengarkan Dalil Kejujuran</span>
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                
                <p>Allah Swt. memerintahkan umat Islam untuk selalu bersikap jujur. Hal ini dijelaskan dalam Al-Qur'an.</p>
                
                <div class="ayat">
                    <div class="arab">يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ</div>
                    <p><strong>QS. At-Taubah ayat 119:</strong> "Wahai orang-orang yang beriman! Bertakwalah kepada Allah dan hendaklah kamu bersama orang-orang yang jujur."</p>
                </div>
                
                <div class="hadis">
                    <p>Selain itu, Rasulullah SAW juga menjelaskan pentingnya kejujuran dalam sebuah hadis:</p>
                    <div class="arab">إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ</div>
                    <p><strong>"Sesungguhnya kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga."</strong> (HR. Muslim)</p>
                </div>
                
                <h2>3. Keteladanan Kejujuran Utsman bin Affan r.a.</h2>
                
                <!-- Gambar untuk materi Kejujuran -->
                <div style="text-align: center; margin: 25px 0;">
                    <img src="kejujuran.png" alt="Ilustrasi Kejujuran Utsman bin Affan" style="max-width: 100%; max-height: 300px; border-radius: 15px; border: 3px solid #D4AF37; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" onerror="this.style.display='none'">
                </div>
                
                <!-- Tombol Audio untuk materi Kejujuran (cerita) -->
                <div style="text-align: center; margin: 20px 0;">
                    <button class="btn-gold audio-btn" data-audio="kejujuran.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                        <i class="fas fa-headphones"></i>
                        <span>Dengarkan Kisah Utsman bin Affan</span>
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                
                <div class="kisah">
                    <p>Salah satu sahabat Nabi yang terkenal karena akhlaknya yang mulia adalah <strong>Utsman bin Affan r.a.</strong> Beliau merupakan khalifah ketiga setelah Abu Bakar ash-Shiddiq dan Umar bin Khattab. Utsman bin Affan dikenal sebagai orang yang sangat jujur, dermawan, dan memiliki hati yang lembut. Beliau juga mendapat julukan <strong>Dzun Nurain</strong>, yang berarti "pemilik dua cahaya", karena menikahi dua putri Nabi Muhammad SAW.</p>
                    
                    <p>Utsman bin Affan adalah seorang pedagang yang sangat sukses. Dalam berdagang, beliau selalu bersikap jujur. Beliau tidak pernah menipu pembeli, tidak mengurangi timbangan, dan tidak mencari keuntungan dengan cara yang curang. Selain itu, Utsman bin Affan juga dikenal sangat dermawan. Ketika penduduk Madinah mengalami kesulitan air, beliau membeli Sumur Raumah dari seorang Yahudi dan memberikannya untuk kepentingan masyarakat. Setelah itu, masyarakat Madinah dapat menggunakan air dari sumur tersebut secara gratis. Perbuatan tersebut menunjukkan bahwa Utsman bin Affan tidak hanya jujur dalam perkataan, tetapi juga jujur dalam niat dan perbuatannya untuk membantu sesama.</p>
                </div>
                
                <h2>4. Contoh Perilaku Jujur dalam Kehidupan Sehari-hari</h2>
                <ol>
                    <li>Jujur saat mengerjakan ulangan dengan tidak menyontek.</li>
                    <li>Mengakui kesalahan jika melakukan kesalahan.</li>
                    <li>Mengembalikan barang yang ditemukan kepada pemiliknya.</li>
                    <li>Berkata jujur kepada orang tua dan guru.</li>
                    <li>Tidak mengambil barang yang bukan milik kita.</li>
                </ol>
                
                <h2>5. Hikmah Berperilaku Jujur</h2>
                <ol>
                    <li>Mendapat kepercayaan dari orang lain.</li>
                    <li>Hati menjadi tenang dan tidak merasa bersalah.</li>
                    <li>Disukai oleh teman, guru, dan keluarga.</li>
                    <li>Mendapat pahala dari Allah Swt.</li>
                    <li>Mendapatkan kebahagiaan di dunia dan di akhirat.</li>
                </ol>
            `;
        } else if (materiId === 2) {
            content = `
                <h1>TANGGUNG JAWAB</h1>
                
                <div class="kisah">
                    <h2>Kisah Nabi Muhammad SAW: Amanah Seorang Penggembala</h2>
                    
                    <!-- Gambar untuk materi Tanggung Jawab -->
                    <div style="text-align: center; margin: 25px 0;">
                        <img src="tj.png" alt="Ilustrasi Kisah Nabi Muhammad sebagai Penggembala" style="max-width: 100%; max-height: 300px; border-radius: 15px; border: 3px solid #D4AF37; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" onerror="this.style.display='none'">
                    </div>
                    
                    <!-- Tombol Audio untuk materi Tanggung Jawab (cerita) -->
                    <div style="text-align: center; margin: 20px 0;">
                        <button class="btn-gold audio-btn" data-audio="tj.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                            <i class="fas fa-headphones"></i>
                            <span>Dengarkan Kisah Nabi Muhammad</span>
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                    
                    <p>Di padang rumput yang luas di Mekah, matahari sore mulai merambat turun. Seorang anak laki-laki berusia sekitar 9 atau 10 tahun duduk di atas batu, mengawasi domba-dombanya yang sedang asyik memakan rumput. Anak itu bernama Muhammad. Ya, dialah yang kelak akan menjadi Nabi terakhir.</p>
                    
                    <p>Namun saat ini, ia hanyalah seorang penggembala cilik yang bekerja untuk pamannya, Abu Thalib. Hari itu, seorang saudagar tua bernama Ubaid melewati padang rumput. Ia melihat Muhammad duduk sendirian, sementara anak-anak seusianya asyik bermain kejar-kejaran di kejauhan.</p>
                    
                    <p><strong>"Wahai anak muda,"</strong> sapa Ubaid sambil mendekat, <strong>"Mengapa kau tak ikut bermain dengan mereka? Lihatlah, mereka bersenang-senang. Sedang kau di sini, sendirian."</strong></p>
                    
                    <p>Muhammad tersenyum sopan. Ia sudah terbiasa dengan pertanyaan seperti ini.</p>
                    
                    <p><strong>"Wahai Paman Ubaid,"</strong> jawabnya dengan suara tenang, <strong>"Aku sedang bekerja. Domba-domba ini adalah amanah dari pamanku, Abu Thalib. Aku harus menjaganya."</strong></p>
                    
                    <p>Ubaid tertawa kecil. <strong>"Ah, sebentar saja tak apa. Mainlah dulu. Domba-domba ini tak akan kemana-mana. Mereka kan hanya makan rumput."</strong></p>
                    
                    <p>Namun Muhammad menggeleng.</p>
                    
                    <p><strong>"Aku tahu mereka hanya makan rumput, Paman,"</strong> kata Muhammad. <strong>"Tapi mereka bukan milikku. Mereka titipan. Pamanku mempercayakan mereka kepadaku. Jika aku tinggalkan, siapa yang akan menjaga kalau tiba-tiba ada serigala? Siapa yang akan memastikan mereka tidak makan rumput liar yang beracun? Siapa yang akan mengembalikan jika ada yang tersesat?"</strong></p>
                    
                    <p>Ubaid terkejut. Ia tak menyangka seorang anak seusia itu bisa berpikir sedalam ini.</p>
                    
                    <p><strong>"Bukankah pamanku juga akan memberi upah jika domba-domba ini pulang dengan selamat?"</strong> lanjut Muhammad. <strong>"Tapi upah itu bukan yang utama. Yang utama adalah... aku sudah berjanji akan menjaganya. Dan janji harus ditepati."</strong></p>
                    
                    <p>Ubaid terdiam. Matanya menerawang, mengingat sesuatu.</p>
                    
                    <h3>Pelajaran dari Seorang Penggembala</h3>
                    
                    <p><strong>"Dengar, anak muda,"</strong> kata Ubaid akhirnya. <strong>"Aku punya banyak pekerja yang mengurus ternakku. Tapi tak jarang mereka lalai. Ada yang main judi di pasar, ada yang tidur saat berjaga, ada yang pulang lebih awal. Mereka pikir, karena aku tak melihat, mereka bisa bebas berbuat sesuka hati."</strong></p>
                    
                    <p>Muhammad mendengarkan dengan saksama.</p>
                    
                    <p><strong>"Tapi kau... kau sadar bahwa meskipun pamanmu tak di sini, ada yang selalu melihatmu, ya?"</strong></p>
                    
                    <p>Muhammad mengangguk. <strong>"Allah selalu melihat, Paman."</strong></p>
                    
                    <p>Ubaid tersenyum. <strong>"Kau anak yang istimewa. Aku rasa, kelak kau akan menjadi pemimpin besar. Orang yang bertanggung jawab seperti kau pasti akan dipercaya banyak orang."</strong></p>
                    
                    <p>Muhammad hanya tersipu. Ia tak memikirkan soal menjadi pemimpin. Pikirannya saat itu hanya satu: domba-dombanya harus pulang dengan selamat, cukup makan, dan tak ada satu pun yang hilang.</p>
                </div>
                
                <!-- Dalil QS. Al-Muddatstsir Ayat 38 dan Hadits Riwayat Bukhari Muslim -->
                <div style="margin: 30px 0;">
                    <h2 style="color: #1B4D3E; border-left: 5px solid #D4AF37; padding-left: 15px;">Dalil tentang Tanggung Jawab dalam Islam</h2>
                    
                    <!-- Tombol Audio untuk Dalil Tanggung Jawab -->
                    <div style="text-align: center; margin: 20px 0;">
                        <button class="btn-gold audio-btn" data-audio="dltj.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                            <i class="fas fa-headphones"></i>
                            <span>Dengarkan Dalil Tanggung Jawab</span>
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                    
                    <div class="ayat">
                        <p>Allah Ta'ala berfirman dalam surat Al-Muddatstsir ayat 38:</p>
                        <div class="arab" style="font-size: 1.8rem; margin: 15px 0;">كُلُّ نَفْسٍۭ بِمَا كَسَبَتْ رَهِينَةٌ</div>
                        <p><strong>QS. Al-Muddatstsir: 38</strong> - <em>"Setiap jiwa bertanggung jawab atas apa yang telah diperolehnya."</em></p>
                        <p style="margin-top: 10px;">Ayat ini menegaskan prinsip <strong>individual accountability</strong> dalam Islam. Setiap manusia dihakimi berdasarkan perbuatan pribadinya sendiri, tanpa bisa saling menanggung dosa atau amal orang lain.</p>
                    </div>
                    
                    <div class="hadis">
                        <p>Ayat ini diperkuat oleh hadits shahih riwayat Bukhari dan Muslim (Shahih Muslim no. 1829):</p>
                        <div class="arab" style="font-size: 1.5rem; margin: 15px 0;">كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ</div>
                        <p><strong>HR. Bukhari-Muslim</strong> - <em>"Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawaban atas kepemimpinannya..."</em></p>
                        <p style="margin-top: 10px;">Hadits ini dari Rasulullah SAW menekankan amanah kepemimpinan secara keseluruhan dimulai dari orang tua, guru, hingga pemimpin negara. Setiap pemimpin bertanggung jawab atas kesejahteraan <strong>"Ra'iyyah"</strong> (yang dipimpin), seperti guru terhadap muridnya. Ulama seperti Imam Nawawi dalam Syarh Shahih Muslim menjelaskan ini mencakup pengelolaan yang adil, pendidikan, dan perlindungan, selaras dengan ayat sebelumnya untuk membangun masyarakat yang bertanggung jawab.</p>
                    </div>
                </div>
                
                <h2>Memahami Tanggung Jawab: Tugas Mulia dari Allah</h2>
                
                <p><strong>Tanggung jawab</strong> adalah kesediaan untuk menjalankan tugas dan kewajiban dengan sebaik-baiknya. Ibarat kita diberi amanah (kepercayaan) untuk menjaga sesuatu, maka kita harus menjaganya dengan sungguh-sungguh.</p>
                
                <h3>Ciri-ciri orang yang bertanggung jawab:</h3>
                <ul>
                    <li><strong>Melakukan tugas dengan kesadaran sendiri:</strong> Bukan karena terpaksa, takut dihukum, atau hanya ingin dipuji. Tapi karena memang itu adalah kewajibannya.</li>
                    <li><strong>Berusaha sebaik mungkin:</strong> Ia akan mengerjakan tugasnya dengan sungguh-sungguh, tidak asal-asalan.</li>
                    <li><strong>Berani menanggung konsekuensi:</strong> Jika melakukan kesalahan, ia berani mengakuinya dan menerima resikonya.</li>
                </ul>
                
                <p>Dalam Islam, tanggung jawab memiliki makna yang sangat istimewa. Allah SWT menciptakan manusia dan memberinya gelar <strong>"Khalifah"</strong> di muka bumi. Apa itu khalifah? Khalifah itu artinya pemimpin, pengelola, atau penjaga. Jadi, setiap manusia, termasuk kita semua, adalah pemimpin. Minimal, kita adalah pemimpin bagi diri kita sendiri. Dan setiap pemimpin akan dimintai pertanggungjawaban atas apa yang dipimpinnya.</p>
                
                <h3>Tugas utama kita sebagai khalifah adalah:</h3>
                <ul>
                    <li><strong>Memakmurkan Bumi:</strong> Artinya, kita harus menjaga dan merawat bumi dengan sebaik-baiknya. Kita harus membuat bumi ini menjadi tempat yang nyaman, indah, dan bermanfaat bagi semua makhluk.</li>
                    <li><strong>Tidak Merusak:</strong> Ini adalah larangan yang tegas. Kita dilarang merusak lingkungan, membuang sampah sembarangan, menebang pohon sembarangan, atau melakukan hal-hal yang membuat bumi menjadi rusak dan tidak nyaman.</li>
                </ul>
                
                <h2>Contoh-contoh konkret dalam kehidupan sehari-hari:</h2>
                
                <h3>Tanggung Jawab kepada Diri Sendiri (Khalifah bagi Diri Sendiri):</h3>
                <ul>
                    <li><strong>Belajar dengan Giat:</strong> Rajin belajar, mengerjakan PR, dan menyimak penjelasan guru di sekolah.</li>
                    <li><strong>Menjaga Kesehatan:</strong> Makan makanan bergizi, istirahat cukup, dan berolahraga.</li>
                    <li><strong>Menjaga Lisan dan Perbuatan:</strong> Berbicara dan bertingkah laku yang baik.</li>
                </ul>
                
                <h3>Tanggung Jawab kepada Keluarga:</h3>
                <ul>
                    <li><strong>Membantu Orang Tua:</strong> Membantu membersihkan rumah, merapikan tempat tidur, menjaga adik.</li>
                    <li><strong>Mematuhi Nasihat Orang Tua:</strong> Mendengarkan dan melakukan hal-hal baik.</li>
                </ul>
                
                <h3>Tanggung Jawab kepada Lingkungan:</h3>
                <ul>
                    <li><strong>Menjaga Kebersihan:</strong> Membuang sampah pada tempatnya.</li>
                    <li><strong>Merawat Tanaman:</strong> Menyiram tanaman di halaman.</li>
                    <li><strong>Hemat Air dan Listrik:</strong> Mematikan keran dan lampu jika tidak digunakan.</li>
                </ul>
            `;
        } else if (materiId === 3) {
            content = `
                <h1>SALING MENGHARGAI DAN SALING MENGHORMATI</h1>
                
                <div class="kisah">
                    <h2>Ilustrasi Kisah Rasulullah SAW</h2>
                    
                    <!-- Gambar untuk materi Saling Menghargai -->
                    <div style="text-align: center; margin: 25px 0;">
                        <img src="menghargai.png" alt="Ilustrasi Kisah Rasulullah Menghormati Jenazah" style="max-width: 100%; max-height: 300px; border-radius: 15px; border: 3px solid #D4AF37; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" onerror="this.style.display='none'">
                    </div>
                    
                    <!-- Tombol Audio untuk materi Saling Menghargai (cerita) -->
                    <div style="text-align: center; margin: 20px 0;">
                        <button class="btn-gold audio-btn" data-audio="menghargai.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                            <i class="fas fa-headphones"></i>
                            <span>Dengarkan Kisah Rasulullah</span>
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                    
                    <p>Suatu hari Rasulullah SAW sedang duduk bersama para sahabatnya di sebuah tempat di Kota Madinah. Mereka sedang berbincang-bincang dengan tenang. Tidak lama kemudian, terlihat sekelompok orang yang sedang berjalan mengantar jenazah menuju tempat pemakaman. Orang-orang yang mengantar jenazah tersebut berjalan dengan pelan dan penuh kesedihan.</p>
                    
                    <p>Ketika rombongan jenazah tersebut melewati Rasulullah SAW, beliau segera berdiri sebagai tanda penghormatan kepada jenazah yang sedang lewat. Para sahabat yang melihat hal tersebut ikut berdiri bersama Rasulullah SAW. Namun salah seorang sahabat berkata,</p>
                    
                    <p><strong>"Wahai Rasulullah, jenazah itu adalah jenazah orang Yahudi."</strong></p>
                    
                    <p>Para sahabat mengira Rasulullah SAW akan duduk kembali setelah mengetahui bahwa jenazah tersebut bukan seorang muslim. Akan tetapi Rasulullah SAW tetap berdiri dengan penuh penghormatan. Kemudian Rasulullah SAW berkata,</p>
                    
                    <p><strong>"Bukankah ia juga seorang manusia?"</strong></p>
                    
                    <p>Jawaban Rasulullah SAW tersebut membuat para sahabat memahami bahwa setiap manusia harus dihormati, walaupun memiliki perbedaan agama, suku, maupun latar belakang. Sikap Rasulullah SAW tersebut menunjukkan bahwa beliau memiliki akhlak yang sangat mulia dan selalu menghargai orang lain.</p>
                </div>
                
                <div class="ayat">
                    <p>Allah Swt. berfirman dalam Al-Qur'an:</p>
                    <div class="arab">يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا</div>
                    <p><strong>QS. Al-Hujurat: 13</strong> - <em>"Wahai manusia! Sesungguhnya Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami menjadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal."</em></p>
                </div>
                
                <!-- Tombol Audio untuk Dalil Saling Menghargai -->
                <div style="text-align: center; margin: 20px 0;">
                    <button class="btn-gold audio-btn" data-audio="dlmenghargai.mp3" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px;">
                        <i class="fas fa-headphones"></i>
                        <span>Dengarkan Dalil Saling Menghargai</span>
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                
                <h2>Persaudaraan dalam Islam</h2>
                
                <p>Dalam ajaran Islam, hubungan baik antara sesama manusia disebut persaudaraan atau <strong>ukhuwah</strong>.</p>
                
                <h3>1. Ukhuwah Islamiyah</h3>
                <p>Persaudaraan antara sesama umat Islam. Contoh: saling memberi salam, saling membantu.</p>
                
                <h3>2. Ukhuwah Wathaniyah</h3>
                <p>Persaudaraan sebagai sesama warga negara. Contoh: saling menghormati perbedaan agama, gotong royong.</p>
                
                <h3>3. Ukhuwah Insaniyah</h3>
                <p>Persaudaraan antara seluruh manusia. Contoh: membantu tetangga yang membutuhkan, tidak membeda-bedakan teman.</p>
                
                <h2>Pengertian Saling Menghargai</h2>
                
                <p><strong>Saling menghargai</strong> adalah sikap menghormati perasaan, pendapat, kemampuan, serta keadaan orang lain. Allah Swt. berfirman dalam QS. Al-Hujurat: 11 yang melarang mengolok-olok orang lain.</p>
                
                <h2>Pengertian Saling Menghormati</h2>
                
                <p><strong>Saling menghormati</strong> adalah sikap menghargai dan memuliakan orang lain melalui perkataan maupun perbuatan. Contoh: mendengarkan guru, tidak memotong pembicaraan, berbicara sopan.</p>
            `;
        }

        const materi = materiData.find(m => m.id === materiId);
        
        mainContent.innerHTML = `
            <div class="page materi-detail-page">
                <div class="materi-detail-header">
                    <button class="btn-kembali" id="kembaliKeMateri">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <h1 class="materi-detail-judul">
                        <i class="${materi.icon}" style="color: #D4AF37;"></i>
                        ${materi.judul}
                    </h1>
                </div>
                <div class="materi-detail-content">
                    ${content}
                </div>
            </div>
        `;

        // Tambahkan event listener untuk semua tombol audio dengan fitur stop
        document.querySelectorAll('.audio-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const audioSrc = this.dataset.audio;
                toggleAudio(audioSrc, this);
            });
        });

        document.getElementById('kembaliKeMateri').addEventListener('click', function() {
            // Hentikan audio saat kembali ke halaman materi
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                
                // Kembalikan ikon tombol yang sedang aktif ke play
                if (currentAudioButton) {
                    const icon = currentAudioButton.querySelector('.fa-pause');
                    if (icon) {
                        icon.classList.remove('fa-pause');
                        icon.classList.add('fa-play');
                    }
                    currentAudioButton.classList.remove('audio-playing');
                }
                
                currentAudio = null;
                currentAudioButton = null;
            }
            renderMateriPage();
        });
    }

    // Halaman Menu Kuis (4 kolom) - TANPA BISMILLAH
    function renderQuizMenuPage() {
        mainContent.innerHTML = `
            <div class="page quiz-menu-page">
                <h2 style="color: #1B4D3E; text-align: center; margin-bottom: 30px;"><i class="fas fa-puzzle-piece" style="color: #D4AF37;"></i> Pilih Kuis yang Ingin Kamu Kerjakan</h2>
                
                <div class="quiz-menu-grid">
                    <div class="quiz-menu-card" data-kuis="kuis1">
                        <div class="quiz-menu-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Kuis 1</h3>
                        <p class="quiz-menu-subtitle">Kejujuran</p>
                        <p class="quiz-menu-desc">10 soal tentang kejujuran dari keteladanan Utsman bin Affan</p>
                        <div class="quiz-menu-footer">
                            <span class="quiz-badge"><i class="fas fa-star"></i> 10 Soal</span>
                            <button class="btn-quiz" data-kuis="kuis1">Mulai <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    
                    <div class="quiz-menu-card" data-kuis="kuis2">
                        <div class="quiz-menu-icon">
                            <i class="fas fa-hand-holding-heart"></i>
                        </div>
                        <h3>Kuis 2</h3>
                        <p class="quiz-menu-subtitle">Tanggung Jawab</p>
                        <p class="quiz-menu-desc">10 soal tentang tanggung jawab dari kisah Nabi Muhammad SAW dan dalil Al-Qur'an</p>
                        <div class="quiz-menu-footer">
                            <span class="quiz-badge"><i class="fas fa-star"></i> 10 Soal</span>
                            <button class="btn-quiz" data-kuis="kuis2">Mulai <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    
                    <div class="quiz-menu-card" data-kuis="kuis3">
                        <div class="quiz-menu-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h3>Kuis 3</h3>
                        <p class="quiz-menu-subtitle">Saling Menghargai & Menghormati</p>
                        <p class="quiz-menu-desc">10 soal tentang saling menghargai dan menghormati</p>
                        <div class="quiz-menu-footer">
                            <span class="quiz-badge"><i class="fas fa-star"></i> 10 Soal</span>
                            <button class="btn-quiz" data-kuis="kuis3">Mulai <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    
                    <div class="quiz-menu-card" data-kuis="kuis4">
                        <div class="quiz-menu-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>Kuis 4</h3>
                        <p class="quiz-menu-subtitle">Gabungan Semua Materi</p>
                        <p class="quiz-menu-desc">10 soal campuran dari kejujuran, tanggung jawab, dan saling menghargai</p>
                        <div class="quiz-menu-footer">
                            <span class="quiz-badge"><i class="fas fa-star"></i> 10 Soal</span>
                            <button class="btn-quiz" data-kuis="kuis4">Mulai <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll('.btn-quiz').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const kuisKey = this.dataset.kuis;
                startKuis(kuisKey);
            });
        });

        document.querySelectorAll('.quiz-menu-card').forEach(card => {
            card.addEventListener('click', function() {
                const kuisKey = this.dataset.kuis;
                startKuis(kuisKey);
            });
        });
    }

    // Fungsi untuk memulai kuis
    function startKuis(kuisKey) {
        currentKuis = kuisKey;
        currentQuizIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderKuisPage();
    }

    // Halaman Kuis (soal) - TANPA BISMILLAH
    function renderKuisPage() {
        const kuis = kuisData[currentKuis];
        const soal = kuis.soal[currentQuizIndex];
        
        mainContent.innerHTML = `
            <div class="page quiz-page">
                <div class="quiz-header">
                    <div>
                        <span class="quiz-title"><i class="${kuis.icon}" style="margin-right: 8px;"></i> ${kuis.judul}</span>
                    </div>
                    <div>
                        <span>Soal ${currentQuizIndex + 1}/${kuis.soal.length}</span>
                        <span style="margin-left: 20px;">Skor: <span id="quiz-score">${quizScore}</span></span>
                    </div>
                </div>
                <h3 id="quiz-question">${soal.question}</h3>
                <div class="quiz-options" id="quiz-options">
                    ${soal.options.map((opt, idx) => `<button class="quiz-option" data-index="${idx}">${opt}</button>`).join('')}
                </div>
                <div class="quiz-footer">
                    <button class="btn-next" id="next-question" ${currentQuizIndex === kuis.soal.length - 1 ? 'style="display:none;"' : ''}>Soal Selanjutnya</button>
                    <button class="btn-gold" id="finish-quiz" style="${currentQuizIndex < kuis.soal.length - 1 ? 'display:none;' : ''}">Selesai</button>
                </div>
            </div>
        `;

        attachKuisEvents(kuis);
    }

    function attachKuisEvents(kuis) {
        const options = document.querySelectorAll('.quiz-option');
        const nextBtn = document.getElementById('next-question');
        const finishBtn = document.getElementById('finish-quiz');

        options.forEach(opt => {
            opt.addEventListener('click', function() {
                if (quizAnswered) return;
                
                const selectedIdx = parseInt(this.dataset.index);
                const currentSoal = kuis.soal[currentQuizIndex];
                
                options.forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                
                if (selectedIdx === currentSoal.correct) {
                    this.classList.add('correct');
                    if (!quizAnswered) {
                        quizScore += 10;
                        userPoints += 10;
                    }
                } else {
                    this.classList.add('wrong');
                    options[currentSoal.correct].classList.add('correct');
                }
                
                quizAnswered = true;
                document.getElementById('quiz-score').textContent = quizScore;
                updateUserPoints();
                
                options.forEach(o => o.style.pointerEvents = 'none');
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (!quizAnswered) {
                    alert('Jawab dulu soalnya!');
                    return;
                }
                currentQuizIndex++;
                quizAnswered = false;
                renderKuisPage();
            });
        }

        if (finishBtn) {
            finishBtn.addEventListener('click', function() {
                if (!quizAnswered) {
                    alert('Jawab dulu soalnya!');
                    return;
                }
                
                const totalScore = quizScore;
                const kuisNama = kuis.judul;
                const history = {
                    date: new Date().toLocaleDateString(),
                    kuis: kuisNama,
                    score: totalScore
                };
                
                if (!currentUser.quizHistory) currentUser.quizHistory = [];
                currentUser.quizHistory.push(history);
                currentUser.points = userPoints;
                localStorage.setItem('paiCurrentUser', JSON.stringify(currentUser));
                
                alert(`Kuis selesai! Skor kamu: ${totalScore} dari 100\nPoin total: ${userPoints}`);
                
                if (confirm('Kuis selesai! Klik OK untuk kembali ke menu kuis, atau Cancel untuk lihat profil')) {
                    renderQuizMenuPage();
                } else {
                    renderProfilPage();
                }
            });
        }
    }

    // Halaman Game Menu - DENGAN LINK BARU DAN GAMBAR BARU
    function renderGameMenuPage() {
        mainContent.innerHTML = `
            <div class="page game-menu-page">
                <h2><i class="fas fa-gamepad" style="color: #D4AF37;"></i> Pilih Game Kesukaanmu!</h2>
                <p>Klik tombol di bawah untuk memulai game interaktif</p>
                
                <div class="game-buttons">
                    <a href="https://www.educaplay.com/learning-resources/28165098-harmoni.html" target="_blank" class="game-button-item">
                        <i class="fas fa-frog"></i>
                        <h3>Game 1</h3>
                        <p>Harmoni - Educaplay</p>
                    </a>
                    
                    <a href="https://wordwall.net/resource/108980432" target="_blank" class="game-button-item">
                        <i class="fas fa-circle-notch"></i>
                        <h3>Game 2</h3>
                        <p>Spin Wheel - Wordwall</p>
                    </a>
                    
                    <a href="https://quiz.zep.us/en/play/dJR1bj" target="_blank" class="game-button-item">
                        <i class="fas fa-question-circle"></i>
                        <h3>Game 3</h3>
                        <p>Kuis Interaktif - Zep Quiz</p>
                    </a>
                </div>
                
                <div class="game-warning">
                    <i class="fas fa-info-circle"></i>
                    Selamat bermain dan belajar!
                </div>
            </div>
        `;
    }

    // Halaman Profil - TANPA TOMBOL LOGOUT (hanya tombol hapus data)
    function renderProfilPage() {
        const historyList = currentUser.quizHistory || [];
        const historyHTML = historyList.length > 0 
            ? historyList.map(h => `<li>${h.date} - ${h.kuis || 'Kuis'}: Skor ${h.score} <i class="fas fa-star" style="color:gold;"></i></li>`).join('')
            : '<li>Belum ada riwayat kuis.</li>';

        mainContent.innerHTML = `
            <div class="page profil-page">
                <div class="profil-header">
                    <div class="profil-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="profil-info">
                        <h2>${currentUser.name}</h2>
                        <p>Kelas: ${currentUser.class}</p>
                        <p>Total Poin: <strong>${userPoints}</strong> <i class="fas fa-star" style="color:gold;"></i></p>
                    </div>
                </div>
                <div class="riwayat-nilai">
                    <h3><i class="fas fa-history"></i> Riwayat Nilai Kuis</h3>
                    <ul id="nilai-list">
                        ${historyHTML}
                    </ul>
                </div>
                <div class="profil-actions">
                    <button class="btn-hapus" id="hapusBtn">
                        <i class="fas fa-trash-alt"></i> Hapus Data
                    </button>
                </div>
            </div>
        `;

        document.getElementById('hapusBtn').addEventListener('click', function() {
            hapusModal.classList.add('show');
        });
    }

    // Halaman Tim Pengembang - TANPA SUB JUDUL DAN TANPA NO. HP
    function renderTimPage() {
        mainContent.innerHTML = `
            <div class="page tim-page">
                <div class="tim-header">
                    <h2><i class="fas fa-users"></i> Tim Pengembang</h2>
                    <p>Tim yang berdedikasi dalam mengembangkan website pembelajaran PAI ini</p>
                </div>
                
                <!-- Ketua Tim (tanpa sub judul) -->
                <div class="tim-ketua-card">
                    <div class="tim-ketua-image">
                        <div class="tim-image-placeholder">
                            <img src="${timData.ketua.gambar}" alt="Foto ${timData.ketua.nama}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Crect width=\'150\' height=\'150\' fill=\'%231B4D3E\'/%3E%3Ccircle cx=\'75\' cy=\'60\' r=\'30\' fill=\'%23D4AF37\'/%3E%3Ccircle cx=\'75\' cy=\'120\' r=\'35\' fill=\'%23D4AF37\'/%3E%3C/svg%3E'">
                        </div>
                    </div>
                    <div class="tim-ketua-info">
                        <h3>${timData.ketua.nama}</h3>
                        <div class="info-item">
                            <i class="fas fa-id-card"></i>
                            <span><strong>NIP:</strong> ${timData.ketua.nip}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <span><strong>Email:</strong> ${timData.ketua.email}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Anggota Tim (tanpa sub judul) -->
                <div style="margin-top: 30px;"></div>
                <div class="tim-anggota-grid">
                    ${timData.anggota.map(anggota => `
                        <div class="tim-anggota-card">
                            <div class="tim-anggota-image">
                                <div class="tim-image-placeholder">
                                    <img src="${anggota.gambar}" alt="Foto ${anggota.nama}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect width=\'80\' height=\'80\' fill=\'%232A6B5E\'/%3E%3Ccircle cx=\'40\' cy=\'30\' r=\'15\' fill=\'%23D4AF37\'/%3E%3Ccircle cx=\'40\' cy=\'60\' r=\'18\' fill=\'%23D4AF37\'/%3E%3C/svg%3E'">
                                </div>
                            </div>
                            <div class="tim-anggota-info">
                                <h4>${anggota.nama}</h4>
                                <div class="info-item">
                                    <i class="fas fa-id-card"></i>
                                    <span><strong>NIM:</strong> ${anggota.nim}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fas fa-envelope"></i>
                                    <span><strong>Email:</strong> ${anggota.email}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Helper Functions
    function updateUserPoints() {
        if (currentUser) {
            currentUser.points = userPoints;
            localStorage.setItem('paiCurrentUser', JSON.stringify(currentUser));
            updateUserPointsUI();
        }
    }

    function updateUserPointsUI() {
        userPointDisplay.textContent = userPoints;
    }
});

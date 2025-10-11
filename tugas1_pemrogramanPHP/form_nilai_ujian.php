<?php
// variabel untuk menyimpan pesan
$hasil = "";

// menangkap data dari form jika sudah submit
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilaiUjian = $_POST['nilai_ujian'];
    
    // struktur kendali if-else
    if ($nilaiUjian > 70) {
        $keterangan = "Lulus";
    } else {
        $keterangan = "Remedial";
    }
    
    // menampilkan hasil
    $hasil = "<h2>Hasil Penilaian</h2>";
    $hasil .= "<p>Nama Pelanggan: " . $nama . "</p>";
    $hasil .= "<p>Email: " . $email . "</p>";
    $hasil .= "<p>Nilai Ujian: " . $nilaiUjian . "</p>";
    $hasil .= "<p>Keterangan: <strong>" . $keterangan . "</strong></p>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Form Penilaian Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .hasil {
            margin-top: 30px;
            padding: 20px;
            background-color: #e7f3ff;
            border-left: 4px solid #2196F3;
            border-radius: 5px;
        }
        .hasil h2 {
            color: #2196F3;
            margin-top: 0;
        }
        .hasil p {
            margin: 10px 0;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Form Penilaian Ujian</h1>
        
        <form method="POST">
            <label>Nama</label>
            <input type="text" name="nama" required />
            
            <label>Email</label>
            <input type="email" name="email" required />
            
            <label>Nilai Ujian</label>
            <input type="number" name="nilai_ujian" required />
            
            <input type="submit" name="submit" value="Submit" />
        </form>
        
        <?php
        // menampilkan hasil jika ada
        if ($hasil != "") {
            echo "<div class='hasil'>" . $hasil . "</div>";
        }
        ?>
    </div>
</body>
</html>
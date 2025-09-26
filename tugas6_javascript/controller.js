/*
  controller.js - File controller untuk Tugas 6 JavaScript ES6
  Berisi 3 fungsi utama: index, store, dan destroy
  Menggunakan ES6 features
*/

// Import data users dari data.js
import users from "./data.js";

/*
  Fungsi index() - Untuk melihat/menampilkan semua data user
  Menggunakan destructuring dan mengembalikan array users
*/
const index = () => {
  console.log("=== FUNGSI INDEX DIPANGGIL ===");
  console.log("Menampilkan semua data user:");

  // Menggunakan map() untuk menampilkan data
  users.map((user, index) => {
    // Menggunakan destructuring object
    const { id, nama, umur, alamat, email } = user;
    console.log(
      `${
        index + 1
      }. ID: ${id}, Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`
    );
    return user;
  });

  console.log(`Total user: ${users.length}`);
  return users; // Mengembalikan array users
};

/*
  Fungsi store(userData) - Untuk menambah data user baru
  Menggunakan push() untuk menambahkan data ke array
  Parameter: userData (object berisi data user baru)
*/
const store = (userData) => {
  console.log("=== FUNGSI STORE DIPANGGIL ===");

  // Validasi data menggunakan destructuring
  const { id, nama, umur, alamat, email } = userData;

  // Cek apakah semua field terisi
  if (!id || !nama || !umur || !alamat || !email) {
    console.log("Error: Data tidak lengkap!");
    return false;
  }

  // Cek apakah ID sudah ada
  const userExists = users.find((user) => user.id === id);
  if (userExists) {
    console.log("Error: User dengan ID tersebut sudah ada!");
    return false;
  }

  // Menambahkan data user baru menggunakan push()
  users.push(userData);

  console.log("User berhasil ditambahkan:");
  console.log(
    `ID: ${id}, Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`
  );
  console.log(`Total user sekarang: ${users.length}`);

  return true; // Mengembalikan true jika berhasil
};

/*
  Fungsi destroy(userId) - Untuk menghapus data user berdasarkan ID
  Menggunakan array methods untuk mencari dan menghapus data
  Parameter: userId (number ID user yang akan dihapus)
*/
const destroy = (userId) => {
  console.log("=== FUNGSI DESTROY DIPANGGIL ===");
  console.log(`Mencari user dengan ID: ${userId}`);

  // Mencari index user berdasarkan ID
  const userIndex = users.findIndex((user) => user.id === userId);

  // Jika user tidak ditemukan
  if (userIndex === -1) {
    console.log(`Error: User dengan ID ${userId} tidak ditemukan!`);
    return false;
  }

  // Simpan data user yang akan dihapus untuk log
  const userToDelete = users[userIndex];

  // Menggunakan destructuring untuk menampilkan data user yang dihapus
  const { id, nama, umur, alamat, email } = userToDelete;

  // Menghapus user dari array menggunakan splice
  users.splice(userIndex, 1);

  console.log("User berhasil dihapus:");
  console.log(
    `ID: ${id}, Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`
  );
  console.log(`Total user sekarang: ${users.length}`);

  return true; // Mengembalikan true jika berhasil
};

/*
  Fungsi tambahan untuk menambah minimal 2 data pada proses push
*/
const addMultipleUsers = (...newUsers) => {
  console.log("=== FUNGSI ADD MULTIPLE USERS DIPANGGIL ===");
  console.log(`Menambahkan ${newUsers.length} user sekaligus`);

  // Menggunakan rest parameter untuk menerima multiple users
  let berhasilDitambah = 0;

  newUsers.map((userData, index) => {
    const berhasil = store(userData);
    if (berhasil) {
      berhasilDitambah++;
    }
    return userData;
  });

  console.log(
    `Berhasil menambahkan ${berhasilDitambah} dari ${newUsers.length} user`
  );
  return berhasilDitambah;
};

/*
  Fungsi demo untuk menambah 2 data user baru
*/
const demoAddTwoUsers = () => {
  console.log("=== DEMO MENAMBAH 2 DATA USER ===");

  // Data user baru 1
  const userBaru1 = {
    id: 11,
    nama: "Demo User 1",
    umur: 30,
    alamat: "Jl. Demo No. 1, Jakarta",
    email: "demo1@email.com",
  };

  // Data user baru 2
  const userBaru2 = {
    id: 12,
    nama: "Demo User 2",
    umur: 28,
    alamat: "Jl. Demo No. 2, Bandung",
    email: "demo2@email.com",
  };

  // Menambahkan menggunakan fungsi addMultipleUsers
  return addMultipleUsers(userBaru1, userBaru2);
};

/*
  Export fungsi-fungsi menggunakan ES6 named export
*/
export { index, store, destroy, addMultipleUsers, demoAddTwoUsers };

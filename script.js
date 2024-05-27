function Kirimdata() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;

    alert(
        "Nama: " + name +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat +
        "\nTanggal: " + tanggal +
        "\nAngkatan: " + angkatan
    );
}

var tanggalinput = document.getElementById('tanggal');
flatpickr(tanggalinput, {
    enableTime: false,
    dateFormat: 'd-m-Y'
});

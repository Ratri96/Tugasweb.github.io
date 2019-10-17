function terimainput(){
	alert("Data berhasil dimasukkan");


	var username=document.forms['pariwisata']['username'].value;
	var email=document.forms['pariwisata']['email'].value;
	var pesan=document.forms['pariwisata']['pesan'].value;
	
	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	
	cell1.innerHTML = username;
	cell2.innerHTML = email;
	cell3.innerHTML = pesan;
}

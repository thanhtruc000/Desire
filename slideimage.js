const autoChangImage = () => {
  const KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
  const ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
  const Img = ChuyenSlide.getElementsByTagName("img");
  let Max = KichThuoc * Img.length;
  Max -= KichThuoc;
  var Chuyen = 0;
  const auto = setInterval(() => {
    if (Chuyen < Max) {
      Chuyen += KichThuoc;
    } else {
      Chuyen = 0;
      ChuyenSlide.style.display = "none";
    }
    const delay = setTimeout(() => {
      ChuyenSlide.style.display = "block";
      clearTimeout(delay);
    }, 1);
    ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
  }, 1000);
};
autoChangImage();

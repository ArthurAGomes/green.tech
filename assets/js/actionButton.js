document.addEventListener("DOMContentLoaded", function () {
  // Ajusta para garantir que o site comece no topo ao recarregar
  if (window.location.hash !== "#inicio") {
    window.location.hash = "#inicio";
  }

  const video = document.getElementById("drive");
  const whatsappButton = document.getElementById("whatsappButton");

  // Função para exibir ou esconder os botões ao rolar a página
  function toggleButtons() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      video.style.display = "flex";
      whatsappButton.style.display = "flex";
      setTimeout(() => {
        video.style.opacity = "1";
        whatsappButton.style.opacity = "1";
      }, 10);
    } else {
      video.style.opacity = "0";
      whatsappButton.style.opacity = "0";
      setTimeout(() => {
        video.style.display = "none";
        whatsappButton.style.display = "none";
      }, 500);
    }
  }

  // Adiciona o evento de scroll para exibir ou esconder os botões
  document.addEventListener("scroll", toggleButtons);
  toggleButtons(); // Verificação inicial ao carregar a página

  // Ação ao clicar no botão do WhatsApp
  whatsappButton.addEventListener("click", function () {
    window.open(
      "https://www.instagram.com/green_tech.ni?igsh=MTFrMHM2dTN0NzVzeA==",
      "_blank",
      "noopener,noreferrer"
    );
  });

  // Ação ao clicar no botão do vídeo
  video.addEventListener("click", function () {
    window.open(
      "https://drive.google.com/drive/folders/1-DdCHTiDm-7I9LZ-bvVV4VhVwqV8bnwW",
      "_blank",
      "noopener,noreferrer"
    );
  });
});

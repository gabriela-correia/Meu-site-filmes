
  function filtrarCategoria(categoria) {
    const itens = document.querySelectorAll(".carrossel img");

    itens.forEach(item => {
      const tipo = item.dataset.categoria;
      if (categoria === "tudo" || tipo === categoria) {
        item.style.display = "inline-block";
      } else {
        item.style.display = "none";
      }
    });
  }


function getFileUrl() {
    const urlString = window.location.href;
    const url = new URL(urlString);
    return url.searchParams.get('file');
}

function initPDFJS() {
  const file = getFileUrl();

  console.log(file);
  const searchParams = new URLSearchParams();
  searchParams.set("file", file);

  const iframe = document.createElement("iframe");
  iframe.src = `/web/viewer.html?${searchParams.toString()}`;
  iframe.name = "pdf-js-iframe";
  iframe.width = "100%";
  iframe.height = "100%";
  document.body.appendChild(iframe);
}

initPDFJS();

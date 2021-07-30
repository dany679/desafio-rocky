function setClipboard(text, clipId) {
  navigator.clipboard.writeText(text).then(
    () => {
      document.getElementById(clipId).classList.remove('fa-clipboard');
      document.getElementById(clipId).classList.add('fa-clipboard-check');
      setTimeout(() => {
        document.getElementById(clipId).classList.remove('fa-clipboard-check');
        document.getElementById(clipId).classList.add('fa-clipboard');
      }, 2000);
      /* clipboard successfully set */
    },
    () => {
      alert('error try to copy' + text);
      /* clipboard write failed */
    },
  );
}

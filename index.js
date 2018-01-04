const makeVisible = () => {
  const obfuscated = $('.obfuscated-content');
  const obfuscatedParent = obfuscated.parent();
  obfuscatedParent.attr('class', '');
  obfuscatedParent.parent().children().last().hide();
}

const removeEncryption = () => {
  const encrypted = $('.obfuscated-content > p.obfuscated');
  encrypted.each((index, elm) => {
    let content = $(elm).html();
    let decrypted = content.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+25)?c:c-26);});
    decrypted = decrypted.replace(/\{/g, 'z');
    decrypted = decrypted.replace(/å/g, 'ä');
    decrypted = decrypted.replace(/Å/g, 'Ä');
    decrypted = decrypted.replace(/ý/g, 'ü');
    decrypted = decrypted.replace(/Ý/g, 'ü');
    decrypted = decrypted.replace(/à/g, 'ß');
    $(elm).html(decrypted);
  })

}

$(document).ready(() => {
  makeVisible();
  removeEncryption();
});

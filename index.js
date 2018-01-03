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
    $(elm).html(decrypted)
  })

}

$(document).ready(() => {
  makeVisible();
  removeEncryption();
});

function domainName(url) {
  //your code here
  const httpMatch = url.search(/http:\/\//g)
  const httpsMatch = url.search(/https:\/\//g)
  const httpCheck =
    httpMatch !== -1
      ? url.slice(httpMatch + 7)
      : httpsMatch !== -1
      ? url.slice(httpMatch + 9)
      : url

  const wwwMatch = httpCheck.search(/www\./g)
  const wwwCheck = wwwMatch !== -1 ? httpCheck.slice(wwwMatch + 4) : httpCheck

  const dotMatch = wwwCheck.search(/\./g)
  const dotCheck = dotMatch !== -1 ? wwwCheck.slice(0, dotMatch) : wwwCheck

  return dotCheck
}

console.log(domainName('http://google.com'))
console.log(domainName('https://youtube.com'))
console.log(domainName('www.zombie-bites.com'))
console.log(domainName('http://www.1bt-mwsl-sf9np0yy1a.tv/index.php'))

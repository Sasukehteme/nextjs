var arr = [ "John", "Peter", "Sally", "Jane" ];
var myJSON = JSON.stringify(arr);

export default function handler(req, res) {
  const { p } = req.query
  res.end(`Post: ${p}`)
}
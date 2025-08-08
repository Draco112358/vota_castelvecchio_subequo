export default async function handler(req, res) {
    const fetchRes = await fetch('https://arrostiland.it/', {headers: {"User-Agent":"Mozilla/5.0"}});
    const text = await fetchRes.text();
    const match = text.match(/name="poll_4_nonce" value="([a-f0-9]+)"/i);
    if (match && match[1]) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ nonce: match[1] });
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(400).json({ error: "Nonce non trovato" });
    }
}

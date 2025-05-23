// Navigation between tools
function showTool(tool) {
  document.querySelectorAll('.tool-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(tool).style.display = '';
}

// YTP/YTPMV Poopism (stub logic)
function generateYtpPoopism() {
  const url = document.getElementById('ytp-url').value;
  if (!url) return alert('Paste a YouTube URL!');
  document.getElementById('ytp-output').innerHTML =
    `<p>Generated Poopism for: <a href="${url}" target="_blank">${url}</a> (stub)</p>
     <a href="${url}" download>Download Edited Video (stub)</a>`;
}

// Mashup/Meme/Remix generator (stub)
function generateMashup() {
  document.getElementById('mashup-output').innerHTML =
    `<p>Your meme/remix/kids remix is ready! (stub)</p>
     <a href="#" download="remix.mp4">Download Remix (stub)</a>`;
}

// YouTube Doubler/Mashup/Mirror (stub)
function doubleVideos() {
  const url1 = document.getElementById('doubler-url1').value;
  const url2 = document.getElementById('doubler-url2').value;
  if (!url1 || !url2) return alert('Enter both YouTube URLs!');
  document.getElementById('doubler-output').innerHTML =
    `<iframe width="320" height="180" src="https://www.youtube.com/embed/${ytId(url1)}" allowfullscreen></iframe>
     <iframe width="320" height="180" src="https://www.youtube.com/embed/${ytId(url2)}" allowfullscreen></iframe>`;
}
function ytId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : '';
}

// Annoying Goose (fun Easter egg)
function annoyingGoose() {
  document.getElementById('goose-output').innerHTML =
    '<p>HONK! <span style="font-size:2em;">🦆</span> (stub - implement some fun JS pranks!)</p>';
}

// Lost Media Wayback Search (basic stub)
function searchWayback() {
  const query = document.getElementById('lostmedia-query').value;
  if (!query) return alert('Enter keywords or URL!');
  document.getElementById('lostmedia-output').innerHTML =
    `<p>Searching Wayback Machine for: <b>${query}</b> (stub)</p>
     <a href="https://web.archive.org/web/*/${encodeURIComponent(query)}" target="_blank">Go to Archive Search</a>`;
}

// Random Download Link generator
function randomDownloadLink() {
  const fakeLinks = [
    'https://example.com/download/remix-' + Math.floor(Math.random()*10000) + '.mp4',
    'https://fileshare.io/randomfile',
    'https://cdn.example.org/ytp/' + Math.random().toString(36).substr(2,8) + '.webm'
  ];
  const link = fakeLinks[Math.floor(Math.random()*fakeLinks.length)];
  document.getElementById('random-output').innerHTML =
    `<a href="${link}" download>Download Random File (simulated)</a>`;
}

// Random YouTube Kids Link generator
function randomYouTubeKidsLink() {
  const kidsIds = ['6Dh-RL__uN4', 'v6zai6Q1b2A', 'wCkerYMffMo', 'X1b3C2081-Q'];
  const id = kidsIds[Math.floor(Math.random()*kidsIds.length)];
  document.getElementById('random-output').innerHTML =
    `<a href="https://www.youtubekids.com/watch?v=${id}" target="_blank">Random YouTube Kids Video</a>`;
}

// Run all Vop Tools (stub)
function runAllVopTools() {
  document.getElementById('vop-output').innerHTML =
    `<p>All Vop Tools executed! (Stub: Implement your multi-poopism logic here!)</p>`;
}
const area = ['Caloocan', 'Las Pinas', 'Makati', 'Malabon', 'Mandaluyong', 'Manila', 'Marikina', 'Muntinlupa', 'Navotas', 'Paranaque', 'Pasay', 'Pasig', 'Quezon City'];
document.getElementById('search').addEventListener('input', (e)=>{
    let areaArray = [];
    
    if(e.target.value){
        areaArray = area.filter(area => area.toLowerCase().includes(e.target.value));
        areaArray = areaArray.map(area => `<li>${area}</li>`)
    }
    showareaArray(areaArray);
});
function showareaArray(areaArray){
    const html = !areaArray.length ? '' : areaArray.join('');
    document.querySelector('ul').innerHTML = html;
}
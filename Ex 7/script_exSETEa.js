function escondeMostra(){
    const p = document.getElementById('pVIS');
    if (p.style.display == 'none') {
        p.style.display = 'block';
        p.style.textAlign = 'center';    
    }else {
        p.style.display = 'none';
    }
}
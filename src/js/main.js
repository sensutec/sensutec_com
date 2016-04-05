// $primary: #3FBDDB; // blue
// $secondary: #FC9C46; // orange
// $tertiary: #E1578A; // red

var primary = '#3FBDDB',
    secondary = '#FC0C46',
    tertiary = '#E1578A';
    
var content = d3.select('.content-area');
    
function reset(which) {    
    d3.selectAll('.nav__item')
        .classed('active', false)
        .select('.nav__link')
        .classed('active', false);
}

function setActive(data, which) {
    reset();

    d3.select('#' + which)
        .classed('active', true)
        .select('.nav__link')
        .classed('active', true);
        
    content.selectAll('.content')
        .data([])
    .exit().remove();
        
    var text = [data[which]];
    
    console.log(text);
        
    var enterSelection = content.selectAll('.content')
        .data(text);
        
    enterSelection.exit().remove();
    
    enterSelection.enter().append('p')
        .classed('content', true)
        .html(text);
        
}


    
d3.json('content/text.json', function(err, data) {
    if (err) return console.warn(err);
    
    d3.select('.nav').selectAll('.nav__item')
        .on('click', function() {
            var id = d3.select(this).attr('id');
            
            setActive(data, id);
        });
    
    setActive(data, 'our-vision');
});
    

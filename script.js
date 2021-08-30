calibrate = function(){
  let root = document.documentElement;

  let indicatorWidth = getComputedStyle(document.documentElement)
  .getPropertyValue('--indicator-width');

  let indicatorWidthUnit = getComputedStyle(document.documentElement)
  .getPropertyValue('--indicator-width-unit');

  let docHeight = window.scrollMaxY || 
  (document.documentElement.scrollHeight - document.documentElement
  .clientHeight);

  indicatorWidthUnit = indicatorWidthUnit.replace(/\s+/g, '');

  indicatorWidth = indicatorWidth.replace(indicatorWidthUnit, " ");

  indicatorWidth = parseFloat(indicatorWidth);

  document.addEventListener('scroll', function(){
    let Y = window.scrollY;
    Y = (Y * indicatorWidth)/docHeight;
    let preparedY = Y.toString().concat(indicatorWidthUnit);
    console.log(preparedY);
    root.style.setProperty('--where-banana', preparedY);
  }); 

  window.addEventListener('resize', function(){
    calibrate();
  });

}


window.onload= calibrate();
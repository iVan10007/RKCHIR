let sliderRect = slider.getBoundingClientRect();
let sliderRectWithScroll = {};
sliderRectWithScroll.top = sliderRect.top;
sliderRectWithScroll.left = sliderRect.left;

item.onmousedown = function(e) {
  
   // Отмена нативного drag and drop поведения
   item.ondragstart = function() {
      return false;
   };
    
   // Координаты ползунка относительно страницы
   let itemRect = item.getBoundingClientRect();
   let itemRectWithScroll = {};
   itemRectWithScroll.top = itemRect.top;
   itemRectWithScroll.left = itemRect.left;
   
   // Крайнее правое положение, которого может достичь ползунок
   let rightBoundary = slider.offsetWidth - item.offsetWidth;
   
   // Смещение курсора относительно начала ползунка
   let shiftX = e.pageX - itemRectWithScroll.left;
   
   // Перетаскивание ползунка при движении мыши
   document.onmousemove = function(e) {
      let newLeft = e.pageX - sliderRectWithScroll.left - shiftX;
     
      // Ползунок не может выходить за границы
      if (newLeft < 0) newLeft = 0;
      if (newLeft > rightBoundary) newLeft = rightBoundary;
      item.style.left = newLeft + 'px';
     
      // Обновление результата
      result.innerHTML = Math.round(newLeft / rightBoundary * 100) + '%';
   }
   
   // Сброс при отпускании кнопки мышки 
   document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
  
  return false;
}
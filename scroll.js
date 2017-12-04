var Scroll = function() {
    this.currentCandidate = 0;
 };
//Foo.prototype.bar = function() { console.trace(); };
Scroll.prototype.getInfo = function() {
    console.log(this.currentCandidate);
};

Scroll.prototype.init = function (){
    this.currentCandidate = this.currentCandidate + 1;
    console.log(this.currentCandidate);
};

Scroll.prototype.scrollToNext = function() {
    
   console.log(this.currentCandidate);

}

/*
var Scroll = (function() {

        function Scroll() {
            this.currentCandidate = 0;
        }
    
  
        return {
    
            init: function() {
    
                init();
    
            },
    
            next: function() {
    
                //buildControls(parent, child);
    
                scrollToNext();
    
            },
    
            prev: function(parent, child, index) {
    
               //TODO: scrollToPrev();
    
            }
    
        }
    
    
        Scroll.prototype.getInfo = function() {
            console.log(this.currentCandidate);
        };
    
        function init(){
            this.currentCandidate = this.currentCandidate + 1;
            console.log(this.currentCandidate);
        };
    
        function scrollToNext(index, nextClick) {
            
           console.log(this.currentCandidate);
    
        }
    });       */

var positions = [];
var $element;
var scrollTop;
var scrollSpeed = 200;
var numQuestions;
var currentCandidate = 0;
var scrollTop = 0;
$( document ).ready(function() {
    resetPage();
   
    var questions = $(".question-item");
    numQuestions = questions.length;
    $element = $(".questions");

    centerQuestions(questions);
    buildPositions(questions);
    bindEvents();
});

function scrollToPosAlt(top, callback, animate) {
    /*return null == animate && (animate = !0),
    animate ? $("html,body").stop(!0, !0).animate({
        scrollTop: top
    }, this.settings.scrollSpeed, this.settings.animateEase, function() {
        if (callback)
            return callback()
    }) : $("html,body").scrollTop(top)*/
    $("html,body").animate({scrollTop:top}, 1);
}

function scrollToPos(top) {
    var offset;
    scrollTop = top;
    //$element.translate3d(0, -top, 0);
    $element.css("transform", "translate3d(0px,"+(-top)+"px, 0px)")
}

function resetPage() {
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
}

function centerQuestions(questions) {
    var viewportHeight = $(window)[0].window.outerHeight;

    $.each(questions, function(index, question){
        var elementHeight = $(this).height();
    
        var padding = (viewportHeight - elementHeight)/2;
        $(this).css('padding-top', padding+'px');
        $(this).css('padding-bottom', padding+'px');
    });
}

function buildPositions(questions){
    var position;
    
    var displayedControls, numDisplayedControls, offsetFooter, offsetHeader, pos, positionTop, scrollPointA, self, windowHeight;
    pos = 0;
    windowHeight = $(window)[0].window.outerHeight;
    positionTop = 0;

    $.each(questions, function(index, question){
        var itemHeight, itemOuterHeight, position, scrollPointA, scrollPointItem, scrollPointNext;
        itemHeight =  $(this).height();
        itemOuterHeight = $(this).outerHeight();
        positionTop = pos;
        pos += itemOuterHeight;
        scrollPointItem = positionTop + itemHeight / 2;
        position = {
            prev: scrollPointItem - 50,
            item: scrollPointItem,
            next: scrollPointItem + 50,
            a: Math.round(scrollPointItem)
        };
        positions.push(position);
        $(this).attr("index", index);
    })
}

function bindEvents() {
    var firstMove, hasMove, self, startTop, startY;

   $element.on("touchstart.scroll touchmove.scroll touchend.scroll", function(e) {
        var control, dest, y;
        if("touchstart" === e.type) { 
            e = e.originalEvent;
            startY = e.touches[0].pageY;
            startTop = scrollTop;
            firstMove = !0;
            hasMove = !1;
        }
        else if("touchmove" === e.type) {
            e = e.originalEvent;
            y = e.touches[0].pageY;
            dest = startTop - y + startY;
            e.preventDefault();
            scrollToPos(dest);
        } 
        else if("touchend" === e.type) {
            if(scrollTop > positions[currentCandidate].next) {
                scrollTo(currentCandidate + 1, !1, !1)
            }
            else if( scrollTop < positions[currentCandidate].prev) {
                scrollTo(currentCandidate - 1, !1, !1)
            }
            else {
                //(control = $items.eq(current).data("control"));
            }
        }
    });
}

function setTransition(set, speed) {
    speed = scrollSpeed;
    set ? $element.css("transition", speed + "ms ease-out") : $element.css("transition", "none");
}

function scrollTo(index, delay, trigger, speed) {
    var  self, time;
    numQuestions
   if(index >= 0 && index <= numQuestions)
     currentCandidate = index;

    setTransition(!0, null);
    time = 0;
    //delay && (time = this.settings.delayAutoScroll);
    //clearTimeout(this.timeoutScroll),
   var timeoutScroll = setTimeout(function() {
        return scrollToPos(positions[currentCandidate].a)
    }, time)
}




$(document).ready(function() {
  $(".open-modal-shop").click(function(){
    $('.shop-profile').modal()
  });
});

$(document).ready(function() {
    $(".open-report").click(function(){
      $(".hidden-report").css('display', 'inline');
    });
    $(".makereport").click(function(){
      $(".report-hdden-text").css('display', 'inline');
      $(".hidden-report").css('display', 'none');
    });
    setTimeout(function() {
      $(".report-hdden-text").css('display', 'none');
    }, 5000);
});


$(document).ready(function() {
    $(".myshops-nav ul li a").click(function(){
      $(".addshop").css('display', 'none');
    });
    $(".myshops-nav ul li:first").click(function(){
      $(".addshop").css('display', 'inline');
    });
});


$(document).ready(function() {
  $(".addnumber").click(function(){
      $(".addphone");
  });
  $(".delnumber").click(function(){
    (".new-number").css('display','none');
  });
});


$(document).ready(function() {
      $(".section-gallery").removeClass('blocks-gallery');
      $("#linessvg .lines-icon").css('fill', '#EBCD4D');
	$("#blocks").click(function(){
      $(".section-gallery").addClass('blocks-gallery');
      $("#linessvg .lines-icon").css('fill', '#999');
      $("#blockssvg .lines-icon").css('fill', '#EBCD4D');
	});
	$("#lines").click(function(){
      $(".section-gallery").removeClass('blocks-gallery');
      $("#blockssvg .lines-icon").css('fill', '#999');
      $("#linessvg .lines-icon").css('fill', '#EBCD4D');
	});
});

$(document).ready(function() {
        $("#zoom").ezPlus({

            constrainType:"height",
            constrainSize:350,
            gallery: 'gall',
            cursor: 'pointer',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: "images/spinner.gif"
        });

        $("#zoom").bind("click", function(e) {
            var ez = $('#zoom').data('ezPlus');
            ez.closeAll(); //NEW: This function force hides the lens, tint and window
            $.fancybox(ez.getGalleryList());
            return false;
        });
    });

    $(document).ready(function() {
        $("#fixTable").tableHeadFixer({"left" : 1});
    });


$(document).ready(function() {
    $('.bu-product-b').click(function(){
        $(this).toggleClass('opened');
    });
});

$(function() {
	$('[rel="tooltip"]').tooltip({

					trigger:"hover"
	})

		$('[rel="popover"]').popover({
			trigger:"hover"
		})
});







$(document).ready(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};
});

$(document).ready(function(){
    $('.slider').slick({
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [

        {breakpoint: 1300,
            settings: {
                arrows:false,
            }
        },

        {breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
});

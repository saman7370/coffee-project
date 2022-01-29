 $(document).ready(function(){
           $('header .hamburger-icon img').click(function(){
             var responsivemenu = $('#responsive-navigation');
             responsivemenu.animate({
                 right: 0},400);
                 $('body').append('<div class="back-container"></div>');
                 $(".back-container").click(function(){
                     responsivemenu.animate({
                        right:'-220px'},400)
                        $(this).remove()
                 });
                
           });  
         });


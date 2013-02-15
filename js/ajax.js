$(function() {
         $('#products-dev').click(function(){
            //$('#products-show').load('ev-prodev.html.php');
            //$('#products-show').hide('slow');
            $('#content-banner').hide('slow');
            $('#show-information').show('slow');
            $('#show-content').fadeIn(10000,function(){
                $('#show-content').load('ev-prodev.html.php');
            });
            /*$('#show-content').load('ev-prodev.html.php');*/
            /*$('#show-information').load('ev-prodev.html.php');*/           
            
           
        });
        
        $('#ev1200').click(function(){
            $('#products-show').load('ev-1200.html.php');
            $('#desc-ev2500dc').hide();
            $('#desc-ev2500dc-1').hide();
            $('#desc-ev1200').show('slide');
           
        });
        $('#ev2500dc').click(function(){
            $('#products-show').load('ev-2500dc.html.php');
            $('#desc-ev2500dc').show('slide');
            $('#desc-ev1200').hide('slow');
             $('#easy-operation').hide('slow');
        });
        
        $('#ev2500AC').click(function(){
            $('#products-show').load('ev-2500dc.html.php');
            $('#desc-ev2500dc').hide();
            $('#desc-ev1200').hide();
            $('#desc-ev2500dc-1').hide();
           
        });
        
        $('#durability').click(function(){
            var n = $('#desc-ev2500dc');
            if(n){
                $('#desc-ev2500dc').hide();
                 $('#easy-operation').hide();
                $('#desc-ev2500dc-1').show('slide');
               
            }else{
                $('#desc-ev2500dc-1').hide('slow');
            }
        });
        
         $('#easyoperation').click(function(){
            var n = $('#desc-ev2500dc');
            if(n){
                $('#desc-ev2500dc').hide('slow');
                 $('#easy-operation').show('slide');
                $('#desc-ev2500dc-1').hide('slow');
                $('#maintenance-free').hide('slow');
               
            }else{
                $('#desc-ev2500dc-1').hide('slow');
            }
        });
        
        $('#Maintenancefree').click(function(){
            var n = $('#desc-ev2500dc');
            if(n){
                $('#desc-ev2500dc').hide('slow');
                 $('#easy-operation').hide('slide');
                $('#desc-ev2500dc-1').hide('slow');
                $('#maintenance-free').show('slow');
               
            }else{
                $('#desc-ev2500dc-1').hide('slow');
            }
        });
        
        $('#Considerate').click(function(){
            var n = $('#desc-ev2500dc');
            if(n){
                $('#desc-ev2500dc').hide('slow');
                 $('#easy-operation').hide('slide');
                $('#desc-ev2500dc-1').hide('slow');
                $('#maintenance-free').hide('slow');
                $('#consider-design').show('slow');
               
            }else{
                $('#desc-ev2500dc-1').hide('slow');
            }
        });
        
        
        
    
    });